// AOS
AOS.init({ duration: 600, offset: 60, once: true });

/* =========================================================
   Swiper - Hero (تهيئة واحدة فقط + crossFade لمنع الوميض)
========================================================= */
// لو كان مهيأ سابقًا (بسبب تكرار إدراج السكربت)، دمّره أولًا
const heroRoot = document.querySelector('.hero-swiper');
if (heroRoot?.swiper) {
  heroRoot.swiper.destroy(true, true);
}

const heroSwiper = new Swiper('.hero-swiper', {
  effect: 'fade',
  fadeEffect: { crossFade: true },     // يمنع لحظة الشاشة السوداء
  speed: 800,
  loop: true,
  preloadImages: true,                  // حمّل الصور مسبقًا
  watchSlidesProgress: true,
  observer: true,                       // راقب تغييرات DOM (احتياطي)
  observeParents: true,
  autoplay: { delay: 4500, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.hero-next', prevEl: '.hero-prev' },
  a11y: { enabled: true }
});

/* =========================================================
   Counters (مرة وحيدة عند الظهور)
========================================================= */
function animateCounters() {
  const els = document.querySelectorAll('[data-counter]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        const to = parseInt(el.dataset.counter, 10) || 0;
        const dur = 1400;
        const start = performance.now();
        const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);

        function step(t) {
          const p = Math.min(1, (t - start) / dur);
          el.textContent = Math.floor(to * easeOutCubic(p)).toLocaleString('ar-EG');
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  els.forEach((el) => io.observe(el));
}
animateCounters();

/* =========================================================
   Close mobile menu when clicking links
========================================================= */
document.querySelectorAll('.navbar .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const el = document.getElementById('navMenu');
    if (el && el.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(el);
      bsCollapse?.hide();
    }
  });
});

/* =========================================================
   Contact form (demo submit)
========================================================= */
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const btn = this.querySelector('button[type=submit]');
  btn.disabled = true;
  const original = btn.innerText;
  btn.innerText = 'يتم الإرسال...';
  setTimeout(() => {
    alert('تم استلام رسالتك – سنعاود التواصل قريبًا.');
    btn.disabled = false;
    btn.innerText = original;
    this.reset();
  }, 800);
});










/* ===== Navbar: Elevation on scroll ===== */
(function(){
  const nav = document.querySelector('.navbar.nav-glass');
  const onScroll = () => {
    if (!nav) return;
    const y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle('scrolled', y > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ===== ScrollSpy: تمييز الرابط حسب القسم المرئي ===== */
(function(){
  const links = Array.from(document.querySelectorAll('.navbar .nav-link[data-spy="link"]'));
  const targets = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!targets.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = links.find(a => a.getAttribute('href') === id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(a => a.classList.remove('is-active'));
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'true');
      }
    });
  }, { threshold: 0.55 });

  targets.forEach(sec => io.observe(sec));
})();

/* إغلاق الـ Offcanvas عند الضغط على أي رابط */
document.querySelectorAll('.offcanvas .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const el = document.getElementById('navMenu');
    if (!el) return;
    const oc = bootstrap.Offcanvas.getInstance(el);
    oc?.hide();
  });
});
/* إغلاق الـ Offcanvas عند الضغط على أي رابط */
document.querySelectorAll('.offcanvas .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const el = document.getElementById('navMenu');
    if (!el) return;
    const oc = bootstrap.Offcanvas.getInstance(el);
    oc?.hide();
  });
});
