import fs from 'fs'
import defaultConfig from './config.js'

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function isPlainObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value)
}

function deepMerge(base, override) {
  if (!isPlainObject(base) || !isPlainObject(override)) return override
  const out = { ...base }
  for (const [key, value] of Object.entries(override)) {
    if (isPlainObject(value) && isPlainObject(out[key])) {
      out[key] = deepMerge(out[key], value)
    } else {
      out[key] = value
    }
  }
  return out
}

export function getDefaultClawdConfig() {
  return clone(defaultConfig)
}

// Loads config from JSON at CLAWD_CONFIG_PATH if present; otherwise uses defaultConfig.
export function loadClawdConfig() {
  const configPath = process.env.CLAWD_CONFIG_PATH
  const base = getDefaultClawdConfig()

  if (!configPath) return base
  if (!fs.existsSync(configPath)) return base

  try {
    const raw = fs.readFileSync(configPath, 'utf8')
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return base
    return deepMerge(base, parsed)
  } catch (err) {
    console.error('[Clawd] Failed to load CLAWD_CONFIG_PATH:', err?.message || err)
    return base
  }
}

