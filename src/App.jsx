import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './index.css';
import './components/Header.css';
import './components/Footer.css';
import './components/MainHome.css';
import IconSprite from './components/IconSprite';
import Header from './components/Header';
import MainHome from './components/MainHome';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CatalogDetail from './pages/CatalogDetail';
import NotFound from './pages/NotFound';
import useRoute from './utils/useRoute';
import useReveal from './utils/useReveal';
import { markOpenedFromHome, savedHomeScroll } from './utils/scrollMemory';
import { applyPageMeta, getPageMeta } from './utils/seo';

// `initialPath` solo se usa al generar el HTML de cada página en el build
// (ver src/entry-server.jsx). En el navegador la ruta sale de la URL.
function App({ initialPath }) {
  const route = useRoute(initialPath);
  useReveal(`${route.page}:${route.slug}`);

  // Título, descripción y demás datos del <head> de la página actual
  useEffect(() => {
    applyPageMeta(getPageMeta(route.page, route.slug));
  }, [route.page, route.slug]);

  // Servicio / detalle a precargar en el formulario de presupuesto
  const [preset, setPreset] = useState(null);

  const requestBudget = useCallback(({ service, detail = '' }) => {
    setPreset({ service, detail, id: Date.now() });
  }, []);

  const isHome = route.page === 'home';

  // La home se monta la primera vez que se visita y después queda montada (oculta)
  // mientras se mira una ficha. Así al volver se conserva todo: la posición, la
  // galería desplegada y lo que ya se haya escrito en los formularios.
  const [homeMounted, setHomeMounted] = useState(isHome);
  if (isHome && !homeMounted) setHomeMounted(true);

  // Scroll al cambiar de página.
  const previousRoute = useRef({ page: route.page, slug: route.slug });
  useLayoutEffect(() => {
    const from = previousRoute.current;
    previousRoute.current = { page: route.page, slug: route.slug };

    // Las fichas (y la página de error) siempre arrancan arriba
    if (!isHome) {
      if (route.page === 'catalog-item' && from.page === 'home') markOpenedFromHome();
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Vuelta desde una ficha (link "Volver" o botón Atrás): mismo lugar donde estaba
    const saved = from.page === 'catalog-item' ? savedHomeScroll() : null;
    if (saved !== null) {
      window.scrollTo({ top: saved, behavior: 'instant' });
      return;
    }

    // Carga inicial o link a una sección (ej. #presupuesto desde una ficha)
    const hash = window.location.hash;
    const target = hash.length > 1 && !hash.startsWith('#/')
      ? document.getElementById(hash.slice(1))
      : null;
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, [route.page, route.slug, isHome]);

  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <IconSprite />
      {/* key: reinicia el scroll-spy del menú al cambiar de página */}
      <Header key={route.page} />
      {homeMounted && (
        <div hidden={!isHome}>
          <MainHome preset={preset} onRequestBudget={requestBudget} />
        </div>
      )}
      {route.page === 'catalog-item' && (
        <CatalogDetail key={route.slug} slug={route.slug} />
      )}
      {route.page === 'not-found' && <NotFound />}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
