/**
 * Screenshot helper for verification.
 *
 * Drives Chrome over the DevTools Protocol so we get real device emulation
 * (`Emulation.setDeviceMetricsOverride`) rather than a resized desktop window
 * — Chrome on Windows clamps `--window-size` to a minimum width, which
 * silently crops narrow captures and makes correct layouts look broken.
 *
 * Also reports horizontal overflow, which is the failure a screenshot alone
 * cannot distinguish from a cropped capture.
 *
 * Usage: node scripts/shot.mjs <url> <out.png> <width> <height> [--mobile]
 * Dev-only; not part of the app bundle.
 */
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const [url, out, w = '390', h = '844', ...flags] = process.argv.slice(2);
const width = Number(w);
const height = Number(h);
const mobile = flags.includes('--mobile');
const fullPage = flags.includes('--full');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9333 + Math.floor(width % 100);

const chrome = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=' + process.env.TEMP + '\\cdp-' + PORT,
  'about:blank',
]);

async function cdpTarget() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  throw new Error('Chrome did not expose a debugging target');
}

const ws = new WebSocket(await cdpTarget());
await new Promise((resolve) => (ws.onopen = resolve));

let id = 0;
const pending = new Map();
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result);
    pending.delete(msg.id);
  }
};

function send(method, params = {}) {
  const msgId = ++id;
  ws.send(JSON.stringify({ id: msgId, method, params }));
  return new Promise((resolve) => pending.set(msgId, resolve));
}

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width,
  height,
  deviceScaleFactor: 1,
  mobile,
  screenWidth: width,
  screenHeight: height,
});
if (mobile) {
  await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
}

await send('Page.navigate', { url });
await sleep(4500);

// Scroll the whole page so every IntersectionObserver reveal has fired,
// then return to the top before capturing.
await send('Runtime.evaluate', {
  expression: `(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 500));
  })()`,
  awaitPromise: true,
});

// Horizontal overflow report: the check a screenshot cannot make for us.
const { result } = await send('Runtime.evaluate', {
  expression: `(() => {
    const vw = document.documentElement.clientWidth;
    const offenders = [];
    for (const el of document.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0) continue;
      if (r.right > vw + 1 || r.left < -1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.getAttribute('class') || '').slice(0, 70),
          left: Math.round(r.left),
          right: Math.round(r.right),
        });
      }
    }
    return JSON.stringify({
      viewport: vw,
      scrollWidth: document.documentElement.scrollWidth,
      overflows: document.documentElement.scrollWidth > vw + 1,
      offenders: offenders.slice(0, 12),
    }, null, 2);
  })()`,
  returnByValue: true,
});
console.log(result.value);

const shot = await send('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: fullPage,
  ...(fullPage ? { clip: undefined } : {}),
});
writeFileSync(out, Buffer.from(shot.data, 'base64'));
console.log('wrote', out);

ws.close();
chrome.kill();
process.exit(0);
