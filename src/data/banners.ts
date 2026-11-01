// 메인 배너와 프로모션 배너, 추천상품 데이터

export interface HeroSlide {
  image: string;
  alt: string;
  title: string;
  lead: string;
  body: string;
  href: string;
  /** 밝은 배경이라 글자를 검정으로 표시 */
  dark?: boolean;
}

export const heroSlides: HeroSlide[] = [
  {
    image: 'ex01.jpg',
    alt: '웃는 얼굴과 지니 캐릭터들',
    title: 'WELCOME TO SPART',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    body: 'Enim aperiam laborum cumque minus dignissimos suscipit',
    href: 'about.html',
  },
  {
    image: 'ex02.jpg',
    alt: 'S-SOLUTION 러브 코스메틱',
    title: 'S-SOLUTION',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    body: 'Enim aperiam laborum cumque minus dignissimos suscipit',
    href: 'gel.html',
    dark: true,
  },
  {
    image: 'ex03.jpg',
    alt: 'ZINI 제품과 디자인 어워드 수상 로고',
    title: 'ZINI',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    body: 'Enim aperiam laborum cumque minus dignissimos suscipit',
    href: 'condom.html',
    dark: true,
  },
];

export interface PromoSlide {
  desktop: string;
  mobile: string;
  alt: string;
  kicker: string;
  title: string;
  titleSub: string;
  href: string;
  /** 어두운 배경 위 흰 글자 */
  light?: boolean;
}

export const promoSlides: PromoSlide[] = [
  {
    desktop: 'PB1.jpg',
    mobile: 'PBM1.jpg',
    alt: '콘돔 솔루션',
    kicker: '명랑 안전제일!',
    title: '책임 있는 사랑을',
    titleSub: '위한 솔루션!',
    href: 'condom.html',
    light: true,
  },
  {
    desktop: 'PB2.jpg',
    mobile: 'PBM2.jpg',
    alt: '온라인 자유이용권 할인',
    kicker: '자유이용권 할인!',
    title: '어머 이건 사야해!',
    titleSub: '최대 30% 할인!',
    href: 'https://www.bururu.com/',
    light: true,
  },
  {
    desktop: 'PB3.jpg',
    mobile: 'PBM3.jpg',
    alt: '보습 케어 젤',
    kicker: '특허 성분 함유',
    title: '여성친화적 고품격',
    titleSub: '보습케어!',
    href: 'gel.html',
  },
];

export type RecommendDecor = 'love' | 'girl' | 'boy' | 'car' | 'tong';

export interface RecommendItem {
  image: string;
  alt: string;
  href: string;
  decor: RecommendDecor;
  caption?: { title: string; text: string };
}

export const recommendTop: RecommendItem[] = [
  {
    image: 'fc3.jpg',
    alt: '촉촉한 사랑을 위한 필수품! 러브로션',
    href: 'https://www.bururu.com/shop/event.php?ev_id=1554865357',
    decor: 'love',
  },
  {
    image: 'fc1.jpg',
    alt: '자위의 여신상이 추천하는 여성 명랑완구',
    href: 'https://www.bururu.com/shop/event.php?ev_id=1553127676',
    decor: 'girl',
  },
  {
    image: 'fc2.jpg',
    alt: '딸선생이 추천하는 남성 명랑완구',
    href: 'https://www.bururu.com/shop/event.php?ev_id=1553127716',
    decor: 'boy',
  },
];

export const recommendBottom: RecommendItem[] = [
  {
    image: 'fc4.jpg',
    alt: '부르르닷컴만의 고객편의 무지개빛 배송서비스',
    href: 'https://www.bururu.com/page/?pid=delivery',
    decor: 'car',
    caption: { title: '특급배송 서비쑤!', text: '전국 어느곳이나~~' },
  },
  {
    image: 'fc5.jpg',
    alt: '구매금액별 통큰 사은품 이벤트',
    href: 'https://www.bururu.com/page/?pid=gift',
    decor: 'tong',
    caption: { title: '구매금액별 통큰 사은품', text: '사면 살수록 혜택은 커진다!' },
  },
];
