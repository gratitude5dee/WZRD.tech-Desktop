import SessionManager from './sessions/manager.js'
import AgentRunner from './agent/runner.js'
import CommandHandler from './commands/handler.js'
import { Composio } from '@composio/core'

/**
 * Clawd Gateway - Routes messages between messaging platforms and Claude agent
 *
 * This is the embeddable "core" gateway (no auto-start, no process.exit).
 */
export class Gateway {
  constructor(config, options = {}) {
    this.config = config
    this.options = {
      // When true, start() installs SIGINT/SIGTERM handlers.
      attachSignalHandlers: false,
      ...options
    }

    this.sessionManager = new SessionManager()
    this.agentRunner = new AgentRunner(this.sessionManager, {
      allowedTools: this.config.agent?.allowedTools || ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep'],
      maxTurns: this.config.agent?.maxTurns || 50
    })
    this.commandHandler = new CommandHandler(this)
    this.adapters = new Map()
    this.composio = new Composio()
    this.composioSession = null
    this.browserServer = null
    this.mcpServers = {}
    this.setupQueueMonitoring()
    this.setupAgentMonitoring()
    this.setupCronExecution()
  }

  async initMcpServers() {
    const userId = this.config.agentId || 'clawd-user'
    console.log('[Composio] Initializing session for:', userId)
    try {
      this.composioSession = await this.composio.create(userId)
      this.mcpServers.composio = {
        type: 'http',
        url: this.composioSession.mcp.url,
        headers: this.composioSession.mcp.headers
      }
      console.log('[Composio] Session ready')
    } catch (err) {
      console.error('[Composio] Failed to initialize:', err.message)
    }

    if (this.config.browser?.enabled) {
      console.log('[Browser] Mode:', this.config.browser.mode || 'clawd')

      try {
        const { BrowserServer, createBrowserMcpServer } = await import('./browser/index.js')
        this.browserServer = new BrowserServer(this.config.browser)
        this.mcpServers.browser = createBrowserMcpServer(this.browserServer)
        console.log('[Browser] Ready')
      } catch (err) {
        console.error('[Browser] Failed to initialize:', err.message)
        if (this.config.browser.mode === 'chrome') {
          console.error('[Browser] Make sure Chrome is running with --remote-debugging-port=' + (this.config.browser.chrome?.cdpPort || 9222))
        }
      }
    }
  }

  setupQueueMonitoring() {
    this.agentRunner.on('queued', ({ position, queueLength }) => {
      if (position > 0) {
        console.log(`[Queue] 📥 Queued: position ${position + 1}, ${queueLength} pending`)
      }
    })

    this.agentRunner.on('processing', ({ waitTimeMs, remainingInQueue }) => {
      if (waitTimeMs > 100) {
        console.log(`[Queue] ⚙️  Processing (waited ${Math.round(waitTimeMs)}ms, ${remainingInQueue} remaining)`)
      }
    })

    this.agentRunner.on('completed', ({ processingTimeMs }) => {
      console.log(`[Queue] ✓ Completed in ${Math.round(processingTimeMs)}ms`)
    })

    this.agentRunner.on('failed', ({ error }) => {
      console.log(`[Queue] ✗ Failed: ${error}`)
    })
  }

  setupAgentMonitoring() {
    this.agentRunner.on('agent:tool', ({ name }) => {
      console.log(`[Agent] 🔧 Using tool: ${name}`)
    })
  }

  setupCronExecution() {
    // Handle cron job execution - send scheduled messages or invoke agent
    this.agentRunner.agent.cronScheduler.on('execute', async ({ jobId, platform, chatId, sessionKey, message, invokeAgent }) => {
      console.log(`[Cron] ⏰ Executing job ${jobId}${invokeAgent ? ' (invoking agent)' : ''}`)

      const adapter = this.adapters.get(platform)
      if (!adapter) {
        console.error(`[Cron] No adapter for platform: ${platform}`)
        return
      }

      try {
        if (invokeAgent) {
          console.log(`[Cron] Invoking agent with: ${message}`)
          const response = await this.agentRunner.agent.runAndCollect({
            message,
            sessionKey: sessionKey || `cron:${jobId}`,
            platform,
            chatId,
            mcpServers: this.mcpServers
          })

          if (response) {
            await adapter.sendMessage(chatId, response)
            console.log(`[Cron] Agent response sent for job ${jobId}`)
          }
        } else {
          await adapter.sendMessage(chatId, message)
          console.log(`[Cron] Message sent for job ${jobId}`)
        }
      } catch (err) {
        console.error(`[Cron] Failed to execute job:`, err.message)
      }
    })
  }

