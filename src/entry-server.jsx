// Solo se usa en el build (no llega al navegador). scripts/prerender.js lo usa para
// generar el HTML de cada página, así Google, WhatsApp y las redes leen el contenido
// sin tener que ejecutar JavaScript.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export { PAGE_PATHS, getPageMeta, renderHead, renderRobots, renderSitemap } from './utils/seo';
export { parsePath } from './utils/useRoute';

export function render(path) {
  return renderToString(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>,
  );
}
