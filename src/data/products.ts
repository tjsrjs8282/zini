// 상품 데이터 — 가격·용량이 바뀌면 이 파일만 고치면 모든 페이지에 반영됩니다.

export type ProductLine = 'condom' | 'sensual' | 'premium' | 'massage';

export interface Product {
  name: string;
  spec: string;
  price: number;
  image: string;
}

/** 각 라인업의 상세 페이지 */
export const linePages: Record<ProductLine, string> = {
  condom: 'condom.html',
  sensual: 'sensual.html',
  premium: 'premium.html',
  massage: 'massage.html',
};

export const products: Record<ProductLine, Product[]> = {
  condom: [
    { name: '오리지널 콘돔', spec: '10p', price: 3000, image: 'condom1.png' },
    { name: '젤 콘돔', spec: '10p', price: 3000, image: 'condom2.png' },
    { name: '강쇠 콘돔', spec: '10p', price: 3000, image: 'condom3.png' },
    { name: '콤보 콘돔', spec: '10p', price: 3000, image: 'condom4.png' },
    { name: '스키니 콘돔', spec: '10p', price: 3000, image: 'condom5.png' },
    { name: '닌자 콘돔', spec: '10p', price: 3000, image: 'condom6.png' },
  ],
  sensual: [
    { name: '사라사라', spec: '200ml', price: 18000, image: 'product3.jpg' },
    { name: '앱솔루트 클린', spec: '200ml', price: 18000, image: 'product4.jpg' },
    { name: '누루누루', spec: '200ml', price: 18000, image: 'product5.jpg' },
    { name: '익싸이팅 포맨', spec: '200ml', price: 22000, image: 'product2.jpg' },
  ],
  premium: [
    { name: '리쥬베네이션 포 허', spec: '35ml 2.0', price: 32000, image: 'product10.jpg' },
    { name: '클라이막스 포 허', spec: '35ml 2.0', price: 32000, image: 'product9.jpg' },
    { name: '쉐어링솔루션', spec: '70ml 2.0', price: 62000, image: 'product11.jpg' },
  ],
  massage: [
    { name: '오리지널 마사지 젤', spec: '2.5oz (73.9ml)', price: 16800, image: 'product6.jpg' },
    { name: '네츄럴 마사지 젤', spec: '2.5oz (73.9ml)', price: 16800, image: 'product7.jpg' },
    { name: '워밍 마사지 젤', spec: '2.5oz (73.9ml)', price: 16800, image: 'product8.jpg' },
  ],
};

export const formatPrice = (won: number) => `${won.toLocaleString('ko-KR')} 원`;

/** 메인/콘돔 페이지 커버플로우의 캐릭터 콘돔 카드 */
export const characterCondoms = [
  { code: 'SAFE', tagline: '안전제일 탄탄콘돔', image: 'condom1.png', stats: [82, 77] },
  { code: 'JELL', tagline: '윤활강화 촉촉콘돔', image: 'condom2.png', stats: [82, 77] },
  { code: 'KANGSOE', tagline: '사정지연 강쇠콘돔', image: 'condom3.png', stats: [82, 77] },
  { code: 'COMBO', tagline: '라인도트 특수콘돔', image: 'condom4.png', stats: [86, 77] },
  { code: 'SKINNY', tagline: '맨살느낌 얇은콘돔', image: 'condom5.png', stats: [82, 77] },
  { code: 'NINJA', tagline: '은폐엄폐 블랙콘돔', image: 'condom6.png', stats: [82, 77] },
];

/** 캐릭터 콘돔 시리즈의 점프하는 캐릭터들 */
export const characters = ['ch1.png', 'ch2.png', 'ch3.png', 'ch4.png', 'ch5.png', 'ch6.png'];

/** 하단 상품 캐러셀(바나나 배경) */
export const carouselItems = [
  { image: 'etx1.jpg', alt: '그 외 제품 1' },
  { image: 'etx2.jpg', alt: '그 외 제품 2' },
  { image: 'etx3.jpg', alt: '그 외 제품 3' },
  { image: 'etx4.jpg', alt: '그 외 제품 4' },
  { image: 'etx5.jpg', alt: '그 외 제품 5' },
];
