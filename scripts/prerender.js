// Corre al final de `npm run build`, después de los dos builds de Vite:
//   1. Escribe el HTML de cada página (home y cada ficha del catálogo) con su
//      contenido ya dibujado y su propio <head> (título, descripción, etc.).
//   2. Genera sitemap.xml y robots.txt para los buscadores.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const ssrDir = new URL('../dist-ssr/', import.meta.url);

const {
  PAGE_PATHS, getPageMeta, parsePath, render, renderHead, renderRobots, renderSitemap,
} = await import(new URL('entry-server.js', ssrDir).href);

const template = await readFile(new URL('index.html', dist), 'utf8');

for (const path of PAGE_PATHS) {
  const { slug } = parsePath(path);
  // Se reemplaza con funciones para que un "$" en el contenido no se tome como patrón
  const html = template
    .replace('<!--app-head-->', () => renderHead(getPageMeta(slug)))
    // data-path: la página que se dibujó (main.jsx lo compara con la URL)
    .replace('<div id="root"><!--app-html--></div>', () => `<div id="root" data-path="${path}">${render(path)}</div>`);

  // "/" -> dist/index.html · "/catalogo/motos" -> dist/catalogo/motos.html
  // (Vercel sirve motos.html en /catalogo/motos gracias a "cleanUrls" en vercel.json)
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
