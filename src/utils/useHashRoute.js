import { useEffect, useState } from 'react';

// Router mínimo basado en el hash de la URL. No necesita configurar el servidor
// (funciona en GitHub Pages, Netlify, Vercel, etc.) y convive con los anchors
// de la home (#servicios, #catalogo, #presupuesto…).
//
//   #/catalogo/escapes-originales  ->  { page: 'catalog-item', slug: 'escapes-originales' }
//   cualquier otra cosa            ->  { page: 'home' }

const parse = (hash) => {
  const match = hash.match(/^#\/catalogo\/([\w-]+)\/?$/);
  return match ? { page: 'catalog-item', slug: match[1] } : { page: 'home', slug: null };
};

export default function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return { ...parse(hash), hash };
}
