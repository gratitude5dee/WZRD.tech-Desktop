const { contextBridge, ipcRenderer } = require('electron');

const SERVER_URL = 'http://localhost:3001';

// Store the current abort controller for cancelling requests
let currentAbortController = null;

// Expose safe API to renderer process via contextBridge
contextBridge.exposeInMainWorld('electronAPI', {
  // Abort the current ongoing request (client-side)
  abortCurrentRequest: () => {
    if (currentAbortController) {
      console.log('[PRELOAD] Aborting current request');
      currentAbortController.abort();
      currentAbortController = null;
    }
  },

  // Stop the backend query execution
  stopQuery: async (chatId, provider = 'claude') => {
    console.log('[PRELOAD] Stopping query for chatId:', chatId, 'provider:', provider);
    try {
      const response = await fetch(`${SERVER_URL}/api/abort`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chatId, provider })
      });
      const result = await response.json();
      console.log('[PRELOAD] Stop query result:', result);
      return result;
    } catch (error) {
      console.error('[PRELOAD] Error stopping query:', error);
      return { success: false, error: error.message };
    }
  },

  // Send a chat message to the backend with chat ID, provider, model, and optional context.
  sendMessage: async (message, chatId, provider = 'claude', model = null, options = {}) => {
    // Abort any previous request
    if (currentAbortController) {
      currentAbortController.abort();
    }

    // Create new abort controller for this request
    currentAbortController = new AbortController();
    const signal = currentAbortController.signal;

    return new Promise((resolve, reject) => {
      console.log('[PRELOAD] Sending message to backend:', message);
      console.log('[PRELOAD] Chat ID:', chatId);
      console.log('[PRELOAD] Provider:', provider);
      console.log('[PRELOAD] Model:', model);

      const { attachments = [], usePinnedMemory = true } = options || {};

      fetch(`${SERVER_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message, chatId, provider, model, attachments, usePinnedMemory }),
        signal
      })
        .then(response => {

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
          }

          console.log('[PRELOAD] Connected to backend successfully');

          // Return a custom object with methods to read the stream
          resolve({
            getReader: async function() {
              const reader = response.body.getReader();
              const decoder = new TextDecoder();
              return {
                read: async () => {
                  try {
                    const { done, value } = await reader.read();
                    if (done) {
                      console.log('[PRELOAD] Stream ended');
                    }
                    return {
                      done,
                      value: done ? undefined : decoder.decode(value, { stream: true })
                    };
                  } catch (readError) {
                    console.error('[PRELOAD] Read error:', readError);
                    throw readError;
                  }
                }
              };
            }
          });
        })
        .catch(error => {
          console.error('[PRELOAD] Connection error:', error);
          console.error('[PRELOAD] Error stack:', error.stack);
          reject(new Error(`Failed to connect to backend: ${error.message}`));
        });
    });
  },

  // Get available providers from backend
  getProviders: async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/providers`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('[PRELOAD] Error fetching providers:', error);
      return { providers: ['claude'], default: 'claude' };
    }
  },

  // Settings API
  getSettings: async () => {
    return ipcRenderer.invoke('settings:get');
  },

  saveSettings: async (settings) => {
    return ipcRenderer.invoke('settings:set', settings);
  },

  restartBackend: async () => {
    return ipcRenderer.invoke('backend:restart');
  },

  // Integrations
  getIntegrations: async () => {
    const response = await fetch(`${SERVER_URL}/api/integrations`);
    return response.json();
  },
  updateIntegration: async (id, connected) => {
    const response = await fetch(`${SERVER_URL}/api/integrations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ connected })
    });
    return response.json();
  },
  listComposioIntegrations: async (refresh = false) => {
    const query = refresh ? '?refresh=1' : '';
    const response = await fetch(`${SERVER_URL}/api/composio/integrations${query}`);
    let data = null;
    try {
      data = await response.json();
    } catch (err) {
      data = null;
    }
    return { ok: response.ok, status: response.status, data };
  },
  runComposioTest: async (prompt, externalUserId = null) => {
    const response = await fetch(`${SERVER_URL}/api/composio/test`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, externalUserId })
    });
    let data = null;
    try {
      data = await response.json();
    } catch (err) {
      data = null;
    }
    return { ok: response.ok, status: response.status, data };
  },

  // Automations
  listAutomations: async () => {
    const response = await fetch(`${SERVER_URL}/api/automations`);
    return response.json();
  },
  createAutomation: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/automations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  updateAutomation: async (id, payload) => {
    const response = await fetch(`${SERVER_URL}/api/automations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  runAutomation: async (id) => {
    const response = await fetch(`${SERVER_URL}/api/automations/${id}/run`, {
      method: 'POST'
    });
    return response.json();
  },
  listAutomationRuns: async (id, limit = 50, offset = 0) => {
    const query = `?limit=${encodeURIComponent(limit)}&offset=${encodeURIComponent(offset)}`;
    const response = await fetch(`${SERVER_URL}/api/automations/${id}/runs${query}`);
    return response.json();
  },

  // Memory
  listMemory: async (search = '') => {
    const query = search ? `?search=${encodeURIComponent(search)}` : '';
    const response = await fetch(`${SERVER_URL}/api/memory${query}`);
    return response.json();
  },
  createMemory: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/memory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  updateMemory: async (id, payload) => {
    const response = await fetch(`${SERVER_URL}/api/memory/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  deleteMemory: async (id) => {
    const response = await fetch(`${SERVER_URL}/api/memory/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Activity
  listActivity: async () => {
    const response = await fetch(`${SERVER_URL}/api/activity`);
    return response.json();
  },

  // Settings
  getSettingsSection: async (section) => {
    const response = await fetch(`${SERVER_URL}/api/settings/${section}`);
    return response.json();
  },
  updateSettingsSection: async (section, payload) => {
    const response = await fetch(`${SERVER_URL}/api/settings/${section}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },

  // Skills
  listSkills: async () => {
    const response = await fetch(`${SERVER_URL}/api/skills`);
    return response.json();
  },
  createSkill: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/skills`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  updateSkill: async (id, payload) => {
    const response = await fetch(`${SERVER_URL}/api/skills/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  deleteSkill: async (id) => {
    const response = await fetch(`${SERVER_URL}/api/skills/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Templates
  listAutomationTemplates: async () => {
    const response = await fetch(`${SERVER_URL}/api/automation-templates`);
    return response.json();
  },

  // MCP servers
  listMcpServers: async () => {
    const response = await fetch(`${SERVER_URL}/api/mcp-servers`);
    return response.json();
  },
  createMcpServer: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/mcp-servers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  updateMcpServer: async (id, payload) => {
    const response = await fetch(`${SERVER_URL}/api/mcp-servers/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  deleteMcpServer: async (id) => {
    const response = await fetch(`${SERVER_URL}/api/mcp-servers/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Git profiles
  listGitProfiles: async () => {
    const response = await fetch(`${SERVER_URL}/api/git-profiles`);
    return response.json();
  },
  createGitProfile: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/git-profiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  updateGitProfile: async (id, payload) => {
    const response = await fetch(`${SERVER_URL}/api/git-profiles/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  deleteGitProfile: async (id) => {
    const response = await fetch(`${SERVER_URL}/api/git-profiles/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Environments
  listEnvironments: async () => {
    const response = await fetch(`${SERVER_URL}/api/environments`);
    return response.json();
  },
  createEnvironment: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/environments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  updateEnvironment: async (id, payload) => {
    const response = await fetch(`${SERVER_URL}/api/environments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  deleteEnvironment: async (id) => {
    const response = await fetch(`${SERVER_URL}/api/environments/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Worktrees
  listWorktrees: async () => {
    const response = await fetch(`${SERVER_URL}/api/worktrees`);
    return response.json();
  },
  createWorktree: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/worktrees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  updateWorktree: async (id, payload) => {
    const response = await fetch(`${SERVER_URL}/api/worktrees/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  deleteWorktree: async (id) => {
    const response = await fetch(`${SERVER_URL}/api/worktrees/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Archived threads
  listArchivedThreads: async () => {
    const response = await fetch(`${SERVER_URL}/api/archived-threads`);
    return response.json();
  },
  createArchivedThread: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/archived-threads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  deleteArchivedThread: async (id) => {
    const response = await fetch(`${SERVER_URL}/api/archived-threads/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // OpenClawd
  getClawdStatus: async () => {
    const response = await fetch(`${SERVER_URL}/api/clawd/status`);
    return response.json();
  },
  startClawd: async () => {
    const response = await fetch(`${SERVER_URL}/api/clawd/start`, { method: 'POST' });
    return response.json();
  },
  stopClawd: async () => {
    const response = await fetch(`${SERVER_URL}/api/clawd/stop`, { method: 'POST' });
    return response.json();
  },
  getClawdConfig: async () => {
    const response = await fetch(`${SERVER_URL}/api/clawd/config`);
    return response.json();
  },
  updateClawdConfig: async (payload) => {
    const response = await fetch(`${SERVER_URL}/api/clawd/config`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  getClawdLogs: async (since = 0) => {
    const response = await fetch(`${SERVER_URL}/api/clawd/logs?since=${encodeURIComponent(since)}`);
    return response.json();
  },

  // OS integrations
  togglePowerSaveBlocker: async (enabled) => {
    return ipcRenderer.invoke('power:toggle', enabled);
  },
  openConfigFile: async () => {
    return ipcRenderer.invoke('config:open');
  },
  getLicenseText: async () => {
    return ipcRenderer.invoke('license:get');
  }
});
