const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** 내부 경로 앞에 배포 base(기본 `/zini`)를 붙입니다. 외부 URL은 그대로 반환합니다. */
export function url(path = ''): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}/${path.replace(/^\/+/, '')}`;
}

export const isExternal = (href: string) => /^https?:/.test(href);
