import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = `${root}/public/demo`;
const baseUrl = 'http://127.0.0.1:3000';

async function waitForServer(url, timeoutMs = 120000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // keep polling
    }
    await delay(1000);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', ...options });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with code ${code}`));
      }
    });
  });
}

async function main() {
  await mkdir(outDir, { recursive: true });

  const server = spawn('npm', ['run', 'start', '--', '--hostname', '127.0.0.1', '--port', '3000'], {
    cwd: root,
    stdio: 'inherit',
  });

  try {
    await waitForServer(baseUrl);

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    await page.screenshot({ path: `${outDir}/01-hero-desktop.png` });
    await page.locator('article.section.span-6').first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${outDir}/02-how-it-works.png` });
    await page.locator('article.section.span-6').nth(1).scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${outDir}/03-tool-stack.png` });
    await page.locator('article.section.span-8').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${outDir}/04-builderbase-fit.png` });
    await page.locator('article.section.span-4').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${outDir}/05-demo-deliverables.png` });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${outDir}/06-hero-mobile.png` });

    await browser.close();

    await run('ffmpeg', [
      '-y',
      '-loop', '1', '-t', '24', '-i', `${outDir}/01-hero-desktop.png`,
      '-loop', '1', '-t', '24', '-i', `${outDir}/02-how-it-works.png`,
      '-loop', '1', '-t', '24', '-i', `${outDir}/03-tool-stack.png`,
      '-loop', '1', '-t', '24', '-i', `${outDir}/04-builderbase-fit.png`,
      '-loop', '1', '-t', '24', '-i', `${outDir}/05-demo-deliverables.png`,
      '-filter_complex', '[0:v][1:v][2:v][3:v][4:v]concat=n=5:v=1:a=0,format=yuv420p',
      '-r', '30',
      `${outDir}/trust-ledger-os-demo.mp4`,
    ]);
  } finally {
    server.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
