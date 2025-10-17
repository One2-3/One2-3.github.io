(function () {
  const root = document.querySelector('.carousel .carousel-inner');
  if (!root) return;
  const items = Array.from(root.querySelectorAll('.carousel-item'));
  if (items.length <= 1) return;

  let idx = items.findIndex((x) => x.classList.contains('active'));
  if (idx < 0) idx = 0;

  function show(i) {
    items[idx]?.classList.remove('active');
    idx = (i + items.length) % items.length;
    items[idx]?.classList.add('active');
  }

  // 5초마다 다음 슬라이드
  let t = setInterval(() => show(idx + 1), 5000);

  // 탭 숨김에서 정지/재시작
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearInterval(t);
    else t = setInterval(() => show(idx + 1), 5000);
  });
})();
