import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// En producción cada página ya viene con su HTML armado desde el build
// (scripts/prerender.js): React lo "hidrata" (le conecta los eventos) en vez de
// dibujarlo de cero. Si el HTML no es el de esta URL (o en desarrollo, que viene
// vacío), se dibuja todo de nuevo.
const currentPath = window.location.pathname.replace(/(.)\/$/, '$1'); // sin "/" al final
if (container.dataset.path === currentPath) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
