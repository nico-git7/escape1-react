import Icon from '../components/Icon';
import { WHATSAPP_URL } from '../data/site';
import './CatalogDetail.css';

// Página para las direcciones que no existen. En Hostinger la muestra el servidor
// (ErrorDocument en public/.htaccess) con el código 404, así Google no la indexa.
const NotFound = () => (
  <main id="contenido" className="detail-page not-found">
    <div className="wrap">
      <p className="eyebrow">Error 404</p>
      <h1 className="section-title">No encontramos esta página</h1>
      <div className="rule" />
      <p className="not-found-text">
        Puede que el link esté mal escrito o que la página ya no exista. Desde el inicio
        tenés todos los servicios, el catálogo y los datos de contacto del taller.
      </p>
      <div className="not-found-actions">
        <a className="btn btn-solid" href="/">
          Ir al inicio
          <Icon name="arrow" />
        </a>
        <a className="btn btn-outline" href="/#catalogo">Ver el catálogo</a>
        <a className="btn btn-outline" href={WHATSAPP_URL} target="_blank" rel="noopener">
          <Icon name="whatsapp" />
          WhatsApp
        </a>
      </div>
    </div>
  </main>
);

export default NotFound;
