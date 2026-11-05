// 사이트에 실제로 쓰인 글자만 남긴 글꼴 파일을 만듭니다. (`npm run dev` / `npm run build` 전에 자동 실행)
//
// - Pretendard Variable: 한글·본문용. 원본 2 MB → 사이트 글자만 담은 woff2 한 개
// - Unbounded Variable: 영문 디스플레이용. 라틴 글자만
//
// src/ 안의 .astro · .ts · .css · .md 파일에 있는 모든 글자 + 출력 가능한 ASCII 전부를 모읍니다.
// 글자를 새로 썼는데 글꼴에 없으면 이 스크립트를 다시 실행하세요(`npm run fonts`).
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import subsetFont from 'subset-font';

const root = fileURLToPath(new URL('../', import.meta.url));
const srcDir = join(root, 'src');
const outDir = join(root, 'src/assets/fonts');

/** 화면에 나올 수 있는 모든 글자 */
function collectGlyphs() {
  const chars = new Set();
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== 'assets') walk(path);
      } else if (/\.(astro|ts|css|md)$/.test(entry.name)) {
        // 주석에만 있는 글자는 화면에 나오지 않으므로 빼고 셉니다.
        const code = readFileSync(path, 'utf8')
          .replace(/\/\*[\s\S]*?\*\//g, '')
          .replace(/<!--[\s\S]*?-->/g, '')
          .replace(/(^|\s)\/\/.*$/gm, '$1');
        for (const ch of code) chars.add(ch);
      }
    }
  };
  walk(srcDir);
  // 숫자 카운터·가격·입력값에 쓰일 수 있는 ASCII 전부와 자주 쓰는 문장부호
  for (let c = 0x20; c < 0x7f; c++) chars.add(String.fromCharCode(c));
  for (const ch of '·•—–‘’“”…→←↑↓↗×₩%') chars.add(ch);
  return [...chars].filter((ch) => (ch.codePointAt(0) ?? 0) >= 0x20).join('');
}

// wght: 사이트에서 실제로 쓰는 굵기 범위만 남깁니다(astro.config.mjs의 weight와 같아야 합니다).
const fonts = [
  {
    from: 'node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2',
    to: 'pretendard-zini.woff2',
    wght: { min: 400, max: 900 },
  },
  {
    from: 'node_modules/@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2',
    to: 'unbounded-zini.woff2',
    wght: { min: 500, max: 900 },
  },
];

const text = collectGlyphs();
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

for (const font of fonts) {
  const source = readFileSync(join(root, font.from));
  const subset = await subsetFont(source, text, {
    targetFormat: 'woff2',
    variationAxes: { wght: font.wght },
  });
  const target = join(outDir, font.to);
  // 내용이 같으면 파일을 건드리지 않아 개발 서버가 불필요하게 새로고침되지 않게 합니다.
  if (existsSync(target) && Buffer.compare(readFileSync(target), subset) === 0) {
    console.log(`[fonts] ${font.to} — 변경 없음 (${(subset.length / 1024).toFixed(1)} KB)`);
    continue;
  }
  writeFileSync(target, subset);
  console.log(
    `[fonts] ${font.to} — ${(source.length / 1024).toFixed(0)} KB → ${(subset.length / 1024).toFixed(1)} KB`,
  );
}
console.log(`[fonts] 글자 ${[...text].length}자`);
