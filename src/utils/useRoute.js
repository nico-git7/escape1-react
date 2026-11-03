import { useEffect, useState } from 'react';

// Router mínimo con URLs reales (History API). Cada ficha del catálogo tiene su
// propia dirección, así Google la puede indexar como una página aparte:
//
//   /                             ->  { page: 'home' }
//   /catalogo/escapes-originales  ->  { page: 'catalog-item', slug: 'escapes-originales' }
//   cualquier otra ruta           ->  { page: 'not-found' }
//
// Las secciones de la home siguen siendo anchors (#servicios, #presupuesto…).
// Desde una ficha se enlazan como "/#servicios".

export const catalogPath = (slug) => `/catalogo/${slug}`;

export const parsePath = (pathname) => {
  // Acepta las variantes de una misma dirección: "/index.html", ".html" y "/" al final
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/(.)\/$/, '$1');
  if (path === '/' || path === '') return { page: 'home', slug: null };
  const match = path.match(/^\/catalogo\/([\w-]+)$/);
  return match ? { page: 'catalog-item', slug: match[1] } : { page: 'not-found', slug: null };
};

// Links viejos del router con hash (#/catalogo/<slug>), que pueden estar compartidos
// por WhatsApp o en redes. Devuelve la URL nueva, o null si no es un link viejo.
export const legacyHashPath = (hash) => {
  const match = hash.match(/^#\/catalogo\/([\w-]+)\/?$/);
  return match ? catalogPath(match[1]) : null;
};

// Cambia de página sin recargar
export function navigate(to) {
  window.history.pushState(null, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

// Links internos que cambian de página (ej. de una ficha a "/#servicios"): se
// resuelven sin recargar, así la home conserva lo que ya estaba cargado. Si solo
// cambia el #ancla, se deja que el navegador haga el scroll como siempre.
const handleLinkClick = (event) => {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('a[href]');
  if (!link || link.target || link.hasAttribute('download')) return;
  const url = new URL(link.href);
  if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
  event.preventDefault();
  navigate(url.pathname + url.search + url.hash);
};

// `serverPath`: ruta a dibujar cuando se genera el HTML en el build (no hay window)
export default function useRoute(serverPath = '/') {
  const [pathname, setPathname] = useState(() => (
    typeof window === 'undefined' ? serverPath : window.location.pathname
  ));

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    // Si alguien pega un link viejo estando ya en la página
    const onHashChange = () => {
      const legacy = legacyHashPath(window.location.hash);
      if (legacy) window.history.replaceState(null, '', legacy);
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onHashChange);
    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return parsePath(pathname);
}
