import { Composio } from '@composio/core';

const CACHE_TTL_MS = 10 * 60 * 1000;

let composioClient = null;
let composioKey = null;

let cachedToolkits = null;
let toolkitsCachedAt = 0;
const authConfigsCache = new Map();

function requireComposioKey() {
  if (!process.env.COMPOSIO_API_KEY) {
    const error = new Error('COMPOSIO_API_KEY not set');
    error.code = 'COMPOSIO_API_KEY_MISSING';
    throw error;
  }
}

export function getComposioClient() {
  requireComposioKey();
  if (!composioClient || composioKey !== process.env.COMPOSIO_API_KEY) {
    composioKey = process.env.COMPOSIO_API_KEY;
    composioClient = new Composio({ apiKey: composioKey });
    cachedToolkits = null;
    toolkitsCachedAt = 0;
    authConfigsCache.clear();
  }
  return composioClient;
}

export async function listComposioIntegrations({ force = false } = {}) {
  const now = Date.now();
  if (!force && cachedToolkits && now - toolkitsCachedAt < CACHE_TTL_MS) {
    return cachedToolkits;
  }

  const composio = getComposioClient();
  const res = await composio.toolkits.get({});
  const items = Array.isArray(res) ? res : (res?.items || []);

  cachedToolkits = items.map((toolkit) => ({
    id: toolkit.slug,
    slug: toolkit.slug,
    name: toolkit.name,
    category: toolkit.meta?.categories?.[0]?.name || 'General',
    description: toolkit.meta?.description || 'No description provided.',
    icon: toolkit.meta?.logo || '',
    website: toolkit.meta?.appUrl || '',
    toolsCount: toolkit.meta?.toolsCount || 0
  }));
  toolkitsCachedAt = now;
  return cachedToolkits;
}

export async function listAuthConfigs({
  toolkitSlug,
  isComposioManaged = true,
  limit = 50,
  force = false
} = {}) {
  if (!toolkitSlug) {
    throw new Error('toolkitSlug is required');
  }

  const key = `${toolkitSlug}::${isComposioManaged ? 'managed' : 'unmanaged'}`;
  const now = Date.now();
  const cached = authConfigsCache.get(key);
  if (!force && cached && now - cached.cachedAt < CACHE_TTL_MS) {
    return cached.items;
  }

  const composio = getComposioClient();
  const res = await composio.authConfigs.list({
    toolkit: toolkitSlug,
    isComposioManaged,
    limit
  });

  const items = (res?.items || []).filter((item) => item.status === 'ENABLED');
  authConfigsCache.set(key, { cachedAt: now, items });
  return items;
}

export async function listConnectedAccounts({
  userId,
  toolkitSlug = null,
  statuses = null,
  limit = 200,
  cursor = null,
  orderBy = 'updated_at'
} = {}) {
  if (!userId) {
    throw new Error('userId is required');
  }

  const composio = getComposioClient();
  const query = {
    userIds: [userId],
    limit,
    orderBy
  };
  if (toolkitSlug) query.toolkitSlugs = [toolkitSlug];
  if (Array.isArray(statuses) && statuses.length > 0) query.statuses = statuses;
  if (cursor) query.cursor = cursor;
  return composio.connectedAccounts.list(query);
}

export async function listAllConnectedAccountsForUser({ userId, limitPerPage = 200, maxPages = 10 } = {}) {
  const items = [];
  let cursor = null;
  for (let page = 0; page < maxPages; page += 1) {
    const res = await listConnectedAccounts({ userId, limit: limitPerPage, cursor });
    const pageItems = res?.items || [];
    items.push(...pageItems);
    cursor = res?.nextCursor || null;
    if (!cursor) break;
  }
  return items;
}

export async function createConnectLink({ userId, authConfigId, callbackUrl = null } = {}) {
  if (!userId) throw new Error('userId is required');
  if (!authConfigId) throw new Error('authConfigId is required');
  const composio = getComposioClient();
  const options = {};
  if (callbackUrl) options.callbackUrl = callbackUrl;
  return composio.connectedAccounts.link(userId, authConfigId, options);
}

export async function waitForConnection({ connectedAccountId, timeoutMs = 120000 } = {}) {
  if (!connectedAccountId) throw new Error('connectedAccountId is required');
  const composio = getComposioClient();
  return composio.connectedAccounts.waitForConnection(connectedAccountId, timeoutMs);
}

export async function getConnectedAccount(id) {
  if (!id) throw new Error('id is required');
  const composio = getComposioClient();
  return composio.connectedAccounts.get(id);
}

export async function enableConnectedAccount(id) {
  if (!id) throw new Error('id is required');
  const composio = getComposioClient();
  await composio.connectedAccounts.enable(id);
  return getConnectedAccount(id);
}

export async function disableConnectedAccount(id) {
  if (!id) throw new Error('id is required');
  const composio = getComposioClient();
  await composio.connectedAccounts.disable(id);
  return getConnectedAccount(id);
}

export async function deleteConnectedAccount(id) {
  if (!id) throw new Error('id is required');
  const composio = getComposioClient();
  return composio.connectedAccounts.delete(id);
}

