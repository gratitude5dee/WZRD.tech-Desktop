# WZRD.tech Desktop (by 5‑Dee Studios)

A premium, liquid‑glass AI workspace for macOS (Electron) with:
- **Chat** (streaming + tool visibility)
- **Integrations** (live catalog from **Composio** + tool-router playground)
- **Automations** (cron scheduler + templates + run history)
- **Memory Vault** (local SQLite + pin-to-chat context)
- **Activity Feed** (workspace timeline)
- **Skills** + **Settings**
- **OpenClawd** (Beta) control center for the `clawd/` gateway

<p align="center">
  <img src="assets/wzrdtechlogo.png" alt="WZRD.tech" width="720" />
</p>

---

## Quick Start (Dev)

Requirements:
- macOS (Apple Silicon recommended)
- Node.js (works best on Node 20/22+)
- Xcode Command Line Tools (needed for native deps like `better-sqlite3`)

```bash
npm install
npm run dev
```

The desktop app starts the backend automatically on `http://localhost:3001`.

---

## Packaging (Unsigned macOS DMG)

```bash
npm run dist
```

Outputs:
- `dist/WZRD.tech by 5-Dee Studios-<version>-arm64.dmg`

Note:
- The DMG is **unsigned** / **not notarized**. Gatekeeper warnings are expected on first launch.

---

## Configuration (API Keys)

Open **Settings** inside the app and set:
- `ANTHROPIC_API_KEY` (required for Claude Agent SDK)
- `COMPOSIO_API_KEY` (required for live Composio integrations + tool routing)
- `OPENCODE_API_KEY` (optional, for Opencode provider)

Keys are saved locally to:
- `~/Library/Application Support/WZRD.tech/wzrdtech-settings.json`

The app also generates:
- `~/Library/Application Support/WZRD.tech/.env`
- `~/Library/Application Support/WZRD.tech/opencode.json`

---

## Local Data (SQLite)

All workspace data is stored locally in:
- `~/Library/Application Support/WZRD.tech/wzrdtech.db`

This includes:
- automations + automation run output history
- memory vault (including `pinned` items)
- skills, templates, settings, and other workspace lists

---

## Key Features

### Chat: Pinned Memory + Attachments
- **Pinned memory injection** (toggle in the chat send bar)
- **Text attachments** (`.md`, `.txt`, `.json`, etc.)
  - text-only in v1 (no vision/OCR)
  - attachments are kept **in-memory only** for the unsent message

### Integrations: Composio Live Catalog
- Integrations page loads a **live list from Composio** (cached server-side).
- Includes a **tool-router playground** to quickly validate prompts/tools.

### Automations: Templates + Run History
- Templates prefill the builder.
- “History” viewer shows run output with copy + jump-to-activity affordance.

### OpenClawd (Beta)
The **OpenClawd** page controls the `clawd/` gateway from the desktop app:
- start/stop/restart
- config editor saved to `~/Library/Application Support/WZRD.tech/clawd-config.json`
- live logs panel

OpenClawd is intentionally “Beta” because adapters/browser mode may require extra deps:
- WhatsApp: `@whiskeysockets/baileys`, `qrcode-terminal`, `pino`
- Telegram: `node-telegram-bot-api`
- Browser: `playwright`

---

## Troubleshooting

### Backend won’t start
- Ensure another process isn’t using port `3001`.
- Install Xcode Command Line Tools:
  - `xcode-select --install`

### Composio integrations show “Missing COMPOSIO_API_KEY”
- Add the key in Settings and click **Restart Backend**.

### Gatekeeper warning on DMG
- Expected for unsigned builds. After copying to Applications, you may need to right-click → Open once.

---

## Project Structure

```
.
├── main.js           # Electron main process (starts backend + window)
├── preload.js        # Safe renderer ↔ backend bridge
├── renderer/         # UI (views + styles)
├── server/           # Express backend + providers + SQLite
└── clawd/            # OpenClawd gateway (Beta)
```

