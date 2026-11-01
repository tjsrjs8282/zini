// 사이트 전역 정보 — 메뉴, 소셜 링크, 회사 정보, 외부 링크를 한곳에서 관리합니다.

export const site = {
  name: 'ZINI',
  description:
    '안전하고 유쾌한 캐릭터 콘돔과 러브젤, 마사지젤을 만드는 성인용품 브랜드 ZINI(지니)의 공식 소개 사이트입니다.',
  /** 쇼핑몰(부르르닷컴). 모든 경로가 성인인증 페이지로 이동하므로 실제 연결 주소 점검이 필요합니다. */
  shopUrl: 'https://www.bururu.com/',
  loginUrl: 'https://www.bururu.com/',
  joinUrl: 'https://www.bururu.com/',
} as const;

export type NavId = 'home' | 'about' | 'condom' | 'gel' | 'gallery' | 'contact';

export interface NavItem {
  id: NavId;
  label: string;
  href: string;
  /** 메뉴 뒤 연필 모양 SVG가 늘어나는 끝 x 좌표(글자 길이에 맞춤) */
  pencilEnd: number;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'home', href: '', pencilEnd: 92 },
  { id: 'about', label: 'about', href: 'about.html', pencilEnd: 103 },
  { id: 'condom', label: 'condom', href: 'condom.html', pencilEnd: 125.5 },
  { id: 'gel', label: 'gel', href: 'gel.html', pencilEnd: 75 },
  { id: 'gallery', label: 'gallery', href: 'gallery.html', pencilEnd: 124 },
  { id: 'contact', label: 'contact', href: 'contact.html', pencilEnd: 125.5 },
];

export type SocialId = 'facebook' | 'x' | 'youtube' | 'instagram';

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: 'facebook', label: '페이스북', href: 'https://www.facebook.com/bururumall' },
  { id: 'x', label: 'X(트위터)', href: 'https://twitter.com/bururudotcom' },
  {
    id: 'youtube',
    label: '유튜브',
    href: 'https://www.youtube.com/channel/UCqQwu0OZiQ5eH8ZSYqglJHQ/videos',
  },
  { id: 'instagram', label: '인스타그램', href: 'https://www.instagram.com/bururu_com/' },
];

export const company = {
  bank: '우리은행',
  account: '1234-123-456789',
  name: '주식회사 케어앤셰어',
  ceo: '이상진',
  bizNumber: '727-81-56789',
  mailOrderNumber: '제2019-청실아파트-1234호',
  medicalDeviceNumber: '제2537호',
  address: '56789 서울 용산구 구구구 999 (딩댕동,물류창고)',
  email: 'wevizzang@msharmony.co.kr',
  tel: '1234-5678',
  fax: '02-123-4567',
  hosting: '하나로호스팅(주)',
  csPhone: '1234-5678',
} as const;

/** 푸터 INFORMATION 메뉴 — 연결할 페이지가 없는 항목은 href 없이 텍스트로 표시합니다. */
export const infoLinks: { label: string; href?: string }[] = [
  { label: '이용약관' },
  { label: '개인정보처리방침' },
  { label: '이메일무단수집거부' },
  { label: 'FAQ' },
  { label: '1:1문의', href: 'contact.html' },
  { label: '회사소개', href: 'about.html' },
];

export const familySites = [
  { name: '엠에스하모니', href: 'https://www.mshb2b.com/', image: 'msh_logo.jpg' },
  { name: '엠에스제이엘', href: 'https://www.mshb2b.com/', image: 'msjl_logo.jpg' },
  { name: '지니', href: 'https://www.zini.com/', image: 'zini_logo.jpg' },
  { name: '케어앤셰어', href: 'http://www.carenshare.co.kr/', image: 'carenshare_logo.jpg' },
] as const;
