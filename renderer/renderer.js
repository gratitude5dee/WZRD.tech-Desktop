// DOM Elements - Views
const homeView = document.getElementById('homeView');
const chatView = document.getElementById('chatView');

// DOM Elements - Home
const homeForm = document.getElementById('homeForm');
const homeInput = document.getElementById('homeInput');
const homeSendBtn = document.getElementById('homeSendBtn');

// DOM Elements - Chat
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatMessages = document.getElementById('chatMessages');
const chatTitle = document.getElementById('chatTitle');

// DOM Elements - Right Sidebar
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const rightSidebarExpand = document.getElementById('rightSidebarExpand');
const stepsList = document.getElementById('stepsList');
const stepsCount = document.getElementById('stepsCount');
const toolCallsList = document.getElementById('toolCallsList');
const emptySteps = document.getElementById('emptySteps');
const emptyTools = document.getElementById('emptyTools');

// DOM Elements - Left Sidebar (Chat History)
const chatHistoryList = document.getElementById('chatHistoryList');
const leftSidebar = document.getElementById('leftSidebar');
const leftSidebarToggle = document.getElementById('leftSidebarToggle');
const leftSidebarExpand = document.getElementById('leftSidebarExpand');
const chatHistoryTitle = document.querySelector('.chat-history-title');
const navItems = document.querySelectorAll('.nav-item');

// Views
const dashboardView = document.getElementById('dashboardView');
const integrationsView = document.getElementById('integrationsView');
const automationsView = document.getElementById('automationsView');
const memoryView = document.getElementById('memoryView');
const activityView = document.getElementById('activityView');

// Dashboard
const statIntegrations = document.getElementById('statIntegrations');
const statAutomations = document.getElementById('statAutomations');
const statMemories = document.getElementById('statMemories');
const statActivity = document.getElementById('statActivity');
const dashboardActivityList = document.getElementById('dashboardActivityList');
const dashboardMemoryPreview = document.getElementById('dashboardMemoryPreview');
const actionChips = document.querySelectorAll('.action-chip');

// Integrations
const integrationsGrid = document.getElementById('integrationsGrid');
const featuredIntegrationsGrid = document.getElementById('featuredIntegrationsGrid');
const featuredIntegrationsSection = document.getElementById('featuredIntegrationsSection');
const integrationsMissingKey = document.getElementById('integrationsMissingKey');
const openSettingsFromIntegrations = document.getElementById('openSettingsFromIntegrations');
const integrationsRefreshBtn = document.getElementById('integrationsRefreshBtn');
const integrationsSearchInput = document.getElementById('integrationsSearchInput');
const integrationsFilter = document.getElementById('integrationsFilter');
const integrationsCountMeta = document.getElementById('integrationsCountMeta');

const integrationDrawerOverlay = document.getElementById('integrationDrawerOverlay');
const integrationDrawerScrim = document.getElementById('integrationDrawerScrim');
const drawerIntegrationLogo = document.getElementById('drawerIntegrationLogo');
const drawerIntegrationMonogram = document.getElementById('drawerIntegrationMonogram');
const drawerIntegrationName = document.getElementById('drawerIntegrationName');
const drawerIntegrationMeta = document.getElementById('drawerIntegrationMeta');
const drawerIntegrationWebsite = document.getElementById('drawerIntegrationWebsite');
const closeIntegrationDrawer = document.getElementById('closeIntegrationDrawer');
const integrationDrawerTabs = document.getElementById('integrationDrawerTabs');

const integrationTabAccounts = document.getElementById('integrationTabAccounts');
const integrationTabRecipes = document.getElementById('integrationTabRecipes');
const integrationTabPlayground = document.getElementById('integrationTabPlayground');

const addIntegrationAccountBtn = document.getElementById('addIntegrationAccountBtn');
const integrationAccountsStatus = document.getElementById('integrationAccountsStatus');
const integrationAccountsList = document.getElementById('integrationAccountsList');

const integrationRecipesGrid = document.getElementById('integrationRecipesGrid');

const integrationPlaygroundPrompt = document.getElementById('integrationPlaygroundPrompt');
const integrationPlaygroundRunBtn = document.getElementById('integrationPlaygroundRunBtn');
const integrationPlaygroundCopyBtn = document.getElementById('integrationPlaygroundCopyBtn');
const integrationPlaygroundStatus = document.getElementById('integrationPlaygroundStatus');
const integrationPlaygroundOutput = document.getElementById('integrationPlaygroundOutput');

const authConfigSheetOverlay = document.getElementById('authConfigSheetOverlay');
const authConfigSheetScrim = document.getElementById('authConfigSheetScrim');
const authConfigList = document.getElementById('authConfigList');
const authConfigSheetStatus = document.getElementById('authConfigSheetStatus');
const closeAuthConfigSheet = document.getElementById('closeAuthConfigSheet');
const cancelAuthConfigSheet = document.getElementById('cancelAuthConfigSheet');

// Automations
const automationsList = document.getElementById('automationsList');
const automationName = document.getElementById('automationName');
const automationPrompt = document.getElementById('automationPrompt');
const automationSchedule = document.getElementById('automationSchedule');
const automationProvider = document.getElementById('automationProvider');
const automationModel = document.getElementById('automationModel');
const automationEnabled = document.getElementById('automationEnabled');
const automationCreateBtn = document.getElementById('automationCreateBtn');
const automationClearBtn = document.getElementById('automationClearBtn');
const automationStatus = document.getElementById('automationStatus');

// Memory
const memoryList = document.getElementById('memoryList');
const memoryTitle = document.getElementById('memoryTitle');
const memoryContent = document.getElementById('memoryContent');
const memoryTags = document.getElementById('memoryTags');
const memoryPinned = document.getElementById('memoryPinned');
const memoryCreateBtn = document.getElementById('memoryCreateBtn');
const memoryClearBtn = document.getElementById('memoryClearBtn');
const memoryStatus = document.getElementById('memoryStatus');
const memorySearch = document.getElementById('memorySearch');
const memorySearchBtn = document.getElementById('memorySearchBtn');

// Activity
const activityFeed = document.getElementById('activityFeed');
const introOverlay = document.getElementById('introOverlay');
const introOrbImg = document.getElementById('introOrbImg');

// Skills
const skillsView = document.getElementById('skillsView');
const skillsList = document.getElementById('skillsList');
const skillsSearch = document.getElementById('skillsSearch');
const skillsRefreshBtn = document.getElementById('skillsRefreshBtn');
const skillsAddBtn = document.getElementById('skillsAddBtn');
const skillsAddPanel = document.getElementById('skillsAddPanel');
const skillNameInput = document.getElementById('skillNameInput');
const skillUrlInput = document.getElementById('skillUrlInput');
const skillSaveBtn = document.getElementById('skillSaveBtn');
const skillCancelBtn = document.getElementById('skillCancelBtn');
const skillStatus = document.getElementById('skillStatus');

// OpenClawd
const clawdView = document.getElementById('clawdView');
const clawdStartBtn = document.getElementById('clawdStartBtn');
const clawdStopBtn = document.getElementById('clawdStopBtn');
const clawdRestartBtn = document.getElementById('clawdRestartBtn');
const clawdStatusChip = document.getElementById('clawdStatusChip');
const clawdStatusMeta = document.getElementById('clawdStatusMeta');
const clawdStatusMessage = document.getElementById('clawdStatusMessage');
const clawdSaveConfigBtn = document.getElementById('clawdSaveConfigBtn');
const clawdConfigStatus = document.getElementById('clawdConfigStatus');
const clawdLogs = document.getElementById('clawdLogs');
const clawdWhatsappEnabled = document.getElementById('clawdWhatsappEnabled');
const clawdWhatsappAllowedDMs = document.getElementById('clawdWhatsappAllowedDMs');
const clawdWhatsappAllowedGroups = document.getElementById('clawdWhatsappAllowedGroups');
const clawdWhatsappMentionsOnly = document.getElementById('clawdWhatsappMentionsOnly');
const clawdTelegramEnabled = document.getElementById('clawdTelegramEnabled');
const clawdTelegramToken = document.getElementById('clawdTelegramToken');
const clawdSignalEnabled = document.getElementById('clawdSignalEnabled');
const clawdSignalPhone = document.getElementById('clawdSignalPhone');
const clawdSignalCliPath = document.getElementById('clawdSignalCliPath');
const clawdImessageEnabled = document.getElementById('clawdImessageEnabled');
const clawdBrowserEnabled = document.getElementById('clawdBrowserEnabled');
const clawdBrowserMode = document.getElementById('clawdBrowserMode');
const clawdBrowserCdpPort = document.getElementById('clawdBrowserCdpPort');

// Settings
const settingsView = document.getElementById('settingsView');
const settingsNavItems = document.querySelectorAll('.settings-nav-item');
const settingsSections = document.querySelectorAll('.settings-section');
const settingDefaultDestination = document.getElementById('settingDefaultDestination');
const settingThreadDetail = document.getElementById('settingThreadDetail');
const settingPreventSleep = document.getElementById('settingPreventSleep');
const settingCmdEnter = document.getElementById('settingCmdEnter');
const settingFollowUp = document.getElementById('settingFollowUp');
const settingTheme = document.getElementById('settingTheme');
const settingOpaque = document.getElementById('settingOpaque');
const settingPointerCursor = document.getElementById('settingPointerCursor');
const settingSansSize = document.getElementById('settingSansSize');
const settingCodeSize = document.getElementById('settingCodeSize');
const settingApprovalPolicy = document.getElementById('settingApprovalPolicy');
const settingSandboxMode = document.getElementById('settingSandboxMode');
const openConfigBtn = document.getElementById('openConfigBtn');
const openLicenseBtn = document.getElementById('openLicenseBtn');
const openApiKeysBtn = document.getElementById('openApiKeysBtn');
const settingWorkspaceName = document.getElementById('settingWorkspaceName');
const settingTagline = document.getElementById('settingTagline');
const settingGreeting = document.getElementById('settingGreeting');
const settingDefaultProvider = document.getElementById('settingDefaultProvider');
const settingDefaultModel = document.getElementById('settingDefaultModel');
const mcpName = document.getElementById('mcpName');
const mcpUrl = document.getElementById('mcpUrl');
const mcpStatus = document.getElementById('mcpStatus');
const mcpAddBtn = document.getElementById('mcpAddBtn');
const mcpList = document.getElementById('mcpList');
const gitName = document.getElementById('gitName');
const gitRemote = document.getElementById('gitRemote');
const gitBranch = document.getElementById('gitBranch');
const gitAddBtn = document.getElementById('gitAddBtn');
const gitList = document.getElementById('gitList');
const envName = document.getElementById('envName');
const envVars = document.getElementById('envVars');
const envAddBtn = document.getElementById('envAddBtn');
const envList = document.getElementById('envList');
const worktreeName = document.getElementById('worktreeName');
const worktreePath = document.getElementById('worktreePath');
const worktreeStatus = document.getElementById('worktreeStatus');
const worktreeAddBtn = document.getElementById('worktreeAddBtn');
const worktreeList = document.getElementById('worktreeList');
const archivedList = document.getElementById('archivedList');

// License modal
const licenseModal = document.getElementById('licenseModal');
const licenseBackdrop = document.getElementById('licenseBackdrop');
const licenseCloseBtn = document.getElementById('licenseCloseBtn');
const licenseCloseBtnFooter = document.getElementById('licenseCloseBtnFooter');
const licenseContent = document.getElementById('licenseContent');

// Templates
const automationTemplates = document.getElementById('automationTemplates');

// Branding personalization
const heroTagline = document.querySelector('.tagline');
const heroSubtag = document.querySelector('.subtag');
const introWordmark = document.querySelector('.intro-wordmark');
const wordmarkFallbacks = document.querySelectorAll('.wordmark-fallback');

// Pinned memory toggle
const homePinnedMemoryToggle = document.getElementById('homePinnedMemoryToggle');
const chatPinnedMemoryToggle = document.getElementById('chatPinnedMemoryToggle');

// Threads filter
const threadFilterBtn = document.getElementById('threadFilterBtn');
const threadFilterPopover = document.getElementById('threadFilterPopover');

// Automations header
const newAutomationBtn = document.getElementById('newAutomationBtn');

// Settings back
const settingsBackBtn = document.getElementById('settingsBackBtn');

// Automation history modal
const automationHistoryModal = document.getElementById('automationHistoryModal');
const automationHistoryBackdrop = document.getElementById('automationHistoryBackdrop');
const automationHistoryCloseBtn = document.getElementById('automationHistoryCloseBtn');
const automationHistoryCloseBtnFooter = document.getElementById('automationHistoryCloseBtnFooter');
const automationHistoryTitle = document.getElementById('automationHistoryTitle');
const automationHistoryStatus = document.getElementById('automationHistoryStatus');
const automationRunsList = document.getElementById('automationRunsList');

// DOM Elements - Settings
const settingsBtn = document.getElementById('settingsBtn');
const settingsBtnChat = document.getElementById('settingsBtnChat');
const settingsModal = document.getElementById('settingsModal');
const settingsBackdrop = document.getElementById('settingsBackdrop');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');
const settingsCancelBtn = document.getElementById('settingsCancelBtn');
const settingsSaveBtn = document.getElementById('settingsSaveBtn');
const settingsRestartBtn = document.getElementById('settingsRestartBtn');
const settingsStatus = document.getElementById('settingsStatus');
const anthropicKeyInput = document.getElementById('anthropicKeyInput');
const composioKeyInput = document.getElementById('composioKeyInput');
const opencodeKeyInput = document.getElementById('opencodeKeyInput');

// State
let isFirstMessage = true;
let todos = [];
let toolCalls = [];
let attachedFiles = [];
let selectedProvider = 'claude';
let selectedModel = 'claude-sonnet-4-5-20250514';
let thinkingMode = 'normal'; // 'normal' or 'extended'
let isWaitingForResponse = false;
let pendingMessages = [];
let currentChatCreatedAt = null;

let activeBrowserSession = null; // { url: string, sessionId: string, inlineElement: HTMLElement }
let browserDisplayMode = 'hidden'; // 'inline' | 'sidebar' | 'hidden'

// Chat context toggles (local-only)
let usePinnedMemoryInChat = true;

// Multi-chat state
let allChats = [];
let currentChatId = null;

// Workspace view state
let currentView = 'dashboard';
let integrationsCache = [];
let integrationsComposioMissingKey = false;
let selectedIntegration = null;
let selectedIntegrationAccounts = [];
let selectedIntegrationTab = 'accounts';
let authConfigToolkitSlug = null;
let authWindowId = null;
let automationsCache = [];
let memoryCache = [];
let activityCache = [];
let activityInterval = null;
let skillsCache = [];
let settingsCache = {};
let followUpBehavior = 'queue';
let requireCmdEnter = false;
let threadDetailLevel = 'full';
let defaultDestination = 'dashboard';
let systemThemeMedia = null;
let lastView = 'dashboard';
let threadView = {
  organize: 'chronological',
  sort: 'updated',
  show: 'all'
};

// Activity highlight state
let activityHighlightTs = null;

// OpenClawd state
let clawdConfigCache = null;
let clawdLogsCursor = 0;
let clawdLogInterval = null;

// Model configurations per provider
const providerModels = {
  claude: [
    { value: 'claude-opus-4-5-20250514', label: 'Opus 4.5', desc: 'Most capable for complex work' },
    { value: 'claude-sonnet-4-5-20250514', label: 'Sonnet 4.5', desc: 'Best for everyday tasks', default: true },
    { value: 'claude-haiku-4-5-20250514', label: 'Haiku 4.5', desc: 'Fastest for quick answers' }
  ],
  opencode: [
    // Opencode Zen (Free)
    { value: 'opencode/big-pickle', label: 'Big Pickle', desc: 'Reasoning model', default: true },
    { value: 'opencode/gpt-5-nano', label: 'GPT-5 Nano', desc: 'OpenAI reasoning' },
    { value: 'opencode/glm-4.7-free', label: 'GLM-4.7', desc: 'Zhipu GLM free' },
    { value: 'opencode/grok-code', label: 'Grok Code Fast', desc: 'xAI coding model' },
    { value: 'opencode/minimax-m2.1-free', label: 'MiniMax M2.1', desc: 'MiniMax free' },
    // Anthropic Claude
    { value: 'anthropic/claude-sonnet-4-5-20250929', label: 'Claude Sonnet 4.5', desc: 'Best balance' },
    { value: 'anthropic/claude-opus-4-5-20251101', label: 'Claude Opus 4.5', desc: 'Most capable' },
    { value: 'anthropic/claude-haiku-4-5-20251001', label: 'Claude Haiku 4.5', desc: 'Fastest' }
  ]
};

// Initialize
function init() {
  updateGreeting();
  setupEventListeners();
  setupWordmarkFallback();
  setupIntroAnimation();
  setupNavigation();
  loadThreadViewPrefs();
  loadChatContextPrefs();
  loadAllChats();
  renderChatHistory();
  initializeSettings().then(() => {
    setActiveView(defaultDestination || 'dashboard');
  });
}

