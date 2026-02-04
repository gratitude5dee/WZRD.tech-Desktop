const baseUrl = process.env.WZRDTECH_SMOKE_URL || 'http://localhost:3001';

async function check(path) {
  const url = `${baseUrl}${path}`;
  const res = await fetch(url);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${path} failed: ${res.status} ${text.slice(0, 200)}`);
  }
  return { path, status: res.status };
}

async function main() {
  const results = [];
  results.push(await check('/api/health'));

  if (process.env.COMPOSIO_API_KEY) {
    results.push(await check('/api/composio/integrations'));
  } else {
    console.log('[SMOKE] COMPOSIO_API_KEY not set; skipping Composio endpoints');
  }

  results.forEach((r) => console.log(`[SMOKE] OK ${r.path} (${r.status})`));
}

main().catch((err) => {
  console.error('[SMOKE] FAILED', err);
  process.exit(1);
});

