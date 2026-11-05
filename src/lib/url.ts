const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** 내부 경로 앞에 배포 base(기본 `/zini`)를 붙입니다. 외부 URL·앵커는 그대로 반환합니다. */
export function url(path = ''): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}/${path.replace(/^\/+/, '')}`;
}

export const isExternal = (href: string) => /^https?:/.test(href);

/** 외부 링크면 새 창으로 여는 속성을 돌려줍니다. */
export const linkAttrs = (href: string) =>
  isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