function generateId() {
  return 'chat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Save current chat state
function saveState() {
  if (!currentChatId) return;

  if (isWaitingForResponse) {
    console.log('[Save] Skipping save during streaming');
    return;
  }

  const existingChat = allChats.find(c => c.id === currentChatId);
  const chatData = {
    id: currentChatId,
    title: chatTitle.textContent,
    archived: existingChat?.archived || false,
    createdAt: existingChat?.createdAt || currentChatCreatedAt || Date.now(),
    messages: Array.from(chatMessages.children).map(msg => {
      const contentDiv = msg.querySelector('.message-content');
      const rawContent = contentDiv?.dataset.rawContent || contentDiv?.textContent || '';

      // Save complete message structure including tool calls
      return {
        class: msg.className,
        content: rawContent,
        html: contentDiv?.innerHTML || '' // Save rendered HTML to restore tool calls
      };
    }),
    todos,
    toolCalls,
    provider: selectedProvider,
    model: selectedModel,
    updatedAt: Date.now()
  };

  // Update or add chat in allChats
  const index = allChats.findIndex(c => c.id === currentChatId);
  if (index >= 0) {
    allChats[index] = chatData;
  } else {
    allChats.unshift(chatData);
  }

  // Save to localStorage
  localStorage.setItem('allChats', JSON.stringify(allChats));
  localStorage.setItem('currentChatId', currentChatId);
  // Also save current provider/model globally
  localStorage.setItem('selectedProvider', selectedProvider);
  localStorage.setItem('selectedModel', selectedModel);

  renderChatHistory();
}

// Load all chats from localStorage
function loadAllChats() {
  try {
    const saved = localStorage.getItem('allChats');
    allChats = saved ? JSON.parse(saved) : [];
    allChats.forEach(chat => {
      if (chat.archived === undefined) {
        chat.archived = false;
      }
      if (!chat.createdAt) {
        chat.createdAt = chat.updatedAt || Date.now();
      }
    });
    currentChatId = localStorage.getItem('currentChatId');

    // Restore global provider/model settings
    const savedProvider = localStorage.getItem('selectedProvider');
    const savedModel = localStorage.getItem('selectedModel');
    if (savedProvider && providerModels[savedProvider]) {
      selectedProvider = savedProvider;
      updateProviderUI(savedProvider);
    }
    if (savedModel) {
      selectedModel = savedModel;
      // Find the model label to update UI
      const models = providerModels[selectedProvider] || [];
      const modelInfo = models.find(m => m.value === savedModel);
      if (modelInfo) {
        document.querySelectorAll('.model-selector .model-label').forEach(l => {
          l.textContent = modelInfo.label;
        });
      }
    }

    // If there's a current chat, load it
    if (currentChatId) {
      const chat = allChats.find(c => c.id === currentChatId);
      if (chat) {
        if (chat.archived) {
          currentChatId = null;
          localStorage.removeItem('currentChatId');
        } else {
          loadChat(chat);
        }
      } else {
        currentChatId = null;
        localStorage.removeItem('currentChatId');
      }
    }

    const storedLastView = localStorage.getItem('lastView');
    if (storedLastView) {
      lastView = storedLastView;
    }
  } catch (err) {
    console.error('Failed to load chats:', err);
    allChats = [];
  }
}

// Update provider UI across all dropdowns
function updateProviderUI(provider) {
  const providerLabel = provider === 'claude' ? 'Claude' : 'Opencode';
  document.querySelectorAll('.provider-selector .provider-label').forEach(l => {
    l.textContent = providerLabel;
  });
  document.querySelectorAll('.provider-menu .dropdown-item').forEach(item => {
    const isSelected = item.dataset.value === provider;
    item.classList.toggle('selected', isSelected);
    const checkIcon = item.querySelector('.check-icon');
    if (checkIcon) {
      checkIcon.style.display = isSelected ? 'block' : 'none';
    }
  });
  // Update model dropdown for the provider
  updateModelDropdowns(provider);
}

// Load a specific chat
function loadChat(chat) {
  currentChatId = chat.id;
  chatTitle.textContent = chat.title;
  isFirstMessage = false;
  currentChatCreatedAt = chat.createdAt || chat.updatedAt || Date.now();
  todos = chat.todos || [];
  toolCalls = chat.toolCalls || [];

  // Restore provider/model for this chat
  if (chat.provider && providerModels[chat.provider]) {
    selectedProvider = chat.provider;
    updateProviderUI(chat.provider);
  }
  if (chat.model) {
    selectedModel = chat.model;
    const models = providerModels[selectedProvider] || [];
    const modelInfo = models.find(m => m.value === chat.model);
    if (modelInfo) {
      document.querySelectorAll('.model-selector .model-label').forEach(l => {
        l.textContent = modelInfo.label;
      });
      // Update checkmarks in model menu
      document.querySelectorAll('.model-menu .dropdown-item').forEach(item => {
        const isSelected = item.dataset.value === chat.model;
        item.classList.toggle('selected', isSelected);
        const checkIcon = item.querySelector('.check-icon');
        if (checkIcon) {
          checkIcon.style.display = isSelected ? 'block' : 'none';
        }
      });
    }
  }

  // Switch to chat view
  switchToChatView();

  // Restore messages
  chatMessages.innerHTML = '';
  (chat.messages || []).forEach(msgData => {
    const messageDiv = document.createElement('div');
    messageDiv.className = msgData.class;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.dataset.rawContent = msgData.content;

    if (msgData.class.includes('user')) {
      contentDiv.textContent = msgData.content;
    } else if (msgData.class.includes('assistant')) {
      // Restore complete HTML structure including tool calls
      if (msgData.html) {
        contentDiv.innerHTML = msgData.html;
      } else {
        // Fallback for old messages without HTML
        renderMarkdown(contentDiv);
      }
    }

    messageDiv.appendChild(contentDiv);

    if (msgData.class.includes('assistant')) {
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'message-actions';
      actionsDiv.innerHTML = `
        <button class="action-btn" title="Copy" onclick="copyMessage(this)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      `;
      messageDiv.appendChild(actionsDiv);
    }

    chatMessages.appendChild(messageDiv);
  });

  renderTodos();

  scrollToBottom();
  renderChatHistory();
  localStorage.setItem('currentChatId', currentChatId);
}

// Render chat history sidebar
function renderChatHistory() {
  chatHistoryList.innerHTML = '';

  if (allChats.length === 0) {
    chatHistoryList.innerHTML = '<div class="chat-history-empty">No chats yet</div>';
    return;
  }

  // Sort by updated time (most recent first)
  const sortedChats = [...allChats].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  const visibleChats = sortedChats.filter(chat => !chat.archived);
  const filteredChats = applyThreadFilters(visibleChats);

  if (filteredChats.length === 0) {
    chatHistoryList.innerHTML = '<div class="chat-history-empty">No chats yet</div>';
    return;
  }

  if (threadView.organize === 'project') {
    const grouped = new Map();
    filteredChats.forEach(chat => {
      const group = getProjectGroup(chat.title || '');
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group).push(chat);
    });

    Array.from(grouped.keys()).sort().forEach(group => {
      const header = document.createElement('div');
      header.className = 'chat-group-title';
      header.textContent = group;
      chatHistoryList.appendChild(header);

      grouped.get(group).forEach(chat => {
        chatHistoryList.appendChild(renderChatItem(chat));
      });
    });
  } else {
    filteredChats.forEach(chat => {
      chatHistoryList.appendChild(renderChatItem(chat));
    });
  }
}

function applyThreadFilters(chats) {
  const now = Date.now();
  let result = [...chats];

  if (threadView.show === 'relevant') {
    const cutoff = now - 24 * 60 * 60 * 1000;
    result = result.filter(chat => (chat.updatedAt || 0) >= cutoff);
  }

  const sortKey = threadView.sort === 'created' ? 'createdAt' : 'updatedAt';
  result.sort((a, b) => (b[sortKey] || 0) - (a[sortKey] || 0));
  return result;
}

function getProjectGroup(title) {
  if (!title) return 'General';
  const separators = [':', ' - ', '/'];
  let cut = -1;
  separators.forEach(sep => {
    const idx = title.indexOf(sep);
    if (idx > 0 && (cut === -1 || idx < cut)) {
      cut = idx;
    }
  });
  const group = cut > 0 ? title.slice(0, cut).trim() : '';
  return group || 'General';
}

function loadThreadViewPrefs() {
  threadView.organize = localStorage.getItem('threadView.organize') || 'chronological';
  threadView.sort = localStorage.getItem('threadView.sort') || 'updated';
  threadView.show = localStorage.getItem('threadView.show') || 'all';
  applyThreadFilterUI();
}

function saveThreadViewPrefs() {
  localStorage.setItem('threadView.organize', threadView.organize);
  localStorage.setItem('threadView.sort', threadView.sort);
  localStorage.setItem('threadView.show', threadView.show);
}

function applyThreadFilterUI() {
  if (!threadFilterPopover) return;
  threadFilterPopover.querySelectorAll('.filter-option').forEach(btn => {
    const group = btn.dataset.filterGroup;
    const value = btn.dataset.filterValue;
    btn.classList.toggle('active', threadView[group] === value);
  });
  if (threadFilterBtn) {
    const isDefault = threadView.organize === 'chronological' &&
      threadView.sort === 'updated' &&
      threadView.show === 'all';
    threadFilterBtn.classList.toggle('active', !isDefault);
  }
}

function loadChatContextPrefs() {
  const saved = localStorage.getItem('chat.usePinnedMemory');
  if (saved === null) {
    usePinnedMemoryInChat = true;
  } else {
    usePinnedMemoryInChat = saved === 'true';
  }
  updatePinnedMemoryToggleUI();
}

function updatePinnedMemoryToggleUI() {
  [homePinnedMemoryToggle, chatPinnedMemoryToggle].forEach(btn => {
    if (!btn) return;
    btn.classList.toggle('active', usePinnedMemoryInChat);
    btn.classList.toggle('inactive', !usePinnedMemoryInChat);
    btn.setAttribute('aria-pressed', usePinnedMemoryInChat ? 'true' : 'false');
  });
}

function renderChatItem(chat) {
    const item = document.createElement('div');
    item.className = 'chat-history-item' + (chat.id === currentChatId ? ' active' : '');
    item.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <span class="chat-title">${escapeHtml(chat.title || 'New chat')}</span>
      <button class="archive-chat-btn" onclick="archiveChat('${chat.id}', event)" title="Archive">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 8v13H3V8"></path>
          <path d="M1 3h22v5H1z"></path>
          <path d="M10 12h4"></path>
        </svg>
      </button>
      <button class="delete-chat-btn" onclick="deleteChat('${chat.id}', event)" title="Delete">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    item.onclick = (e) => {
      if (!e.target.closest('.delete-chat-btn') && !e.target.closest('.archive-chat-btn')) {
        switchToChat(chat.id);
      }
    };
    return item;
}

// Switch to a different chat
function switchToChat(chatId) {
  // Abort any ongoing request when switching chats
  if (isWaitingForResponse) {
    window.electronAPI.abortCurrentRequest();
    isWaitingForResponse = false;
  }

  if (currentChatId) {
    saveState();
  }

  const chat = allChats.find(c => c.id === chatId);
  if (chat) {
    loadChat(chat);
  }

  // Update send button states
  updateSendButton(homeInput, homeSendBtn);
  updateSendButton(messageInput, chatSendBtn);
}

// Delete a chat
window.deleteChat = function(chatId, event) {
  event.stopPropagation();

  allChats = allChats.filter(c => c.id !== chatId);
  localStorage.setItem('allChats', JSON.stringify(allChats));

  if (currentChatId === chatId) {
    // If deleting current chat, go to home or load another chat
    if (allChats.length > 0) {
      loadChat(allChats[0]);
    } else {
      currentChatId = null;
      localStorage.removeItem('currentChatId');
      isFirstMessage = true;
      if (currentView === 'chat') {
        showChatWorkspace();
      }
    }
  }

  renderChatHistory();
}

window.archiveChat = async function(chatId, event) {
  event.stopPropagation();

  const chat = allChats.find(c => c.id === chatId);
  if (!chat || chat.archived) return;

  chat.archived = true;
  localStorage.setItem('allChats', JSON.stringify(allChats));

  if (currentChatId === chatId) {
    currentChatId = null;
    localStorage.removeItem('currentChatId');
    isFirstMessage = true;
    showChatWorkspace();
  }

  try {
    if (window.electronAPI?.createArchivedThread) {
      await window.electronAPI.createArchivedThread({
        id: chat.id,
        title: chat.title || 'New chat'
      });
    }
  } catch (err) {
    console.error('[ARCHIVE] Failed to archive thread:', err);
  }

  renderChatHistory();
  loadArchivedThreadsList();
}

// Update greeting based on time of day
function updateGreeting() {
  // Greeting is now static, no need to update
}

// Setup all event listeners
function setupEventListeners() {
  // Home form
  homeForm.addEventListener('submit', handleSendMessage);
  homeInput.addEventListener('input', () => {
    updateSendButton(homeInput, homeSendBtn);
    autoResizeTextarea(homeInput);
  });
  homeInput.addEventListener('keydown', (e) => handleKeyPress(e, homeForm));

  // Chat form
  chatForm.addEventListener('submit', handleSendMessage);
  messageInput.addEventListener('input', () => {
    updateSendButton(messageInput, chatSendBtn);
    autoResizeTextarea(messageInput);
  });
  messageInput.addEventListener('keydown', (e) => handleKeyPress(e, chatForm));

  // Right sidebar toggle
  sidebarToggle.addEventListener('click', toggleSidebar);
  rightSidebarExpand.addEventListener('click', toggleSidebar);

  // Left sidebar toggle (chat history)
  leftSidebarToggle.addEventListener('click', toggleLeftSidebar);
  leftSidebarExpand.addEventListener('click', toggleLeftSidebar);

  // Settings modal
  [settingsBtn, settingsBtnChat].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', openSettings);
  });
  if (settingsCloseBtn) settingsCloseBtn.addEventListener('click', closeSettings);
  if (settingsCancelBtn) settingsCancelBtn.addEventListener('click', closeSettings);
  if (settingsBackdrop) settingsBackdrop.addEventListener('click', closeSettings);
  if (settingsSaveBtn) settingsSaveBtn.addEventListener('click', saveSettingsFromUI);
  if (settingsRestartBtn) settingsRestartBtn.addEventListener('click', restartBackendFromUI);

  // Automations
  if (automationCreateBtn) automationCreateBtn.addEventListener('click', handleCreateAutomation);
  if (automationClearBtn) automationClearBtn.addEventListener('click', clearAutomationForm);

  // Memory
  if (memoryCreateBtn) memoryCreateBtn.addEventListener('click', handleCreateMemory);
  if (memoryClearBtn) memoryClearBtn.addEventListener('click', clearMemoryForm);
  if (memorySearchBtn) memorySearchBtn.addEventListener('click', () => loadMemory(true));
  if (memorySearch) {
    memorySearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        loadMemory(true);
      }
    });
  }

  // Skills
  if (skillsRefreshBtn) skillsRefreshBtn.addEventListener('click', loadSkills);
  if (skillsAddBtn) skillsAddBtn.addEventListener('click', () => toggleSkillsAddPanel(true));
  if (skillCancelBtn) skillCancelBtn.addEventListener('click', () => toggleSkillsAddPanel(false));
  if (skillSaveBtn) skillSaveBtn.addEventListener('click', handleAddSkill);
  if (skillsSearch) {
    skillsSearch.addEventListener('input', () => renderSkills());
  }

  // Integrations v2
  if (integrationsRefreshBtn) integrationsRefreshBtn.addEventListener('click', () => loadIntegrations(true));
  if (openSettingsFromIntegrations) openSettingsFromIntegrations.addEventListener('click', () => setActiveView('settings'));
  if (integrationsSearchInput) {
    integrationsSearchInput.addEventListener('input', () => renderIntegrations());
  }
  if (integrationsFilter) {
    integrationsFilter.querySelectorAll('.segmented-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        integrationsFilter.querySelectorAll('.segmented-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderIntegrations();
      });
    });
  }

  if (closeIntegrationDrawer) closeIntegrationDrawer.addEventListener('click', closeIntegrationDetails);
  if (integrationDrawerScrim) integrationDrawerScrim.addEventListener('click', closeIntegrationDetails);
  if (integrationDrawerTabs) {
    integrationDrawerTabs.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setIntegrationDrawerTab(btn.dataset.tab || 'accounts');
      });
    });
  }

  if (addIntegrationAccountBtn) addIntegrationAccountBtn.addEventListener('click', openAuthConfigSheet);

  if (integrationPlaygroundRunBtn) integrationPlaygroundRunBtn.addEventListener('click', runIntegrationPlayground);
  if (integrationPlaygroundCopyBtn) {
    integrationPlaygroundCopyBtn.addEventListener('click', async () => {
      const text = integrationPlaygroundOutput?.textContent || '';
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        setIntegrationPlaygroundStatus('Copied output.', 'success');
        setTimeout(() => setIntegrationPlaygroundStatus(''), 1200);
      } catch (_err) {
        setIntegrationPlaygroundStatus('Copy failed.', 'error');
      }
    });
  }

  if (closeAuthConfigSheet) closeAuthConfigSheet.addEventListener('click', closeAuthConfigSheetOverlay);
  if (cancelAuthConfigSheet) cancelAuthConfigSheet.addEventListener('click', closeAuthConfigSheetOverlay);
  if (authConfigSheetScrim) authConfigSheetScrim.addEventListener('click', closeAuthConfigSheetOverlay);

  // OpenClawd
  if (clawdStartBtn) clawdStartBtn.addEventListener('click', handleClawdStart);
  if (clawdStopBtn) clawdStopBtn.addEventListener('click', handleClawdStop);
  if (clawdRestartBtn) clawdRestartBtn.addEventListener('click', handleClawdRestart);
  if (clawdSaveConfigBtn) clawdSaveConfigBtn.addEventListener('click', handleClawdSaveConfig);

  // Settings view navigation
  settingsNavItems.forEach(btn => {
    btn.addEventListener('click', () => {
      selectSettingsSection(btn.dataset.section);
    });
  });

  // Settings view controls
  setupSettingsControlListeners();

  // License modal
  if (openLicenseBtn) openLicenseBtn.addEventListener('click', openLicenseModal);
  if (licenseCloseBtn) licenseCloseBtn.addEventListener('click', closeLicenseModal);
  if (licenseCloseBtnFooter) licenseCloseBtnFooter.addEventListener('click', closeLicenseModal);
  if (licenseBackdrop) licenseBackdrop.addEventListener('click', closeLicenseModal);

  // Automation history modal
  if (automationHistoryCloseBtn) automationHistoryCloseBtn.addEventListener('click', closeAutomationHistory);
  if (automationHistoryCloseBtnFooter) automationHistoryCloseBtnFooter.addEventListener('click', closeAutomationHistory);
  if (automationHistoryBackdrop) automationHistoryBackdrop.addEventListener('click', closeAutomationHistory);

  // Open config + API keys
  if (openConfigBtn) openConfigBtn.addEventListener('click', handleOpenConfigFile);
  if (openApiKeysBtn) openApiKeysBtn.addEventListener('click', openSettings);

  // Settings list CRUD
  if (mcpAddBtn) mcpAddBtn.addEventListener('click', handleAddMcpServer);
  if (gitAddBtn) gitAddBtn.addEventListener('click', handleAddGitProfile);
  if (envAddBtn) envAddBtn.addEventListener('click', handleAddEnvironment);
  if (worktreeAddBtn) worktreeAddBtn.addEventListener('click', handleAddWorktree);

  // Threads filter
  if (threadFilterBtn && threadFilterPopover) {
    threadFilterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      threadFilterPopover.classList.toggle('hidden');
    });
    threadFilterPopover.querySelectorAll('.filter-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.filterGroup;
        const value = btn.dataset.filterValue;
        threadView[group] = value;
        saveThreadViewPrefs();
        applyThreadFilterUI();
        renderChatHistory();
      });
    });
  }

  if (newAutomationBtn) {
    newAutomationBtn.addEventListener('click', () => {
      setActiveView('automations');
      if (automationName) {
        automationName.focus();
        automationName.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  if (settingsBackBtn) {
    settingsBackBtn.addEventListener('click', () => {
      setActiveView(lastView || 'dashboard');
    });
  }

  // File attachment buttons
  const homeAttachBtn = document.getElementById('homeAttachBtn');
  const chatAttachBtn = document.getElementById('chatAttachBtn');
  const homeFileInput = document.getElementById('homeFileInput');
  const chatFileInput = document.getElementById('chatFileInput');

  homeAttachBtn.addEventListener('click', () => homeFileInput.click());
  chatAttachBtn.addEventListener('click', () => chatFileInput.click());
  homeFileInput.addEventListener('change', (e) => handleFileSelect(e, 'home'));
  chatFileInput.addEventListener('change', (e) => handleFileSelect(e, 'chat'));

  // Pinned memory toggle buttons
  ;[homePinnedMemoryToggle, chatPinnedMemoryToggle].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      usePinnedMemoryInChat = !usePinnedMemoryInChat;
      localStorage.setItem('chat.usePinnedMemory', usePinnedMemoryInChat ? 'true' : 'false');
      updatePinnedMemoryToggleUI();
    });
  });

  // Setup dropdowns
  setupDropdowns();

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
      document.querySelectorAll('.dropdown-container.open').forEach(d => d.classList.remove('open'));
    }
    if (threadFilterPopover && !e.target.closest('#threadFilterPopover') && !e.target.closest('#threadFilterBtn')) {
      threadFilterPopover.classList.add('hidden');
    }
  });
}

function setupWordmarkFallback() {
  const heroImg = document.getElementById('wordmarkHero');
  const heroFallback = document.getElementById('wordmarkHeroFallback');
  const chatImg = document.getElementById('wordmarkChat');
  const chatFallback = document.querySelector('.wordmark-fallback--small');
  const dashImg = document.getElementById('wordmarkDash');
  const dashFallback = dashboardView?.querySelector('.wordmark-fallback--small');

  [
    { img: heroImg, fallback: heroFallback },
    { img: chatImg, fallback: chatFallback },
    { img: dashImg, fallback: dashFallback }
  ].forEach(({ img, fallback }) => {
    if (!img || !fallback) return;
    fallback.style.display = 'none';
    img.addEventListener('error', () => {
      img.style.display = 'none';
      fallback.style.display = 'block';
    });
    if (img.complete && img.naturalWidth === 0) {
      img.style.display = 'none';
      fallback.style.display = 'block';
    }
  });
}

function setupIntroAnimation() {
  if (!introOverlay) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    introOverlay.style.display = 'none';
    return;
  }

  if (introOrbImg) {
    introOrbImg.addEventListener('error', () => {
      introOrbImg.style.display = 'none';
    });
  }

  setTimeout(() => {
    introOverlay.style.display = 'none';
  }, 3200);
}

function setupNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      setActiveView(item.dataset.view);
    });
  });

  actionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const action = chip.dataset.action;
      if (action === 'new-automation') {
        setActiveView('automations');
        automationName?.focus();
      } else if (action === 'add-memory') {
        setActiveView('memory');
        memoryTitle?.focus();
      } else if (action === 'connect-integration') {
        setActiveView('integrations');
      } else if (action === 'run-automation') {
        setActiveView('automations');
      }
    });
  });

  // Integrations refresh/search are handled in setupEventListeners.
}

function hideAllViews() {
  [dashboardView, integrationsView, automationsView, memoryView, activityView, skillsView, clawdView, settingsView].forEach(view => {
    if (view) view.classList.add('hidden');
  });
  homeView.classList.add('hidden');
  chatView.classList.add('hidden');
}

