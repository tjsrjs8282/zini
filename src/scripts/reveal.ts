// [data-reveal] 요소가 화면에 들어오면 .is-in 을 붙여 나타나게 합니다(한 번만).
// 숨김 스타일은 <html class="js">일 때만 적용되므로 JS가 없으면 처음부터 보입니다.
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => observer.observe(el));
} else {
  targets.forEach((el) => el.classList.add('is-in'));
}
