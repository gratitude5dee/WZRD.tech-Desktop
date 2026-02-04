import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import { Composio } from '@composio/core';
import { listComposioIntegrations } from './composio.js';
import { getClawdStatus, getClawdConfig, updateClawdConfig, startClawd, stopClawd, getClawdLogs } from './clawd-manager.js';
import { getProvider, getAvailableProviders, initializeProviders } from './providers/index.js';
import crypto from 'crypto';
import cron from 'node-cron';
import {
  initDb,
  listIntegrations,
  upsertIntegration,
  updateIntegration,
  listAutomations,
  getAutomation,
  createAutomation,
  updateAutomation,
  addAutomationRun,
  listAutomationRuns,
  listMemory,
  listPinnedMemory,
  createMemory,
  updateMemory,
  deleteMemory,
  listActivity,
  addActivity,
  getSettings,
  updateSettings,
  listSkills,
  createSkill,
  updateSkill,
  deleteSkill,
  listAutomationTemplates,
  listMcpServers,
  createMcpServer,
  updateMcpServer,
  deleteMcpServer,
  listGitProfiles,
  createGitProfile,
  updateGitProfile,
  deleteGitProfile,
  listEnvProfiles,
  createEnvProfile,
  updateEnvProfile,
  deleteEnvProfile,
  listWorktrees,
  createWorktree,
  updateWorktree,
  deleteWorktree,
  listArchivedThreads,
  addArchivedThread,
  deleteArchivedThread
} from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
let server = null;

let composio = null;
let composioSessions = new Map();
let defaultComposioSession = null;
const automationJobs = new Map();

function loadEnv(envPath = null) {
  if (envPath) {
    dotenv.config({ path: envPath, override: true });
  } else {
    dotenv.config({ path: path.join(__dirname, '..', '.env'), override: true });
  }
}

function resetComposioState() {
  composioSessions = new Map();
  defaultComposioSession = null;
}

function getOpencodeConfigPath() {
  return process.env.OPENCODE_CONFIG_PATH || path.join(__dirname, 'opencode.json');
}

// Pre-initialize Composio session on startup
async function initializeComposioSession() {
  const defaultUserId = 'default-user';
  console.log('[COMPOSIO] Pre-initializing session for:', defaultUserId);
  try {
    if (!composio) {
      composio = new Composio();
    }
    defaultComposioSession = await composio.create(defaultUserId);
    composioSessions.set(defaultUserId, defaultComposioSession);
    console.log('[COMPOSIO] Session ready with MCP URL:', defaultComposioSession.mcp.url);

    // Update opencode.json with the MCP config
    updateOpencodeConfig(defaultComposioSession.mcp.url, defaultComposioSession.mcp.headers);
    console.log('[OPENCODE] Updated opencode.json with MCP config');
  } catch (error) {
    console.error('[COMPOSIO] Failed to pre-initialize session:', error.message);
  }
}

async function getOrCreateComposioSession(userId) {
  let session = composioSessions.get(userId);
  if (session) return session;
  session = await composio.create(userId);
  composioSessions.set(userId, session);
  updateOpencodeConfig(session.mcp.url, session.mcp.headers);
  console.log('[OPENCODE] Updated opencode.json with MCP config');
  return session;
}

function buildMcpServers(session) {
  if (!session) return {};
  return {
    composio: {
      type: 'http',
      url: session.mcp.url,
      headers: session.mcp.headers
    }
  };
}

function generateId(prefix) {
  return `${prefix}_${crypto.randomUUID()}`;
}

function scheduleAutomationJob(automation) {
  if (!automation) return;
  if (automationJobs.has(automation.id)) {
    automationJobs.get(automation.id).stop();
    automationJobs.delete(automation.id);
  }

  if (!automation.enabled) return;
  if (!cron.validate(automation.schedule)) {
    console.warn('[AUTOMATION] Invalid cron schedule:', automation.schedule);
    return;
  }

  const job = cron.schedule(automation.schedule, async () => {
    await runAutomation(automation.id, 'schedule');
  });
  automationJobs.set(automation.id, job);
}

function scheduleAllAutomations() {
  const automations = listAutomations();
  automations.forEach(scheduleAutomationJob);
}