function setActiveView(viewName) {
  if (currentView === 'clawd' && viewName !== 'clawd') {
    stopClawdPolling();
  }
  if (viewName !== 'settings') {
    lastView = viewName;
    localStorage.setItem('lastView', lastView);
  }
  currentView = viewName;
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  hideAllViews();

  if (viewName === 'chat') {
    showChatWorkspace();
    if (chatHistoryList) chatHistoryList.classList.remove('hidden');
    if (chatHistoryTitle) chatHistoryTitle.classList.remove('hidden');
    return;
  }

  if (chatHistoryList) chatHistoryList.classList.add('hidden');
  if (chatHistoryTitle) chatHistoryTitle.classList.add('hidden');

  if (viewName === 'dashboard' && dashboardView) {
    dashboardView.classList.remove('hidden');
    loadDashboardData();
  }
  if (viewName === 'integrations' && integrationsView) {
    integrationsView.classList.remove('hidden');
    loadIntegrations();
  }
  if (viewName === 'automations' && automationsView) {
    automationsView.classList.remove('hidden');
    loadAutomationTemplates();
    loadAutomations();
  }
  if (viewName === 'memory' && memoryView) {
    memoryView.classList.remove('hidden');
    loadMemory();
  }
  if (viewName === 'activity' && activityView) {
    activityView.classList.remove('hidden');
    loadActivity(true);
  }
  if (viewName === 'skills' && skillsView) {
    skillsView.classList.remove('hidden');
    loadSkills();
  }
  if (viewName === 'clawd' && clawdView) {
    clawdView.classList.remove('hidden');
    loadClawdUi();
  }
  if (viewName === 'settings' && settingsView) {
    settingsView.classList.remove('hidden');
    selectSettingsSection('general');
    loadSettingsLists();
  }
}

function showChatWorkspace() {
  if (isFirstMessage || !currentChatId) {
    homeView.classList.remove('hidden');
    chatView.classList.add('hidden');
  } else {
    homeView.classList.add('hidden');
    chatView.classList.remove('hidden');
  }
  if (messageInput) messageInput.focus();
}

function setSettingsStatus(message = '', tone = 'neutral') {
  if (!settingsStatus) return;
  settingsStatus.textContent = message;
  settingsStatus.dataset.tone = tone;
}

function setSkillStatus(message = '', tone = 'neutral') {
  if (!skillStatus) return;
  skillStatus.textContent = message;
  skillStatus.dataset.tone = tone;
}

async function loadSettingsIntoUI() {
  if (!window.electronAPI?.getSettings) return;
  try {
    const settings = await window.electronAPI.getSettings();
    if (anthropicKeyInput) anthropicKeyInput.value = settings.anthropicApiKey || '';
    if (composioKeyInput) composioKeyInput.value = settings.composioApiKey || '';
    if (opencodeKeyInput) opencodeKeyInput.value = settings.opencodeApiKey || '';
    setSettingsStatus('Settings loaded.', 'neutral');
  } catch (err) {
    console.error('[SETTINGS] Failed to load settings:', err);
    setSettingsStatus('Failed to load settings.', 'error');
  }
}

async function saveSettingsFromUI() {
  if (!window.electronAPI?.saveSettings) return;
  const settings = {
    anthropicApiKey: anthropicKeyInput?.value?.trim() || '',
    composioApiKey: composioKeyInput?.value?.trim() || '',
    opencodeApiKey: opencodeKeyInput?.value?.trim() || ''
  };
  try {
    const result = await window.electronAPI.saveSettings(settings);
    if (result?.success) {
      setSettingsStatus('Settings saved.', 'success');
    } else {
      setSettingsStatus('Save failed.', 'error');
    }
  } catch (err) {
    console.error('[SETTINGS] Failed to save settings:', err);
    setSettingsStatus('Save failed.', 'error');
  }
}

async function restartBackendFromUI() {
  if (!window.electronAPI?.restartBackend) return;
  setSettingsStatus('Restarting backend...', 'neutral');
  try {
    const result = await window.electronAPI.restartBackend();
    if (result?.success) {
      setSettingsStatus('Backend restarted.', 'success');
    } else {
      setSettingsStatus(result?.error || 'Restart failed.', 'error');
    }
  } catch (err) {
    console.error('[SETTINGS] Restart failed:', err);
    setSettingsStatus('Restart failed.', 'error');
  }
}

function setAutomationStatus(message = '', tone = 'neutral') {
  if (!automationStatus) return;
  automationStatus.textContent = message;
  automationStatus.dataset.tone = tone;
}

function setMemoryStatus(message = '', tone = 'neutral') {
  if (!memoryStatus) return;
  memoryStatus.textContent = message;
  memoryStatus.dataset.tone = tone;
}

function setIntegrationAccountsStatus(message = '', tone = 'neutral') {
  if (!integrationAccountsStatus) return;
  integrationAccountsStatus.textContent = message;
  integrationAccountsStatus.dataset.tone = tone;
}

function setIntegrationPlaygroundStatus(message = '', tone = 'neutral') {
  if (!integrationPlaygroundStatus) return;
  integrationPlaygroundStatus.textContent = message;
  integrationPlaygroundStatus.dataset.tone = tone;
}

function setAuthConfigSheetStatus(message = '', tone = 'neutral') {
  if (!authConfigSheetStatus) return;
  authConfigSheetStatus.textContent = message;
  authConfigSheetStatus.dataset.tone = tone;
}

async function loadDashboardData() {
  try {
    const [integrationsResponse, automations, memories, activity] = await Promise.all([
      window.electronAPI?.listComposioIntegrations?.() || { ok: true, data: [] },
      window.electronAPI?.listAutomations?.() || [],
      window.electronAPI?.listMemory?.() || [],
      window.electronAPI?.listActivity?.() || []
    ]);

    integrationsCache = integrationsResponse?.ok ? integrationsResponse.data || [] : [];
    automationsCache = automations || [];
    memoryCache = memories || [];
    activityCache = activity || [];

    if (statIntegrations) statIntegrations.textContent = integrationsCache.length;
    if (statAutomations) statAutomations.textContent = automationsCache.length;
    if (statMemories) statMemories.textContent = memoryCache.length;
    if (statActivity) statActivity.textContent = activityCache.length;

    if (dashboardActivityList) {
      dashboardActivityList.innerHTML = '';
      activityCache.slice(0, 4).forEach(item => {
        const div = document.createElement('div');
        div.className = 'activity-item';
        div.innerHTML = `<strong>${item.title}</strong><br><small>${new Date(item.created_at).toLocaleString()}</small>`;
        dashboardActivityList.appendChild(div);
      });
      if (activityCache.length === 0) {
        dashboardActivityList.innerHTML = '<div class="empty-state">No activity yet.</div>';
      }
    }

    if (dashboardMemoryPreview) {
      dashboardMemoryPreview.innerHTML = '';
      const pinned = memoryCache.filter(m => m.pinned);
      if (pinned.length === 0) {
        dashboardMemoryPreview.innerHTML = '<div class="empty-state">No pinned memories yet.</div>';
      } else {
        pinned.slice(0, 2).forEach(mem => {
          const div = document.createElement('div');
          div.className = 'memory-card';
          div.innerHTML = `<strong>${mem.title}</strong><p>${mem.content}</p>`;
          dashboardMemoryPreview.appendChild(div);
        });
      }
    }
  } catch (err) {
    console.error('[DASHBOARD] Failed to load data:', err);
  }
}

async function loadIntegrations(refresh = false) {
  if (!window.electronAPI?.listComposioIntegrations) return;
  try {
    const response = await window.electronAPI.listComposioIntegrations(refresh);
    if (!response?.ok) {
      if (response?.status === 401) {
        integrationsCache = [];
        integrationsComposioMissingKey = true;
        renderIntegrations();
        return;
      }
      integrationsCache = [];
      integrationsComposioMissingKey = false;
      renderIntegrations({ error: response?.data?.error || 'Failed to load integrations.' });
      return;
    }

    integrationsCache = response.data || [];
    integrationsComposioMissingKey = false;
    renderIntegrations();
    loadDashboardData();
  } catch (err) {
    console.error('[INTEGRATIONS] Failed:', err);
    integrationsCache = [];
    integrationsComposioMissingKey = false;
    renderIntegrations({ error: 'Failed to load integrations.' });
  }
}

function getIntegrationsActiveFilter() {
  const active = integrationsFilter?.querySelector('.segmented-btn.active');
  return active?.dataset?.filter || 'all';
}

function canon(str) {
  return String(str || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

const FEATURED_CANONICAL = [
  'gmail',
  'googlecalendar',
  'googledrive',
  'slack',
  'github',
  'notion',
  'linear',
  'jira',
  'figma',
  'hubspot'
];

function getIntegrationCanonicalKey(item) {
  const slugKey = canon(item?.slug || item?.id || '');
  const nameKey = canon(item?.name || '');
  const hit = FEATURED_CANONICAL.find((k) => k === slugKey || k === nameKey);
  return hit || slugKey || nameKey || 'integration';
}

function isFeaturedIntegration(item) {
  return FEATURED_CANONICAL.includes(getIntegrationCanonicalKey(item));
}

function getMonogram(name) {
  const words = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '•';
  const first = words[0][0] || '';
  const second = (words[1]?.[0] || words[0]?.[1] || '') || '';
  return (first + second).toUpperCase();
}

function hashHue(input) {
  const str = String(input || '');
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash % 360;
}

function renderIntegrationCard(item) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'integration-card glass-panel';
  card.setAttribute('aria-label', `Manage ${item.name}`);

  const connectedCount = Number(item.connectedCount) || 0;
  const statusText = connectedCount > 0 ? `Connected (${connectedCount})` : 'Not connected';

  const logoWrap = document.createElement('div');
  logoWrap.className = 'integration-logo-wrap';

  const img = document.createElement('img');
  img.className = 'integration-card-logo';
  img.alt = '';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.referrerPolicy = 'no-referrer';

  const monogram = document.createElement('div');
  monogram.className = 'integration-monogram';
  monogram.textContent = getMonogram(item.name);
  const hue = hashHue(item.id || item.name);
  monogram.style.background = `linear-gradient(135deg, hsla(${hue}, 95%, 60%, 0.22), hsla(${(hue + 48) % 360}, 95%, 55%, 0.16))`;

  const iconUrl = String(item.icon || '').trim();
  if (iconUrl && /^https:\/\//i.test(iconUrl)) {
    img.src = iconUrl;
    img.addEventListener('error', () => {
      img.style.display = 'none';
      monogram.classList.remove('hidden');
    });
    logoWrap.appendChild(img);
    monogram.classList.add('hidden');
    logoWrap.appendChild(monogram);
  } else {
    logoWrap.appendChild(monogram);
  }

  const content = document.createElement('div');
  content.className = 'integration-card-body';

  const title = document.createElement('div');
  title.className = 'integration-title';
  title.textContent = item.name;

  const meta = document.createElement('div');
  meta.className = 'integration-meta';
  meta.textContent = item.category || 'General';

  const desc = document.createElement('div');
  desc.className = 'integration-desc';
  desc.textContent = item.description || 'No description provided.';

  const footer = document.createElement('div');
  footer.className = 'integration-actions';

  const chip = document.createElement('span');
  chip.className = `integration-chip ${connectedCount > 0 ? 'chip-good' : 'chip-muted'}`;
  chip.textContent = statusText;

  const cta = document.createElement('span');
  cta.className = 'integration-cta';
  cta.textContent = 'Manage';

  footer.appendChild(chip);
  footer.appendChild(cta);

  content.appendChild(title);
  content.appendChild(meta);
  content.appendChild(desc);
  content.appendChild(footer);

  card.appendChild(logoWrap);
  card.appendChild(content);

  card.addEventListener('click', () => openIntegrationDetails(item));
  return card;
}

function renderIntegrations({ error = null } = {}) {
  if (!integrationsGrid) return;

  // Missing key state
  if (integrationsMissingKey) {
    integrationsMissingKey.classList.toggle('hidden', !integrationsComposioMissingKey);
  }
  const showData = !integrationsComposioMissingKey;

  if (featuredIntegrationsSection) featuredIntegrationsSection.classList.toggle('hidden', !showData);
  if (integrationsGrid) integrationsGrid.classList.toggle('hidden', !showData);
  if (featuredIntegrationsGrid) featuredIntegrationsGrid.classList.toggle('hidden', !showData);

  if (!showData) {
    if (integrationsGrid) integrationsGrid.innerHTML = '';
    if (featuredIntegrationsGrid) featuredIntegrationsGrid.innerHTML = '';
    if (integrationsCountMeta) integrationsCountMeta.textContent = '';
    return;
  }

  const query = String(integrationsSearchInput?.value || '').trim().toLowerCase();
  const filter = getIntegrationsActiveFilter();

  const list = Array.isArray(integrationsCache) ? integrationsCache.slice() : [];

  const matchesQuery = (item) => {
    if (!query) return true;
    const hay = `${item?.name || ''} ${item?.category || ''} ${item?.description || ''} ${item?.id || ''}`.toLowerCase();
    return hay.includes(query);
  };

  const connectedOnly = (item) => (Number(item?.connectedCount) || 0) > 0;

  // Featured section
  if (featuredIntegrationsGrid) {
    featuredIntegrationsGrid.innerHTML = '';
    const featured = list
      .filter(isFeaturedIntegration)
      .filter(matchesQuery)
      .sort((a, b) => {
        const ak = getIntegrationCanonicalKey(a);
        const bk = getIntegrationCanonicalKey(b);
        const ai = FEATURED_CANONICAL.indexOf(ak);
        const bi = FEATURED_CANONICAL.indexOf(bk);
        if (ai !== bi) return ai - bi;
        return String(a.name).localeCompare(String(b.name));
      });

    if (filter === 'connected') {
      if (featuredIntegrationsSection) featuredIntegrationsSection.classList.add('hidden');
    } else if (filter === 'featured') {
      if (featuredIntegrationsSection) featuredIntegrationsSection.classList.remove('hidden');
    } else {
      if (featuredIntegrationsSection) featuredIntegrationsSection.classList.remove('hidden');
    }

    if (filter !== 'connected') {
      featured.forEach((item) => featuredIntegrationsGrid.appendChild(renderIntegrationCard(item)));
      if (featured.length === 0) {
        featuredIntegrationsGrid.innerHTML = '<div class="empty-state">No featured integrations match your search.</div>';
      }
    }
  }

  // All section
  integrationsGrid.innerHTML = '';
  if (integrationsCountMeta) integrationsCountMeta.textContent = '';

  if (error) {
    integrationsGrid.innerHTML = `<div class="empty-state">${escapeHtml(error)}</div>`;
    return;
  }

  let allList = list.filter(matchesQuery);
  if (filter === 'connected') {
    allList = allList.filter(connectedOnly).sort((a, b) => {
      const ac = Number(a.connectedCount) || 0;
      const bc = Number(b.connectedCount) || 0;
      if (ac !== bc) return bc - ac;
      return String(a.name).localeCompare(String(b.name));
    });
  } else if (filter === 'featured') {
    // Hide the all list; the featured list is the primary surface.
    allList = [];
  } else {
    // Avoid duplicates when showing Featured section.
    allList = allList.filter((i) => !isFeaturedIntegration(i)).sort((a, b) => String(a.name).localeCompare(String(b.name)));
  }

  if (filter === 'featured') {
    integrationsGrid.innerHTML = '';
    if (integrationsCountMeta) integrationsCountMeta.textContent = '';
    return;
  }

  if (integrationsCountMeta) {
    const total = allList.length;
    integrationsCountMeta.textContent = total > 0 ? `${total} shown` : '';
  }

  if (allList.length === 0) {
    integrationsGrid.innerHTML = '<div class="empty-state">No integrations match your filters.</div>';
    return;
  }

  allList.forEach((item) => integrationsGrid.appendChild(renderIntegrationCard(item)));
}

function openIntegrationDetails(item) {
  if (!integrationDrawerOverlay) return;
  selectedIntegration = item;
  selectedIntegrationTab = 'accounts';

  if (drawerIntegrationName) drawerIntegrationName.textContent = item?.name || 'Integration';
  if (drawerIntegrationMeta) {
    const count = Number(item?.connectedCount) || 0;
    drawerIntegrationMeta.textContent = `${item?.category || 'General'} • ${count > 0 ? `Connected (${count})` : 'Not connected'}`;
  }
  if (drawerIntegrationWebsite) {
    const url = String(item?.website || '').trim();
    if (url && /^https:\/\//i.test(url)) {
      drawerIntegrationWebsite.href = url;
      drawerIntegrationWebsite.classList.remove('hidden');
    } else {
      drawerIntegrationWebsite.href = '#';
      drawerIntegrationWebsite.classList.add('hidden');
    }
  }

  const iconUrl = String(item?.icon || '').trim();
  if (drawerIntegrationLogo && drawerIntegrationMonogram) {
    if (iconUrl && /^https:\/\//i.test(iconUrl)) {
      drawerIntegrationLogo.src = iconUrl;
      drawerIntegrationLogo.style.display = '';
      drawerIntegrationLogo.addEventListener(
        'error',
        () => {
          drawerIntegrationLogo.style.display = 'none';
          drawerIntegrationMonogram.classList.remove('hidden');
          drawerIntegrationMonogram.textContent = getMonogram(item?.name);
        },
        { once: true }
      );
      drawerIntegrationMonogram.classList.add('hidden');
      drawerIntegrationMonogram.textContent = getMonogram(item?.name);
    } else {
      drawerIntegrationLogo.style.display = 'none';
      drawerIntegrationMonogram.classList.remove('hidden');
      drawerIntegrationMonogram.textContent = getMonogram(item?.name);
    }
  }

  integrationDrawerOverlay.classList.remove('hidden');
  integrationDrawerOverlay.setAttribute('aria-hidden', 'false');

  setIntegrationDrawerTab('accounts');
  loadIntegrationAccounts();
  renderIntegrationRecipes();
  clearIntegrationPlayground();
}

function closeIntegrationDetails() {
  selectedIntegration = null;
  selectedIntegrationAccounts = [];
  selectedIntegrationTab = 'accounts';
  if (integrationDrawerOverlay) {
    integrationDrawerOverlay.classList.add('hidden');
    integrationDrawerOverlay.setAttribute('aria-hidden', 'true');
  }
  closeAuthConfigSheetOverlay();
}

function setIntegrationDrawerTab(tab) {
  selectedIntegrationTab = tab;
  if (integrationDrawerTabs) {
    integrationDrawerTabs.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
  }
  [integrationTabAccounts, integrationTabRecipes, integrationTabPlayground].forEach((el) => el?.classList.remove('active'));
  if (tab === 'accounts') integrationTabAccounts?.classList.add('active');
  if (tab === 'recipes') integrationTabRecipes?.classList.add('active');
  if (tab === 'playground') integrationTabPlayground?.classList.add('active');
}

async function loadIntegrationAccounts() {
  if (!selectedIntegration?.id) return;
  if (!window.electronAPI?.listComposioAccounts) return;

  setIntegrationAccountsStatus('Loading…', 'neutral');
  if (integrationAccountsList) integrationAccountsList.innerHTML = '';

  const result = await window.electronAPI.listComposioAccounts(selectedIntegration.id);
  if (!result?.ok) {
    if (result?.status === 401) {
      setIntegrationAccountsStatus('COMPOSIO_API_KEY missing. Add it in Settings.', 'error');
      return;
    }
    setIntegrationAccountsStatus(result?.data?.error || 'Failed to load accounts.', 'error');
    return;
  }

  selectedIntegrationAccounts = Array.isArray(result.data) ? result.data : [];
  renderIntegrationAccounts();
  setIntegrationAccountsStatus('', 'neutral');
}

function formatAccountId(id) {
  const s = String(id || '');
  if (s.length <= 14) return s;
  return `${s.slice(0, 6)}…${s.slice(-6)}`;
}

function renderIntegrationAccounts() {
  if (!integrationAccountsList) return;
  const accounts = Array.isArray(selectedIntegrationAccounts) ? selectedIntegrationAccounts : [];
  integrationAccountsList.innerHTML = '';

  if (accounts.length === 0) {
    integrationAccountsList.innerHTML = '<div class="empty-state">No accounts connected yet.</div>';
    return;
  }

  accounts.forEach((acc) => {
    const row = document.createElement('div');
    row.className = 'account-row';

    const left = document.createElement('div');
    left.className = 'account-left';

    const labelWrap = document.createElement('div');
    labelWrap.className = 'account-label-wrap';

    const label = document.createElement('input');
    label.type = 'text';
    label.className = 'account-label';
    label.value = acc.label || '';
    label.placeholder = 'Account label (optional)';

    const hint = document.createElement('div');
    hint.className = 'account-hint';
    hint.textContent = `${acc.status || 'UNKNOWN'} • ${formatAccountId(acc.id)}${acc.is_disabled ? ' • Disabled' : ''}`;

    label.addEventListener('blur', async () => {
      const next = label.value.trim();
      if (next === (acc.label || '')) return;
      await window.electronAPI.updateComposioAccount(acc.id, { label: next });
      await loadIntegrationAccounts();
      await loadIntegrations(false);
    });

    labelWrap.appendChild(label);
    labelWrap.appendChild(hint);

    const defaultWrap = document.createElement('label');
    defaultWrap.className = 'account-default';
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = `default_${selectedIntegration.id}`;
    radio.checked = !!acc.is_default;
    radio.addEventListener('change', async () => {
      if (!radio.checked) return;
      await window.electronAPI.updateComposioAccount(acc.id, { isDefault: true });
      await loadIntegrationAccounts();
      await loadIntegrations(false);
    });
    const defaultText = document.createElement('span');
    defaultText.textContent = 'Default';
    defaultWrap.appendChild(radio);
    defaultWrap.appendChild(defaultText);

    left.appendChild(labelWrap);
    left.appendChild(defaultWrap);

    const actions = document.createElement('div');
    actions.className = 'account-actions';

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'ghost-btn';
    toggleBtn.textContent = acc.is_disabled ? 'Enable' : 'Disable';
    toggleBtn.addEventListener('click', async () => {
      if (acc.is_disabled) {
        await window.electronAPI.enableComposioAccount(acc.id);
      } else {
        await window.electronAPI.disableComposioAccount(acc.id);
      }
      await loadIntegrationAccounts();
      await loadIntegrations(false);
    });

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'danger-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', async () => {
      const ok = confirm('Remove this connected account? This revokes access in Composio.');
      if (!ok) return;
      await window.electronAPI.deleteComposioAccount(acc.id);
      await loadIntegrationAccounts();
      await loadIntegrations(false);
    });

    actions.appendChild(toggleBtn);
    actions.appendChild(removeBtn);

    row.appendChild(left);
    row.appendChild(actions);
    integrationAccountsList.appendChild(row);
  });
}

