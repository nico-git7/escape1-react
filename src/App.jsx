import { useCallback, useEffect, useState } from 'react';
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
import useHashRoute from './utils/useHashRoute';
import useReveal from './utils/useReveal';

function App() {
  const route = useHashRoute();
  useReveal(`${route.page}:${route.slug}`);
  // Servicio / detalle a precargar en el formulario de presupuesto
  const [preset, setPreset] = useState(null);

  const requestBudget = useCallback(({ service, detail = '' }) => {
    setPreset({ service, detail, id: Date.now() });
  }, []);

  // Al cambiar de página: la ficha arranca arriba; la home salta al anchor del hash
  // (ej. #presupuesto o #catalogo al volver desde una ficha de producto).
  useEffect(() => {
    if (route.page === 'catalog-item') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const target = window.location.hash.length > 1 && !window.location.hash.startsWith('#/')
      ? document.getElementById(window.location.hash.slice(1))
      : null;
    if (target) target.scrollIntoView({ block: 'start' });
  }, [route.page, route.slug]);

  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <IconSprite />
      {/* key: reinicia el scroll-spy del menú al cambiar de página */}
      <Header key={route.page} />
      {route.page === 'catalog-item' ? (
        <CatalogDetail key={route.slug} slug={route.slug} onRequestBudget={requestBudget} />
      ) : (
        <MainHome preset={preset} onRequestBudget={requestBudget} />
      )}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
