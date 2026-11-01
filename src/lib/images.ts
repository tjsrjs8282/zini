import type { ImageMetadata } from 'astro';

// src/assets/images 의 모든 이미지를 파일명으로 찾을 수 있게 합니다.
// 데이터 파일에서는 'condom1.png' 처럼 파일명만 적고, 오타가 있으면 빌드가 실패합니다.
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{jpg,png}', {
  eager: true,
});

const byName = new Map(
  Object.entries(modules).map(([path, mod]) => [
    path.slice(path.lastIndexOf('/') + 1),
    mod.default,
  ]),
);

export function img(name: string): ImageMetadata {
  const meta = byName.get(name);
  if (!meta) throw new Error(`[images] src/assets/images/${name} 파일을 찾을 수 없습니다.`);
  return meta;
}
