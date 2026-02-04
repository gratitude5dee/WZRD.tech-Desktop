import { loadClawdConfig } from './config-loader.js'
import { Gateway } from './gateway-core.js'

// CLI entrypoint: start the gateway and exit the process on stop.
const config = loadClawdConfig()
const gateway = new Gateway(config, { attachSignalHandlers: false })

async function shutdown(code = 0) {
  try {
    await gateway.stop()
  } catch (_err) {
    // ignore
  }
  process.exit(code)
}

process.on('SIGINT', () => shutdown(0))
process.on('SIGTERM', () => shutdown(0))

gateway.start().catch((err) => {
  console.error('[Gateway] Fatal error:', err)
  shutdown(1)
})