async function runAutomation(automationId, source = 'manual') {
  const automation = getAutomation(automationId);
  if (!automation) {
    return { success: false, error: 'Automation not found' };
  }

  const providerName = automation.provider || 'claude';
  const provider = getProvider(providerName);

  try {
    const userId = 'automation-user';
    const session = await getOrCreateComposioSession(userId);
    const mcpServers = buildMcpServers(session);
    const chatId = `${automation.id}_${Date.now()}`;

    let output = '';
    for await (const chunk of provider.query({
      prompt: automation.prompt,
      chatId,
      userId,
      mcpServers,
      model: automation.model || null,
      allowedTools: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep', 'WebSearch', 'WebFetch', 'TodoWrite', 'Skill'],
      maxTurns: 60
    })) {
      if (chunk.type === 'text') {
        output += chunk.content || '';
      }
    }

    addAutomationRun({ automationId: automation.id, status: 'success', output });
    addActivity({
      type: 'automation',
      title: `Automation ran: ${automation.name}`,
      detail: source === 'schedule' ? 'Scheduled run completed.' : 'Manual run completed.'
    });
    return { success: true, output };
  } catch (err) {
    addAutomationRun({ automationId: automation.id, status: 'error', output: err.message });
    addActivity({
      type: 'automation',
      title: `Automation failed: ${automation.name}`,
      detail: err.message
    });
    return { success: false, error: err.message };
  }
}

// Write MCP config to opencode.json
function updateOpencodeConfig(mcpUrl, mcpHeaders) {
  const opencodeConfigPath = getOpencodeConfigPath();
  const config = {
    mcp: {
      composio: {
        type: 'remote',
        url: mcpUrl,
        headers: mcpHeaders
      }
    }
  };
  fs.writeFileSync(opencodeConfigPath, JSON.stringify(config, null, 2));
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '3mb' }));

