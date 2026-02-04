import { Composio } from '@composio/core';
import { createSdkMcpServer, query } from '@anthropic-ai/claude-agent-sdk';

const CACHE_TTL_MS = 10 * 60 * 1000;
let cachedIntegrations = null;
let cacheTimestamp = 0;
let composioClient = null;
let composioClientWithProvider = null;
const sessionCache = new Map();

function requireComposioKey() {
  if (!process.env.COMPOSIO_API_KEY) {
    const error = new Error('COMPOSIO_API_KEY not set');
    error.code = 'COMPOSIO_API_KEY_MISSING';
    throw error;
  }
}

async function getClaudeProvider() {
  try {
    const mod = await import('@composio/claude-agent-sdk');
    return new mod.ClaudeAgentSDKProvider();
  } catch (err) {
    const error = new Error('Missing @composio/claude-agent-sdk. Run npm install to enable tool router.');
    error.code = 'COMPOSIO_PROVIDER_MISSING';
    throw error;
  }
}

async function getComposioClient({ requireProvider = false } = {}) {
  requireComposioKey();

  if (!requireProvider && composioClient) {
    return composioClient;
  }
  if (requireProvider && composioClientWithProvider) {
    return composioClientWithProvider;
  }

  if (requireProvider) {
    const provider = await getClaudeProvider();
    composioClientWithProvider = new Composio({
      apiKey: process.env.COMPOSIO_API_KEY,
      provider
    });
    return composioClientWithProvider;
  }

  composioClient = new Composio({
    apiKey: process.env.COMPOSIO_API_KEY
  });
  return composioClient;
}

export async function listComposioIntegrations({ force = false } = {}) {
  const now = Date.now();
  if (!force && cachedIntegrations && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedIntegrations;
  }

  const composio = await getComposioClient({ requireProvider: false });
  const toolkits = await composio.toolkits.get({});
  cachedIntegrations = toolkits.map(toolkit => ({
    id: toolkit.slug,
    name: toolkit.name,
    category: toolkit.meta?.categories?.[0]?.name || 'General',
    description: toolkit.meta?.description || 'No description provided.',
    icon: toolkit.meta?.logo || '',
    website: toolkit.meta?.appUrl || '',
    toolsCount: toolkit.meta?.toolsCount || 0
  }));
  cacheTimestamp = now;
  return cachedIntegrations;
}

export async function getOrCreateComposioSession(externalUserId) {
  if (sessionCache.has(externalUserId)) {
    return sessionCache.get(externalUserId);
  }
  const composio = await getComposioClient({ requireProvider: true });
  const session = await composio.create(externalUserId);
  sessionCache.set(externalUserId, session);
  return session;
}

export async function runComposioQuery({ prompt, externalUserId }) {
  const session = await getOrCreateComposioSession(externalUserId);
  const tools = await session.tools();
  const customServer = createSdkMcpServer({
    name: 'composio',
    version: '1.0.0',
    tools
  });

  let lastAssistantMessage = null;
  for await (const content of query({
    prompt,
    options: {
      mcpServers: { composio: customServer },
      permissionMode: 'bypassPermissions'
    }
  })) {
    if (content.type === 'assistant') {
      lastAssistantMessage = content.message;
    }
  }
  return lastAssistantMessage;
}
