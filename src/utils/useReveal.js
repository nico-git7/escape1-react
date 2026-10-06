import { useEffect } from 'react';

// Hace aparecer suavemente los elementos con data-reveal cuando entran en pantalla.
// data-reveal="2" agrega un pequeño retraso escalonado (2 × 90ms).
// `pageKey`: cambiarlo vuelve a buscar elementos (ej. al pasar de la home a una ficha).
export default function useReveal(pageKey) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return undefined;

    const root = document.documentElement;
    root.classList.add('js-reveal');
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)');
    elements.forEach((el) => {
      if (el.dataset.reveal) el.style.setProperty('--d', el.dataset.reveal);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pageKey]);
}
