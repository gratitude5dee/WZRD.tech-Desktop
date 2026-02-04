import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db = null;
let ftsAvailable = false;

function resolveDbPath() {
  if (process.env.WZRDTECH_DB_PATH) {
    return process.env.WZRDTECH_DB_PATH;
  }
  return path.join(process.cwd(), 'wzrdtech.db');
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getSeedIntegrations() {
  const seedPath = path.join(__dirname, 'data', 'integrations.json');
  if (!fs.existsSync(seedPath)) return [];
  const raw = fs.readFileSync(seedPath, 'utf8');
  return JSON.parse(raw);
}

function createTables() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS integrations (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      website TEXT,
      icon TEXT,
      connected INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS automations (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      prompt TEXT NOT NULL,
      schedule TEXT NOT NULL,
      provider TEXT DEFAULT 'claude',
      model TEXT DEFAULT NULL,
      enabled INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS automation_runs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      automation_id TEXT NOT NULL,
      status TEXT NOT NULL,
      output TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS memory (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      tags TEXT DEFAULT '[]',
      pinned INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS activity_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      detail TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS settings (
      section TEXT NOT NULL,
      key TEXT NOT NULL,
      value TEXT NOT NULL,
      updated_at TEXT DEFAULT (datetime('now')),
      PRIMARY KEY (section, key)
    );

    CREATE TABLE IF NOT EXISTS skills (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      source TEXT DEFAULT 'curated',
      url TEXT,
      installed INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS automation_templates (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      prompt TEXT NOT NULL,
      schedule TEXT NOT NULL,
      category TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS mcp_servers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      url TEXT NOT NULL,
      status TEXT DEFAULT 'connected',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS git_profiles (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      remote TEXT,
      branch TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS env_profiles (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      vars TEXT DEFAULT '{}',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS worktrees (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      path TEXT NOT NULL,
      status TEXT DEFAULT 'active',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS archived_threads (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      archived_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS composio_connected_accounts (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      toolkit_slug TEXT NOT NULL,
      auth_config_id TEXT,
      status TEXT NOT NULL,
      is_disabled INTEGER DEFAULT 0,
      label TEXT,
      is_default INTEGER DEFAULT 0,
      state_json TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_composio_accounts_user_toolkit
      ON composio_connected_accounts (user_id, toolkit_slug);

    CREATE INDEX IF NOT EXISTS idx_composio_accounts_user_toolkit_default
      ON composio_connected_accounts (user_id, toolkit_slug, is_default);
  `);

  try {
    db.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS memory_fts USING fts5(
        id UNINDEXED,
        title,
        content,
        tags
      );
    `);
    ftsAvailable = true;
  } catch (err) {
    ftsAvailable = false;
  }
}

function seedIntegrationsIfNeeded() {
  const count = db.prepare('SELECT COUNT(*) as count FROM integrations').get();
  if (count.count > 0) return;

  const seed = getSeedIntegrations();
  const insert = db.prepare(`
    INSERT INTO integrations (id, name, category, description, website, icon, connected)
    VALUES (@id, @name, @category, @description, @website, @icon, 0)
  `);
  const transaction = db.transaction((items) => {
    items.forEach(item => insert.run(item));
  });
  transaction(seed);
}

function getSeedSkills() {
  const seedPath = path.join(__dirname, 'data', 'skills.json');
  if (!fs.existsSync(seedPath)) return [];
  return JSON.parse(fs.readFileSync(seedPath, 'utf8'));
}

function getSeedTemplates() {
  const seedPath = path.join(__dirname, 'data', 'automation-templates.json');
  if (!fs.existsSync(seedPath)) return [];
  return JSON.parse(fs.readFileSync(seedPath, 'utf8'));
}

function seedSkillsIfNeeded() {
  const count = db.prepare('SELECT COUNT(*) as count FROM skills').get();
  if (count.count > 0) return;
  const seed = getSeedSkills();
  const insert = db.prepare(`
    INSERT INTO skills (id, name, description, source, url, installed)
    VALUES (@id, @name, @description, @source, @url, @installed)
  `);
  const transaction = db.transaction((items) => {
    items.forEach(item => insert.run(item));
  });
  transaction(seed);
}

function seedTemplatesIfNeeded() {
  const count = db.prepare('SELECT COUNT(*) as count FROM automation_templates').get();
  if (count.count > 0) return;
  const seed = getSeedTemplates();
  const insert = db.prepare(`
    INSERT INTO automation_templates (id, title, prompt, schedule, category)
    VALUES (@id, @title, @prompt, @schedule, @category)
  `);
  const transaction = db.transaction((items) => {
    items.forEach(item => insert.run(item));
  });
  transaction(seed);
}

function syncMemoryFts() {
  if (!ftsAvailable) return;
  const rows = db.prepare('SELECT id, title, content, tags FROM memory').all();
  const insert = db.prepare('INSERT INTO memory_fts (id, title, content, tags) VALUES (?, ?, ?, ?)');
  const clear = db.prepare('DELETE FROM memory_fts');
  const transaction = db.transaction(() => {
    clear.run();
    rows.forEach(row => insert.run(row.id, row.title, row.content, row.tags));
  });
  transaction();
}

export function initDb() {
  if (db) return db;
  const dbPath = resolveDbPath();
  ensureDir(dbPath);
  db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  createTables();
  seedIntegrationsIfNeeded();
  seedSkillsIfNeeded();
  seedTemplatesIfNeeded();
  syncMemoryFts();
  return db;
}

export function getSettings(section) {
  initDb();
  const rows = db.prepare('SELECT key, value FROM settings WHERE section = ?').all(section);
  const result = {};
  rows.forEach(row => {
    try {
      result[row.key] = JSON.parse(row.value);
    } catch (err) {
      result[row.key] = row.value;
    }
  });
  return result;
}

export function updateSettings(section, updates) {
  initDb();
  const entries = Object.entries(updates || {});
  const stmt = db.prepare(`
    INSERT INTO settings (section, key, value)
    VALUES (?, ?, ?)
    ON CONFLICT(section, key) DO UPDATE SET value = excluded.value, updated_at = datetime('now')
  `);
  const tx = db.transaction(() => {
    entries.forEach(([key, value]) => {
      stmt.run(section, key, JSON.stringify(value));
    });
  });
  tx();
  return getSettings(section);
}

export function listSkills() {
  initDb();
  return db.prepare('SELECT * FROM skills ORDER BY name').all();
}

export function createSkill(skill) {
  initDb();
  db.prepare(`
    INSERT INTO skills (id, name, description, source, url, installed)
    VALUES (@id, @name, @description, @source, @url, @installed)
  `).run(skill);
  return db.prepare('SELECT * FROM skills WHERE id = ?').get(skill.id);
}

export function updateSkill(id, updates) {
  initDb();
  const current = db.prepare('SELECT * FROM skills WHERE id = ?').get(id);
  if (!current) return null;
  const next = { ...current, ...updates };
  db.prepare(`
    UPDATE skills
    SET name = @name,
        description = @description,
        source = @source,
        url = @url,
        installed = @installed,
        updated_at = datetime('now')
    WHERE id = @id
  `).run(next);
  return db.prepare('SELECT * FROM skills WHERE id = ?').get(id);
}

export function deleteSkill(id) {
  initDb();
  db.prepare('DELETE FROM skills WHERE id = ?').run(id);
}

export function listAutomationTemplates() {
  initDb();
  return db.prepare('SELECT * FROM automation_templates ORDER BY title').all();
}

export function listMcpServers() {
  initDb();
  return db.prepare('SELECT * FROM mcp_servers ORDER BY created_at DESC').all();
}

export function createMcpServer(entry) {
  initDb();
  db.prepare(`
    INSERT INTO mcp_servers (id, name, url, status)
    VALUES (@id, @name, @url, @status)
  `).run(entry);
  return db.prepare('SELECT * FROM mcp_servers WHERE id = ?').get(entry.id);
}

export function updateMcpServer(id, updates) {
  initDb();
  const current = db.prepare('SELECT * FROM mcp_servers WHERE id = ?').get(id);
  if (!current) return null;
  const next = { ...current, ...updates };
  db.prepare(`
    UPDATE mcp_servers
    SET name = @name,
        url = @url,
        status = @status,
        updated_at = datetime('now')
    WHERE id = @id
  `).run(next);
  return db.prepare('SELECT * FROM mcp_servers WHERE id = ?').get(id);
}

export function deleteMcpServer(id) {
  initDb();
  db.prepare('DELETE FROM mcp_servers WHERE id = ?').run(id);
}

export function listGitProfiles() {
  initDb();
  return db.prepare('SELECT * FROM git_profiles ORDER BY created_at DESC').all();
}

export function createGitProfile(entry) {
  initDb();
  db.prepare(`
    INSERT INTO git_profiles (id, name, remote, branch)
    VALUES (@id, @name, @remote, @branch)
  `).run(entry);
  return db.prepare('SELECT * FROM git_profiles WHERE id = ?').get(entry.id);
}

export function updateGitProfile(id, updates) {
  initDb();
  const current = db.prepare('SELECT * FROM git_profiles WHERE id = ?').get(id);
  if (!current) return null;
  const next = { ...current, ...updates };
  db.prepare(`
    UPDATE git_profiles
    SET name = @name,
        remote = @remote,
        branch = @branch,
        updated_at = datetime('now')
    WHERE id = @id
  `).run(next);
  return db.prepare('SELECT * FROM git_profiles WHERE id = ?').get(id);
}

export function deleteGitProfile(id) {
  initDb();
  db.prepare('DELETE FROM git_profiles WHERE id = ?').run(id);
}

export function listEnvProfiles() {
  initDb();
  return db.prepare('SELECT * FROM env_profiles ORDER BY created_at DESC').all();
}

export function createEnvProfile(entry) {
  initDb();
  db.prepare(`
    INSERT INTO env_profiles (id, name, vars)
    VALUES (@id, @name, @vars)
  `).run(entry);
  return db.prepare('SELECT * FROM env_profiles WHERE id = ?').get(entry.id);
}

export function updateEnvProfile(id, updates) {
  initDb();
  const current = db.prepare('SELECT * FROM env_profiles WHERE id = ?').get(id);
  if (!current) return null;
  const next = { ...current, ...updates };
  db.prepare(`
    UPDATE env_profiles
    SET name = @name,
        vars = @vars,
        updated_at = datetime('now')
    WHERE id = @id
  `).run(next);
  return db.prepare('SELECT * FROM env_profiles WHERE id = ?').get(id);
}

export function deleteEnvProfile(id) {
  initDb();
  db.prepare('DELETE FROM env_profiles WHERE id = ?').run(id);
}

export function listWorktrees() {
  initDb();
  return db.prepare('SELECT * FROM worktrees ORDER BY created_at DESC').all();
}

export function createWorktree(entry) {
  initDb();
  db.prepare(`
    INSERT INTO worktrees (id, name, path, status)
    VALUES (@id, @name, @path, @status)
  `).run(entry);
  return db.prepare('SELECT * FROM worktrees WHERE id = ?').get(entry.id);
}

export function updateWorktree(id, updates) {
  initDb();
  const current = db.prepare('SELECT * FROM worktrees WHERE id = ?').get(id);
  if (!current) return null;
  const next = { ...current, ...updates };
  db.prepare(`
    UPDATE worktrees
    SET name = @name,
        path = @path,
        status = @status,
        updated_at = datetime('now')
    WHERE id = @id
  `).run(next);
  return db.prepare('SELECT * FROM worktrees WHERE id = ?').get(id);
}

export function deleteWorktree(id) {
  initDb();
  db.prepare('DELETE FROM worktrees WHERE id = ?').run(id);
}

export function listArchivedThreads() {
  initDb();
  return db.prepare('SELECT * FROM archived_threads ORDER BY archived_at DESC').all();
}

export function addArchivedThread(entry) {
  initDb();
  db.prepare(`
    INSERT INTO archived_threads (id, title)
    VALUES (@id, @title)
  `).run(entry);
  return db.prepare('SELECT * FROM archived_threads WHERE id = ?').get(entry.id);
}

export function deleteArchivedThread(id) {
  initDb();
  db.prepare('DELETE FROM archived_threads WHERE id = ?').run(id);
}

export function listIntegrations() {
  initDb();
  return db.prepare('SELECT * FROM integrations ORDER BY name').all();
}

export function upsertIntegration(entry) {
  initDb();
  const existing = db.prepare('SELECT * FROM integrations WHERE id = ?').get(entry.id);
  if (existing) {
    db.prepare(`
      UPDATE integrations
      SET name = @name,
          category = @category,
          description = @description,
          website = @website,
          icon = @icon,
          updated_at = datetime('now')
      WHERE id = @id
    `).run({
      ...entry,
      website: entry.website || existing.website,
      icon: entry.icon || existing.icon
    });
    return db.prepare('SELECT * FROM integrations WHERE id = ?').get(entry.id);
  }

  db.prepare(`
    INSERT INTO integrations (id, name, category, description, website, icon, connected)
    VALUES (@id, @name, @category, @description, @website, @icon, 0)
  `).run(entry);
  return db.prepare('SELECT * FROM integrations WHERE id = ?').get(entry.id);
}

export function updateIntegration(id, connected) {
  initDb();
  db.prepare(`
    UPDATE integrations
    SET connected = ?, updated_at = datetime('now')
    WHERE id = ?
  `).run(connected ? 1 : 0, id);
  return db.prepare('SELECT * FROM integrations WHERE id = ?').get(id);
}

export function listAutomations() {
  initDb();
  return db.prepare('SELECT * FROM automations ORDER BY created_at DESC').all();
}

export function getAutomation(id) {
  initDb();
  return db.prepare('SELECT * FROM automations WHERE id = ?').get(id);
}

export function createAutomation(automation) {
  initDb();
  db.prepare(`
    INSERT INTO automations (id, name, prompt, schedule, provider, model, enabled)
    VALUES (@id, @name, @prompt, @schedule, @provider, @model, @enabled)
  `).run(automation);
  return getAutomation(automation.id);
}

export function updateAutomation(id, updates) {
  initDb();
  const current = getAutomation(id);
  if (!current) return null;
  const next = { ...current, ...updates };
  db.prepare(`
    UPDATE automations
    SET name = @name,
        prompt = @prompt,
        schedule = @schedule,
        provider = @provider,
        model = @model,
        enabled = @enabled,
        updated_at = datetime('now')
    WHERE id = @id
  `).run(next);
  return getAutomation(id);
}

export function addAutomationRun({ automationId, status, output }) {
  initDb();
  db.prepare(`
    INSERT INTO automation_runs (automation_id, status, output)
    VALUES (?, ?, ?)
  `).run(automationId, status, output || null);
}

export function listAutomationRuns(automationId, { limit = 50, offset = 0 } = {}) {
  initDb();
  if (!automationId) return [];
  const safeLimit = Math.min(Math.max(Number(limit) || 50, 1), 200);
  const safeOffset = Math.max(Number(offset) || 0, 0);
  return db.prepare(`
    SELECT *
    FROM automation_runs
    WHERE automation_id = ?
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `).all(automationId, safeLimit, safeOffset);
}

export function listMemory({ search = '' } = {}) {
  initDb();
  if (search) {
    if (ftsAvailable) {
      return db.prepare(`
        SELECT memory.*
        FROM memory
        JOIN memory_fts ON memory.id = memory_fts.id
        WHERE memory_fts MATCH ?
        ORDER BY memory.updated_at DESC
      `).all(search);
    }
    return db.prepare(`
      SELECT *
      FROM memory
      WHERE title LIKE ? OR content LIKE ? OR tags LIKE ?
      ORDER BY updated_at DESC
    `).all(`%${search}%`, `%${search}%`, `%${search}%`);
  }
  return db.prepare('SELECT * FROM memory ORDER BY updated_at DESC').all();
}

export function listPinnedMemory({ limit = 10 } = {}) {
  initDb();
  const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 50);
  return db.prepare(`
    SELECT *
    FROM memory
    WHERE pinned = 1
    ORDER BY updated_at DESC
    LIMIT ?
  `).all(safeLimit);
}

export function createMemory(entry) {
  initDb();
  db.prepare(`
    INSERT INTO memory (id, title, content, tags, pinned)
    VALUES (@id, @title, @content, @tags, @pinned)
  `).run(entry);
  syncMemoryFts();
  return getMemory(entry.id);
}

export function updateMemory(id, updates) {
  initDb();
  const current = getMemory(id);
  if (!current) return null;
  const next = { ...current, ...updates };
  db.prepare(`
    UPDATE memory
    SET title = @title,
        content = @content,
        tags = @tags,
        pinned = @pinned,
        updated_at = datetime('now')
    WHERE id = @id
  `).run(next);
  syncMemoryFts();
  return getMemory(id);
}

export function deleteMemory(id) {
  initDb();
  db.prepare('DELETE FROM memory WHERE id = ?').run(id);
  if (ftsAvailable) {
    db.prepare('DELETE FROM memory_fts WHERE id = ?').run(id);
  }
}

export function getMemory(id) {
  initDb();
  return db.prepare('SELECT * FROM memory WHERE id = ?').get(id);
}

export function listActivity({ limit = 50 } = {}) {
  initDb();
  return db.prepare(`
    SELECT *
    FROM activity_events
    ORDER BY created_at DESC
    LIMIT ?
  `).all(limit);
}

export function addActivity({ type, title, detail }) {
  initDb();
  db.prepare(`
    INSERT INTO activity_events (type, title, detail)
    VALUES (?, ?, ?)
  `).run(type, title, detail || null);
}

export function getComposioAccountById(id) {
  initDb();
  if (!id) return null;
  return db.prepare('SELECT * FROM composio_connected_accounts WHERE id = ?').get(id);
}

export function upsertComposioAccount(remoteAccount, { userId }) {
  initDb();
  if (!remoteAccount?.id) return null;
  const toolkitSlug = remoteAccount?.toolkit?.slug || remoteAccount?.toolkitSlug || null;
  if (!toolkitSlug) return null;

  const existing = db.prepare('SELECT * FROM composio_connected_accounts WHERE id = ?').get(remoteAccount.id);
  const state = remoteAccount?.state ?? remoteAccount?.data ?? remoteAccount?.params ?? null;
  const stateJson = state ? JSON.stringify(state) : null;

  const payload = {
    id: remoteAccount.id,
    user_id: userId,
    toolkit_slug: toolkitSlug,
    auth_config_id: remoteAccount?.authConfig?.id || remoteAccount?.authConfigId || null,
    status: remoteAccount?.status || 'INACTIVE',
    is_disabled: remoteAccount?.isDisabled ? 1 : 0,
    state_json: stateJson,
    created_at: remoteAccount?.createdAt || existing?.created_at || null,
    updated_at: remoteAccount?.updatedAt || null
  };

  if (existing) {
    db.prepare(`
      UPDATE composio_connected_accounts
      SET user_id = @user_id,
          toolkit_slug = @toolkit_slug,
          auth_config_id = @auth_config_id,
          status = @status,
          is_disabled = @is_disabled,
          state_json = @state_json,
          created_at = COALESCE(@created_at, created_at),
          updated_at = COALESCE(@updated_at, datetime('now'))
      WHERE id = @id
    `).run(payload);
  } else {
    db.prepare(`
      INSERT INTO composio_connected_accounts (
        id,
        user_id,
        toolkit_slug,
        auth_config_id,
        status,
        is_disabled,
        label,
        is_default,
        state_json,
        created_at,
        updated_at
      )
      VALUES (
        @id,
        @user_id,
        @toolkit_slug,
        @auth_config_id,
        @status,
        @is_disabled,
        NULL,
        0,
        @state_json,
        COALESCE(@created_at, datetime('now')),
        COALESCE(@updated_at, datetime('now'))
      )
    `).run(payload);
  }

  return getComposioAccountById(remoteAccount.id);
}

export function upsertComposioConnectionRequest({
  id,
  userId,
  toolkitSlug,
  authConfigId = null,
  status = 'INITIATED'
}) {
  initDb();
  if (!id || !userId || !toolkitSlug) return null;
  const existing = getComposioAccountById(id);
  if (existing) return existing;
  db.prepare(`
    INSERT INTO composio_connected_accounts (
      id,
      user_id,
      toolkit_slug,
      auth_config_id,
      status,
      is_disabled,
      label,
      is_default,
      state_json,
      created_at,
      updated_at
    )
    VALUES (
      @id,
      @user_id,
      @toolkit_slug,
      @auth_config_id,
      @status,
      0,
      NULL,
      0,
      NULL,
      datetime('now'),
      datetime('now')
    )
  `).run({
    id,
    user_id: userId,
    toolkit_slug: toolkitSlug,
    auth_config_id: authConfigId,
    status
  });
  return getComposioAccountById(id);
}

export function listComposioAccounts({ userId, toolkitSlug }) {
  initDb();
  if (!userId || !toolkitSlug) return [];
  return db.prepare(`
    SELECT *
    FROM composio_connected_accounts
    WHERE user_id = ? AND toolkit_slug = ?
    ORDER BY is_default DESC, updated_at DESC
  `).all(userId, toolkitSlug);
}

export function updateComposioAccountLocal({ id, label }) {
  initDb();
  if (!id) return null;
  db.prepare(`
    UPDATE composio_connected_accounts
    SET label = ?, updated_at = datetime('now')
    WHERE id = ?
  `).run(label ?? null, id);
  return getComposioAccountById(id);
}

export function deleteComposioAccountLocal({ id }) {
  initDb();
  if (!id) return;
  db.prepare('DELETE FROM composio_connected_accounts WHERE id = ?').run(id);
}

export function setDefaultComposioAccount({ userId, toolkitSlug, accountId }) {
  initDb();
  if (!userId || !toolkitSlug || !accountId) return null;
  const tx = db.transaction(() => {
    db.prepare(`
      UPDATE composio_connected_accounts
      SET is_default = 0
      WHERE user_id = ? AND toolkit_slug = ?
    `).run(userId, toolkitSlug);

    db.prepare(`
      UPDATE composio_connected_accounts
      SET is_default = 1, updated_at = datetime('now')
      WHERE id = ? AND user_id = ? AND toolkit_slug = ?
    `).run(accountId, userId, toolkitSlug);
  });
  tx();
  return getComposioAccountById(accountId);
}

export function getDefaultConnectedAccountsMap({ userId }) {
  initDb();
  if (!userId) return {};
  const rows = db.prepare(`
    SELECT toolkit_slug, id
    FROM composio_connected_accounts
    WHERE user_id = ?
      AND is_default = 1
      AND is_disabled = 0
      AND status = 'ACTIVE'
  `).all(userId);
  const map = {};
  rows.forEach(row => {
    map[row.toolkit_slug] = row.id;
  });
  return map;
}

export function getComposioToolkitStats({ userId }) {
  initDb();
  if (!userId) return new Map();
  const rows = db.prepare(`
    SELECT
      toolkit_slug as toolkitSlug,
      SUM(CASE WHEN status = 'ACTIVE' AND is_disabled = 0 THEN 1 ELSE 0 END) as connectedCount,
      MAX(CASE WHEN is_default = 1 THEN id ELSE NULL END) as defaultAccountId
    FROM composio_connected_accounts
    WHERE user_id = ?
    GROUP BY toolkit_slug
  `).all(userId);
  const map = new Map();
  rows.forEach(row => {
    map.set(row.toolkitSlug, {
      connectedCount: Number(row.connectedCount) || 0,
      defaultAccountId: row.defaultAccountId || null
    });
  });
  return map;
}