function openAuthConfigSheet() {
  if (!selectedIntegration?.id) return;
  authConfigToolkitSlug = selectedIntegration.id;
  if (!authConfigSheetOverlay) return;
  authConfigSheetOverlay.classList.remove('hidden');
  authConfigSheetOverlay.setAttribute('aria-hidden', 'false');
  loadAuthConfigs();
}

function closeAuthConfigSheetOverlay() {
  authConfigToolkitSlug = null;
  if (authConfigSheetOverlay) {
    authConfigSheetOverlay.classList.add('hidden');
    authConfigSheetOverlay.setAttribute('aria-hidden', 'true');
  }
  if (authConfigList) authConfigList.innerHTML = '';
  setAuthConfigSheetStatus('', 'neutral');
  if (authWindowId && window.electronAPI?.closeAuthWindow) {
    window.electronAPI.closeAuthWindow(authWindowId).catch(() => {});
  }
  authWindowId = null;
}

async function loadAuthConfigs() {
  if (!authConfigToolkitSlug) return;
  if (!window.electronAPI?.listComposioAuthConfigs) return;

  if (authConfigList) authConfigList.innerHTML = '';
  setAuthConfigSheetStatus('Loading auth methods…', 'neutral');

  const [managed, unmanaged] = await Promise.all([
    window.electronAPI.listComposioAuthConfigs(authConfigToolkitSlug, true),
    window.electronAPI.listComposioAuthConfigs(authConfigToolkitSlug, false)
  ]);

  const all = [];
  if (managed?.ok && Array.isArray(managed.data)) all.push(...managed.data.map((c) => ({ ...c, _managed: true })));
  if (unmanaged?.ok && Array.isArray(unmanaged.data)) all.push(...unmanaged.data.map((c) => ({ ...c, _managed: false })));

  const seen = new Set();
  const deduped = all.filter((c) => {
    if (!c?.id) return false;
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });

  if (deduped.length === 0) {
    setAuthConfigSheetStatus('No enabled auth methods found for this integration.', 'error');
    if (authConfigList) authConfigList.innerHTML = '<div class="empty-state">No auth methods available.</div>';
    return;
  }

  setAuthConfigSheetStatus('', 'neutral');
  renderAuthConfigList(deduped);
}

function renderAuthConfigList(configs) {
  if (!authConfigList) return;
  authConfigList.innerHTML = '';
  configs.forEach((cfg) => {
    const row = document.createElement('div');
    row.className = 'auth-config-row';

    const left = document.createElement('div');
    left.className = 'auth-config-left';

    const title = document.createElement('div');
    title.className = 'auth-config-title';
    title.textContent = cfg.name || 'Auth config';

    const meta = document.createElement('div');
    meta.className = 'auth-config-meta';
    meta.textContent = `${cfg.authScheme || 'Auth'}${cfg._managed ? ' • Composio managed' : ''}`;

    left.appendChild(title);
    left.appendChild(meta);

    const connectBtn = document.createElement('button');
    connectBtn.type = 'button';
    connectBtn.className = 'accent-btn';
    connectBtn.textContent = 'Connect';
    connectBtn.addEventListener('click', () => connectWithAuthConfig(cfg.id));

    row.appendChild(left);
    row.appendChild(connectBtn);
    authConfigList.appendChild(row);
  });
}

async function connectWithAuthConfig(authConfigId) {
  if (!authConfigToolkitSlug) return;
  if (!window.electronAPI?.createComposioConnectLink || !window.electronAPI?.waitForComposioConnection) return;
  if (!window.electronAPI?.openAuthWindow) return;

  setAuthConfigSheetStatus('Creating secure link…', 'neutral');

  const link = await window.electronAPI.createComposioConnectLink({
    toolkitSlug: authConfigToolkitSlug,
    authConfigId
  });

  if (!link?.ok) {
    setAuthConfigSheetStatus(link?.data?.error || 'Failed to create connect link.', 'error');
    return;
  }

  const { connectedAccountId, redirectUrl } = link.data || {};
  if (!connectedAccountId || !redirectUrl) {
    setAuthConfigSheetStatus('Failed to create connect link.', 'error');
    return;
  }

  const win = await window.electronAPI.openAuthWindow(redirectUrl);
  if (!win?.success) {
    setAuthConfigSheetStatus(win?.error || 'Failed to open auth window.', 'error');
    return;
  }
  authWindowId = win.windowId;

  setAuthConfigSheetStatus('Waiting for connection…', 'neutral');
  const result = await window.electronAPI.waitForComposioConnection({
    connectedAccountId,
    timeoutMs: 120000
  });

  if (authWindowId) {
    await window.electronAPI.closeAuthWindow(authWindowId).catch(() => {});
    authWindowId = null;
  }

  if (!result?.ok) {
    setAuthConfigSheetStatus(result?.data?.error || 'Connection failed or timed out.', 'error');
    return;
  }

  setAuthConfigSheetStatus('Connected.', 'success');
  setTimeout(() => setAuthConfigSheetStatus('', 'neutral'), 800);

  closeAuthConfigSheetOverlay();
  await loadIntegrationAccounts();
  await loadIntegrations(true);
}

function clearIntegrationPlayground() {
  if (integrationPlaygroundPrompt) integrationPlaygroundPrompt.value = '';
  if (integrationPlaygroundOutput) integrationPlaygroundOutput.textContent = '';
  setIntegrationPlaygroundStatus('', 'neutral');
}

async function runIntegrationPlayground() {
  if (!selectedIntegration?.id) return;
  if (!window.electronAPI?.runComposioTest) return;

  const prompt = integrationPlaygroundPrompt?.value?.trim() || '';
  if (!prompt) {
    setIntegrationPlaygroundStatus('Enter a prompt.', 'error');
    return;
  }

  setIntegrationPlaygroundStatus('Running…', 'neutral');
  if (integrationPlaygroundOutput) integrationPlaygroundOutput.textContent = '';

  const result = await window.electronAPI.runComposioTest(prompt, { toolkitSlug: selectedIntegration.id });
  if (!result?.ok) {
    if (result?.status === 401) {
      setIntegrationPlaygroundStatus('COMPOSIO_API_KEY missing. Add it in Settings.', 'error');
      return;
    }
    setIntegrationPlaygroundStatus(result?.data?.error || 'Tool router failed.', 'error');
    return;
  }

  if (integrationPlaygroundOutput) integrationPlaygroundOutput.textContent = result?.data?.message || '';
  setIntegrationPlaygroundStatus('Completed.', 'success');
}

const RECIPES = {
  gmail: [
    { title: 'Summarize unread', prompt: 'Summarize my unread emails from the last 24 hours. Keep it short, with next actions.' },
    { title: 'Search recent threads', prompt: 'Find recent email threads about invoices or billing from the last 7 days and summarize key points.' },
    { title: 'Draft follow-up', prompt: 'Draft a polite follow-up email to the last thread I replied to, asking for status and next steps.' }
  ],
  googlecalendar: [
    { title: 'Today at a glance', prompt: 'Summarize my calendar for today, highlight conflicts, and suggest prep notes.' },
    { title: 'Find next meeting', prompt: 'What is my next meeting and who is on it? Summarize context if available.' },
    { title: 'Block focus time', prompt: 'Create two 60-minute focus blocks this week in my calendar during working hours.' }
  ],
  googledrive: [
    { title: 'Find a doc', prompt: 'Find the most relevant Google Drive doc about our roadmap and summarize it.' },
    { title: 'Summarize folder', prompt: 'Summarize the latest files in my Drive root or most recent folder and group by topic.' },
    { title: 'Create a note', prompt: 'Create a new doc titled “WZRD.tech Notes” and add a short outline for today.' }
  ],
  slack: [
    { title: 'Post update', prompt: 'Post a concise standup update to a channel I specify. Ask me for the channel if needed.' },
    { title: 'Summarize channel', prompt: 'Summarize the last 50 messages in a channel I specify, highlight decisions and action items.' },
    { title: 'Find decision', prompt: 'Search for the most recent decision about priorities in Slack and summarize it.' }
  ],
  github: [
    { title: 'Create issue', prompt: 'Create a GitHub issue for a bug I describe. Ask me for repo if needed.' },
    { title: 'Summarize PRs', prompt: 'Summarize open pull requests in a repo I specify with risk and suggested review order.' },
    { title: 'Triage notifications', prompt: 'Summarize my GitHub notifications and group by urgency.' }
  ],
  notion: [
    { title: 'Create page', prompt: 'Create a Notion page titled “WZRD.tech Plan” with a short outline and checklist.' },
    { title: 'Find doc', prompt: 'Find the most relevant Notion doc about onboarding and summarize it.' },
    { title: 'Summarize workspace', prompt: 'Summarize recent changes in my Notion workspace in the last 7 days.' }
  ],
  linear: [
    { title: 'Create ticket', prompt: 'Create a Linear issue for a feature I describe. Ask me for project/team if needed.' },
    { title: 'My active issues', prompt: 'List my active Linear issues and suggest what to tackle next.' },
    { title: 'Weekly summary', prompt: 'Summarize changes in our Linear backlog this week.' }
  ],
  jira: [
    { title: 'Create ticket', prompt: 'Create a Jira ticket for a bug I describe. Ask me for project key if needed.' },
    { title: 'Sprint status', prompt: 'Summarize current sprint status and blockers.' },
    { title: 'Triage backlog', prompt: 'Summarize high priority backlog items and recommend order.' }
  ],
  figma: [
    { title: 'Find design', prompt: 'Find the latest Figma file I worked on and summarize what changed.' },
    { title: 'Export assets', prompt: 'Export key assets from a Figma file I specify. Ask me for file link if needed.' },
    { title: 'Design review', prompt: 'Summarize comments in a Figma file I specify and propose next steps.' }
  ],
  hubspot: [
    { title: 'Pipeline summary', prompt: 'Summarize the current HubSpot pipeline and highlight deals at risk.' },
    { title: 'Draft follow-up', prompt: 'Draft a follow-up message for a contact I specify. Ask me for contact details if needed.' },
    { title: 'Recent activity', prompt: 'Summarize recent HubSpot activity in the last 7 days.' }
  ]
};

function renderIntegrationRecipes() {
  if (!integrationRecipesGrid) return;
  integrationRecipesGrid.innerHTML = '';
  if (!selectedIntegration) return;
  const key = getIntegrationCanonicalKey(selectedIntegration);
  const recipes = RECIPES[key] || [];

  if (recipes.length === 0) {
    integrationRecipesGrid.innerHTML = '<div class="empty-state">No recipes yet for this integration.</div>';
    return;
  }

  recipes.forEach((r) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'recipe-card glass-panel';
    card.innerHTML = `<div class="recipe-title">${escapeHtml(r.title)}</div><div class="recipe-desc">${escapeHtml(r.prompt)}</div>`;
    card.addEventListener('click', async () => {
      setIntegrationDrawerTab('playground');
      if (integrationPlaygroundPrompt) integrationPlaygroundPrompt.value = r.prompt;
      await runIntegrationPlayground();
    });
    integrationRecipesGrid.appendChild(card);
  });
}

function closeAutomationHistory() {
  if (!automationHistoryModal) return;
  automationHistoryModal.classList.add('hidden');
  if (automationRunsList) automationRunsList.innerHTML = '';
  if (automationHistoryStatus) automationHistoryStatus.textContent = '';
}

async function openAutomationHistory(automation) {
  if (!automationHistoryModal || !automationRunsList) return;
  if (!window.electronAPI?.listAutomationRuns) return;

  automationHistoryModal.classList.remove('hidden');
  if (automationHistoryTitle) {
    automationHistoryTitle.textContent = `Automation History: ${automation.name}`;
  }
  if (automationHistoryStatus) {
    automationHistoryStatus.textContent = 'Loading…';
    automationHistoryStatus.dataset.tone = 'neutral';
  }
  automationRunsList.innerHTML = '';

  try {
    const runs = await window.electronAPI.listAutomationRuns(automation.id, 50, 0);
    if (!Array.isArray(runs) || runs.length === 0) {
      automationRunsList.innerHTML = '<div class="empty-state">No runs yet.</div>';
      if (automationHistoryStatus) automationHistoryStatus.textContent = '';
      return;
    }

    if (automationHistoryStatus) automationHistoryStatus.textContent = '';

    runs.forEach(run => {
      const div = document.createElement('div');
      div.className = 'run-item';
      const createdAt = run.created_at ? new Date(run.created_at) : null;
      const createdLabel = createdAt ? createdAt.toLocaleString() : 'Unknown time';
      const status = run.status || 'unknown';
      const output = String(run.output || '');
      const preview = output.length > 180 ? `${output.slice(0, 180)}…` : output;

      div.innerHTML = `
        <div class="run-header">
          <div>
            <div><strong>${createdLabel}</strong></div>
            <div class="run-meta">Status: <span class="status-chip ${status === 'success' ? 'connected' : 'disabled'}">${status}</span></div>
          </div>
          <div class="run-actions">
            <button class="ghost-btn" data-action="activity">View in Activity</button>
            <button class="ghost-btn" data-action="copy">Copy</button>
            <button class="primary-btn" data-action="toggle">Details</button>
          </div>
        </div>
        <div class="run-output hidden" data-role="output">${escapeHtml(preview)}</div>
      `;

      const outputEl = div.querySelector('[data-role="output"]');
      const toggleBtn = div.querySelector('[data-action="toggle"]');
      const copyBtn = div.querySelector('[data-action="copy"]');
      const activityBtn = div.querySelector('[data-action="activity"]');

      toggleBtn.addEventListener('click', () => {
        const isHidden = outputEl.classList.toggle('hidden');
        if (!isHidden) {
          outputEl.textContent = output || '(no output)';
          toggleBtn.textContent = 'Hide';
        } else {
          outputEl.textContent = preview;
          toggleBtn.textContent = 'Details';
        }
      });

      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(output || '');
          copyBtn.textContent = 'Copied';
          setTimeout(() => (copyBtn.textContent = 'Copy'), 1000);
        } catch (_err) {
          copyBtn.textContent = 'Copy failed';
          setTimeout(() => (copyBtn.textContent = 'Copy'), 1200);
        }
      });

      activityBtn.addEventListener('click', () => {
        activityHighlightTs = run.created_at ? new Date(run.created_at).getTime() : null;
        setActiveView('activity');
      });

      automationRunsList.appendChild(div);
    });
  } catch (err) {
    console.error('[AUTOMATIONS] Failed to load runs:', err);
    automationRunsList.innerHTML = '<div class="empty-state">Failed to load runs.</div>';
    if (automationHistoryStatus) {
      automationHistoryStatus.textContent = 'Failed to load runs.';
      automationHistoryStatus.dataset.tone = 'error';
    }
  }
}

async function loadAutomations() {
  if (!window.electronAPI?.listAutomations || !automationsList) return;
  automationsList.innerHTML = '';
  try {
    const automations = await window.electronAPI.listAutomations();
    automationsCache = automations || [];
    if (automationsCache.length === 0) {
      automationsList.innerHTML = '<div class="empty-state">No automations yet.</div>';
      return;
    }
    automationsCache.forEach(item => {
      const card = document.createElement('div');
      card.className = 'automation-card';
      card.innerHTML = `
        <h4>${item.name}</h4>
        <small>${item.schedule} · ${item.provider}</small>
        <p>${item.prompt}</p>
        <div class="automation-actions">
          <button class="ghost-btn" data-action="toggle">${item.enabled ? 'Disable' : 'Enable'}</button>
          <button class="ghost-btn" data-action="history">History</button>
          <button class="primary-btn" data-action="run">Run Now</button>
        </div>
      `;
      const toggleBtn = card.querySelector('[data-action="toggle"]');
      const historyBtn = card.querySelector('[data-action="history"]');
      const runBtn = card.querySelector('[data-action="run"]');
      toggleBtn.addEventListener('click', async () => {
        const updated = await window.electronAPI.updateAutomation(item.id, {
          name: item.name,
          prompt: item.prompt,
          schedule: item.schedule,
          provider: item.provider,
          model: item.model,
          enabled: !item.enabled
        });
        if (updated?.id) {
          loadAutomations();
          loadDashboardData();
        }
      });
      historyBtn.addEventListener('click', async () => {
        await openAutomationHistory(item);
      });
      runBtn.addEventListener('click', async () => {
        setAutomationStatus('Running automation...', 'neutral');
        const result = await window.electronAPI.runAutomation(item.id);
        if (result?.success) {
          setAutomationStatus('Automation completed.', 'success');
        } else {
          setAutomationStatus(result?.error || 'Automation failed.', 'error');
        }
        loadActivity();
      });
      automationsList.appendChild(card);
    });
  } catch (err) {
    console.error('[AUTOMATIONS] Failed:', err);
    automationsList.innerHTML = '<div class="empty-state">Failed to load automations.</div>';
  }
}

async function handleCreateAutomation() {
  if (!automationName || !automationPrompt || !automationSchedule) return;
  const payload = {
    name: automationName.value.trim(),
    prompt: automationPrompt.value.trim(),
    schedule: automationSchedule.value.trim(),
    provider: automationProvider?.value || 'claude',
    model: automationModel?.value?.trim() || null,
    enabled: automationEnabled?.checked || false
  };
  if (!payload.name || !payload.prompt || !payload.schedule) {
    setAutomationStatus('Please fill name, prompt, and schedule.', 'error');
    return;
  }
  setAutomationStatus('Creating automation...', 'neutral');
  const created = await window.electronAPI.createAutomation(payload);
  if (created?.id) {
    setAutomationStatus('Automation created.', 'success');
    clearAutomationForm();
    loadAutomations();
    loadDashboardData();
  } else {
    setAutomationStatus('Failed to create automation.', 'error');
  }
}

function clearAutomationForm() {
  if (automationName) automationName.value = '';
  if (automationPrompt) automationPrompt.value = '';
  if (automationSchedule) automationSchedule.value = '';
  if (automationModel) automationModel.value = '';
  if (automationEnabled) automationEnabled.checked = true;
}

