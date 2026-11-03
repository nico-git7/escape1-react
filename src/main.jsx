import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
// Fuentes servidas desde el propio sitio (más rápido que pedirlas a Google Fonts).
// Van acá y no en App.jsx porque el build de servidor (entry-server.jsx) no las necesita.
// Solo el alfabeto latino (incluye tildes y ñ) y los pesos que usa el diseño.
import '@fontsource/big-shoulders-display/latin-600';
import '@fontsource/big-shoulders-display/latin-700';
import '@fontsource/big-shoulders-display/latin-800';
import '@fontsource/ibm-plex-mono/latin-500';
import '@fontsource/ibm-plex-mono/latin-600';
import '@fontsource/ibm-plex-sans/latin-400';
import '@fontsource/ibm-plex-sans/latin-500';
import '@fontsource/ibm-plex-sans/latin-600';
import '@fontsource/ibm-plex-sans/latin-700';
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
