# ZINI 지니 — 브랜드 사이트

캐릭터 콘돔·러브젤 브랜드 **ZINI**의 소개 사이트입니다.
2020년에 HTML + jQuery + Bootstrap 4로 만든 정적 사이트를 **Astro 7** 기반으로 재구성했습니다.
디자인은 그대로 유지하고 구조·성능·접근성을 개선했습니다.

- 배포 주소: https://tjsrjs8282.github.io/zini/
- 이전 버전(2020): `master` 브랜치의 커밋 `943f17c`

## 기술 스택

| 영역       | 사용 기술                                                                     |
| ---------- | ----------------------------------------------------------------------------- |
| 프레임워크 | Astro 7 (정적 빌드, `build.format: 'file'`로 기존 `*.html` 주소 유지)         |
| 언어       | TypeScript (strict) — `astro check`로 타입 검사                               |
| 스타일     | Bootstrap 5.3 CSS 중 reboot · grid · utilities만 사용(JS 없음) + 컴포넌트 CSS |
| 슬라이더   | Swiper 14 — 메인 배너, 프로모션 배너, 캐릭터 커버플로우, 상품 캐러셀          |
| 라이트박스 | PhotoSwipe 5 — 갤러리(사진을 열 때만 불러옴)                                  |
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
│  ├─ images/        원본 이미지 — 빌드할 때 WebP·반응형 크기로 자동 변환
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

> **처음 한 번 꼭 필요한 설정**
> 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 바꿔 주세요.
> 지금처럼 "Deploy from a branch"로 두면 `master`의 Astro 소스 파일이 그대로 공개되어 사이트가 깨집니다.

다른 곳에 배포할 때는 환경 변수로 주소를 바꿉니다 — 예: Vercel 루트 도메인이면 `SITE_URL=https://도메인`, `BASE_PATH=/`.

## 2020 → 2026 변경 사항

### 구조

- 9개 HTML 파일에 복사돼 있던 헤더·전체 메뉴·푸터를 컴포넌트 하나로 합침
- 상품·가격·배너·갤러리를 데이터 파일로 분리
- jQuery, bxSlider, Magnific Popup, Bootstrap JS 제거 → TypeScript + Swiper 14 + PhotoSwipe 5
- 아이콘 폰트(Font Awesome 4, Themify) → 인라인 SVG
- 색만 다른 톱니 SVG 6종 → `Zigzag` 컴포넌트 하나(CSS mask)

### 성능

- 이미지 자동 최적화: WebP 변환, 화면 크기별 `srcset`, 지연 로딩, `width`/`height` 지정으로 레이아웃 밀림 방지
  - 메인 페이지 이미지 전송량 **6.2MB → 0.56MB** (1400px 화면 기준)
- 외부 CDN 의존 제거(응답 없는 http CDN 포함), 글꼴 셀프 호스팅
- 사용하지 않던 이미지 20개와 템플릿 광고 메모 삭제

### 버그 수정

- 메뉴를 누를 때마다 나던 JS 오류(`main.js`)
- Swiper CSS 3.4 / JS 4.1 버전 불일치, 커버플로우 옵션 오타
- `condom_Back.svg` 대소문자 오류 — 대소문자를 구분하는 서버(GitHub Pages)에서 배경이 깨지던 문제
- 갤러리 'AAE Show' 섹션 라이트박스가 동작하지 않던 문제
- `href="bururu.com"` 같은 깨진 링크, 빈 링크, 아무 동작 없던 `javascript:void(0)` 버튼
- 중복 id(`#Btn`, `#gelProduct`, `Layer_1`), `aria-baluenow` 오타, 문의 폼 입력란 안내 문구가 가려지던 문제
- 진행 막대 너비가 숫자와 다르던 문제(82%인데 83%로 표시)
- 글꼴: 의도했던 Noto Sans KR이 Bootstrap 시스템 글꼴에 덮여 적용되지 않던 문제
- 문구 오타: S-SOLUSION → S-SOLUTION, 영성친화적 → 여성친화적, 세적 → 세척, 양상 → 항상, NINI → ZINI, 주신회사 → 주식회사, 이메임 → 이메일, Emain → Email 등

### 접근성 · SEO

- 핀치 줌 허용(`maximum-scale=1` 제거), 본문 바로가기 링크, 페이지마다 `h1`
- 전체 메뉴를 `<dialog>`로 구현 — 포커스 가두기, ESC로 닫기, 닫으면 버튼으로 포커스 복귀
- 대체 텍스트 정비(해외 브랜드 로고 34개 등), 아이콘 링크에 `aria-label`
- 사업분야 이미지맵을 화면 크기에 맞춰 줄어드는 링크로 교체
- '동작 줄이기' 설정 시 자동 재생과 애니메이션을 끔
- 페이지별 title·description, Open Graph, canonical, sitemap, 404 페이지

## 확인이 필요한 부분

- **bururu.com 링크**: 쇼핑몰 플랫폼이 바뀌어 예전 이벤트·배송 안내 주소가 모두 성인인증 첫 화면으로 이동합니다. `src/data/site.ts`, `src/data/banners.ts`에서 새 주소로 바꿔 주세요. 로그인·회원가입도 지금은 쇼핑몰 첫 화면으로 연결됩니다.
- 배너의 Lorem ipsum 문구와 푸터의 예시 회사 정보(계좌·사업자번호 등)는 원본 그대로입니다.

## 출처

- 브랜드 아이콘: [Simple Icons](https://simpleicons.org/) (CC0 1.0)
- 전화 아이콘: [Material Design Icons](https://github.com/google/material-design-icons) (Apache-2.0)
- 글꼴: [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR) (SIL Open Font License 1.1)