async function loadMemory(force = false) {
  if (!window.electronAPI?.listMemory || !memoryList) return;
  memoryList.innerHTML = '';
  try {
    const searchValue = force ? memorySearch?.value?.trim() || '' : '';
    const memories = await window.electronAPI.listMemory(searchValue);
    memoryCache = memories || [];
    if (memoryCache.length === 0) {
      memoryList.innerHTML = '<div class="empty-state">No memories yet.</div>';
      return;
    }
    memoryCache.forEach(mem => {
      let tags = [];
      try {
        tags = JSON.parse(mem.tags || '[]');
      } catch (err) {
        tags = [];
      }
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.innerHTML = `
        <strong>${mem.title}</strong>
        <p>${mem.content}</p>
        <div class="memory-tags">${tags.map(t => `<span class="memory-tag">${t}</span>`).join('')}</div>
        <div class="automation-actions">
          <button class="ghost-btn" data-action="pin">${mem.pinned ? 'Unpin' : 'Pin to chat'}</button>
          <button class="primary-btn" data-action="delete">Delete</button>
        </div>
      `;
      const pinBtn = card.querySelector('[data-action="pin"]');
      const deleteBtn = card.querySelector('[data-action="delete"]');
      pinBtn.addEventListener('click', async () => {
        await window.electronAPI.updateMemory(mem.id, {
          title: mem.title,
          content: mem.content,
          tags,
          pinned: !mem.pinned
        });
        if (!mem.pinned) {
          setActiveView('chat');
          showChatWorkspace();
          const targetInput = isFirstMessage ? homeInput : messageInput;
          targetInput.value = `Memory: ${mem.title}\n${mem.content}`;
          targetInput.focus();
        }
        loadMemory();
        loadDashboardData();
      });
      deleteBtn.addEventListener('click', async () => {
        await window.electronAPI.deleteMemory(mem.id);
        loadMemory();
        loadDashboardData();
      });
      memoryList.appendChild(card);
    });
  } catch (err) {
    console.error('[MEMORY] Failed:', err);
    memoryList.innerHTML = '<div class="empty-state">Failed to load memory.</div>';
  }
}

async function handleCreateMemory() {
  if (!memoryTitle || !memoryContent) return;
  const payload = {
    title: memoryTitle.value.trim(),
    content: memoryContent.value.trim(),
    tags: memoryTags?.value?.split(',').map(t => t.trim()).filter(Boolean) || [],
    pinned: memoryPinned?.checked || false
  };
  if (!payload.title || !payload.content) {
    setMemoryStatus('Please fill title and details.', 'error');
    return;
  }
  setMemoryStatus('Saving memory...', 'neutral');
  const created = await window.electronAPI.createMemory(payload);
  if (created?.id) {
    setMemoryStatus('Memory saved.', 'success');
    clearMemoryForm();
    loadMemory();
    loadDashboardData();
  } else {
    setMemoryStatus('Failed to save memory.', 'error');
  }
}

function clearMemoryForm() {
  if (memoryTitle) memoryTitle.value = '';
  if (memoryContent) memoryContent.value = '';
  if (memoryTags) memoryTags.value = '';
  if (memoryPinned) memoryPinned.checked = false;
}

async function loadActivity(force = false) {
  if (!window.electronAPI?.listActivity || !activityFeed) return;
  try {
    const activity = await window.electronAPI.listActivity();
    activityCache = activity || [];
    activityFeed.innerHTML = '';
    activityCache.forEach(item => {
      const div = document.createElement('div');
      div.className = 'activity-item';
      div.dataset.ts = String(new Date(item.created_at).getTime());
      div.innerHTML = `<strong>${item.title}</strong><br><small>${new Date(item.created_at).toLocaleString()}</small><div>${item.detail || ''}</div>`;
      activityFeed.appendChild(div);
    });
    if (activityCache.length === 0) {
      activityFeed.innerHTML = '<div class="empty-state">No activity yet.</div>';
    }
    if (force) {
      if (activityInterval) clearInterval(activityInterval);
      activityInterval = setInterval(() => {
        if (currentView === 'activity') {
          loadActivity(false);
        }
      }, 15000);
    }

    if (activityHighlightTs) {
      const items = Array.from(activityFeed.querySelectorAll('.activity-item'));
      const target = items.find(el => Number(el.dataset.ts) >= activityHighlightTs) || items[0];
      if (target) {
        target.classList.add('highlight');
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => target.classList.remove('highlight'), 2500);
      }
      activityHighlightTs = null;
    }
  } catch (err) {
    console.error('[ACTIVITY] Failed:', err);
    activityFeed.innerHTML = '<div class="empty-state">Failed to load activity.</div>';
  }
}

function openSettings() {
  if (!settingsModal) return;
  settingsModal.classList.remove('hidden');
  loadSettingsIntoUI();
}

function closeSettings() {
  if (!settingsModal) return;
  settingsModal.classList.add('hidden');
}

function setupSettingsControlListeners() {
  if (settingDefaultDestination) {
    settingDefaultDestination.addEventListener('change', async () => {
      defaultDestination = settingDefaultDestination.value;
      await persistSettings('general', { defaultDestination });
    });
  }

  setupSegmentedControl(settingThreadDetail, async (value) => {
    threadDetailLevel = value;
    applyThreadDetail(threadDetailLevel);
    await persistSettings('general', { threadDetail: value });
  });

  if (settingPreventSleep) {
    settingPreventSleep.addEventListener('change', async () => {
      const enabled = settingPreventSleep.checked;
      await persistSettings('general', { preventSleep: enabled });
      try {
        await window.electronAPI?.togglePowerSaveBlocker?.(enabled);
      } catch (err) {
        console.error('[SETTINGS] Power save toggle failed:', err);
      }
    });
  }

  if (settingCmdEnter) {
    settingCmdEnter.addEventListener('change', async () => {
      requireCmdEnter = settingCmdEnter.checked;
      await persistSettings('general', { requireCmdEnter });
    });
  }

  setupSegmentedControl(settingFollowUp, async (value) => {
    followUpBehavior = value;
    await persistSettings('general', { followUp: value });
  });

  setupSegmentedControl(settingTheme, async (value) => {
    applyThemeSetting(value);
    await persistSettings('appearance', { theme: value });
  });

  if (settingOpaque) {
    settingOpaque.addEventListener('change', async () => {
      const enabled = settingOpaque.checked;
      document.body.classList.toggle('opaque-bg', enabled);
      await persistSettings('appearance', { opaque: enabled });
    });
  }

  if (settingPointerCursor) {
    settingPointerCursor.addEventListener('change', async () => {
      const enabled = settingPointerCursor.checked;
      document.body.classList.toggle('pointer-cursor', enabled);
      await persistSettings('appearance', { pointerCursor: enabled });
    });
  }

  if (settingSansSize) {
    settingSansSize.addEventListener('change', async () => {
      const size = Number(settingSansSize.value) || 14;
      document.documentElement.style.setProperty('--font-sans-size', `${size}px`);
      await persistSettings('appearance', { sansSize: size });
    });
  }

  if (settingCodeSize) {
    settingCodeSize.addEventListener('change', async () => {
      const size = Number(settingCodeSize.value) || 13;
      document.documentElement.style.setProperty('--font-code-size', `${size}px`);
      await persistSettings('appearance', { codeSize: size });
    });
  }

  if (settingApprovalPolicy) {
    settingApprovalPolicy.addEventListener('change', async () => {
      await persistSettings('configuration', { approvalPolicy: settingApprovalPolicy.value });
    });
  }

  if (settingSandboxMode) {
    settingSandboxMode.addEventListener('change', async () => {
      await persistSettings('configuration', { sandboxMode: settingSandboxMode.value });
    });
  }

  if (settingWorkspaceName) {
    settingWorkspaceName.addEventListener('change', async () => {
      await persistSettings('personalization', { workspaceName: settingWorkspaceName.value.trim() });
      applyPersonalization();
    });
  }

  if (settingTagline) {
    settingTagline.addEventListener('change', async () => {
      await persistSettings('personalization', { tagline: settingTagline.value.trim() });
      applyPersonalization();
    });
  }

  if (settingGreeting) {
    settingGreeting.addEventListener('change', async () => {
      await persistSettings('personalization', { greeting: settingGreeting.value.trim() });
      applyPersonalization();
    });
  }

  if (settingDefaultProvider) {
    settingDefaultProvider.addEventListener('change', async () => {
      const value = settingDefaultProvider.value;
      await persistSettings('personalization', { defaultProvider: value });
      applyPersonalization();
    });
  }

  if (settingDefaultModel) {
    settingDefaultModel.addEventListener('change', async () => {
      await persistSettings('personalization', { defaultModel: settingDefaultModel.value.trim() });
      applyPersonalization();
    });
  }
}

function setupSegmentedControl(container, onChange) {
  if (!container) return;
  const buttons = container.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      setSegmentedValue(container, btn.dataset.value);
      if (onChange) onChange(btn.dataset.value);
    });
  });
}

function setSegmentedValue(container, value) {
  if (!container) return;
  container.dataset.value = value;
  container.querySelectorAll('button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === value);
  });
}

function selectSettingsSection(section) {
  if (!section) return;
  settingsNavItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });
  settingsSections.forEach(panel => {
    panel.classList.toggle('hidden', panel.dataset.section !== section);
  });

  if (section === 'archived') {
    loadArchivedThreadsList();
  }
}

async function initializeSettings() {
  await loadSettingsSections();
  await syncArchivedFromDb();
}

async function loadSettingsSections() {
  if (!window.electronAPI?.getSettingsSection) return;
  const defaults = {
    general: {
      defaultDestination: 'dashboard',
      threadDetail: 'full',
      preventSleep: false,
      requireCmdEnter: false,
      followUp: 'queue'
    },
    appearance: {
      theme: 'dark',
      opaque: false,
      pointerCursor: false,
      sansSize: 14,
      codeSize: 13
    },
    configuration: {
      approvalPolicy: 'default',
      sandboxMode: 'default'
    },
    personalization: {
      workspaceName: 'WZRD.tech',
      tagline: 'Liquid-glass AI workspace',
      greeting: 'Ask me anything',
      defaultProvider: 'claude',
      defaultModel: 'claude-sonnet-4-5-20250514'
    }
  };

  try {
    const [general, appearance, configuration, personalization] = await Promise.all([
      window.electronAPI.getSettingsSection('general'),
      window.electronAPI.getSettingsSection('appearance'),
      window.electronAPI.getSettingsSection('configuration'),
      window.electronAPI.getSettingsSection('personalization')
    ]);

    settingsCache.general = { ...defaults.general, ...general };
    settingsCache.appearance = { ...defaults.appearance, ...appearance };
    settingsCache.configuration = { ...defaults.configuration, ...configuration };
    settingsCache.personalization = { ...defaults.personalization, ...personalization };

    applyGeneralSettings(settingsCache.general);
    applyAppearanceSettings(settingsCache.appearance);
    applyConfigurationSettings(settingsCache.configuration);
    applyPersonalizationSettings(settingsCache.personalization);
  } catch (err) {
    console.error('[SETTINGS] Failed to load settings sections:', err);
  }
}

function applyGeneralSettings(settings) {
  defaultDestination = settings.defaultDestination || 'dashboard';
  threadDetailLevel = settings.threadDetail || 'full';
  followUpBehavior = settings.followUp || 'queue';
  requireCmdEnter = !!settings.requireCmdEnter;

  if (settingDefaultDestination) settingDefaultDestination.value = defaultDestination;
  setSegmentedValue(settingThreadDetail, threadDetailLevel);
  if (settingPreventSleep) settingPreventSleep.checked = !!settings.preventSleep;
  if (settingCmdEnter) settingCmdEnter.checked = requireCmdEnter;
  setSegmentedValue(settingFollowUp, followUpBehavior);

  applyThreadDetail(threadDetailLevel);
  if (settings.preventSleep) {
    window.electronAPI?.togglePowerSaveBlocker?.(true).catch(() => {});
  }
}

function applyAppearanceSettings(settings) {
  if (settingOpaque) settingOpaque.checked = !!settings.opaque;
  if (settingPointerCursor) settingPointerCursor.checked = !!settings.pointerCursor;
  if (settingSansSize) settingSansSize.value = settings.sansSize || 14;
  if (settingCodeSize) settingCodeSize.value = settings.codeSize || 13;

  applyThemeSetting(settings.theme || 'dark');
  document.body.classList.toggle('opaque-bg', !!settings.opaque);
  document.body.classList.toggle('pointer-cursor', !!settings.pointerCursor);
  document.documentElement.style.setProperty('--font-sans-size', `${settings.sansSize || 14}px`);
  document.documentElement.style.setProperty('--font-code-size', `${settings.codeSize || 13}px`);
}

function applyConfigurationSettings(settings) {
  if (settingApprovalPolicy) settingApprovalPolicy.value = settings.approvalPolicy || 'default';
  if (settingSandboxMode) settingSandboxMode.value = settings.sandboxMode || 'default';
}

function applyPersonalizationSettings(settings) {
  if (settingWorkspaceName) settingWorkspaceName.value = settings.workspaceName || '';
  if (settingTagline) settingTagline.value = settings.tagline || '';
  if (settingGreeting) settingGreeting.value = settings.greeting || '';
  if (settingDefaultProvider) settingDefaultProvider.value = settings.defaultProvider || 'claude';
  if (settingDefaultModel) settingDefaultModel.value = settings.defaultModel || '';
  applyPersonalization();
}

function applyPersonalization() {
  const settings = settingsCache.personalization || {};
  const workspaceName = settings.workspaceName || 'WZRD.tech';
  const tagline = settings.tagline || 'Liquid-glass AI workspace';
  const greeting = settings.greeting || 'Ask me anything';

  if (heroSubtag) heroSubtag.textContent = tagline;
  if (homeInput) homeInput.placeholder = greeting;
  if (introWordmark) introWordmark.textContent = workspaceName;
  wordmarkFallbacks.forEach(el => {
    el.textContent = workspaceName;
  });

  const provider = settings.defaultProvider || 'claude';
  if (provider && providerModels[provider]) {
    selectedProvider = provider;
    updateProviderUI(provider);
  }

  const modelValue = settings.defaultModel;
  if (modelValue) {
    const models = providerModels[selectedProvider] || [];
    const modelInfo = models.find(m => m.value === modelValue);
    if (modelInfo) {
      selectedModel = modelInfo.value;
      document.querySelectorAll('.model-selector .model-label').forEach(l => {
        l.textContent = modelInfo.label;
      });
      document.querySelectorAll('.model-menu .dropdown-item').forEach(item => {
        const isSelected = item.dataset.value === modelValue;
        item.classList.toggle('selected', isSelected);
        const checkIcon = item.querySelector('.check-icon');
        if (checkIcon) {
          checkIcon.style.display = isSelected ? 'block' : 'none';
        }
      });
      localStorage.setItem('selectedModel', selectedModel);
    }
  }
}

function applyThreadDetail(level) {
  document.body.classList.remove('detail-compact', 'detail-minimal');
  if (level === 'compact') {
    document.body.classList.add('detail-compact');
  } else if (level === 'minimal') {
    document.body.classList.add('detail-minimal');
  }
}

function applyThemeSetting(theme) {
  if (!systemThemeMedia) {
    systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeMedia.addEventListener('change', () => {
      if (settingsCache.appearance?.theme === 'system') {
        applyThemeSetting('system');
      }
    });
  }

  document.body.classList.remove('theme-light');

  if (theme === 'light') {
    document.body.classList.add('theme-light');
  } else if (theme === 'system') {
    const prefersDark = systemThemeMedia.matches;
    if (!prefersDark) {
      document.body.classList.add('theme-light');
    }
  }

  if (settingTheme) {
    setSegmentedValue(settingTheme, theme);
  }
}

async function persistSettings(section, updates) {
  settingsCache[section] = { ...(settingsCache[section] || {}), ...(updates || {}) };
  try {
    const saved = await window.electronAPI?.updateSettingsSection?.(section, updates);
    if (saved) {
      settingsCache[section] = { ...(settingsCache[section] || {}), ...saved };
    }
  } catch (err) {
    console.error('[SETTINGS] Failed to persist settings:', err);
  }
}

async function syncArchivedFromDb() {
  if (!window.electronAPI?.listArchivedThreads) return;
  try {
    const archived = await window.electronAPI.listArchivedThreads();
    const archivedIds = new Set((archived || []).map(item => item.id));
    let updated = false;
    allChats.forEach(chat => {
      const shouldArchive = archivedIds.has(chat.id);
      if (!!chat.archived !== shouldArchive) {
        chat.archived = shouldArchive;
        updated = true;
      }
    });
    if (updated) {
      localStorage.setItem('allChats', JSON.stringify(allChats));
      renderChatHistory();
    }
  } catch (err) {
    console.error('[ARCHIVE] Failed to sync archived threads:', err);
  }
}

async function handleOpenConfigFile() {
  try {
    await window.electronAPI?.openConfigFile?.();
  } catch (err) {
    console.error('[SETTINGS] Failed to open config:', err);
  }
}

async function openLicenseModal() {
  if (!licenseModal) return;
  licenseModal.classList.remove('hidden');
  if (licenseContent) {
    licenseContent.textContent = 'Loading...';
  }
  try {
    const text = await window.electronAPI?.getLicenseText?.();
    if (licenseContent) {
      licenseContent.textContent = text || 'No license text found.';
    }
  } catch (err) {
    if (licenseContent) {
      licenseContent.textContent = 'Failed to load license.';
    }
  }
}

function closeLicenseModal() {
  if (!licenseModal) return;
  licenseModal.classList.add('hidden');
}

function toggleSkillsAddPanel(show) {
  if (!skillsAddPanel) return;
  skillsAddPanel.classList.toggle('hidden', !show);
  if (show) {
    skillNameInput?.focus();
  } else {
    if (skillNameInput) skillNameInput.value = '';
    if (skillUrlInput) skillUrlInput.value = '';
    setSkillStatus('');
  }
}

async function loadSkills() {
  if (!skillsList || !window.electronAPI?.listSkills) return;
  try {
    skillsCache = await window.electronAPI.listSkills();
  } catch (err) {
    console.error('[SKILLS] Failed to load skills:', err);
    skillsCache = [];
  }
  renderSkills();
}

function renderSkills() {
  if (!skillsList) return;
  const query = skillsSearch?.value?.trim().toLowerCase() || '';
  const items = (skillsCache || []).filter(item => {
    if (!query) return true;
    const haystack = `${item.name} ${item.description || ''} ${item.source || ''} ${item.url || ''}`.toLowerCase();
    return haystack.includes(query);
  });

  const installed = items.filter(item => item.installed);
  const recommended = items.filter(item => !item.installed);

  skillsList.innerHTML = '';
  if (items.length === 0) {
    skillsList.innerHTML = '<div class="empty-state">No skills found.</div>';
    return;
  }

  skillsList.appendChild(buildSkillsSection('Installed', installed));
  skillsList.appendChild(buildSkillsSection('Recommended', recommended));
}

function buildSkillsSection(title, items) {
  const section = document.createElement('div');
  section.className = 'skills-section';
  section.innerHTML = `<div class="skills-section-title">${title}</div>`;

  if (items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'No skills here yet.';
    section.appendChild(empty);
    return section;
  }

  items.forEach(skill => {
    const row = document.createElement('div');
    row.className = 'skill-row';
    row.innerHTML = `
      <div class="skill-info">
        <div class="skill-icon" style="background: ${getSkillGradient(skill.name)}">${getSkillInitials(skill.name)}</div>
        <div class="skill-text">
          <div class="skill-title">${skill.name}</div>
          <div class="skill-desc">${skill.description || 'No description yet.'}</div>
        </div>
      </div>
      <div class="skill-actions">
        <span class="skill-chip">${skill.installed ? 'Installed' : 'Not installed'}</span>
        <button class="${skill.installed ? 'ghost-btn' : 'primary-btn'}" data-action="toggle">
          ${skill.installed ? 'Uninstall' : 'Install'}
        </button>
        ${skill.source === 'github' ? '<button class="ghost-btn" data-action="remove">Remove</button>' : ''}
      </div>
    `;

    row.querySelector('[data-action="toggle"]').addEventListener('click', async () => {
      await window.electronAPI.updateSkill(skill.id, {
        installed: skill.installed ? 0 : 1
      });
      loadSkills();
    });

    const removeBtn = row.querySelector('[data-action="remove"]');
    if (removeBtn) {
      removeBtn.addEventListener('click', async () => {
        await window.electronAPI.deleteSkill(skill.id);
        loadSkills();
      });
    }

    section.appendChild(row);
  });

  return section;
}

function getSkillInitials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'SK';
  const letters = parts.slice(0, 2).map(part => part[0].toUpperCase());
  return letters.join('');
}

function getSkillGradient(name = '') {
  const gradients = [
    ['#6be7ff', '#8c7bff'],
    ['#7cf0c8', '#5f7dff'],
    ['#ffb36b', '#8c7bff'],
    ['#6be7ff', '#ffb36b']
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash + name.charCodeAt(i)) % gradients.length;
  }
  const [start, end] = gradients[hash];
  return `linear-gradient(135deg, ${start}, ${end})`;
}