  async start() {
    console.log('='.repeat(50))
    console.log('Clawd Gateway Starting')
    console.log('='.repeat(50))
    console.log(`Agent ID: ${this.config.agentId}`)
    console.log(`Workspace: ~/clawd/`)
    console.log('')

    await this.initMcpServers()
    this.agentRunner.setMcpServers(this.mcpServers)

    this.agentRunner.agent.gateway = this

    if (this.options.attachSignalHandlers) {
      process.on('SIGINT', () => this.stop())
      process.on('SIGTERM', () => this.stop())
    }

    // Initialize WhatsApp adapter
    if (this.config.whatsapp?.enabled) {
      console.log('[Gateway] Initializing WhatsApp adapter...')
      try {
        const { default: WhatsAppAdapter } = await import('./adapters/whatsapp.js')
        const whatsapp = new WhatsAppAdapter(this.config.whatsapp)
        this.setupAdapter(whatsapp, 'whatsapp', this.config.whatsapp)
        this.adapters.set('whatsapp', whatsapp)
        await whatsapp.start()
      } catch (err) {
        console.error('[Gateway] WhatsApp adapter failed to start:', err.message)
      }
    }

    // Initialize iMessage adapter
    if (this.config.imessage?.enabled) {
      console.log('[Gateway] Initializing iMessage adapter...')
      try {
        const { default: iMessageAdapter } = await import('./adapters/imessage.js')
        const imessage = new iMessageAdapter(this.config.imessage)
        this.setupAdapter(imessage, 'imessage', this.config.imessage)
        this.adapters.set('imessage', imessage)
        await imessage.start()
      } catch (err) {
        console.error('[Gateway] iMessage adapter failed to start:', err.message)
      }
    }

    // Initialize Telegram adapter
    if (this.config.telegram?.enabled) {
      console.log('[Gateway] Initializing Telegram adapter...')
      try {
        const { default: TelegramAdapter } = await import('./adapters/telegram.js')
        const telegram = new TelegramAdapter(this.config.telegram)
        this.setupAdapter(telegram, 'telegram', this.config.telegram)
        this.adapters.set('telegram', telegram)
        await telegram.start()
      } catch (err) {
        console.error('[Gateway] Telegram adapter failed to start:', err.message)
      }
    }

    // Initialize Signal adapter
    if (this.config.signal?.enabled) {
      console.log('[Gateway] Initializing Signal adapter...')
      try {
        const { default: SignalAdapter } = await import('./adapters/signal.js')
        const signal = new SignalAdapter(this.config.signal)
        this.setupAdapter(signal, 'signal', this.config.signal)
        this.adapters.set('signal', signal)
        await signal.start()
      } catch (err) {
        console.error('[Gateway] Signal adapter failed to start:', err.message)
      }
    }

    console.log('')
    console.log('[Gateway] Ready and listening for messages')
    console.log('[Gateway] Using Claude Agent SDK with memory + cron + Composio + Browser')
    console.log('[Gateway] Commands: /help, /new, /status, /memory, /stop')
  }

  setupAdapter(adapter, platform) {
    adapter.onMessage(async (message) => {
      const sessionKey = adapter.generateSessionKey(this.config.agentId, platform, message)

      console.log('')
      console.log(`[${platform.toUpperCase()}] Incoming message:`)
      console.log(`  Session: ${sessionKey}`)
      console.log(`  From: ${message.sender}`)
      console.log(`  Group: ${message.isGroup}`)
      console.log(`  Text: ${message.text.substring(0, 100)}${message.text.length > 100 ? '...' : ''}`)
      if (message.image) {
        console.log(`  Image: ${Math.round(message.image.data.length / 1024)}KB`)
      }

      // Pass to command handler first
      const commandResult = await this.commandHandler.handleMessage(platform, message, sessionKey)
      if (commandResult?.handled) {
        if (commandResult.response) {
          await adapter.sendMessage(message.chatId, commandResult.response)
        }
        return
      }

      // Run agent and stream response
      try {
        const response = await this.agentRunner.enqueue({
          message: message.text,
          sessionKey,
          platform,
          chatId: message.chatId,
          mcpServers: this.mcpServers
        })

        if (response) {
          await adapter.sendMessage(message.chatId, response)
        }
      } catch (err) {
        console.error('[Gateway] Agent error:', err.message)
        await adapter.sendMessage(message.chatId, `Error: ${err.message}`)
      }
    })
  }

  async stop() {
    console.log('[Gateway] Stopping...')

    // Stop cron scheduler
    try {
      this.agentRunner.agent.stopCron()
    } catch (_err) {
      // ignore
    }

    // Stop browser server if running
    if (this.browserServer) {
      try {
        await this.browserServer.stop()
      } catch (err) {
        console.error('[Gateway] Error stopping browser:', err.message)
      }
      this.browserServer = null
    }

    // Stop adapters
    for (const [platform, adapter] of this.adapters.entries()) {
      console.log(`[Gateway] Stopping ${platform} adapter...`)
      try {
        await adapter.stop()
      } catch (err) {
        console.error('[Gateway] Error stopping adapter:', err.message)
      }
    }

    this.adapters.clear()

    console.log('[Gateway] Stopped')
  }
}

