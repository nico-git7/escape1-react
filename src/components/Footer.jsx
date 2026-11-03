import Icon from './Icon';
import NAV_ITEMS from '../data/nav';
import { ADDRESS, CITY, DISPLAY_PHONE, HOURS, SOCIALS, WHATSAPP_URL } from '../data/site';

const Footer = () => (
  <footer className="site-footer">
    <div className="finish-line" aria-hidden="true" />
    <div className="wrap footer-grid">
      <div className="footer-brand">
        <a className="logo" href="/#inicio" aria-label="Escape1, volver al inicio">
          <img src="/img/logo-soldador.webp" alt="Escape1 Repro-Chip" width="972" height="654" loading="lazy" />
        </a>
        <p>Taller especializado en escapes originales, deportivos y fabricación a medida para autos, camionetas y motos.</p>
      </div>

      <nav className="footer-col" aria-label="Secciones">
        <h2>Secciones</h2>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}><a href={`/${item.href}`}>{item.label}</a></li>
          ))}
          <li><a href="/#presupuesto">Presupuesto</a></li>
          <li><a href="/#preguntas">Preguntas frecuentes</a></li>
        </ul>
      </nav>

      <div className="footer-col">
        <h2>Contacto</h2>
        <ul>
          <li>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {DISPLAY_PHONE}
            </a>
          </li>
          {SOCIALS.map((social) => (
            <li key={social.id}>
              <a href={social.url} target="_blank" rel="noopener" aria-label={`${social.label}: ${social.handle}`}>
                <Icon name={social.id} />
                {social.handle}
              </a>
            </li>
          ))}
          <li>
            <span>
              <Icon name="pin" />
              {ADDRESS}, Tucumán
            </span>
          </li>
        </ul>
      </div>

      <div className="footer-col">
        <h2>Horario</h2>
        <ul>
          <li>
            <span>
              <Icon name="clock" />
              {HOURS.days}
            </span>
          </li>
          <li><span className="footer-hours">{HOURS.open} — {HOURS.close}</span></li>
        </ul>
      </div>
    </div>
    <div className="wrap footer-bottom">
      {/* El año se calcula en el build y otra vez en el navegador: si cambia de año
          entre medio, que React use el del navegador sin quejarse */}
      <span suppressHydrationWarning>© {new Date().getFullYear()} Escape1 · {CITY}</span>
      <a href="/#inicio" className="footer-top">
        Volver arriba
        <Icon name="arrow" />
      </a>
    </div>
  </footer>
);

export default Footer;
