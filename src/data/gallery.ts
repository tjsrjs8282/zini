// 갤러리 데이터 — 사진을 더하려면 src/assets/images 에 넣고 파일명을 적으면 됩니다.

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryGroup {
  id: string;
  title: string;
  place?: string;
  years?: string;
  images: GalleryImage[];
}

export interface GalleryCategory {
  id: string;
  title: string;
  ko: string;
  description: string;
  /** square: 정사각 타일 / photo: 원래 비율 그대로(메이슨리) */
  layout: 'square' | 'photo';
  groups: GalleryGroup[];
}

/** 박람회 현장 사진 묶음 — 파일명(확장자 제외)과 대체 텍스트에 쓸 박람회 이름 */
const shots = (label: string, names: string[]): GalleryImage[] =>
  names.map((n, i) => ({ src: `${n}.jpg`, alt: `${label} 현장 사진 ${i + 1}` }));

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'characters',
    title: 'ZINI CHARACTERS',
    ko: '캐릭터',
    description: '여섯 캐릭터와 각자의 대표색. 패키지와 굿즈의 출발점이에요.',
    layout: 'square',
    groups: [
      {
        id: 'characters-all',
        title: '캐릭터',
        images: [
          { src: 'gallery1.jpg', alt: 'SAFE — 안전모를 쓴 캐릭터' },
          { src: 'gallery2.jpg', alt: 'JELL — 간호사 캐릭터' },
          { src: 'gallery3.jpg', alt: 'COMBO — 넥타이를 맨 캐릭터' },
          { src: 'gallery4.jpg', alt: 'SKINNY — 아무것도 걸치지 않은 캐릭터' },
          { src: 'gallery5.jpg', alt: 'KANGSOE — 머리띠를 묶은 캐릭터' },
          { src: 'gallery6.jpg', alt: 'NINJA — 복면을 쓴 캐릭터' },
          { src: 'gallery_logo1.jpg', alt: '엠에스하모니 로고' },
          { src: 'gallery_logo2.jpg', alt: '레드닷 디자인 어워드 심볼' },
        ],
      },
    ],
  },
  {
    id: 'case-design',
    title: 'CASE DESIGN',
    ko: '패키지',
    description: '캐릭터가 그대로 패키지가 됐어요. 노골적이지 않아 꺼내 두기에도 부담이 없어요.',
    layout: 'square',
    groups: [
      {
        id: 'case-design-all',
        title: '패키지 디자인',
        images: [
          { src: 'gallery_cd1.jpg', alt: 'SAFE 오리지널 콘돔 패키지' },
          { src: 'gallery_cd2.jpg', alt: 'JELL 젤 콘돔 패키지' },
          { src: 'gallery_cd3.jpg', alt: 'COMBO 콤보 콘돔 패키지' },
          { src: 'gallery_cd4.jpg', alt: 'KANGSOE 강쇠 콘돔 패키지' },
          { src: 'gallery_cd5.jpg', alt: 'SKINNY 스키니 콘돔 패키지' },
          { src: 'gallery_cd6.jpg', alt: 'NINJA 닌자 콘돔 패키지' },
          { src: 'gallery_logo3.jpg', alt: '케어앤셰어 +N 심볼' },
          { src: 'gallery7.jpg', alt: '“통행에 불편을 드려 대단히 안전합니다” 안전제일 표지판' },
        ],
      },
    ],
  },
  {
    id: 'world-stage',
    title: 'WORLD STAGE',
    ko: '해외 박람회',
    description:
      '베를린·라스베이거스·상하이·홍콩. 세계 성인용품 박람회에서 ZINI를 직접 소개했어요.',
    layout: 'photo',
    groups: [
      {
        id: 'venus-berlin',
        title: 'Venus Berlin',
        place: '독일 베를린',
        years: '2009 · 2010',
        images: shots('Venus Berlin', [
          '11-00',
          '11-01',
          '11-02',
          '11-03',
          '12-00',
          '12-01',
          '12-02',
          '12-03',
          '15-00',
          '15-01',
          '15-02',
          '15-03',
        ]),
      },
      {
        id: 'avn-show',
        title: 'AVN Show',
        place: '미국 라스베이거스',
        years: '2010',
        images: shots('AVN Show', ['13-00', '13-01', '13-02']),
      },
      {
        id: 'adc-show',
        title: 'ADC Show',
        place: '중국 상하이',
        years: '2013 · 2015',
        images: shots('ADC Show', ['23-00', '23-01', '23-02', '18-00', '18-01', '18-02']),
      },
      {
        id: 'aae-show',
        title: 'AAE Show',
        place: '홍콩',
        years: '2014',
        images: shots('AAE Show', ['21-00', '21-02', '21-03']),
      },
    ],
  },
];

/** 메인 페이지 "WORLD STAGE" 카드 */
export const exhibitions = [
  { title: 'Venus Berlin', place: '독일 베를린', years: '2009 · 2010', cover: '11-01.jpg' },
  { title: 'AVN Show', place: '미국 라스베이거스', years: '2010', cover: '13-00.jpg' },
  { title: 'ADC Show', place: '중국 상하이', years: '2013 · 2015', cover: '18-00.jpg' },
  { title: 'AAE Show', place: '홍콩', years: '2014', cover: '21-00.jpg' },
];
