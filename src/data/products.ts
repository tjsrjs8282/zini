// 상품 데이터 — 가격·설명이 바뀌면 이 파일만 고치면 모든 페이지에 반영됩니다.
// 이미지는 src/assets/images 의 파일명만 적습니다(없는 파일이면 빌드가 실패해 바로 알 수 있습니다).

export const formatPrice = (won: number) => `${won.toLocaleString('ko-KR')}원`;

/* -------------------------------------------------------------------------- */
/*  캐릭터 콘돔                                                                */
/* -------------------------------------------------------------------------- */

export type CondomId = 'safe' | 'jell' | 'kangsoe' | 'combo' | 'skinny' | 'ninja';

export interface Condom {
  id: CondomId;
  /** 캐릭터 이름 */
  code: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  /** 캐릭터 대표색 — 패키지·일러스트 사진의 배경색과 같은 값이라 경계 없이 이어집니다. */
  color: string;
  spec: string;
  price: number;
  /** 투명 배경 캐릭터(116×163) */
  character: string;
  /** 대표색 배경의 패키지 사진(600×600) */
  pack: string;
  /** 대표색 배경의 캐릭터 일러스트(400×400) */
  portrait: string;
}

export const condoms: Condom[] = [
  {
    id: 'safe',
    code: 'SAFE',
    name: '오리지널 콘돔',
    tagline: '안전제일 탄탄콘돔',
    description:
      '안전모를 단단히 눌러쓴 ZINI의 대표 캐릭터예요. 기본에 충실한 두께와 탄탄한 내구성으로 처음 쓰는 날에도 안심이에요.',
    tags: ['기본형', '탄탄한 내구성'],
    color: '#fe924a',
    spec: '10개입',
    price: 3000,
    character: 'ch1.png',
    pack: 'gallery_cd1.jpg',
    portrait: 'gallery1.jpg',
  },
  {
    id: 'jell',
    code: 'JELL',
    name: '젤 콘돔',
    tagline: '윤활강화 촉촉콘돔',
    description:
      '윤활제를 넉넉히 더해 처음부터 끝까지 촉촉해요. 부드러운 사용감을 원하는 날엔 간호사 JELL을 불러 주세요.',
    tags: ['윤활 강화', '촉촉한 사용감'],
    color: '#fe8084',
    spec: '10개입',
    price: 3000,
    character: 'ch2.png',
    pack: 'gallery_cd2.jpg',
    portrait: 'gallery2.jpg',
  },
  {
    id: 'kangsoe',
    code: 'KANGSOE',
    name: '강쇠 콘돔',
    tagline: '사정지연 강쇠콘돔',
    description:
      '머리띠를 질끈 묶은 KANGSOE는 더 긴 시간을 위한 지연형 콘돔이에요. 서두르고 싶지 않은 밤에 어울려요.',
    tags: ['지연형', '여유로운 페이스'],
    color: '#9d99bc',
    spec: '10개입',
    price: 3000,
    character: 'ch5.png',
    pack: 'gallery_cd4.jpg',
    portrait: 'gallery5.jpg',
  },
  {
    id: 'combo',
    code: 'COMBO',
    name: '콤보 콘돔',
    tagline: '라인도트 특수콘돔',
    description:
      '라인과 도트 돌기를 한 번에 담았어요. 색다른 자극이 필요한 날, 넥타이를 맨 COMBO가 분위기를 바꿔 줄 거예요.',
    tags: ['라인 + 도트', '특수 돌기'],
    color: '#d89680',
    spec: '10개입',
    price: 3000,
    character: 'ch3.png',
    pack: 'gallery_cd3.jpg',
    portrait: 'gallery3.jpg',
  },
  {
    id: 'skinny',
    code: 'SKINNY',
    name: '스키니 콘돔',
    tagline: '맨살느낌 얇은콘돔',
    description:
      '있는 듯 없는 듯 얇은 두께로 맨살에 가까운 느낌을 전해요. 아무것도 걸치지 않은 SKINNY처럼요.',
    tags: ['얇은 두께', '맨살 느낌'],
    color: '#e7b650',
    spec: '10개입',
    price: 3000,
    character: 'ch4.png',
    pack: 'gallery_cd5.jpg',
    portrait: 'gallery4.jpg',
  },
  {
    id: 'ninja',
    code: 'NINJA',
    name: '닌자 콘돔',
    tagline: '은폐엄폐 블랙콘돔',
    description:
      '복면처럼 시크한 블랙 컬러 콘돔이에요. 남다른 분위기를 원할 때 조용히 꺼내 보세요.',
    tags: ['블랙 컬러', '시크한 무드'],
    color: '#acacac',
    spec: '10개입',
    price: 3000,
    character: 'ch6.png',
    pack: 'gallery_cd6.jpg',
    portrait: 'gallery6.jpg',
  },
];