async function handleAddSkill() {
  if (!skillNameInput || !skillUrlInput) return;
  const name = skillNameInput.value.trim();
  const url = skillUrlInput.value.trim();
  if (!name || !url) {
    setSkillStatus('Please provide a name and GitHub URL.', 'error');
    return;
  }
  setSkillStatus('Saving skill...', 'neutral');
  try {
    const created = await window.electronAPI.createSkill({
      name,
      url,
      description: 'Custom skill added via GitHub.',
      source: 'github',
      installed: 0
    });
    if (created?.id) {
      setSkillStatus('Skill added.', 'success');
      toggleSkillsAddPanel(false);
      loadSkills();
    } else {
      setSkillStatus('Failed to add skill.', 'error');
    }
  } catch (err) {
    console.error('[SKILLS] Failed to add skill:', err);
    setSkillStatus('Failed to add skill.', 'error');
  }
}

function setClawdStatusMessage(message = '', tone = 'neutral') {
  if (!clawdStatusMessage) return;
  clawdStatusMessage.textContent = message;
  clawdStatusMessage.dataset.tone = tone;
}

function setClawdConfigStatus(message = '', tone = 'neutral') {
  if (!clawdConfigStatus) return;
  clawdConfigStatus.textContent = message;
  clawdConfigStatus.dataset.tone = tone;
}

function normalizeListInput(value) {
  const raw = String(value || '');
  return raw
    .split(',')
    .map(v => v.trim())
    .filter(Boolean);
}

function joinList(value) {
  const arr = Array.isArray(value) ? value : [];
  return arr.join(', ');
}

function readClawdConfigFromForm() {
  const next = { ...(clawdConfigCache || {}) };
  next.agentId = next.agentId || 'clawd';

  next.whatsapp = {
    ...(next.whatsapp || {}),
    enabled: !!clawdWhatsappEnabled?.checked,
    allowedDMs: normalizeListInput(clawdWhatsappAllowedDMs?.value || '*') || ['*'],
    allowedGroups: normalizeListInput(clawdWhatsappAllowedGroups?.value || ''),
    respondToMentionsOnly: !!clawdWhatsappMentionsOnly?.checked
  };

  next.telegram = {
    ...(next.telegram || {}),
    enabled: !!clawdTelegramEnabled?.checked,
    token: String(clawdTelegramToken?.value || '').trim(),
    allowedDMs: next.telegram?.allowedDMs || ['*'],
    allowedGroups: next.telegram?.allowedGroups || [],
    respondToMentionsOnly: next.telegram?.respondToMentionsOnly ?? true
  };

  next.signal = {
    ...(next.signal || {}),
    enabled: !!clawdSignalEnabled?.checked,
    phoneNumber: String(clawdSignalPhone?.value || '').trim(),
    signalCliPath: String(clawdSignalCliPath?.value || 'signal-cli').trim(),
    allowedDMs: next.signal?.allowedDMs || ['*'],
    allowedGroups: next.signal?.allowedGroups || [],
    respondToMentionsOnly: next.signal?.respondToMentionsOnly ?? true
  };

  next.imessage = {
    ...(next.imessage || {}),
    enabled: !!clawdImessageEnabled?.checked,
    allowedDMs: next.imessage?.allowedDMs || ['*'],
    allowedGroups: next.imessage?.allowedGroups || [],
    respondToMentionsOnly: next.imessage?.respondToMentionsOnly ?? true
  };

  next.agent = next.agent || { workspace: '~/clawd', maxTurns: 50, allowedTools: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep'] };
  next.browser = {
    ...(next.browser || {}),
    enabled: !!clawdBrowserEnabled?.checked,
    mode: String(clawdBrowserMode?.value || 'clawd'),
    clawd: next.browser?.clawd || { userDataDir: '~/.clawd-browser-profile', headless: false },
    chrome: {
      ...(next.browser?.chrome || {}),
      cdpPort: Number(clawdBrowserCdpPort?.value) || 9222,
      profilePath: next.browser?.chrome?.profilePath || ''
    }
  };

  return next;
}

function populateClawdForm(config) {
  clawdConfigCache = config || null;
  if (!config) return;

  if (clawdWhatsappEnabled) clawdWhatsappEnabled.checked = !!config.whatsapp?.enabled;
  if (clawdWhatsappAllowedDMs) clawdWhatsappAllowedDMs.value = joinList(config.whatsapp?.allowedDMs || ['*']);
  if (clawdWhatsappAllowedGroups) clawdWhatsappAllowedGroups.value = joinList(config.whatsapp?.allowedGroups || []);
  if (clawdWhatsappMentionsOnly) clawdWhatsappMentionsOnly.checked = !!config.whatsapp?.respondToMentionsOnly;

  if (clawdTelegramEnabled) clawdTelegramEnabled.checked = !!config.telegram?.enabled;
  if (clawdTelegramToken) clawdTelegramToken.value = config.telegram?.token || '';

  if (clawdSignalEnabled) clawdSignalEnabled.checked = !!config.signal?.enabled;
  if (clawdSignalPhone) clawdSignalPhone.value = config.signal?.phoneNumber || '';
  if (clawdSignalCliPath) clawdSignalCliPath.value = config.signal?.signalCliPath || 'signal-cli';

  if (clawdImessageEnabled) clawdImessageEnabled.checked = !!config.imessage?.enabled;

  if (clawdBrowserEnabled) clawdBrowserEnabled.checked = !!config.browser?.enabled;
  if (clawdBrowserMode) clawdBrowserMode.value = config.browser?.mode || 'clawd';
  if (clawdBrowserCdpPort) clawdBrowserCdpPort.value = config.browser?.chrome?.cdpPort ?? 9222;
}

function stopClawdPolling() {
  if (clawdLogInterval) {
    clearInterval(clawdLogInterval);
    clawdLogInterval = null;
  }
}

async function pollClawdLogs() {
  if (!window.electronAPI?.getClawdLogs || !clawdLogs) return;
  try {
    const result = await window.electronAPI.getClawdLogs(clawdLogsCursor);
    if (!result || result.error) {
      return;
    }
    clawdLogsCursor = result.cursor || clawdLogsCursor;
    const logs = Array.isArray(result.logs) ? result.logs : [];
    if (logs.length === 0) return;

    const lines = logs.map(entry => {
      const time = entry.ts ? new Date(entry.ts).toLocaleTimeString() : '';
      const level = entry.level ? entry.level.toUpperCase() : 'LOG';
      return `[${time}] ${level} ${entry.message}`;
    });

    const next = (clawdLogs.textContent || '') + (clawdLogs.textContent ? '\n' : '') + lines.join('\n');
    clawdLogs.textContent = next.length > 150000 ? next.slice(-150000) : next;
    clawdLogs.scrollTop = clawdLogs.scrollHeight;
  } catch (_err) {
    // ignore polling errors
  }
}

function startClawdPolling() {
  stopClawdPolling();
  pollClawdLogs();
  clawdLogInterval = setInterval(() => {
    if (currentView === 'clawd') {
      pollClawdLogs();
    }
  }, 1000);
}

async function refreshClawdStatus() {
  if (!window.electronAPI?.getClawdStatus) return;
  try {
    const status = await window.electronAPI.getClawdStatus();
    if (status?.error) {
      setClawdStatusMessage(status.error, 'error');
      return;
    }
    const isRunning = !!status?.running;
    if (clawdStatusChip) {
      clawdStatusChip.textContent = isRunning ? 'Running' : 'Stopped';
      clawdStatusChip.classList.toggle('running', isRunning);
      clawdStatusChip.classList.toggle('stopped', !isRunning);
    }
    if (clawdStatusMeta) {
      clawdStatusMeta.textContent = isRunning && status.startedAt
        ? `Started ${new Date(status.startedAt).toLocaleString()}`
        : 'Not running';
    }
    if (clawdStartBtn) clawdStartBtn.disabled = isRunning;
    if (clawdStopBtn) clawdStopBtn.disabled = !isRunning;
    if (clawdRestartBtn) clawdRestartBtn.disabled = !isRunning;

    if (isRunning) {
      startClawdPolling();
    } else {
      stopClawdPolling();
    }
  } catch (err) {
    console.error('[OpenClawd] Failed to load status:', err);
    setClawdStatusMessage('Failed to load status.', 'error');
  }
}

async function refreshClawdConfig() {
  if (!window.electronAPI?.getClawdConfig) return;
  try {
    const config = await window.electronAPI.getClawdConfig();
    if (config?.error) {
      setClawdConfigStatus(config.error, 'error');
      return;
    }
    populateClawdForm(config);
    setClawdConfigStatus('Loaded.', 'success');
    setTimeout(() => setClawdConfigStatus(''), 800);
  } catch (err) {
    console.error('[OpenClawd] Failed to load config:', err);
    setClawdConfigStatus('Failed to load config.', 'error');
  }
}

async function loadClawdUi() {
  await Promise.all([refreshClawdStatus(), refreshClawdConfig()]);
}

async function handleClawdSaveConfig() {
  if (!window.electronAPI?.updateClawdConfig) return;
  try {
    setClawdConfigStatus('Saving…', 'neutral');
    const next = readClawdConfigFromForm();
    const saved = await window.electronAPI.updateClawdConfig(next);
    if (saved?.error) {
      setClawdConfigStatus(saved.error, 'error');
      return;
    }
    populateClawdForm(saved);
    setClawdConfigStatus('Saved. Restart to apply.', 'success');
  } catch (err) {
    console.error('[OpenClawd] Failed to save config:', err);
    setClawdConfigStatus('Save failed.', 'error');
  }
}

async function handleClawdStart() {
  if (!window.electronAPI?.startClawd) return;
  setClawdStatusMessage('Starting…', 'neutral');
  if (clawdLogs) clawdLogs.textContent = '';
  clawdLogsCursor = 0;
  try {
    const result = await window.electronAPI.startClawd();
    if (result?.error) {
      setClawdStatusMessage(result.error, 'error');
    } else {
      setClawdStatusMessage('Gateway started.', 'success');
    }
  } catch (err) {
    console.error('[OpenClawd] Start failed:', err);
    setClawdStatusMessage('Start failed.', 'error');
  }
  refreshClawdStatus();
}

async function handleClawdStop() {
  if (!window.electronAPI?.stopClawd) return;
  setClawdStatusMessage('Stopping…', 'neutral');
  try {
    const result = await window.electronAPI.stopClawd();
    if (result?.error) {
      setClawdStatusMessage(result.error, 'error');
    } else {
      setClawdStatusMessage('Gateway stopped.', 'success');
    }
  } catch (err) {
    console.error('[OpenClawd] Stop failed:', err);
    setClawdStatusMessage('Stop failed.', 'error');
  }
  refreshClawdStatus();
}

async function handleClawdRestart() {
  await handleClawdStop();
  await handleClawdStart();
}

async function loadAutomationTemplates() {
  if (!automationTemplates || !window.electronAPI?.listAutomationTemplates) return;
  try {
    const templates = await window.electronAPI.listAutomationTemplates();
    automationTemplates.innerHTML = '';
    if (!templates || templates.length === 0) {
      automationTemplates.innerHTML = '<div class="empty-state">No templates available.</div>';
      return;
    }
    templates.forEach(template => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.innerHTML = `
        <div class="integration-title">${template.title}</div>
        <div class="integration-meta">${template.category || 'Template'}</div>
        <p class="integration-desc">${template.prompt}</p>
      `;
      card.addEventListener('click', () => {
        if (automationName) automationName.value = template.title;
        if (automationPrompt) automationPrompt.value = template.prompt;
        if (automationSchedule) automationSchedule.value = template.schedule;
        if (automationProvider) {
          automationProvider.value = settingsCache.personalization?.defaultProvider || selectedProvider;
        }
        if (automationModel && settingsCache.personalization?.defaultModel) {
          automationModel.value = settingsCache.personalization.defaultModel;
        }
        if (automationEnabled) automationEnabled.checked = true;
        setAutomationStatus('Template loaded.', 'success');
      });
      automationTemplates.appendChild(card);
    });
  } catch (err) {
    console.error('[TEMPLATES] Failed to load:', err);
    automationTemplates.innerHTML = '<div class="empty-state">Failed to load templates.</div>';
  }
}

async function loadSettingsLists() {
  await Promise.all([
    loadMcpServers(),
    loadGitProfiles(),
    loadEnvironments(),
    loadWorktrees(),
    loadArchivedThreadsList()
  ]);
}

async function loadMcpServers() {
  if (!mcpList || !window.electronAPI?.listMcpServers) return;
  try {
    const list = await window.electronAPI.listMcpServers();
    mcpList.innerHTML = '';
    if (!list || list.length === 0) {
      mcpList.innerHTML = '<div class="empty-state">No MCP servers yet.</div>';
      return;
    }
    list.forEach(item => {
      const row = document.createElement('div');
      row.className = 'settings-item';
      row.innerHTML = `
        <div>
          <div class="settings-label">${item.name}</div>
          <small>${item.url}</small>
        </div>
        <div class="settings-item-actions">
          <span class="status-chip ${item.status}">${item.status}</span>
          <button class="ghost-btn" data-action="toggle">${item.status === 'connected' ? 'Disable' : 'Enable'}</button>
          <button class="ghost-btn" data-action="delete">Remove</button>
        </div>
      `;
      row.querySelector('[data-action="toggle"]').addEventListener('click', async () => {
        const nextStatus = item.status === 'connected' ? 'disabled' : 'connected';
        await window.electronAPI.updateMcpServer(item.id, {
          name: item.name,
          url: item.url,
          status: nextStatus
        });
        loadMcpServers();
      });
      row.querySelector('[data-action="delete"]').addEventListener('click', async () => {
        await window.electronAPI.deleteMcpServer(item.id);
        loadMcpServers();
      });
      mcpList.appendChild(row);
    });
  } catch (err) {
    console.error('[MCP] Failed to load:', err);
    mcpList.innerHTML = '<div class="empty-state">Failed to load MCP servers.</div>';
  }
}

async function handleAddMcpServer() {
  if (!mcpName || !mcpUrl) return;
  const name = mcpName.value.trim();
  const url = mcpUrl.value.trim();
  if (!name || !url) return;
  await window.electronAPI.createMcpServer({
    name,
    url,
    status: mcpStatus?.value || 'connected'
  });
  mcpName.value = '';
  mcpUrl.value = '';
  if (mcpStatus) mcpStatus.value = 'connected';
  loadMcpServers();
}

async function loadGitProfiles() {
  if (!gitList || !window.electronAPI?.listGitProfiles) return;
  try {
    const list = await window.electronAPI.listGitProfiles();
    gitList.innerHTML = '';
    if (!list || list.length === 0) {
      gitList.innerHTML = '<div class="empty-state">No Git profiles yet.</div>';
      return;
    }
    list.forEach(item => {
      const row = document.createElement('div');
      row.className = 'settings-item';
      row.innerHTML = `
        <div>
          <div class="settings-label">${item.name}</div>
          <small>${item.remote || ''} ${item.branch ? `· ${item.branch}` : ''}</small>
        </div>
        <div class="settings-item-actions">
          <button class="ghost-btn" data-action="delete">Remove</button>
        </div>
      `;
      row.querySelector('[data-action="delete"]').addEventListener('click', async () => {
        await window.electronAPI.deleteGitProfile(item.id);
        loadGitProfiles();
      });
      gitList.appendChild(row);
    });
  } catch (err) {
    console.error('[GIT] Failed to load:', err);
    gitList.innerHTML = '<div class="empty-state">Failed to load git profiles.</div>';
  }
}

async function handleAddGitProfile() {
  if (!gitName) return;
  const name = gitName.value.trim();
  if (!name) return;
  await window.electronAPI.createGitProfile({
    name,
    remote: gitRemote?.value?.trim() || '',
    branch: gitBranch?.value?.trim() || ''
  });
  gitName.value = '';
  if (gitRemote) gitRemote.value = '';
  if (gitBranch) gitBranch.value = '';
  loadGitProfiles();
}

async function loadEnvironments() {
  if (!envList || !window.electronAPI?.listEnvironments) return;
  try {
    const list = await window.electronAPI.listEnvironments();
    envList.innerHTML = '';
    if (!list || list.length === 0) {
      envList.innerHTML = '<div class="empty-state">No environments yet.</div>';
      return;
    }
    list.forEach(item => {
      const row = document.createElement('div');
      row.className = 'settings-item';
      row.innerHTML = `
        <div>
          <div class="settings-label">${item.name}</div>
          <small>${item.vars}</small>
        </div>
        <div class="settings-item-actions">
          <button class="ghost-btn" data-action="delete">Remove</button>
        </div>
      `;
      row.querySelector('[data-action="delete"]').addEventListener('click', async () => {
        await window.electronAPI.deleteEnvironment(item.id);
        loadEnvironments();
      });
      envList.appendChild(row);
    });
  } catch (err) {
    console.error('[ENV] Failed to load:', err);
    envList.innerHTML = '<div class="empty-state">Failed to load environments.</div>';
  }
}

async function handleAddEnvironment() {
  if (!envName) return;
  const name = envName.value.trim();
  const vars = envVars?.value?.trim() || '';
  if (!name) return;
  await window.electronAPI.createEnvironment({
    name,
    vars
  });
  envName.value = '';
  if (envVars) envVars.value = '';
  loadEnvironments();
}

async function loadWorktrees() {
  if (!worktreeList || !window.electronAPI?.listWorktrees) return;
  try {
    const list = await window.electronAPI.listWorktrees();
    worktreeList.innerHTML = '';
    if (!list || list.length === 0) {
      worktreeList.innerHTML = '<div class="empty-state">No worktrees yet.</div>';
      return;
    }
    list.forEach(item => {
      const row = document.createElement('div');
      row.className = 'settings-item';
      row.innerHTML = `
        <div>
          <div class="settings-label">${item.name}</div>
          <small>${item.path}</small>
        </div>
        <div class="settings-item-actions">
          <span class="status-chip ${item.status}">${item.status}</span>
          <button class="ghost-btn" data-action="toggle">${item.status === 'active' ? 'Pause' : 'Resume'}</button>
          <button class="ghost-btn" data-action="delete">Remove</button>
        </div>
      `;
      row.querySelector('[data-action="toggle"]').addEventListener('click', async () => {
        const nextStatus = item.status === 'active' ? 'paused' : 'active';
        await window.electronAPI.updateWorktree(item.id, {
          name: item.name,
          path: item.path,
          status: nextStatus
        });
        loadWorktrees();
      });
      row.querySelector('[data-action="delete"]').addEventListener('click', async () => {
        await window.electronAPI.deleteWorktree(item.id);
        loadWorktrees();
      });
      worktreeList.appendChild(row);
    });
  } catch (err) {
    console.error('[WORKTREES] Failed to load:', err);
    worktreeList.innerHTML = '<div class="empty-state">Failed to load worktrees.</div>';
  }
}

async function handleAddWorktree() {
  if (!worktreeName || !worktreePath) return;
  const name = worktreeName.value.trim();
  const pathValue = worktreePath.value.trim();
  if (!name || !pathValue) return;
  await window.electronAPI.createWorktree({
    name,
    path: pathValue,
    status: worktreeStatus?.value || 'active'
  });
  worktreeName.value = '';
  worktreePath.value = '';
  if (worktreeStatus) worktreeStatus.value = 'active';
  loadWorktrees();
}

async function loadArchivedThreadsList() {
  if (!archivedList || !window.electronAPI?.listArchivedThreads) return;
  try {
    const list = await window.electronAPI.listArchivedThreads();
    archivedList.innerHTML = '';
    if (!list || list.length === 0) {
      archivedList.innerHTML = '<div class="empty-state">No archived threads.</div>';
      return;
    }
    list.forEach(item => {
      const row = document.createElement('div');
      row.className = 'settings-item';
      row.innerHTML = `
        <div>
          <div class="settings-label">${item.title}</div>
          <small>Archived ${new Date(item.archived_at).toLocaleString()}</small>
        </div>
        <div class="settings-item-actions">
          <button class="ghost-btn" data-action="restore">Restore</button>
        </div>
      `;
      row.querySelector('[data-action="restore"]').addEventListener('click', async () => {
        await window.electronAPI.deleteArchivedThread(item.id);
        const chat = allChats.find(c => c.id === item.id);
        if (chat) {
          chat.archived = false;
          localStorage.setItem('allChats', JSON.stringify(allChats));
        }
        renderChatHistory();
        loadArchivedThreadsList();
      });
      archivedList.appendChild(row);
    });
  } catch (err) {
    console.error('[ARCHIVE] Failed to load archived threads:', err);
    archivedList.innerHTML = '<div class="empty-state">Failed to load archived threads.</div>';
  }
}

