# ZINI 지니 — 브랜드 사이트

캐릭터 콘돔·러브젤 브랜드 **ZINI**의 소개 사이트입니다. Astro 7로 만든 정적 사이트이며 GitHub Pages로 배포합니다.

- 사이트: https://tjsrjs8282.github.io/zini/

## 특징

- **컴포넌트 구조** — 헤더·전체 메뉴·푸터·상품 카드·슬라이더를 컴포넌트로 나누고, 상품·배너·갤러리·회사 정보는 데이터 파일에서 관리합니다.
- **이미지 최적화** — 빌드할 때 WebP로 변환하고 화면 크기별 `srcset`, 지연 로딩, `width`/`height`를 자동으로 붙입니다. 메인 페이지 이미지 전송량은 약 560KB입니다(1400px 화면 기준).
- **가벼운 스크립트** — 슬라이더(Swiper 14)와 갤러리 라이트박스(PhotoSwipe 5, 사진을 열 때만 불러옴)만 씁니다.
- **접근성** — `<dialog>` 전체 메뉴(포커스 가두기, ESC로 닫기), 본문 바로가기, 페이지마다 `h1`, 대체 텍스트, 핀치 줌 허용, '동작 줄이기' 설정 시 자동 재생·애니메이션 끔.
- **SEO** — 페이지별 title·description, Open Graph, canonical, sitemap, 404 페이지.
- **주소** — `about.html`, `condom.html` 형식으로 출력합니다(`build.format: 'file'`).

## 기술 스택

| 영역       | 사용 기술                                                                     |
| ---------- | ----------------------------------------------------------------------------- |
| 프레임워크 | Astro 7 (정적 빌드)                                                           |
| 언어       | TypeScript (strict) — `astro check`로 타입 검사                               |
| 스타일     | Bootstrap 5.3 CSS 중 reboot · grid · utilities만 사용(JS 없음) + 컴포넌트 CSS |
| 슬라이더   | Swiper 14 — 메인 배너, 프로모션 배너, 캐릭터 커버플로우, 상품 캐러셀          |
| 라이트박스 | PhotoSwipe 5 — 갤러리                                                         |
| 글꼴       | Noto Sans KR Variable (Fontsource, 셀프 호스팅)                               |
| 아이콘     | 인라인 SVG — Simple Icons(브랜드), Material Design Icons(전화)                |

## 시작하기

Node.js 22.23.4 이상이 필요합니다(Astro 7 요구 사항).

```bash
npm install
npm run dev      # http://localhost:4321/zini/
npm run build    # 타입 검사(astro check) 후 dist/에 빌드
npm run preview  # 빌드 결과 미리보기
npm run format   # Prettier 정리
```

## 폴더 구조

```
src/
├─ assets/
│  ├─ images/        이미지 소스 — 빌드할 때 WebP·반응형 크기로 자동 변환
│  └─ svg/           로고·배경 패턴
├─ components/
│  ├─ layout/        Header(상단 띠·메뉴바), FullNav(전체 메뉴 <dialog>), Footer, CompanyInfo
│  ├─ sections/      HeroSlider, CharacterSeries, CondomLineup, ProductSection·ProductCard,
│  │                 PromoSlider, ProductCarousel, ServicesBanner, Recommend,
│  │                 GalleryGrid, DetailImages, BrandMap, ContactForm
│  └─ ui/            Icon, SocialLinks, Zigzag(톱니 경계), ZiniFace(얼굴 로고)
├─ data/             site.ts · products.ts · banners.ts · gallery.ts
├─ layouts/          BaseLayout.astro — 공통 <head>(SEO·OG), 헤더·푸터
├─ lib/              images.ts(파일명으로 이미지 찾기), url.ts(base 경로 처리)
├─ pages/            index · about · condom · gel · sensual · premium · massage · gallery · contact · 404
├─ scripts/          swiper.ts — Swiper 공통 설정(한국어 스크린리더 문구, 동작 줄이기)
└─ styles/           global.css — 디자인 토큰, 리셋, 공용 패턴
```

## 콘텐츠 수정

| 바꿀 내용                         | 파일                                         |
| --------------------------------- | -------------------------------------------- |
| 상품명 · 용량 · 가격              | `src/data/products.ts`                       |
| 배너 문구 · 링크, 추천상품        | `src/data/banners.ts`                        |
| 메뉴, 회사 정보, SNS, 쇼핑몰 링크 | `src/data/site.ts`                           |
| 갤러리                            | `src/data/gallery.ts` + `src/assets/images/` |

데이터 파일에는 이미지 **파일명만** 적습니다(예: `'condom1.png'`). 파일명이 틀리면 빌드가 실패해서 바로 알 수 있습니다.

### 문의 폼

`.env`에 `PUBLIC_CONTACT_ENDPOINT`(예: Formspree 주소)를 넣으면 그 주소로 전송하고, 비워 두면 방문자의 메일 앱이 열립니다. `.env.example`을 참고하세요.

## 배포 (GitHub Pages)

`.github/workflows/deploy.yml`이 `master`에 푸시될 때마다 빌드해서 GitHub Pages에 올립니다.

> **필수 설정**
> 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정해 주세요.
> Source가 "Deploy from a branch"이면 `master`의 소스 파일이 그대로 공개되어 사이트가 제대로 표시되지 않습니다.

다른 곳에 배포할 때는 환경 변수로 주소를 정합니다 — 예: Vercel 루트 도메인이면 `SITE_URL=https://도메인`, `BASE_PATH=/`.

## 확인이 필요한 부분

- **bururu.com 링크**: 쇼핑몰의 모든 경로가 성인인증 첫 화면으로 이동해서 이벤트·배송 안내 링크가 해당 페이지로 바로 연결되지 않습니다. `src/data/site.ts`, `src/data/banners.ts`의 주소를 실제 주소로 맞춰 주세요. 로그인·회원가입은 쇼핑몰 첫 화면으로 연결됩니다.
- 배너 일부 문구(Lorem ipsum)와 푸터 회사 정보(계좌·사업자번호 등)는 예시 값입니다.

## 출처

- 브랜드 아이콘: [Simple Icons](https://simpleicons.org/) (CC0 1.0)
- 전화 아이콘: [Material Design Icons](https://github.com/google/material-design-icons) (Apache-2.0)
- 글꼴: [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR) (SIL Open Font License 1.1)
