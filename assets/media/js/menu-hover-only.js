document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("details").forEach(function (d) {
      d.addEventListener("mouseenter", function () {
        d.setAttribute("open", "true");
      });
      d.addEventListener("mouseleave", function () {
        d.removeAttribute("open");
      });
      d.addEventListener("click", function (e) {
        e.preventDefault(); // 클릭 토글 완전 차단
      });
    });
  });
  