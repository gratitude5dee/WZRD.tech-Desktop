(() => {
  const options = {
    breaks: true,
    gfm: true
  };

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function sanitizeUrl(rawUrl) {
    const input = String(rawUrl || '').trim();
    if (!input) return null;
    if (input.toLowerCase().startsWith('mailto:')) return input;
    if (!/^https?:\/\//i.test(input)) return null;
    try {
      const url = new URL(input);
      const protocol = url.protocol.toLowerCase();
      if (protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:') {
        return input;
      }
      return null;
    } catch (_err) {
      return null;
    }
  }

  function inlineFormat(text) {
    // Extract inline code + links as tokens, then escape and apply formatting.
    const codeTokens = [];
    const linkTokens = [];

    let raw = String(text || '');

    raw = raw.replace(/`([^`]+)`/g, (_m, code) => {
      const token = `@@INLINECODE_${codeTokens.length}@@`;
      codeTokens.push(`<code>${escapeHtml(code)}</code>`);
      return token;
    });

    raw = raw.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
      const token = `@@LINK_${linkTokens.length}@@`;
      const safe = sanitizeUrl(String(href || '').trim());
      const safeLabel = escapeHtml(label);
      if (!safe) {
        linkTokens.push(safeLabel);
      } else {
        const safeHref = escapeHtml(safe);
        linkTokens.push(`<a href="${safeHref}" target="_blank" rel="noreferrer">${safeLabel}</a>`);
      }
      return token;
    });

    let out = escapeHtml(raw);

    // Bold
    out = out.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/__([^_\n]+)__/g, '<strong>$1</strong>');

    // Italic (best-effort, avoid matching bold)
    out = out.replace(/(^|[\s(])\*([^*\n]+)\*([\s).,!?:]|$)/g, '$1<em>$2</em>$3');
    out = out.replace(/(^|[\s(])_([^_\n]+)_([\s).,!?:]|$)/g, '$1<em>$2</em>$3');

    // Restore tokens
    codeTokens.forEach((html, i) => {
      out = out.replaceAll(`@@INLINECODE_${i}@@`, html);
    });
    linkTokens.forEach((html, i) => {
      out = out.replaceAll(`@@LINK_${i}@@`, html);
    });

    return out;
  }

  function renderBlocks(raw) {
    // Extract fenced code blocks
    const codeBlocks = [];
    let text = String(raw || '').replace(/```(\w+)?\n([\s\S]*?)```/g, (_m, lang, code) => {
      const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
      const language = lang ? String(lang).toLowerCase() : '';
      const classAttr = language ? ` class="language-${escapeHtml(language)}"` : '';
      codeBlocks.push(`<pre><code${classAttr}>${escapeHtml(code)}</code></pre>`);
      return token;
    });

    const blocks = text.split(/\n{2,}/);
    const htmlBlocks = [];

    for (const block of blocks) {
      const trimmed = block.trim();
      if (!trimmed) continue;

      const codeMatch = trimmed.match(/^@@CODEBLOCK_(\d+)@@$/);
      if (codeMatch) {
        htmlBlocks.push(codeBlocks[Number(codeMatch[1])] || '');
        continue;
      }

      const lines = trimmed.split('\n');
      const isUl = lines.every((l) => /^[-*]\s+/.test(l));
      const isOl = lines.every((l) => /^\d+\.\s+/.test(l));

      if (isUl || isOl) {
        const tag = isOl ? 'ol' : 'ul';
        const items = lines
          .map((l) => l.replace(isOl ? /^\d+\.\s+/ : /^[-*]\s+/, ''))
          .map((l) => `<li>${inlineFormat(l)}</li>`)
          .join('');
        htmlBlocks.push(`<${tag}>${items}</${tag}>`);
        continue;
      }

      const paragraph = options.breaks ? trimmed.split('\n').map(inlineFormat).join('<br>') : inlineFormat(trimmed);
      htmlBlocks.push(`<p>${paragraph}</p>`);
    }

    // Restore code blocks embedded in paragraphs (rare)
    return htmlBlocks
      .join('\n')
      .replace(/@@CODEBLOCK_(\d+)@@/g, (_m, idx) => codeBlocks[Number(idx)] || '');
  }

  window.marked = {
    setOptions: (next) => Object.assign(options, next || {}),
    parse: (raw) => renderBlocks(String(raw || ''))
  };
})();
