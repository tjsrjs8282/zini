// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { cp } from 'node:fs/promises';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

// 기본 배포 대상은 GitHub Pages(https://tjsrjs8282.github.io/zini/)입니다.
// 다른 호스팅(예: Vercel 루트 도메인)에 올릴 때는 SITE_URL / BASE_PATH 환경 변수로 덮어씁니다.
const site = process.env.SITE_URL ?? 'https://tjsrjs8282.github.io';
const base = process.env.BASE_PATH ?? '/zini';

const LEGACY = fileURLToPath(new URL('./legacy/', import.meta.url));

/** @type {Record<string, string>} */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

/**
 * 2020년 원본 사이트를 손대지 않고 /legacy/ 에 둡니다(리뉴얼 전후 비교용).
 * 개발 서버에서는 바로 열어 주고, 빌드할 때는 결과물에 그대로 복사합니다.
 * @returns {import('astro').AstroIntegration}
 */
function legacy2020() {
  const prefix = `${base.replace(/\/+$/, '')}/legacy/`;
  return {
    name: 'legacy-2020',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use((req, res, next) => {
          if (!req.url?.startsWith(prefix)) return next();
          const path = req.url.slice(prefix.length).split('?')[0] ?? '';
          const file = normalize(join(LEGACY, decodeURIComponent(path) || 'index.html'));
          if (
            !file.startsWith(normalize(LEGACY)) ||
            !existsSync(file) ||
            statSync(file).isDirectory()
          ) {
            return next();
          }
          res.setHeader(
            'Content-Type',
            MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
          );
          createReadStream(file).pipe(res);
        });
      },
      'astro:build:done': async ({ dir }) => {
        await cp(LEGACY, fileURLToPath(new URL('legacy/', dir)), { recursive: true });
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  build: {
    // 페이지를 about.html, condom.html … 형태의 파일로 출력합니다.
    format: 'file',
    // CSS를 HTML 안에 넣어 첫 화면이 추가 요청 없이 그려지게 합니다.
    inlineStylesheets: 'always',
  },
  // 컴포넌트 스타일에 우선순위(specificity)를 더하지 않도록 :where()로 스코프합니다.
  scopedStyleStrategy: 'where',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      // canonical 주소와 같도록 서브 페이지에 .html을 붙입니다.
      serialize: (item) => ({ ...item, url: item.url.replace(/([^/])$/, '$1.html') }),
    }),
    legacy2020(),
  ],
  // scripts/subset-fonts.mjs 가 만든, 사이트에 쓰인 글자만 담은 가변 글꼴입니다.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Pretendard',
      cssVariable: '--font-sans',
      fallbacks: ['Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/pretendard-zini.woff2'], weight: '400 900', style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Unbounded',
      cssVariable: '--font-display',
      // 한글은 Unbounded에 없으므로 global.css에서 --font-sans(Pretendard)로 이어 붙입니다.
      // (Astro가 글꼴 이름에 해시를 붙이므로 여기서 이름으로 지정할 수 없습니다.)
      fallbacks: [],
      options: {
        variants: [
          { src: ['./src/assets/fonts/unbounded-zini.woff2'], weight: '500 900', style: 'normal' },
        ],
      },
    },
  ],
  image: {
    // 이미지 레이아웃은 컴포넌트 CSS가 담당하므로 Astro의 반응형 기본 스타일은 끕니다.
    responsiveStyles: false,
  },
});