// Chat endpoint using provider abstraction
app.post('/api/chat', async (req, res) => {
  const {
    message,
    chatId,
    userId = 'default-user',
    provider: providerName = 'claude',  // Per-request provider selection
    model = null,  // Per-request model selection
    attachments = [],
    usePinnedMemory = true
  } = req.body;

  console.log('[CHAT] Request received:', message);
  console.log('[CHAT] Chat ID:', chatId);
  console.log('[CHAT] Provider:', providerName);
  console.log('[CHAT] Model:', model || '(default)');

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Validate provider
  const availableProviders = getAvailableProviders();
  if (!availableProviders.includes(providerName.toLowerCase())) {
    return res.status(400).json({
      error: `Invalid provider: ${providerName}. Available: ${availableProviders.join(', ')}`
    });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  res.write(`data: ${JSON.stringify({ type: 'connected', message: 'Processing request...' })}\n\n`);

  const heartbeatInterval = setInterval(() => {
    if (!res.writableEnded) {
      res.write(': heartbeat\n\n');
    }
  }, 15000);

  res.on('close', () => {
    clearInterval(heartbeatInterval);
  });

  try {
    // Get or create Composio session for this user
    let composioSession = composioSessions.get(userId);
    if (!composioSession) {
      console.log('[COMPOSIO] Creating new session for user:', userId);
      res.write(`data: ${JSON.stringify({ type: 'status', message: 'Initializing session...' })}\n\n`);
      composioSession = await getOrCreateComposioSession(userId);
      console.log('[COMPOSIO] Session created with MCP URL:', composioSession.mcp.url);
    }

    // Get the provider instance
    const provider = getProvider(providerName);

    // Build MCP servers config - passed to provider
    const mcpServers = buildMcpServers(composioSession);

    console.log('[CHAT] Using provider:', provider.name);
    console.log('[CHAT] All stored sessions:', Array.from(provider.sessions.entries()));

    const buildTruncatedUtf8 = (text, maxBytes) => {
      const str = String(text || '');
      if (Buffer.byteLength(str, 'utf8') <= maxBytes) {
        return { text: str, truncated: false };
      }
      // Best-effort truncation by bytes (avoid cutting too far past the limit).
      let out = str.slice(0, Math.min(str.length, maxBytes));
      while (out.length > 0 && Buffer.byteLength(out, 'utf8') > maxBytes) {
        out = out.slice(0, Math.floor(out.length * 0.9));
      }
      return { text: out, truncated: true };
    };

    // Augment the prompt with pinned memory + attachments (bounded).
    let finalPrompt = message;

    if (usePinnedMemory !== false) {
      try {
        const pinned = listPinnedMemory({ limit: 10 });
        if (pinned.length > 0) {
          const lines = [];
          let usedChars = 0;
          for (const mem of pinned) {
            const title = String(mem.title || '').trim();
            const content = String(mem.content || '').trim();
            const entry = `- ${title}\n  ${content}`;
            if (usedChars + entry.length > 12000) break;
            lines.push(entry);
            usedChars += entry.length;
          }
          if (lines.length > 0) {
            finalPrompt = `WZRD.tech Context (Pinned Memory)\n${lines.join('\n\n')}\n\nUser:\n${message}`;
          }
        }
      } catch (err) {
        console.warn('[CHAT] Failed to load pinned memory:', err?.message || err);
      }
    }

    if (Array.isArray(attachments) && attachments.length > 0) {
      const safe = attachments.slice(0, 5);
      const blocks = safe.map((att, index) => {
        const name = String(att?.name || `attachment-${index + 1}`).trim();
        const mime = String(att?.mime || att?.type || 'text/plain').trim();
        const contentRaw = typeof att?.content === 'string' ? att.content : '';
        const { text, truncated } = buildTruncatedUtf8(contentRaw, 200 * 1024);
        const suffix = truncated ? '\n\n[Truncated to 200KB]' : '';
        const body = text ? text : '[No text content provided]';
        return `# ${name} (${mime})\n${body}${suffix}`;
      });
      finalPrompt = `${finalPrompt}\n\nAttachments\n${blocks.join('\n\n')}`;
    }

    // Stream responses from the provider
    try {
      for await (const chunk of provider.query({
        prompt: finalPrompt,
        chatId,
        userId,
        mcpServers,
        model,
        allowedTools: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep', 'WebSearch', 'WebFetch', 'TodoWrite', 'Skill'],
        maxTurns: 100
      })) {
        if (chunk.type === 'tool_use') {
          console.log('[SSE] Sending tool_use:', chunk.name);
        }
        if (chunk.type === 'text') {
          console.log('[SSE] Sending text chunk, length:', chunk.content?.length || 0);
        }
        // Send chunk as SSE
        const data = `data: ${JSON.stringify(chunk)}\n\n`;
        res.write(data);
      }
    } catch (streamError) {
      console.error('[CHAT] Stream error during iteration:', streamError);
      if (!res.writableEnded) {
        res.write(`data: ${JSON.stringify({ type: 'error', message: streamError.message })}\n\n`);
      }
    }

    clearInterval(heartbeatInterval);
    if (!res.writableEnded) {
      res.end();
    }
    console.log('[CHAT] Stream completed');
  } catch (error) {
    clearInterval(heartbeatInterval);
    console.error('[CHAT] Error:', error);
    res.write(`data: ${JSON.stringify({ type: 'error', message: error.message })}\n\n`);
    res.end();
  }
});

// Abort endpoint to stop active queries
app.post('/api/abort', (req, res) => {
  const { chatId, provider: providerName = 'claude' } = req.body;

  if (!chatId) {
    return res.status(400).json({ error: 'chatId is required' });
  }

  console.log('[ABORT] Request to abort chatId:', chatId, 'provider:', providerName);

  try {
    const provider = getProvider(providerName);
    const aborted = provider.abort(chatId);

    if (aborted) {
      console.log('[ABORT] Successfully aborted chatId:', chatId);
      res.json({ success: true, message: 'Query aborted' });
    } else {
      console.log('[ABORT] No active query found for chatId:', chatId);
      res.json({ success: false, message: 'No active query to abort' });
    }
  } catch (error) {
    console.error('[ABORT] Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get available providers endpoint
app.get('/api/providers', (_req, res) => {
  res.json({
    providers: getAvailableProviders(),
    default: 'claude'
  });
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    providers: getAvailableProviders()
  });
});

// Integrations
app.get('/api/integrations', (_req, res) => {
  const integrations = listIntegrations();
  res.json(integrations);
});

app.patch('/api/integrations/:id', (req, res) => {
  const { id } = req.params;
  const { connected } = req.body;
  const integration = updateIntegration(id, connected);
  if (!integration) {
    return res.status(404).json({ error: 'Integration not found' });
  }
  addActivity({
    type: 'integration',
    title: `${integration.name} ${integration.connected ? 'connected' : 'disconnected'}`,
    detail: integration.connected ? 'Integration enabled in workspace.' : 'Integration disabled in workspace.'
  });
  res.json(integration);
});

app.get('/api/composio/integrations', async (req, res) => {
  if (!process.env.COMPOSIO_API_KEY) {
    return res.status(401).json({ error: 'COMPOSIO_API_KEY not set' });
  }
  try {
    const force = req.query.refresh === '1';
    const list = await listComposioIntegrations({ force });
    const response = list.map(item => {
      const saved = upsertIntegration({
        id: item.id,
        name: item.name,
        category: item.category,
        description: item.description,
        website: item.website,
        icon: item.icon
      });
      return {
        ...item,
        connected: !!saved?.connected,
        source: 'composio'
      };
    });
    res.json(response);
  } catch (error) {
    console.error('[COMPOSIO] Failed to load integrations:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/composio/test', async (req, res) => {
  if (!process.env.COMPOSIO_API_KEY) {
    return res.status(401).json({ error: 'COMPOSIO_API_KEY not set' });
  }
  const { prompt, externalUserId } = req.body || {};
  if (!prompt) {
    return res.status(400).json({ error: 'prompt is required' });
  }
  try {
    const userId = externalUserId || 'default-user';
    const session = await getOrCreateComposioSession(userId);
    const mcpServers = buildMcpServers(session);

    const provider = getProvider('claude');
    const chatId = `composio_test_${Date.now()}`;
    let output = '';

    for await (const chunk of provider.query({
      prompt,
      chatId,
      userId,
      mcpServers,
      allowedTools: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep', 'WebSearch', 'WebFetch', 'TodoWrite', 'Skill'],
      maxTurns: 60
    })) {
      if (chunk.type === 'text') {
        output += chunk.content || '';
      }
    }

    res.json({ message: output.trim() });
  } catch (error) {
    console.error('[COMPOSIO] Tool router failed:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// OpenClawd (Clawd gateway control)
app.get('/api/clawd/status', (_req, res) => {
  res.json(getClawdStatus());
});

app.get('/api/clawd/config', (_req, res) => {
  const config = getClawdConfig();
  if (!config) return res.status(500).json({ error: 'Failed to load config' });
  res.json(config);
});

app.put('/api/clawd/config', (req, res) => {
  try {
    const saved = updateClawdConfig(req.body);
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/clawd/start', async (_req, res) => {
  try {
    const status = await startClawd();
    res.json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/clawd/stop', async (_req, res) => {
  try {
    const status = await stopClawd();
    res.json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/clawd/logs', (req, res) => {
  const since = Number(req.query.since) || 0;
  res.json(getClawdLogs({ since }));
});

// Automations
app.get('/api/automations', (_req, res) => {
  res.json(listAutomations());
});

app.post('/api/automations', (req, res) => {
  const { name, prompt, schedule, provider, model, enabled } = req.body;
  const automation = createAutomation({
    id: generateId('automation'),
    name,
    prompt,
    schedule,
    provider: provider || 'claude',
    model: model || null,
    enabled: enabled ? 1 : 0
  });
  scheduleAutomationJob(automation);
  addActivity({
    type: 'automation',
    title: `Automation created: ${automation.name}`,
    detail: automation.enabled ? 'Scheduled and ready.' : 'Saved as disabled.'
  });
  res.json(automation);
});

app.patch('/api/automations/:id', (req, res) => {
  const { id } = req.params;
  const { name, prompt, schedule, provider, model, enabled } = req.body;
  const automation = updateAutomation(id, {
    name,
    prompt,
    schedule,
    provider,
    model,
    enabled: enabled ? 1 : 0
  });
  if (!automation) {
    return res.status(404).json({ error: 'Automation not found' });
  }
  scheduleAutomationJob(automation);
  addActivity({
    type: 'automation',
    title: `Automation updated: ${automation.name}`,
    detail: automation.enabled ? 'Schedule updated.' : 'Automation disabled.'
  });
  res.json(automation);
});

app.get('/api/automations/:id/runs', (req, res) => {
  const { id } = req.params;
  const limit = Number(req.query.limit) || 50;
  const offset = Number(req.query.offset) || 0;
  const runs = listAutomationRuns(id, { limit, offset });
  res.json(runs);
});

app.post('/api/automations/:id/run', async (req, res) => {
  const { id } = req.params;
  const result = await runAutomation(id, 'manual');
  if (!result.success) {
    return res.status(500).json(result);
  }
  res.json(result);
});

// Memory
app.get('/api/memory', (req, res) => {
  const { search } = req.query;
  const memories = listMemory({ search: search || '' });
  res.json(memories);
});

app.post('/api/memory', (req, res) => {
  const { title, content, tags, pinned } = req.body;
  const memory = createMemory({
    id: generateId('memory'),
    title,
    content,
    tags: JSON.stringify(tags || []),
    pinned: pinned ? 1 : 0
  });
  addActivity({
    type: 'memory',
    title: `Memory added: ${memory.title}`,
    detail: 'Captured in memory vault.'
  });
  res.json(memory);
});

app.patch('/api/memory/:id', (req, res) => {
  const { id } = req.params;
  const { title, content, tags, pinned } = req.body;
  const memory = updateMemory(id, {
    title,
    content,
    tags: JSON.stringify(tags || []),
    pinned: pinned ? 1 : 0
  });
  if (!memory) {
    return res.status(404).json({ error: 'Memory not found' });
  }
  addActivity({
    type: 'memory',
    title: `Memory updated: ${memory.title}`,
    detail: 'Memory edited.'
  });
  res.json(memory);
});

app.delete('/api/memory/:id', (req, res) => {
  const { id } = req.params;
  deleteMemory(id);
  addActivity({
    type: 'memory',
    title: 'Memory deleted',
    detail: 'Memory entry removed.'
  });
  res.json({ success: true });
});

// Activity
app.get('/api/activity', (_req, res) => {
  res.json(listActivity({ limit: 100 }));
});

// Settings
app.get('/api/settings/:section', (req, res) => {
  const { section } = req.params;
  res.json(getSettings(section));
});

app.put('/api/settings/:section', (req, res) => {
  const { section } = req.params;
  const updates = req.body || {};
  const updated = updateSettings(section, updates);
  res.json(updated);
});

// Skills
app.get('/api/skills', (_req, res) => {
  res.json(listSkills());
});

app.post('/api/skills', (req, res) => {
  const { id, name, description, source, url, installed } = req.body;
  const skill = createSkill({
    id: id || generateId('skill'),
    name,
    description: description || '',
    source: source || 'github',
    url: url || '',
    installed: installed ? 1 : 0
  });
  res.json(skill);
});

app.patch('/api/skills/:id', (req, res) => {
  const { id } = req.params;
  const updated = updateSkill(id, req.body);
  if (!updated) return res.status(404).json({ error: 'Skill not found' });
  res.json(updated);
});

app.delete('/api/skills/:id', (req, res) => {
  const { id } = req.params;
  deleteSkill(id);
  res.json({ success: true });
});

// Automation templates
app.get('/api/automation-templates', (_req, res) => {
  res.json(listAutomationTemplates());
});

// MCP Servers
app.get('/api/mcp-servers', (_req, res) => {
  res.json(listMcpServers());
});

app.post('/api/mcp-servers', (req, res) => {
  const { name, url, status } = req.body;
  const server = createMcpServer({
    id: generateId('mcp'),
    name,
    url,
    status: status || 'connected'
  });
  res.json(server);
});

app.patch('/api/mcp-servers/:id', (req, res) => {
  const { id } = req.params;
  const updated = updateMcpServer(id, req.body);
  if (!updated) return res.status(404).json({ error: 'MCP server not found' });
  res.json(updated);
});

app.delete('/api/mcp-servers/:id', (req, res) => {
  const { id } = req.params;
  deleteMcpServer(id);
  res.json({ success: true });
});

// Git profiles
app.get('/api/git-profiles', (_req, res) => {
  res.json(listGitProfiles());
});

app.post('/api/git-profiles', (req, res) => {
  const { name, remote, branch } = req.body;
  const profile = createGitProfile({
    id: generateId('git'),
    name,
    remote,
    branch
  });
  res.json(profile);
});

app.patch('/api/git-profiles/:id', (req, res) => {
  const { id } = req.params;
  const updated = updateGitProfile(id, req.body);
  if (!updated) return res.status(404).json({ error: 'Git profile not found' });
  res.json(updated);
});

app.delete('/api/git-profiles/:id', (req, res) => {
  const { id } = req.params;
  deleteGitProfile(id);
  res.json({ success: true });
});

// Environments
app.get('/api/environments', (_req, res) => {
  res.json(listEnvProfiles());
});

app.post('/api/environments', (req, res) => {
  const { name, vars } = req.body;
  const env = createEnvProfile({
    id: generateId('env'),
    name,
    vars: JSON.stringify(vars || {})
  });
  res.json(env);
});

app.patch('/api/environments/:id', (req, res) => {
  const { id } = req.params;
  const updated = updateEnvProfile(id, {
    ...req.body,
    vars: req.body.vars ? JSON.stringify(req.body.vars) : req.body.vars
  });
  if (!updated) return res.status(404).json({ error: 'Environment not found' });
  res.json(updated);
});

app.delete('/api/environments/:id', (req, res) => {
  const { id } = req.params;
  deleteEnvProfile(id);
  res.json({ success: true });
});

// Worktrees
app.get('/api/worktrees', (_req, res) => {
  res.json(listWorktrees());
});

app.post('/api/worktrees', (req, res) => {
  const { name, path: wtPath, status } = req.body;
  const worktree = createWorktree({
    id: generateId('worktree'),
    name,
    path: wtPath,
    status: status || 'active'
  });
  res.json(worktree);
});

app.patch('/api/worktrees/:id', (req, res) => {
  const { id } = req.params;
  const updated = updateWorktree(id, req.body);
  if (!updated) return res.status(404).json({ error: 'Worktree not found' });
  res.json(updated);
});

app.delete('/api/worktrees/:id', (req, res) => {
  const { id } = req.params;
  deleteWorktree(id);
  res.json({ success: true });
});

// Archived threads
app.get('/api/archived-threads', (_req, res) => {
  res.json(listArchivedThreads());
});

app.post('/api/archived-threads', (req, res) => {
  const { id, title } = req.body;
  const entry = addArchivedThread({ id, title });
  res.json(entry);
});

app.patch('/api/archived-threads/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  deleteArchivedThread(id);
  const entry = addArchivedThread({ id, title });
  res.json(entry);
});

app.delete('/api/archived-threads/:id', (req, res) => {
  const { id } = req.params;
  deleteArchivedThread(id);
  res.json({ success: true });
});

export async function startServer({ port = 3001, envPath = null } = {}) {
  if (server) {
    return server;
  }

  loadEnv(envPath);
  resetComposioState();
  composio = new Composio();

  await initializeProviders();
  await initializeComposioSession();
  initDb();
  scheduleAllAutomations();

  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`\n✓ Backend server running on http://localhost:${port}`);
      console.log(`✓ Chat endpoint: POST http://localhost:${port}/api/chat`);
      console.log(`✓ Providers endpoint: GET http://localhost:${port}/api/providers`);
      console.log(`✓ Health check: GET http://localhost:${port}/api/health`);
      console.log(`✓ Available providers: ${getAvailableProviders().join(', ')}\n`);
      resolve(server);
    });

    server.on('error', (err) => {
      console.error('Server error:', err);
      server = null;
      reject(err);
    });
  });
}

export async function stopServer() {
  if (!server) return;
  try {
    await stopClawd();
  } catch (_err) {
    // ignore shutdown errors
  }
  await new Promise((resolve) => server.close(resolve));
  server = null;
}
