import { startServer, stopServer } from './server.js';

const port = process.env.PORT ? Number(process.env.PORT) : 3001;

startServer({ port }).catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

process.on('SIGINT', async () => {
  console.log('\nShutting down server...');
  await stopServer();
  console.log('Server closed');
  process.exit(0);
});
