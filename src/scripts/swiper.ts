import Swiper from 'swiper';
import { A11y } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * 한국어 스크린리더 문구와 '동작 줄이기' 설정(자동 재생 끔)을 적용해 Swiper를 만듭니다.
 */
export function createSwiper(el: HTMLElement, options: SwiperOptions): Swiper {
  return new Swiper(el, {
    ...options,
    modules: [A11y, ...(options.modules ?? [])],
    autoplay: prefersReducedMotion() ? false : options.autoplay,
    a11y: {
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      firstSlideMessage: '첫 번째 슬라이드입니다',
      lastSlideMessage: '마지막 슬라이드입니다',
      paginationBulletMessage: '{{index}}번째 슬라이드로 이동',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      ...(typeof options.a11y === 'object' ? options.a11y : {}),
    },
  });
}
