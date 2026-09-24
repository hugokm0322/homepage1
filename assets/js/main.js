(function () {
  // 모바일 메뉴
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
  }

  // 스크롤 시 헤더 배경
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 승소 사례 분야 필터
  var buttons = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.case-item');
  var empty = document.getElementById('case-empty');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      var shown = 0;
      buttons.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      items.forEach(function (it) {
        var match = f === 'all' || it.dataset.category === f;
        it.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    });
  });

  // 주소 복사
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy;
      var label = btn.textContent;
      (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
        .then(function () { btn.textContent = '복사됨'; })
        .catch(function () { window.prompt('주소를 복사하세요', text); })
        .finally(function () { setTimeout(function () { btn.textContent = label; }, 1500); });
    });
  });
})();
