const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  try {
    // Enable live-reload for the main and renderer processes during development
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
      ignored: /server|node_modules/
    });
  } catch (err) {
    console.warn('Live reload unavailable:', err);
  }
}

// Global window reference
let mainWindow;
let backendModule = null;
let backendPort = 3001;
let isQuitting = false;

function getUserDataPaths() {
  const userData = app.getPath('userData');
  return {
    userData,
    settingsPath: path.join(userData, 'wzrdtech-settings.json'),
    envPath: path.join(userData, '.env'),
    opencodeConfigPath: path.join(userData, 'opencode.json')
  };
}

function getDefaultSettings() {
  return {
    anthropicApiKey: '',
    composioApiKey: '',
    opencodeApiKey: ''
  };
}

function readSettings() {
  const { settingsPath } = getUserDataPaths();
  try {
    if (!fs.existsSync(settingsPath)) {
      return getDefaultSettings();
    }
    const raw = fs.readFileSync(settingsPath, 'utf8');
    const parsed = JSON.parse(raw);
    return { ...getDefaultSettings(), ...parsed };
  } catch (err) {
    console.warn('[SETTINGS] Failed to read settings:', err);
    return getDefaultSettings();
  }
}

function writeEnvFile(settings) {
  const { envPath } = getUserDataPaths();
  const lines = [
    `ANTHROPIC_API_KEY=${settings.anthropicApiKey || ''}`,
    `COMPOSIO_API_KEY=${settings.composioApiKey || ''}`,
    `OPENCODE_API_KEY=${settings.opencodeApiKey || ''}`,
    `PORT=${backendPort}`
  ];
  fs.writeFileSync(envPath, lines.join('\n'));
}

function writeSettings(settings) {
  const { settingsPath } = getUserDataPaths();
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
  writeEnvFile(settings);
}

function applyEnv(settings) {
  process.env.ANTHROPIC_API_KEY = settings.anthropicApiKey || '';
  process.env.COMPOSIO_API_KEY = settings.composioApiKey || '';
  process.env.OPENCODE_API_KEY = settings.opencodeApiKey || '';
  const { opencodeConfigPath } = getUserDataPaths();
  process.env.OPENCODE_CONFIG_PATH = opencodeConfigPath;
}

async function getBackendModule() {
  if (!backendModule) {
    const serverPath = pathToFileURL(path.join(__dirname, 'server', 'server.js')).href;
    backendModule = await import(serverPath);
  }
  return backendModule;
}

async function startBackend() {
  const { envPath } = getUserDataPaths();
  const settings = readSettings();
  writeEnvFile(settings);
  applyEnv(settings);
  const { startServer } = await getBackendModule();
  await startServer({ port: backendPort, envPath });
}

async function stopBackend() {
  if (!backendModule) return;
  const { stopServer } = await getBackendModule();
  await stopServer();
}

async function restartBackend() {
  await stopBackend();
  await startBackend();
}

// Create Electron window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'WZRD.tech',
    icon: path.join(__dirname, 'assets', 'wzrdtech-icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      enableWebSQL: false,
      webSecurity: true
    }
  });

  // Load the app
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  // Open DevTools in development (comment out for production)
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    // If navigating away from our app, open in external browser
    if (!url.startsWith('file://')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

// App lifecycle
app.on('ready', () => {
  console.log('Electron app ready');
  app.setName('WZRD.tech');
  const settings = readSettings();
  applyEnv(settings);
  startBackend().catch((err) => {
    console.error('[BACKEND] Failed to start backend:', err);
  });
  createWindow();
});

app.on('window-all-closed', () => {
  // On macOS, apps stay active until user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create window when dock icon is clicked
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('before-quit', async (event) => {
  if (isQuitting) return;
  event.preventDefault();
  isQuitting = true;
  await stopBackend();
  app.quit();
});

ipcMain.handle('settings:get', () => {
  return readSettings();
});

ipcMain.handle('settings:set', (_event, incoming) => {
  const next = { ...getDefaultSettings(), ...(incoming || {}) };
  writeSettings(next);
  applyEnv(next);
  return { success: true };
});

ipcMain.handle('backend:restart', async () => {
  try {
    await restartBackend();
    return { success: true };
  } catch (err) {
    console.error('[BACKEND] Restart failed:', err);
    return { success: false, error: err.message };
  }
});
