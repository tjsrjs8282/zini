// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 기본 배포 대상은 GitHub Pages(https://tjsrjs8282.github.io/zini/)입니다.
// 다른 호스팅(예: Vercel 루트 도메인)에 올릴 때는 SITE_URL / BASE_PATH 환경 변수로 덮어씁니다.
const site = process.env.SITE_URL ?? 'https://tjsrjs8282.github.io';
const base = process.env.BASE_PATH ?? '/zini';

export default defineConfig({
  site,
  base,
  // 페이지를 about.html, condom.html … 형태의 파일로 출력합니다.
  build: { format: 'file' },
  // 컴포넌트 스타일에 우선순위(specificity)를 더하지 않도록 :where()로 스코프합니다.
  scopedStyleStrategy: 'where',
  integrations: [
    sitemap({
      // canonical 주소와 같도록 서브 페이지에 .html을 붙입니다.
      serialize: (item) => ({ ...item, url: item.url.replace(/([^/])$/, '$1.html') }),
    }),
  ],
  image: {
    // 이미지 레이아웃은 컴포넌트 CSS가 담당하므로 Astro의 반응형 기본 스타일은 끕니다.
    responsiveStyles: false,
  },
});
