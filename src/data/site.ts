// 사이트 전역 정보 — 메뉴, 외부 링크, 소셜, 회사 정보를 한곳에서 관리합니다.

export const site = {
  name: 'ZINI',
  title: 'ZINI 지니 — 명랑한 캐릭터 콘돔 & 러브젤',
  description:
    '아시아인 사이즈에 맞춘 캐릭터 콘돔과 피부에 순한 S-SOLUTION 러브젤. 명랑하고 안전한 사랑을 위한 브랜드 ZINI(지니)를 소개합니다.',
  /** 공식 쇼핑몰(부르르닷컴) */
  shopUrl: 'https://www.bururu.com/',
  /** B2B 도매몰(엠에스하모니) */
  b2bUrl: 'https://www.mshb2b.com/',
  /** 리디자인 크레딧 — 푸터에 표시합니다. */
  credit: { name: 'GEONY WORKS', href: 'https://tjsrjs8282.github.io/portfolio/' },
} as const;

export type NavId = 'home' | 'about' | 'condom' | 'gel' | 'gallery' | 'contact';

export interface NavItem {
  id: Exclude<NavId, 'home'>;
  label: string;
  en: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 'about', label: '회사소개', en: 'About', href: 'about.html' },
  { id: 'condom', label: '콘돔', en: 'Condoms', href: 'condom.html' },
  { id: 'gel', label: '러브젤', en: 'Love Gel', href: 'gel.html' },
  { id: 'gallery', label: '갤러리', en: 'Gallery', href: 'gallery.html' },
  { id: 'contact', label: '문의', en: 'Contact', href: 'contact.html' },
];

export interface LinkItem {
  label: string;
  href: string;
}

export const footerNav: { title: string; links: LinkItem[] }[] = [
  {
    title: '제품',
    links: [
      { label: '캐릭터 콘돔', href: 'condom.html' },
      { label: '센슈얼 러브젤', href: 'sensual.html' },
      { label: '프리미엄 러브젤', href: 'premium.html' },
      { label: '마사지젤', href: 'massage.html' },
    ],
  },
  {
    title: '브랜드',
    links: [
      { label: '회사소개', href: 'about.html' },
      { label: '갤러리', href: 'gallery.html' },
      { label: '문의하기', href: 'contact.html' },
    ],
  },
  {
    title: '쇼핑',
    links: [
      { label: '공식몰 부르르닷컴', href: site.shopUrl },
      { label: 'B2B 도매몰', href: site.b2bUrl },
    ],
  },
];

export type SocialId = 'facebook' | 'x' | 'youtube' | 'instagram';

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: 'instagram', label: '인스타그램', href: 'https://www.instagram.com/bururu_com/' },
  {
    id: 'youtube',
    label: '유튜브',
    href: 'https://www.youtube.com/channel/UCqQwu0OZiQ5eH8ZSYqglJHQ/videos',
  },
  { id: 'facebook', label: '페이스북', href: 'https://www.facebook.com/bururumall' },
  { id: 'x', label: 'X(트위터)', href: 'https://twitter.com/bururudotcom' },
];

export const company = {
  name: '주식회사 케어앤셰어',
  en: 'Care & Share',
} as const;

export const familySites: LinkItem[] = [
  { label: '엠에스하모니', href: 'https://www.mshb2b.com/' },
  { label: '부르르닷컴', href: 'https://www.bururu.com/' },
  { label: '케어앤셰어', href: 'http://www.carenshare.co.kr/' },
];
