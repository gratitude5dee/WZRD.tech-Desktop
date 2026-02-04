import fs from 'fs'
import path from 'path'
import util from 'util'

let gateway = null
let running = false
let startedAt = null

let logSeq = 0
let logBuffer = []
let consolePatched = false
let restoreConsole = null

function getUserDataDir() {
  const dbPath = process.env.WZRDTECH_DB_PATH
  if (dbPath) return path.dirname(dbPath)
  return process.cwd()
}

function getConfigPath() {
  return path.join(getUserDataDir(), 'clawd-config.json')
}

function ensureConfigExists() {
  const configPath = getConfigPath()
  if (fs.existsSync(configPath)) return configPath

  // Default to a safe "disabled" configuration for desktop usage.
  const safeDefault = {
    agentId: 'clawd',
    whatsapp: { enabled: false, allowedDMs: ['*'], allowedGroups: [], respondToMentionsOnly: true },
    imessage: { enabled: false, allowedDMs: ['*'], allowedGroups: [], respondToMentionsOnly: true },
    telegram: { enabled: false, token: '', allowedDMs: ['*'], allowedGroups: [], respondToMentionsOnly: true },
    signal: { enabled: false, phoneNumber: '', signalCliPath: 'signal-cli', allowedDMs: ['*'], allowedGroups: [], respondToMentionsOnly: true },
    agent: { workspace: '~/clawd', maxTurns: 50, allowedTools: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep'] },
    browser: { enabled: false, mode: 'clawd', clawd: { userDataDir: '~/.clawd-browser-profile', headless: false }, chrome: { profilePath: '', cdpPort: 9222 } }
  }

  try {
    fs.writeFileSync(configPath, JSON.stringify(safeDefault, null, 2))
  } catch (err) {
    console.error('[OpenClawd] Failed to create config:', err?.message || err)
  }

  return configPath
}

function appendLog(level, args) {
  const message = util.format(...args)
  const entry = {
    id: ++logSeq,
    ts: new Date().toISOString(),
    level,
    message
  }
  logBuffer.push(entry)
  if (logBuffer.length > 2000) {
    logBuffer = logBuffer.slice(-2000)
  }
}

function patchConsole() {
  if (consolePatched) return
  consolePatched = true

  const original = {
    log: console.log,
    warn: console.warn,
    error: console.error,
    info: console.info
  }

  console.log = (...args) => {
    appendLog('log', args)
    original.log(...args)
  }
  console.info = (...args) => {
    appendLog('info', args)
    original.info(...args)
  }
  console.warn = (...args) => {
    appendLog('warn', args)
    original.warn(...args)
  }
  console.error = (...args) => {
    appendLog('error', args)
    original.error(...args)
  }

  restoreConsole = () => {
    console.log = original.log
    console.warn = original.warn
    console.error = original.error
    console.info = original.info
    consolePatched = false
    restoreConsole = null
  }
}

export function getClawdStatus() {
  return {
    running,
    startedAt
  }
}

export function getClawdConfig() {
  const configPath = ensureConfigExists()
  try {
    const raw = fs.readFileSync(configPath, 'utf8')
    return JSON.parse(raw)
  } catch (err) {
    console.error('[OpenClawd] Failed to read config:', err?.message || err)
    return null
  }
}

export function updateClawdConfig(config) {
  const configPath = ensureConfigExists()
  if (!config || typeof config !== 'object') {
    throw new Error('Invalid config')
  }
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
  return getClawdConfig()
}

export async function startClawd() {
  if (running) return getClawdStatus()

  patchConsole()
  appendLog('info', ['[OpenClawd] Starting gateway...'])

  const configPath = ensureConfigExists()
  process.env.CLAWD_CONFIG_PATH = configPath

  const config = getClawdConfig()
  if (!config) {
    throw new Error('Failed to load clawd config')
  }

  try {
    // Lazy import so server can start even if optional deps aren't installed.
    const { Gateway } = await import('../clawd/gateway-core.js')

    gateway = new Gateway(config, { attachSignalHandlers: false })
    await gateway.start()

    running = true
    startedAt = new Date().toISOString()
    appendLog('info', ['[OpenClawd] Gateway running'])

    return getClawdStatus()
  } catch (err) {
    appendLog('error', ['[OpenClawd] Failed to start:', err?.message || err])
    try {
      await gateway?.stop?.()
    } catch (_err) {
      // ignore
    }
    gateway = null
    running = false
    startedAt = null
    restoreConsole?.()
    throw err
  }
}

export async function stopClawd() {
  if (!running) return getClawdStatus()

  appendLog('info', ['[OpenClawd] Stopping gateway...'])
  try {
    await gateway?.stop?.()
  } finally {
    gateway = null
    running = false
    appendLog('info', ['[OpenClawd] Gateway stopped'])
    // Keep logs, but restore console to avoid capturing unrelated server logs.
    restoreConsole?.()
    startedAt = null
  }

  return getClawdStatus()
}

export function getClawdLogs({ since = 0 } = {}) {
  const cursor = Number(since) || 0
  const logs = logBuffer.filter(entry => entry.id > cursor)
  const nextCursor = logBuffer.length ? logBuffer[logBuffer.length - 1].id : cursor
  return { cursor: nextCursor, logs }
}
