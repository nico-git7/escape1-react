// Corre al final de `npm run build`, después de los dos builds de Vite:
//   1. Escribe el HTML de cada página (home y cada ficha del catálogo) con su
//      contenido ya dibujado y su propio <head> (título, descripción, etc.).
//   2. Escribe 404.html, la página para las direcciones que no existen.
//   3. Genera sitemap.xml y robots.txt para los buscadores.
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const ssrDir = new URL('../dist-ssr/', import.meta.url);

const {
  PAGE_PATHS, getPageMeta, parsePath, render, renderHead, renderRobots, renderSitemap,
} = await import(new URL('entry-server.js', ssrDir).href);

const template = await readFile(new URL('index.html', dist), 'utf8');

// Fuentes que se ven apenas abre la página (títulos, texto y rótulos): se piden de
// entrada (preload) para que el título aparezca antes con su letra. Los nombres
// tienen un código que cambia en cada build, por eso se buscan en dist/assets.
const PRELOAD_FONTS = [
  'big-shoulders-display-latin-800-normal',
  'big-shoulders-display-latin-700-normal',
  'ibm-plex-sans-latin-400-normal',
  'ibm-plex-mono-latin-600-normal',
  'ibm-plex-mono-latin-500-normal',
];
const assets = await readdir(new URL('assets/', dist));
const fontPreloads = PRELOAD_FONTS
  .map((font) => assets.find((file) => file.startsWith(`${font}-`) && file.endsWith('.woff2')))
  .filter(Boolean)
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`);

// "/404" no está en el sitemap: es la página de error (ErrorDocument en .htaccess)
for (const path of [...PAGE_PATHS, '/404']) {
  const { page, slug } = parsePath(path);
  // Se reemplaza con funciones para que un "$" en el contenido no se tome como patrón
  const html = template
    .replace('<!--app-head-->', () => [renderHead(getPageMeta(page, slug)), ...fontPreloads].join('\n    '))
    // data-path: la página que se dibujó (main.jsx lo compara con la URL)
    .replace('<div id="root"><!--app-html--></div>', () => `<div id="root" data-path="${path}">${render(path)}</div>`);

  // "/" -> dist/index.html · "/catalogo/motos" -> dist/catalogo/motos.html · "/404" -> dist/404.html
  // (Hostinger y Vercel sirven motos.html en /catalogo/motos: ver .htaccess y vercel.json)
  const file = new URL(path === '/' ? 'index.html' : `.${path}.html`, dist);
  await mkdir(new URL('.', file), { recursive: true });
  await writeFile(file, html);
  console.log(`prerender: ${path}`);
}

const today = new Date().toISOString().slice(0, 10);
await writeFile(new URL('sitemap.xml', dist), renderSitemap(today));
await writeFile(new URL('robots.txt', dist), renderRobots());
console.log('prerender: sitemap.xml y robots.txt');

// El build de servidor ya no hace falta
await rm(ssrDir, { recursive: true, force: true });