// Setup dropdown functionality
function setupDropdowns() {
  // Thinking mode toggle buttons
  ['homeThinkingBtn', 'chatThinkingBtn'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      thinkingMode = thinkingMode === 'normal' ? 'extended' : 'normal';

      // Update all thinking buttons
      document.querySelectorAll('.thinking-btn').forEach(b => {
        b.classList.toggle('active', thinkingMode === 'extended');
      });
    });
  });

  ['homeProviderDropdown', 'chatProviderDropdown'].forEach(id => {
    const dropdown = document.getElementById(id);
    if (!dropdown) return;

    const btn = dropdown.querySelector('.provider-selector');
    const items = dropdown.querySelectorAll('.dropdown-item');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeOtherDropdowns(dropdown);
      dropdown.classList.toggle('open');
    });

    items.forEach(item => {
      item.addEventListener('click', () => {
        const value = item.dataset.value;
        if (!value) return;

        const label = item.querySelector('.item-label').textContent;
        selectedProvider = value;

        // Update all provider selectors
        document.querySelectorAll('.provider-selector .provider-label').forEach(l => {
          l.textContent = label;
        });

        // Update selected state and checkmarks for provider dropdowns
        document.querySelectorAll('.provider-menu .dropdown-item').forEach(i => {
          const isSelected = i.dataset.value === value;
          i.classList.toggle('selected', isSelected);

          // Update checkmark visibility
          let checkIcon = i.querySelector('.check-icon');
          if (isSelected && !checkIcon) {
            // Add checkmark if selected and doesn't have one
            const itemRow = i.querySelector('.item-row');
            if (itemRow) {
              checkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              checkIcon.setAttribute('class', 'check-icon');
              checkIcon.setAttribute('viewBox', '0 0 24 24');
              checkIcon.setAttribute('fill', 'none');
              checkIcon.setAttribute('stroke', 'currentColor');
              checkIcon.setAttribute('stroke-width', '2');
              checkIcon.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
              itemRow.appendChild(checkIcon);
            }
          }
          if (checkIcon) {
            checkIcon.style.display = isSelected ? 'block' : 'none';
          }
        });

        // Update model dropdown for new provider
        updateModelDropdowns(value);

        // Save to localStorage immediately
        localStorage.setItem('selectedProvider', value);
        localStorage.setItem('selectedModel', selectedModel);

        dropdown.classList.remove('open');
      });
    });
  });

  // Model selector dropdowns
  ['homeModelDropdown', 'chatModelDropdown'].forEach(id => {
    const dropdown = document.getElementById(id);
    if (!dropdown) return;

    const btn = dropdown.querySelector('.model-selector');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeOtherDropdowns(dropdown);
      dropdown.classList.toggle('open');
    });

    // Event delegation for model items (since they're dynamically updated)
    dropdown.querySelector('.model-menu').addEventListener('click', (e) => {
      const item = e.target.closest('.dropdown-item');
      if (!item) return;

      const value = item.dataset.value;
      if (!value) return;

      const label = item.querySelector('.item-label').textContent;
      selectedModel = value;

      // Update all model selectors
      document.querySelectorAll('.model-selector .model-label').forEach(l => {
        l.textContent = label;
      });

      // Update selected state and checkmarks
      document.querySelectorAll('.model-menu .dropdown-item').forEach(i => {
        const isSelected = i.dataset.value === value;
        i.classList.toggle('selected', isSelected);

        // Update checkmark visibility
        const checkIcon = i.querySelector('.check-icon');
        if (checkIcon) {
          checkIcon.style.display = isSelected ? 'block' : 'none';
        }
      });

      // Save to localStorage immediately
      localStorage.setItem('selectedModel', value);

      dropdown.classList.remove('open');
    });
  });
}

// Update model dropdowns based on selected provider
function updateModelDropdowns(provider) {
  const models = providerModels[provider] || providerModels.claude;

  // Find default model for this provider
  const defaultModel = models.find(m => m.default) || models[0];
  selectedModel = defaultModel.value;

  // Save to localStorage
  localStorage.setItem('selectedModel', selectedModel);

  // Generate HTML for model items
  const modelItemsHtml = models.map(model => `
    <div class="dropdown-item${model.default ? ' selected' : ''}" data-value="${model.value}">
      <div class="item-row">
        <span class="item-label">${model.label}</span>
        ${model.default ? `<svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>` : ''}
      </div>
      <span class="item-desc">${model.desc}</span>
    </div>
  `).join('');

  // Update both model menus
  document.querySelectorAll('.model-menu').forEach(menu => {
    menu.innerHTML = modelItemsHtml;
    menu.dataset.provider = provider;
  });

  // Update model label in selectors
  document.querySelectorAll('.model-selector .model-label').forEach(l => {
    l.textContent = defaultModel.label;
  });
}

// Close other dropdowns
function closeOtherDropdowns(currentDropdown) {
  document.querySelectorAll('.dropdown-container.open').forEach(d => {
    if (d !== currentDropdown) d.classList.remove('open');
  });
}

// Handle file selection
function handleFileSelect(event, context) {
  const files = Array.from(event.target.files);
  files.forEach(file => {
    if (attachedFiles.length >= 5) {
      alert('Maximum 5 files allowed');
      return;
    }

    if (file.type && file.type.startsWith('image/')) {
      alert('Images are not supported yet. Please attach text-based files.');
      return;
    }

    if (file.size > 200 * 1024) {
      alert(`"${file.name}" is larger than 200KB and will be truncated before sending.`);
    }

    // Read file as text (v1: text-only attachments)
    const reader = new FileReader();
    reader.onload = (e) => {
      attachedFiles.push({
        name: file.name,
        mime: file.type || 'text/plain',
        size: file.size,
        content: e.target.result
      });
      renderAttachedFiles(context);
    };

    reader.readAsText(file);
  });

  // Reset input
  event.target.value = '';
}

// Render attached files preview
function renderAttachedFiles(context) {
  const inputWrapper = context === 'home'
    ? document.querySelector('#homeForm .input-wrapper')
    : document.querySelector('#chatForm .input-wrapper');

  let filesContainer = inputWrapper.querySelector('.attached-files');
  if (!filesContainer) {
    filesContainer = document.createElement('div');
    filesContainer.className = 'attached-files';
    inputWrapper.insertBefore(filesContainer, inputWrapper.firstChild);
  }

  filesContainer.innerHTML = attachedFiles.map((file, index) => `
    <div class="attached-file">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
      <span>${file.name}</span>
      <svg class="remove-file" onclick="removeAttachedFile(${index}, '${context}')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  `).join('');

  if (attachedFiles.length === 0) {
    filesContainer.remove();
  }
}

// Remove attached file
window.removeAttachedFile = function(index, context) {
  attachedFiles.splice(index, 1);
  renderAttachedFiles(context);
}

// Toggle sidebar (right sidebar)
function toggleSidebar() {
  sidebar.classList.toggle('collapsed');
  const isCollapsed = sidebar.classList.contains('collapsed');

  rightSidebarExpand.classList.toggle('visible', isCollapsed);

  const icon = sidebarToggle.querySelector('svg');
  if (isCollapsed) {
    icon.innerHTML = '<polyline points="15 18 9 12 15 6"></polyline>';
    sidebarToggle.title = 'Expand sidebar';
  } else {
    icon.innerHTML = '<polyline points="9 18 15 12 9 6"></polyline>';
    sidebarToggle.title = 'Collapse sidebar';
  }
}

// Toggle left sidebar (chat history)
function toggleLeftSidebar() {
  leftSidebar.classList.toggle('collapsed');
  const isCollapsed = leftSidebar.classList.contains('collapsed');

  leftSidebarExpand.classList.toggle('visible', isCollapsed);

  // Update toggle button icon direction
  const icon = leftSidebarToggle.querySelector('svg');
  if (isCollapsed) {
    icon.innerHTML = '<polyline points="9 18 15 12 9 6"></polyline>';
    leftSidebarToggle.title = 'Expand sidebar';
  } else {
    icon.innerHTML = '<polyline points="15 18 9 12 15 6"></polyline>';
    leftSidebarToggle.title = 'Collapse sidebar';
  }
}

// Update send button state
function updateSendButton(input, button) {
  if (isWaitingForResponse) {
    // In streaming mode - show stop icon and enable button
    button.disabled = false;
    button.classList.add('streaming');
    const sendIcon = button.querySelector('.send-icon');
    const stopIcon = button.querySelector('.stop-icon');
    if (sendIcon) sendIcon.classList.add('hidden');
    if (stopIcon) stopIcon.classList.remove('hidden');
  } else {
    // Normal mode - show send icon
    button.disabled = !input.value.trim();
    button.classList.remove('streaming');
    const sendIcon = button.querySelector('.send-icon');
    const stopIcon = button.querySelector('.stop-icon');
    if (sendIcon) sendIcon.classList.remove('hidden');
    if (stopIcon) stopIcon.classList.add('hidden');
  }
}

// Stop the current streaming query
async function stopCurrentQuery() {
  if (!isWaitingForResponse || !currentChatId) return;

  console.log('[Chat] Stopping query for chatId:', currentChatId);

  // Abort the client-side fetch
  window.electronAPI.abortCurrentRequest();

  // Tell the backend to stop processing
  await window.electronAPI.stopQuery(currentChatId, selectedProvider);

  // Reset state
  isWaitingForResponse = false;
  updateSendButton(messageInput, chatSendBtn);
  updateSendButton(homeInput, homeSendBtn);

  // Remove loading indicator from last assistant message
  const lastMessage = chatMessages.lastElementChild;
  if (lastMessage && lastMessage.classList.contains('assistant')) {
    const loadingIndicator = lastMessage.querySelector('.loading-indicator');
    if (loadingIndicator) loadingIndicator.remove();

    // Add a note that the response was stopped
    const contentDiv = lastMessage.querySelector('.message-content');
    if (contentDiv) {
      const stoppedNote = document.createElement('p');
      stoppedNote.style.color = '#888';
      stoppedNote.style.fontStyle = 'italic';
      stoppedNote.textContent = '[Response stopped]';
      contentDiv.appendChild(stoppedNote);
    }
  }

  saveState();
}

// Handle key press
function handleKeyPress(e, form) {
  if (e.key !== 'Enter') return;

  if (requireCmdEnter) {
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault();
      form.dispatchEvent(new Event('submit'));
    }
    return;
  }

  if (!e.shiftKey) {
    e.preventDefault();
    form.dispatchEvent(new Event('submit'));
  }
}


function autoResizeTextarea(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
}

// Reset textarea height after sending
function resetTextareaHeight(textarea) {
  textarea.style.height = 'auto';
}

// Switch to chat view
function switchToChatView() {
  setActiveView('chat');
  showChatWorkspace();
}

// Handle form submission
async function handleSendMessage(e) {
  e.preventDefault();

  const input = isFirstMessage ? homeInput : messageInput;
  const message = input.value.trim();

  if (!message) {
    if (isWaitingForResponse) {
      await stopCurrentQuery();
    }
    return;
  }

  if (isWaitingForResponse) {
    if (followUpBehavior === 'queue') {
      queuePendingMessage(message);
      input.value = '';
      resetTextareaHeight(input);
      updateSendButton(homeInput, homeSendBtn);
      updateSendButton(messageInput, chatSendBtn);
      return;
    }
    await stopCurrentQuery();
  }

  input.value = '';
  resetTextareaHeight(input);
  await sendMessageInternal(message);
}

function queuePendingMessage(message) {
  const attachmentsForRequest = attachedFiles.slice(0, 5).map(file => ({
    name: file.name,
    mime: file.mime || 'text/plain',
    content: typeof file.content === 'string' ? file.content : ''
  }));
  const usePinnedMemory = usePinnedMemoryInChat;

  // Clear attachments immediately when queueing (do not persist in localStorage).
  attachedFiles = [];
  document.querySelectorAll('.attached-files').forEach(el => el.remove());

  pendingMessages.push({ message, attachments: attachmentsForRequest, usePinnedMemory });
  console.log(`[Chat] Queued message (${pendingMessages.length} pending)`);
}

async function processQueuedMessages() {
  if (isWaitingForResponse) return;
  if (pendingMessages.length === 0) return;
  const next = pendingMessages.shift();
  if (next) {
    const msg = typeof next === 'string' ? next : next.message;
    const opts = typeof next === 'string' ? null : { attachments: next.attachments, usePinnedMemory: next.usePinnedMemory };
    await sendMessageInternal(msg, opts);
  }
}

async function sendMessageInternal(message, options = null) {
  if (isFirstMessage) {
    // Always generate a new ID for a new conversation
    currentChatId = generateId();
    currentChatCreatedAt = Date.now();
    switchToChatView();
    isFirstMessage = false;
    chatTitle.textContent = message.length > 30 ? message.substring(0, 30) + '...' : message;
  } else if (!currentChatId) {
    currentChatId = generateId();
    currentChatCreatedAt = Date.now();
    chatTitle.textContent = message.length > 30 ? message.substring(0, 30) + '...' : message;
  }

  const attachmentsForRequest = (options?.attachments || attachedFiles.slice(0, 5)).map(file => ({
    name: file.name,
    mime: file.mime || 'text/plain',
    content: typeof file.content === 'string' ? file.content : ''
  }));
  const usePinnedMemory = options?.usePinnedMemory ?? usePinnedMemoryInChat;

  // Clear attachments after queueing them for this request (do not persist in localStorage).
  attachedFiles = [];
  document.querySelectorAll('.attached-files').forEach(el => el.remove());

  // Add user message
  addUserMessage(message);

  // Set loading state
  isWaitingForResponse = true;

  // Update buttons to show stop icon
  updateSendButton(homeInput, homeSendBtn);
  updateSendButton(messageInput, chatSendBtn);

  // Create assistant message with loading state
  const assistantMessage = createAssistantMessage();
  const contentDiv = assistantMessage.querySelector('.message-content');

  // Declare heartbeatChecker outside try block so it's accessible in finally
  let heartbeatChecker = null;

  try {
    console.log('[Chat] Sending message to API...');
    // Pass chatId, provider, and model for session management
    const response = await window.electronAPI.sendMessage(message, currentChatId, selectedProvider, selectedModel, {
      attachments: attachmentsForRequest,
      usePinnedMemory
    });
    console.log('[Chat] Response received');

    const reader = await response.getReader();
    let buffer = '';
    let hasContent = false;
    let receivedStreamingText = false;
    const pendingToolCalls = new Map();

    let lastHeartbeat = Date.now();
    const heartbeatTimeout = 300000;
    let connectionLost = false;

    heartbeatChecker = setInterval(() => {
      const timeSinceLastHeartbeat = Date.now() - lastHeartbeat;
      if (timeSinceLastHeartbeat > heartbeatTimeout) {
        console.warn('[Chat] No data received for 5 minutes - connection may be lost');
      }
    }, 30000); 

    try {
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          console.log('[Chat] Stream complete');
          clearInterval(heartbeatChecker);
          const loadingIndicator = contentDiv.querySelector('.loading-indicator');
          if (loadingIndicator && hasContent) {
            loadingIndicator.remove();
          }
          const actionsDiv = assistantMessage.querySelector('.message-actions');
          if (actionsDiv) {
            actionsDiv.classList.remove('hidden');
          }
          for (const [apiId, localId] of pendingToolCalls) {
            updateToolCallStatus(localId, 'success');
          }
          break;
        }

        lastHeartbeat = Date.now();

        buffer += value;
        const lines = buffer.split('\n');
        buffer = lines[lines.length - 1];

        for (let i = 0; i < lines.length - 1; i++) {
          const line = lines[i];

          // Detect heartbeat comments from server
          if (line.startsWith(':')) {
            continue; // Skip SSE comments (heartbeats)
          }

          if (line.startsWith('data: ')) {
          try {
            const jsonStr = line.slice(6);
            const data = JSON.parse(jsonStr);

            // Debug: log all received events
            console.log('[Frontend] Received event:', data.type, data.name || '');

            if (data.type === 'done') {
              break;
            } else if (data.type === 'text' && data.content) {
              if (!hasContent) {
                const loadingIndicator = contentDiv.querySelector('.loading-indicator');
                if (loadingIndicator) loadingIndicator.remove();
              }
              hasContent = true;
              receivedStreamingText = true;
              if (data.isReasoning) {
                appendToThinking(contentDiv, data.content);
              } else {
                appendToContent(contentDiv, data.content);
              }
            } else if (data.type === 'tool_use') {
              const toolName = data.name || data.tool || 'Tool';
              const toolInput = data.input || {};
              const apiId = data.id; // API's tool ID
              const toolCall = addToolCall(toolName, toolInput, 'running');
              addInlineToolCall(contentDiv, toolName, toolInput, toolCall.id);
              if (apiId) {
                pendingToolCalls.set(apiId, toolCall.id);
              }

              if (toolName === 'TodoWrite' && toolInput.todos) {
                updateTodos(toolInput.todos);
              }

              hasContent = true;
            } else if (data.type === 'tool_result' || data.type === 'result') {
              const result = data.result || data.content || data;
              const apiId = data.tool_use_id;

              // Find the matching tool call by API ID
              const localId = apiId ? pendingToolCalls.get(apiId) : null;
              if (localId) {
                updateToolCallResult(localId, result);
                updateToolCallStatus(localId, 'success');
                updateInlineToolResult(localId, result);
                pendingToolCalls.delete(apiId);
              }

              if (!hasContent) {
                const loadingIndicator = contentDiv.querySelector('.loading-indicator');
                if (loadingIndicator) loadingIndicator.remove();
              }
              hasContent = true;
            } else if (data.type === 'assistant' && data.message) {
              if (data.message.content && Array.isArray(data.message.content)) {
                for (const block of data.message.content) {
                  if (block.type === 'tool_use') {
                    const toolName = block.name || 'Tool';
                    const toolInput = block.input || {};
                    const apiId = block.id; // API's tool ID
                    const toolCall = addToolCall(toolName, toolInput, 'running');
                    addInlineToolCall(contentDiv, toolName, toolInput, toolCall.id);
                    if (apiId) {
                      pendingToolCalls.set(apiId, toolCall.id);
                    }
                    hasContent = true;
                  } else if (block.type === 'text' && block.text) {
                    if (!receivedStreamingText) {
                      if (!hasContent) {
                        const loadingIndicator = contentDiv.querySelector('.loading-indicator');
                        if (loadingIndicator) loadingIndicator.remove();
                      }
                      hasContent = true;
                      appendToContent(contentDiv, block.text);
                    }
                  }
                }
              }

              if (data.message.content && Array.isArray(data.message.content)) {
                for (const block of data.message.content) {
                  if (block.type === 'tool_use' && block.name === 'TodoWrite') {
                    updateTodos(block.input.todos);
                  }
                }
              }
            }

            scrollToBottom();
          } catch (parseError) {
            // Silent fail on parse errors
          }
        }
      }
      }
    } catch (readerError) {
      console.error('[Chat] Reader error:', readerError);
      clearInterval(heartbeatChecker);
      throw readerError; // Re-throw to outer catch
    }
  } catch (error) {
    clearInterval(heartbeatChecker);

    // Don't show error for aborted requests (user clicked stop or switched chats)
    if (error?.name === 'AbortError' || error?.message?.includes('aborted') || error?.message?.includes('abort')) {
      console.log('[Chat] Request was aborted');
      return;
    }

    // Skip showing error if message is undefined or empty (likely an abort)
    if (!error?.message) {
      console.log('[Chat] Request ended without error message (likely aborted)');
      return;
    }

    console.error('[Chat] Error sending message:', error);
    const loadingIndicator = contentDiv.querySelector('.loading-indicator');
    if (loadingIndicator) loadingIndicator.remove();

    const paragraph = document.createElement('p');
    paragraph.textContent = `Error: ${error.message}`;
    paragraph.style.color = '#c0392b';
    contentDiv.appendChild(paragraph);
  } finally {
    if (heartbeatChecker) {
      clearInterval(heartbeatChecker);
    }
    isWaitingForResponse = false;
    saveState();
    updateSendButton(messageInput, chatSendBtn);
    updateSendButton(homeInput, homeSendBtn);
    messageInput.focus();
    processQueuedMessages();
  }
}

