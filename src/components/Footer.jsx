import NAV_ITEMS from '../data/nav';
import { DISPLAY_PHONE, WHATSAPP_NUMBER } from '../utils/whatsapp';

const Footer = () => (
  <footer className="site-footer">
    <div className="finish-line" aria-hidden="true" />
    <div className="wrap footer-grid">
      <div className="footer-brand">
        <a className="logo" href="#inicio" aria-label="Escape1, volver al inicio">
          <span className="e1">Escape</span><span className="e2">1</span>
        </a>
        <p>Taller especializado en escapes originales, deportivos y fabricación a medida para autos, camionetas y motos.</p>
      </div>

      <nav className="footer-col" aria-label="Secciones">
        <h2>Secciones</h2>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
          <li><a href="#presupuesto">Presupuesto</a></li>
          <li><a href="#turnos">Turnos</a></li>
        </ul>
      </nav>

      <div className="footer-col">
        <h2>Contacto</h2>
        <ul>
          <li>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener">
              <svg className="icon" aria-hidden="true"><use href="#icon-whatsapp" /></svg>
              {DISPLAY_PHONE}
            </a>
          </li>
          <li>
            <a href="mailto:contacto@escape1.com.ar">
              <svg className="icon" aria-hidden="true"><use href="#icon-mail" /></svg>
              contacto@escape1.com.ar
            </a>
          </li>
          <li>
            <span>
              <svg className="icon" aria-hidden="true"><use href="#icon-pin" /></svg>
              Santiago y América, Tucumán
            </span>
          </li>
        </ul>
      </div>

      <div className="footer-col">
        <h2>Horario</h2>
        <ul>
          <li>
            <span>
              <svg className="icon" aria-hidden="true"><use href="#icon-clock" /></svg>
              Lunes a sábado
            </span>
          </li>
          <li><span className="footer-hours">9:00 — 19:00</span></li>
        </ul>
      </div>
    </div>
    <div className="wrap footer-bottom">
      <span>© {new Date().getFullYear()} Escape1 · San Miguel de Tucumán</span>
      <a href="#inicio" className="footer-top">
        Volver arriba
        <svg className="icon" aria-hidden="true"><use href="#icon-arrow" /></svg>
      </a>
    </div>
  </footer>
);

export default Footer;
