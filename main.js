const { app, BrowserWindow, shell, ipcMain, powerSaveBlocker } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');
const crypto = require('crypto');

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
const authWindows = new Map();
let backendModule = null;
let backendPort = 3001;
let isQuitting = false;
let powerSaveId = null;

function getUserDataPaths() {
  const userData = app.getPath('userData');
  return {
    userData,
    settingsPath: path.join(userData, 'wzrdtech-settings.json'),
    envPath: path.join(userData, '.env'),
    opencodeConfigPath: path.join(userData, 'opencode.json'),
    dbPath: path.join(userData, 'wzrdtech.db'),
    configPath: path.join(userData, 'config.toml')
  };
}

function getDefaultSettings() {
  return {
    anthropicApiKey: '',
    composioApiKey: '',
    opencodeApiKey: '',
    externalUserId: ''
  };
}

function generateExternalUserId() {
  return `wzrdtech_${crypto.randomUUID()}`;
}

function readSettings() {
  const { settingsPath } = getUserDataPaths();
  try {
    if (!fs.existsSync(settingsPath)) {
      const next = {
        ...getDefaultSettings(),
        externalUserId: generateExternalUserId()
      };
      writeSettings(next);
      return next;
    }
    const raw = fs.readFileSync(settingsPath, 'utf8');
    const parsed = JSON.parse(raw);
    const next = { ...getDefaultSettings(), ...parsed };
    if (!next.externalUserId) {
      next.externalUserId = generateExternalUserId();
      writeSettings(next);
    }
    return next;
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
    `WZRDTECH_EXTERNAL_USER_ID=${settings.externalUserId || ''}`,
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
  process.env.WZRDTECH_EXTERNAL_USER_ID = settings.externalUserId || '';
  const { opencodeConfigPath } = getUserDataPaths();
  process.env.OPENCODE_CONFIG_PATH = opencodeConfigPath;
  const { dbPath } = getUserDataPaths();
  process.env.WZRDTECH_DB_PATH = dbPath;
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

function isAllowedAuthUrl(rawUrl) {
  try {
    const url = new URL(String(rawUrl || ''));
    return url.protocol === 'https:';
  } catch (_err) {
    return false;
  }
}

// Create Electron window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'WZRD.tech',
    icon: path.join(__dirname, 'assets', 'wzrdtech-icon-purple.png'),
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
  // Preserve internal ids like externalUserId unless explicitly overwritten.
  const current = readSettings();
  const next = { ...getDefaultSettings(), ...current, ...(incoming || {}) };
  if (!next.externalUserId) {
    next.externalUserId = current.externalUserId || generateExternalUserId();
  }
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

ipcMain.handle('authWindow:open', async (_event, { url }) => {
  if (!mainWindow) {
    return { success: false, error: 'Main window not ready' };
  }
  if (!isAllowedAuthUrl(url)) {
    return { success: false, error: 'Auth URL must be https' };
  }

  const win = new BrowserWindow({
    width: 980,
    height: 720,
    parent: mainWindow,
    modal: true,
    show: false,
    backgroundColor: '#0B0E18',
    title: 'Connect account',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      enableWebSQL: false,
      webSecurity: true
    }
  });

  win.removeMenu();

  win.webContents.setWindowOpenHandler(({ url: nextUrl }) => {
    // Route popups into the same window when possible.
    if (isAllowedAuthUrl(nextUrl)) {
      win.loadURL(nextUrl);
    }
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, nextUrl) => {
    if (!isAllowedAuthUrl(nextUrl)) {
      event.preventDefault();
    }
  });

  win.on('closed', () => {
    authWindows.delete(win.id);
  });

  authWindows.set(win.id, win);

  win.once('ready-to-show', () => {
    win.show();
  });

  await win.loadURL(url);
  return { success: true, windowId: win.id };
});

ipcMain.handle('authWindow:close', async (_event, { windowId }) => {
  const id = Number(windowId);
  const win = authWindows.get(id);
  if (!win || win.isDestroyed()) {
    return { success: false };
  }
  win.close();
  return { success: true };
});

ipcMain.handle('power:toggle', (_event, enabled) => {
  if (enabled) {
    if (!powerSaveId) {
      powerSaveId = powerSaveBlocker.start('prevent-app-suspension');
    }
  } else if (powerSaveId) {
    powerSaveBlocker.stop(powerSaveId);
    powerSaveId = null;
  }
  return { enabled: !!powerSaveId };
});

ipcMain.handle('config:open', () => {
  const { configPath } = getUserDataPaths();
  if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, '# WZRD.tech configuration\n');
  }
  shell.openPath(configPath);
  return { success: true };
});

ipcMain.handle('license:get', () => {
  try {
    const licensePath = path.join(__dirname, 'LICENSE');
    const text = fs.readFileSync(licensePath, 'utf8');
    return { success: true, text };
  } catch (err) {
    return { success: false, text: 'License file not found.' };
  }
});
