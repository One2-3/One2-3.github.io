// Hover 전용 드롭다운: <details>가 클릭으로 고정되지 않게 함
document.addEventListener('DOMContentLoaded', () => {
    const sels = [
      'details.hb-dropdown',
      'details.nav-dropdown',
      'details[data-menu="dropdown"]',
      'details[is="hb-dropdown"]'
    ];
    const dropdowns = document.querySelectorAll(sels.join(','));
  
    dropdowns.forEach(d => {
      // 호버하면 열림, 빠지면 닫힘
      d.addEventListener('mouseenter', () => d.setAttribute('open', ''));
      d.addEventListener('mouseleave', () => d.removeAttribute('open'));
  
      // summary 클릭 시 기본 동작(토글) 막기 → 클릭해도 고정 안 됨
      const s = d.querySelector('summary');
      if (s) {
        s.addEventListener('click', e => e.preventDefault());
        s.addEventListener('mousedown', e => e.preventDefault());
      }
    });
  });
  