/* -------------------------------------------------------------------------- */
/*  S-SOLUTION 러브젤 · 마사지젤                                                */
/* -------------------------------------------------------------------------- */

export type GelLineId = 'sensual' | 'premium' | 'massage';

export interface Gel {
  name: string;
  en: string;
  spec: string;
  price: number;
  image: string;
  /** 카드 배경색 — 흰 배경 제품 사진이 이 색에 자연스럽게 섞입니다(multiply). */
  tint: string;
  description: string;
  /** "이럴 때 추천" 한 줄 */
  pick: string;
  badge?: string;
}

export interface GelLine {
  id: GelLineId;
  title: string;
  ko: string;
  href: string;
  /** 라인 대표색(히어로·카드 배경) */
  tone: string;
  summary: string;
  heroTitle: string;
  description: string;
  products: Gel[];
  /** 원본 상세페이지 이미지 */
  details: { src: string; alt: string }[];
}

export const gelLines: Record<GelLineId, GelLine> = {
  sensual: {
    id: 'sensual',
    title: 'SENSUAL LINE',
    ko: '센슈얼 러브젤',
    href: 'sensual.html',
    tone: '#ffe2ef',
    summary: '200ml 대용량 수용성 러브젤 4종',
    heroTitle: '산뜻하게,<br />내 취향대로.',
    description:
      '물처럼 가벼운 리퀴드부터 쫀득한 고점도까지. 취향대로 골라 쓰는 S-SOLUTION의 기본 라인업이에요.',
    products: [
      {
        name: '사라사라',
        en: 'Sarasara Solution',
        spec: '200ml',
        price: 18000,
        image: 'product3.jpg',
        tint: '#ffe0ef',
        description: '물처럼 가볍고 산뜻한 리퀴드 타입. 끈적임 없이 부드럽고, 물에 쉽게 씻겨요.',
        pick: '가볍고 산뜻한 느낌이 좋다면',
      },
      {
        name: '앱솔루트 클린',
        en: 'Absolute Clean Solution',
        spec: '200ml',
        price: 18000,
        image: 'product4.jpg',
        tint: '#fff0cc',
        description:
          '알로에베라·하마멜리스 추출물과 판테놀로 피부까지 생각했어요. 씻어낼 필요 없이 산뜻해요.',
        pick: '씻어내기 번거롭다면',
      },
      {
        name: '누루누루',
        en: 'Nurunuru Solution',
        spec: '200ml',
        price: 18000,
        image: 'product5.jpg',
        tint: '#ece2f5',
        description: '쫀득하게 감기는 고점도 젤. 오래 써도 끈적임은 적고 핏감은 오래가요.',
        pick: '쫀득한 핏감을 오래 느끼고 싶다면',
      },
      {
        name: '익싸이팅 포맨',
        en: 'Exciting Solution for Men',
        spec: '200ml',
        price: 22000,
        image: 'product2.jpg',
        tint: '#e9e9e9',
        description: '부드러운 젤리 스크럽과 L-아르기닌을 담은 남성 전용 고점도 젤이에요.',
        pick: '혼자만의 시간을 위한 남성 전용을 찾는다면',
        badge: 'FOR MEN',
      },
    ],
    details: [
      { src: 'gel_content1.jpg', alt: '러브로션 성분의 90% 이상은 물이라는 안내' },
      {
        src: 'gels.jpg',
        alt: '사라사라·앱솔루트 클린 솔루션 상세 설명 — 사용감 비교 차트와 제품 포인트',
      },
      {
        src: 'gels2.jpg',
        alt: '익싸이팅 솔루션 포맨·누루누루 솔루션 상세 설명 — 사용감 비교 차트와 제품 포인트',
      },
    ],
  },
  premium: {
    id: 'premium',
    title: 'PREMIUM LINE',
    ko: '프리미엄 러브젤',
    href: 'premium.html',
    tone: '#f5ebd3',
    summary: '펌프형 35ml 감성 솔루션 3종',
    heroTitle: '둘만을 위한<br />감성 솔루션.',
    description:
      '그와 그녀가 함께 나누는 프리미엄 라인. 펌프 방식이라 한 손으로도 필요한 만큼만 깔끔하게 쓸 수 있어요.',
    products: [
      {
        name: '리쥬베네이션 포 허',
        en: 'Rejuvenation Solution for Her',
        spec: '35ml',
        price: 32000,
        image: 'product10.jpg',
        tint: '#efeee8',
        description: '미백 기능성 화장품으로 만든 여성용 케어 젤. 펌프 한 번이면 충분해요.',
        pick: '나를 위한 데일리 케어를 원한다면',
        badge: 'FOR HER',
      },
      {
        name: '클라이막스 포 허',
        en: 'Climax Solution for Her',
        spec: '35ml',
        price: 32000,
        image: 'product9.jpg',
        tint: '#f4e9cf',
        description:
          '바르는 부위에 짜릿한 느낌을 전하는 여성용 젤. 히알루론산과 L-아르기닌을 담았어요.',
        pick: '특별한 날, 짜릿함을 더하고 싶다면',
        badge: 'FOR HER',
      },
      {
        name: '쉐어링 솔루션',
        en: 'Sharing Solution for Couples',
        spec: '70ml (35ml × 2)',
        price: 62000,
        image: 'product11.jpg',
        tint: '#ececec',
        description: '클라이막스 포 허와 포 힘을 한 세트로. 둘이 함께 나누는 커플 솔루션이에요.',
        pick: '둘이 함께 쓰고 싶다면',
        badge: 'COUPLE',
      },
    ],
    details: [
      { src: 'premium1.jpg', alt: '클라이막스 솔루션 포 허 상세 설명 — 특징과 전성분' },
      { src: 'premium2.jpg', alt: '쉐어링 솔루션 포 커플 상세 설명 — 포 허·포 힘 구성과 전성분' },
    ],
  },
  massage: {
    id: 'massage',
    title: 'MASSAGE GEL',
    ko: '마사지젤',
    href: 'massage.html',
    tone: '#e1f1e5',
    summary: '6가지 성분을 뺀 저자극 마사지젤 3종',
    heroTitle: '순하게,<br />온몸 가득 촉촉하게.',
    description:
      '여성 친화적인 고품격 저자극 보습 케어. 파라벤·인공향료처럼 피부에 부담되는 성분 여섯 가지를 빼고 만들었어요.',
    products: [
      {
        name: '오리지널 마사지 젤',
        en: 'The Original Massage Gel',
        spec: '73.9ml (2.5 fl.oz)',
        price: 16800,
        image: 'product6.jpg',
        tint: '#f1e4f3',
        description: '수분과 보습을 채워 주는 S-SOLUTION의 기본 마사지젤이에요.',
        pick: '기본에 충실한 마사지젤을 찾는다면',
      },
      {
        name: '네이처 마사지 젤',
        en: 'The Nature Massage Gel',
        spec: '73.9ml (2.5 fl.oz)',
        price: 16800,
        image: 'product7.jpg',
        tint: '#e0f0e3',
        description: '오가닉 성분을 더해 더 순하게 만든 마사지젤이에요.',
        pick: '더 순한 성분이 좋다면',
        badge: 'ORGANIC',
      },
      {
        name: '워밍 마사지 젤',
        en: 'The Warming Massage Gel',
        spec: '73.9ml (2.5 fl.oz)',
        price: 16800,
        image: 'product8.jpg',
        tint: '#fbe2e1',
        description: '바르면 따뜻하게 감싸 주는 워밍 타입이에요.',
        pick: '따뜻한 온기를 더하고 싶다면',
        badge: 'HOT',
      },
    ],
    details: [
      { src: 'massage1.jpg', alt: '에스솔루션 마사지젤 라인업 상세 설명 1 — 6 NO ADDED 안심 처방' },
      { src: 'massage2.jpg', alt: '에스솔루션 마사지젤 라인업 상세 설명 2 — 사용법과 성분' },
    ],
  },
};

export const gelLineList: GelLine[] = [gelLines.sensual, gelLines.premium, gelLines.massage];

export const priceFrom = (line: GelLine) => Math.min(...line.products.map((p) => p.price));

/** 마사지젤에서 뺀 여섯 가지 성분 */
export const noAdded = ['파라벤', '인공향료', '인공색소', '미네랄오일', '실리콘', '설페이트'];

/** 프리미엄 라인(클라이막스 솔루션) 주요 성분 — 원본 상세페이지의 전성분 표기에서 옮겼습니다. */
export const premiumIngredients = [
  { name: '히알루론산나트륨', note: 'Sodium Hyaluronate' },
  { name: '위치하젤 추출물', note: 'Witch Hazel Extract' },
  { name: '달팽이 점액 여과물', note: 'Snail Secretion Filtrate' },
  { name: 'L-아르기닌', note: 'Arginine' },
];