// Add user message to chat
function addUserMessage(text) {
  // Handle browser transition before adding message
  handleBrowserTransitionOnMessage();

  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user';

  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.textContent = text;

  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  scrollToBottom();
  saveState();
}

// Create assistant message with loading state
function createAssistantMessage() {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message assistant';

  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';

  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading-indicator';
  loadingDiv.innerHTML = `
    <svg class="loading-asterisk" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `;

  contentDiv.appendChild(loadingDiv);

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'message-actions hidden';
  actionsDiv.innerHTML = `
    <button class="action-btn" title="Copy" onclick="copyMessage(this)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  `;

  messageDiv.appendChild(contentDiv);
  messageDiv.appendChild(actionsDiv);
  chatMessages.appendChild(messageDiv);
  scrollToBottom();
  saveState();

  return messageDiv;
}

function appendToContent(contentDiv, content) {
  if (!contentDiv.dataset.rawContent) {
    contentDiv.dataset.rawContent = '';
  }
  contentDiv.dataset.rawContent += content;

  // Get current chunk container and append to it
  const container = getCurrentMarkdownContainer(contentDiv);
  container.dataset.rawContent += content;
  renderMarkdownContainer(container);

  // Check for Anchor Browser live URL in content
  const browserInfo = extractBrowserUrl(contentDiv.dataset.rawContent);
  if (browserInfo && !activeBrowserSession) {
    addInlineBrowserEmbed(contentDiv, browserInfo.url, browserInfo.sessionId);
  }

  saveState();
}

function appendToThinking(contentDiv, content) {
  // Find or create thinking section (collapsible, above main content)
  let thinkingSection = contentDiv.querySelector('.thinking-section');

  if (!thinkingSection) {
    thinkingSection = document.createElement('details');
    thinkingSection.className = 'thinking-section';
    thinkingSection.open = false; // Collapsed by default

    const summary = document.createElement('summary');
    summary.className = 'thinking-header';
    summary.innerHTML = '<span class="thinking-icon">&#x1F4AD;</span> Thinking...';
    thinkingSection.appendChild(summary);

    const thinkingContent = document.createElement('div');
    thinkingContent.className = 'thinking-content';
    thinkingContent.dataset.rawContent = '';
    thinkingSection.appendChild(thinkingContent);

    // Insert at the beginning of contentDiv
    contentDiv.insertBefore(thinkingSection, contentDiv.firstChild);
  }

  const thinkingContent = thinkingSection.querySelector('.thinking-content');
  thinkingContent.dataset.rawContent += content;

  // Render as plain text (no markdown for thinking)
  thinkingContent.textContent = thinkingContent.dataset.rawContent;

  // Update header to show it's still thinking
  const summary = thinkingSection.querySelector('.thinking-header');
  const thinkingLength = thinkingContent.dataset.rawContent.length;
  summary.innerHTML = `<span class="thinking-icon">&#x1F4AD;</span> Thinking (${thinkingLength} chars)`;
}

// Start a new chat
window.startNewChat = function() {
  // Abort any ongoing request from the previous chat
  if (isWaitingForResponse) {
    window.electronAPI.abortCurrentRequest();
    isWaitingForResponse = false;
  }

  if (currentChatId && chatMessages.children.length > 0) {
    saveState();
  }

  currentChatId = null;
  currentChatCreatedAt = null;

  // Clear all state
  chatMessages.innerHTML = '';
  messageInput.value = '';
  homeInput.value = '';
  chatTitle.textContent = 'New chat';
  isFirstMessage = true;
  todos = [];
  toolCalls = [];
  attachedFiles = [];
  document.querySelectorAll('.attached-files').forEach(el => el.remove());

  // Reset sidebar
  stepsList.innerHTML = '';
  emptySteps.style.display = 'block';
  stepsCount.textContent = '0 steps';
  toolCallsList.innerHTML = '';
  emptyTools.style.display = 'block';

  // Switch back to home view
  if (currentView === 'chat') {
    showChatWorkspace();
    homeInput.focus();
  }

  // Clear currentChatId from localStorage
  localStorage.removeItem('currentChatId');

  // Update chat history display
  renderChatHistory();

  // Update send button states to ensure they're enabled
  updateSendButton(homeInput, homeSendBtn);
  updateSendButton(messageInput, chatSendBtn);
}

// Get or create the current markdown container for streaming
function getCurrentMarkdownContainer(contentDiv) {
  const chunkIndex = parseInt(contentDiv.dataset.currentChunk || '0');
  let container = contentDiv.querySelector(`.markdown-content[data-chunk="${chunkIndex}"]`);

  if (!container) {
    container = document.createElement('div');
    container.className = 'markdown-content';
    container.dataset.chunk = chunkIndex;
    container.dataset.rawContent = '';
    contentDiv.appendChild(container);
  }

  return container;
}

// Render markdown content for a specific container
function renderMarkdownContainer(container) {
  const rawContent = container.dataset.rawContent || '';

  marked.setOptions({
    breaks: true,
    gfm: true
  });

  container.innerHTML = marked.parse(rawContent);
}

// Legacy function for restoring saved messages
function renderMarkdown(contentDiv) {
  const rawContent = contentDiv.dataset.rawContent || '';

  marked.setOptions({
    breaks: true,
    gfm: true
  });

  let markdownContainer = contentDiv.querySelector('.markdown-content');
  if (!markdownContainer) {
    markdownContainer = document.createElement('div');
    markdownContainer.className = 'markdown-content';
    contentDiv.appendChild(markdownContainer);
  }

  markdownContainer.innerHTML = marked.parse(rawContent);
}

function formatToolPreview(toolInput) {
  if (!toolInput || typeof toolInput !== 'object') {
    return String(toolInput || '').substring(0, 50);
  }

  const keys = Object.keys(toolInput);
  if (keys.length === 0) return '';

  const previewKeys = ['pattern', 'command', 'file_path', 'path', 'query', 'content', 'description'];
  const key = previewKeys.find(k => toolInput[k]) || keys[0];
  const value = toolInput[key];

  if (typeof value === 'string') {
    return `${key}: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}`;
  } else if (Array.isArray(value)) {
    return `${key}: [${value.length} items]`;
  } else if (typeof value === 'object') {
    return `${key}: {...}`;
  }
  return `${key}: ${String(value).substring(0, 30)}`;
}

// Add inline tool call to message (maintains correct order in stream)
function addInlineToolCall(contentDiv, toolName, toolInput, toolId) {
  const toolDiv = document.createElement('div');
  toolDiv.className = 'inline-tool-call expanded'; // Show expanded by default
  toolDiv.dataset.toolId = toolId;

  const inputPreview = formatToolPreview(toolInput);
  const inputStr = JSON.stringify(toolInput, null, 2);

  toolDiv.innerHTML = `
    <div class="inline-tool-header" onclick="toggleInlineToolCall(this)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
      <span class="tool-name">${toolName}</span>
      <span class="tool-preview">${inputPreview}</span>
      <svg class="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
    <div class="inline-tool-result">
      <div class="tool-section">
        <div class="tool-section-label">Input</div>
        <pre>${escapeHtml(inputStr)}</pre>
      </div>
      <div class="tool-section tool-output-section" style="display: none;">
        <div class="tool-section-label">Output</div>
        <pre class="tool-output-content"></pre>
      </div>
    </div>
  `;

  // Append tool call at end (in stream order)
  contentDiv.appendChild(toolDiv);

  // Increment chunk counter so next text creates a new markdown container
  const currentChunk = parseInt(contentDiv.dataset.currentChunk || '0');
  contentDiv.dataset.currentChunk = currentChunk + 1;
}

// Update inline tool result
function updateInlineToolResult(toolId, result) {
  const toolDiv = document.querySelector(`.inline-tool-call[data-tool-id="${toolId}"]`);
  if (toolDiv) {
    const outputSection = toolDiv.querySelector('.tool-output-section');
    const outputContent = toolDiv.querySelector('.tool-output-content');
    if (outputSection && outputContent) {
      const resultStr = typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result);
      outputContent.textContent = resultStr.substring(0, 2000) + (resultStr.length > 2000 ? '...' : '');
      outputSection.style.display = 'block';

      // Check for Anchor Browser live URL in tool result
      const browserInfo = extractBrowserUrl(resultStr);
      if (browserInfo) {
        // Find the parent content div and add browser embed
        const contentDiv = toolDiv.closest('.message-content');
        if (contentDiv) {
          addInlineBrowserEmbed(contentDiv, browserInfo.url, browserInfo.sessionId);
        }
      }
    }
  }
}

// Toggle inline tool call expansion
window.toggleInlineToolCall = function(header) {
  const toolDiv = header.closest('.inline-tool-call');
  toolDiv.classList.toggle('expanded');
};

// Add tool call to sidebar
function addToolCall(name, input, status = 'running') {
  const id = 'tool_' + Date.now();
  const toolCall = { id, name, input, status, result: null };
  toolCalls.push(toolCall);

  emptyTools.style.display = 'none';

  const toolDiv = document.createElement('div');
  toolDiv.className = 'tool-call-item expanded'; // Show expanded by default
  toolDiv.dataset.toolId = id;

  toolDiv.innerHTML = `
    <div class="tool-call-header" onclick="toggleToolCall(this)">
      <div class="tool-call-icon ${status}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      </div>
      <div class="tool-call-info">
        <div class="tool-call-name">${name}</div>
        <div class="tool-call-status">${status === 'running' ? 'Running...' : 'Completed'}</div>
      </div>
      <div class="tool-call-expand">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <div class="tool-call-details">
      <div class="tool-detail-section">
        <div class="tool-detail-label">Input</div>
        <pre>${escapeHtml(JSON.stringify(input, null, 2))}</pre>
      </div>
      <div class="tool-detail-section tool-output-section" style="display: none;">
        <div class="tool-detail-label">Output</div>
        <pre class="sidebar-tool-output"></pre>
      </div>
    </div>
  `;

  toolCallsList.appendChild(toolDiv);
  return toolCall;
}

// Update tool call status
function updateToolCallStatus(toolId, status) {
  const toolDiv = document.querySelector(`.tool-call-item[data-tool-id="${toolId}"]`);
  if (toolDiv) {
    const icon = toolDiv.querySelector('.tool-call-icon');
    const statusText = toolDiv.querySelector('.tool-call-status');

    icon.className = `tool-call-icon ${status}`;
    statusText.textContent = status === 'success' ? 'Completed' : status === 'error' ? 'Failed' : 'Running...';
  }

  // Update in state
  const toolCall = toolCalls.find(t => t.id === toolId);
  if (toolCall) {
    toolCall.status = status;
  }
}

// Update tool call result
function updateToolCallResult(toolId, result) {
  const toolCall = toolCalls.find(t => t.id === toolId);
  if (toolCall) {
    toolCall.result = result;
  }

  // Update sidebar tool output
  const toolDiv = document.querySelector(`.tool-call-item[data-tool-id="${toolId}"]`);
  if (toolDiv) {
    const outputSection = toolDiv.querySelector('.tool-output-section');
    const outputContent = toolDiv.querySelector('.sidebar-tool-output');
    if (outputSection && outputContent) {
      const resultStr = typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result);
      outputContent.textContent = resultStr.substring(0, 2000) + (resultStr.length > 2000 ? '...' : '');
      outputSection.style.display = 'block';
    }
  }
}

// Toggle tool call expansion in sidebar
window.toggleToolCall = function(header) {
  const toolDiv = header.closest('.tool-call-item');
  toolDiv.classList.toggle('expanded');
};

// Update todos from TodoWrite
function updateTodos(newTodos) {
  todos = newTodos;
  renderTodos();
}

// Render todos in sidebar
function renderTodos() {
  stepsList.innerHTML = '';

  if (todos.length === 0) {
    emptySteps.style.display = 'block';
    stepsCount.textContent = '0 steps';
    return;
  }

  emptySteps.style.display = 'none';
  stepsCount.textContent = `${todos.length} steps`;

  todos.forEach((todo) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step-item';

    const statusIcon = todo.status === 'completed'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>'
      : todo.status === 'in_progress'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>'
      : '';

    const displayText = todo.status === 'in_progress' ? (todo.activeForm || todo.content) : todo.content;

    stepDiv.innerHTML = `
      <div class="step-status ${todo.status}">${statusIcon}</div>
      <div class="step-content">
        <div class="step-text">${escapeHtml(displayText)}</div>
      </div>
    `;

    stepsList.appendChild(stepDiv);
  });
}

// Escape HTML for safe display
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Copy message to clipboard
function copyMessage(button) {
  const messageDiv = button.closest('.message');
  const contentDiv = messageDiv.querySelector('.message-content');
  const text = contentDiv.dataset.rawContent || contentDiv.textContent;

  navigator.clipboard.writeText(text).then(() => {
    button.style.color = '#27ae60';
    setTimeout(() => {
      button.style.color = '';
    }, 1000);
  });
}

window.copyMessage = copyMessage;

// Get conversation history for context
function getConversationHistory() {
  const messages = Array.from(chatMessages.children);
  const history = [];

  // Skip the last message (current assistant loading state)
  for (let i = 0; i < messages.length - 1; i++) {
    const msg = messages[i];
    const contentDiv = msg.querySelector('.message-content');
    if (!contentDiv) continue;

    const content = contentDiv.dataset.rawContent || contentDiv.textContent || '';
    if (!content.trim()) continue;

    if (msg.classList.contains('user')) {
      history.push({ role: 'user', content });
    } else if (msg.classList.contains('assistant')) {
      history.push({ role: 'assistant', content });
    }
  }

  return history;
}

// Scroll to bottom of messages
function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ==================== BROWSER EMBED FUNCTIONS ====================

// Check if a string contains an Anchor Browser live URL
function extractBrowserUrl(text) {
  const regex = /https:\/\/live\.anchorbrowser\.io\?sessionId=([a-f0-9-]+)/i;
  const match = text.match(regex);
  if (match) {
    return { url: match[0], sessionId: match[1] };
  }
  return null;
}

// Create inline browser embed in chat
function addInlineBrowserEmbed(contentDiv, url, sessionId) {
  // Remove any existing inline browser embeds (only one at a time)
  const existingEmbed = document.querySelector('.inline-browser-embed');
  if (existingEmbed) {
    existingEmbed.remove();
  }

  const browserDiv = document.createElement('div');
  browserDiv.className = 'inline-browser-embed';
  browserDiv.dataset.sessionId = sessionId;
  browserDiv.dataset.url = url;

  browserDiv.innerHTML = `
    <div class="browser-embed-header">
      <div class="browser-header-left">
        <svg class="browser-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span class="browser-title">Live Browser</span>
        <span class="browser-session-badge">Session Active</span>
      </div>
      <div class="browser-header-actions">
        <button class="browser-action-btn" onclick="openBrowserInNewWindow('${url}')" title="Open in new window">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </button>
        <button class="browser-action-btn" onclick="moveBrowserToSidebar()" title="Move to sidebar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="15" y1="3" x2="15" y2="21"></line>
          </svg>
        </button>
        <button class="browser-action-btn browser-fullscreen-btn" onclick="toggleBrowserFullscreen(this)" title="Fullscreen">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>
      </div>
    </div>
    <div class="browser-embed-content">
      <iframe
        src="${url}"
        class="browser-iframe"
        allow="clipboard-read; clipboard-write; camera; microphone"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
      ></iframe>
    </div>
    <div class="browser-embed-footer">
      <span class="browser-url">${url}</span>
      <button class="browser-copy-url" onclick="copyBrowserUrl('${url}')" title="Copy URL">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
  `;

  // Store active session
  activeBrowserSession = {
    url: url,
    sessionId: sessionId,
    inlineElement: browserDiv
  };
  browserDisplayMode = 'inline';

  // Append to content
  contentDiv.appendChild(browserDiv);

  // Increment chunk counter
  const currentChunk = parseInt(contentDiv.dataset.currentChunk || '0');
  contentDiv.dataset.currentChunk = currentChunk + 1;

  scrollToBottom();
}

// Move browser from inline to sidebar
function moveBrowserToSidebar() {
  if (!activeBrowserSession) return;

  // Remove inline embed
  if (activeBrowserSession.inlineElement) {
    activeBrowserSession.inlineElement.remove();
  }

  // Show browser in sidebar
  showBrowserInSidebar(activeBrowserSession.url, activeBrowserSession.sessionId);
  browserDisplayMode = 'sidebar';
}

// Show browser in sidebar panel
function showBrowserInSidebar(url, sessionId) {
  // Check if browser section already exists
  let browserSection = document.getElementById('browserSection');

  if (!browserSection) {
    // Create browser section in sidebar
    browserSection = document.createElement('div');
    browserSection.id = 'browserSection';
    browserSection.className = 'sidebar-section browser-section';
    browserSection.innerHTML = `
      <div class="section-header browser-section-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>Live Browser</span>
        <div class="browser-sidebar-actions">
          <button class="browser-sidebar-btn" onclick="moveBrowserToInline()" title="Show inline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>
          <button class="browser-sidebar-btn" onclick="closeBrowserSession()" title="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div class="browser-sidebar-content">
        <iframe
          src="${url}"
          class="browser-sidebar-iframe"
          allow="clipboard-read; clipboard-write; camera; microphone"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        ></iframe>
      </div>
    `;

    // Insert before tool calls section
    const toolCallsSection = sidebar.querySelector('.sidebar-section:last-child');
    sidebar.insertBefore(browserSection, toolCallsSection);
  } else {
    // Update existing iframe
    const iframe = browserSection.querySelector('.browser-sidebar-iframe');
    if (iframe) {
      iframe.src = url;
    }
  }

  // Ensure sidebar is visible
  sidebar.classList.remove('collapsed');

  // Update session reference
  activeBrowserSession = {
    ...activeBrowserSession,
    url: url,
    sessionId: sessionId,
    sidebarElement: browserSection
  };
}

// Move browser back to inline (in the last assistant message)
window.moveBrowserToInline = function() {
  if (!activeBrowserSession) return;

  // Remove from sidebar
  const browserSection = document.getElementById('browserSection');
  if (browserSection) {
    browserSection.remove();
  }

  // Find the last assistant message content div
  const lastAssistantMessage = chatMessages.querySelector('.message.assistant:last-child .message-content');
  if (lastAssistantMessage && activeBrowserSession.url) {
    addInlineBrowserEmbed(lastAssistantMessage, activeBrowserSession.url, activeBrowserSession.sessionId);
  }

  browserDisplayMode = 'inline';
}

// Close browser session
window.closeBrowserSession = function() {
  // Remove inline embed
  const inlineEmbed = document.querySelector('.inline-browser-embed');
  if (inlineEmbed) {
    inlineEmbed.remove();
  }

  // Remove sidebar section
  const browserSection = document.getElementById('browserSection');
  if (browserSection) {
    browserSection.remove();
  }

  activeBrowserSession = null;
  browserDisplayMode = 'hidden';
}

// Open browser in new window
window.openBrowserInNewWindow = function(url) {
  window.open(url, '_blank', 'width=1200,height=800');
}

// Toggle browser fullscreen
window.toggleBrowserFullscreen = function(button) {
  const embedDiv = button.closest('.inline-browser-embed');
  if (embedDiv) {
    embedDiv.classList.toggle('fullscreen');

    // Update icon
    const svg = button.querySelector('svg');
    if (embedDiv.classList.contains('fullscreen')) {
      svg.innerHTML = `
        <polyline points="4 14 10 14 10 20"></polyline>
        <polyline points="20 10 14 10 14 4"></polyline>
        <line x1="14" y1="10" x2="21" y2="3"></line>
        <line x1="3" y1="21" x2="10" y2="14"></line>
      `;
    } else {
      svg.innerHTML = `
        <polyline points="15 3 21 3 21 9"></polyline>
        <polyline points="9 21 3 21 3 15"></polyline>
        <line x1="21" y1="3" x2="14" y2="10"></line>
        <line x1="3" y1="21" x2="10" y2="14"></line>
      `;
    }
  }
}

// Copy browser URL
window.copyBrowserUrl = function(url) {
  navigator.clipboard.writeText(url).then(() => {
    // Show brief feedback
    const btn = document.querySelector('.browser-copy-url');
    if (btn) {
      btn.style.color = '#4ade80';
      setTimeout(() => {
        btn.style.color = '';
      }, 1000);
    }
  });
}

// Handle transition when user sends a new message while browser is inline
function handleBrowserTransitionOnMessage() {
  if (activeBrowserSession && browserDisplayMode === 'inline') {
    // Move browser to sidebar when user sends a new message
    moveBrowserToSidebar();
  }
}

// Initialize on load
window.addEventListener('load', init);
