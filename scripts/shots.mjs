// README 스크린샷 — 2020 원본(/legacy/)과 리뉴얼 화면을 같은 크기로 찍습니다.
//   npm run build && npm run preview   (다른 터미널에서)
//   npm run shots                       (SHOTS_URL · CHROME 환경 변수로 바꿀 수 있어요)
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const URL = (process.env.SHOTS_URL ?? 'http://localhost:4321/zini/').replace(/\/?$/, '/');
const CHROME = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = 'docs/screenshots';
mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const desktop = { width: 1440, height: 900, deviceScaleFactor: 1 };
const phone = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true };

async function capture(page, name, width) {
  const png = await page.screenshot({ type: 'png' });
  await sharp(png)
    .resize({ width })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${OUT}/${name}.jpg`);
  console.log(`  ✓ ${OUT}/${name}.jpg`);
}

/** 페이지를 끝까지 한 번 내려 이미지·등장 애니메이션을 모두 깨운 뒤 맨 위로 돌아옵니다. */
async function warmUp(page) {
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto';
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
  });
  await sleep(900);
}

/** selector가 화면 위에서 offset px 아래 오도록 스크롤합니다. */
async function goto(page, selector, offset = 0, wait = 1400) {
  await page.evaluate(
    (sel, off) => {
      const el = document.querySelector(sel);
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - off);
    },
    selector,
    offset,
  );
  await sleep(wait);
}

async function open(browser, path, viewport) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.goto(URL + path, { waitUntil: 'networkidle0', timeout: 60_000 });
  await sleep(1200);
  return page;
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--hide-scrollbars', '--force-color-profile=srgb'],
});

try {
  // 2020 원본
  const before = await open(browser, 'legacy/index.html', desktop);
  await capture(before, 'before-home', 1440);
  const beforePhone = await open(browser, 'legacy/index.html', phone);
  await capture(beforePhone, 'before-mobile', 390);

  // 2026 리뉴얼 — 메인
  const home = await open(browser, '', desktop);
  await sleep(1200);
  await capture(home, 'after-hero', 1440);
  await warmUp(home);
  await goto(home, '#meet', 0);
  await capture(home, 'after-meet', 1440);
  await home.click('#tab-ninja');
  await sleep(1200);
  await capture(home, 'after-meet-ninja', 1440);
  await goto(home, '.stats', 0);
  await capture(home, 'after-stats', 1440);
  await goto(home, '.gels', -20);
  await capture(home, 'after-gels', 1440);

  // 서브 페이지
  const condom = await open(browser, 'condom.html', desktop);
  await capture(condom, 'after-condom', 1440);
  await warmUp(condom);
  await goto(condom, '#lineup', 40);
  await capture(condom, 'after-lineup', 1440);

  const sensual = await open(browser, 'sensual.html', desktop);
  await capture(sensual, 'after-sensual', 1440);

  const about = await open(browser, 'about.html', desktop);
  await warmUp(about);
  await goto(about, '.timeline', 260);
  await capture(about, 'after-about', 1440);

  const gallery = await open(browser, 'gallery.html', desktop);
  await warmUp(gallery);
  await goto(gallery, '#world-stage', 60);
  await capture(gallery, 'after-gallery', 1440);

  // 휴대폰
  const phoneHome = await open(browser, '', phone);
  await sleep(1200);
  await capture(phoneHome, 'mobile-hero', 390);
  await phoneHome.click('[data-menu-open]');
  await sleep(1400);
  await capture(phoneHome, 'mobile-menu', 390);

  const phoneCondom = await open(browser, 'condom.html', phone);
  await warmUp(phoneCondom);
  await goto(phoneCondom, '#lineup', 0);
  await capture(phoneCondom, 'mobile-lineup', 390);
} finally {
  await browser.close();
}
