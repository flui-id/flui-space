/* ================================================
   FLUI.SPACE — v2.0.0
   ================================================ */

(function () {
  'use strict';

  // Reveal elements as their section enters the viewport
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -4% 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
})();
