import { DISPLAY_PHONE, WHATSAPP_NUMBER } from '../../utils/whatsapp';

const LocationContact = () => (
  <>
    <section className="photo-section" id="ubicacion">
      <img className="ps-bg" src="/img/galeria/calle-taller.png" alt="Frente de la zona del taller" loading="lazy" />
      <div className="wrap">
        <p className="eyebrow">Dónde encontrarnos</p>
        <h2 className="section-title">Ubicación</h2>
        <div className="rule" />
        <div className="two-col">
          <div className="map-frame">
            <iframe
              title="Mapa de Escape1 en San Miguel de Tucumán"
              src="https://www.google.com/maps?q=escape1+San+Miguel+de+Tucum%C3%A1n&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <aside className="location-card">
            <h3>San Miguel de Tucumán</h3>
            <p>Santiago y América<br />San Miguel de Tucumán</p>
            <p className="location-note"><strong>Horario:</strong><br />Lunes a sábado · 9:00 a 19:00</p>
            <a className="btn btn-outline" href="https://www.google.com/maps?q=escape1+San+Miguel+de+Tucum%C3%A1n" target="_blank" rel="noopener">
              Abrir en Maps
            </a>
          </aside>
        </div>
      </div>
    </section>

    <section className="photo-section" id="contacto">
      <img className="ps-bg" src="/img/galeria/ferrari.jpg" alt="Auto deportivo preparado" loading="lazy" />
      <div className="wrap">
        <p className="eyebrow">Hablemos</p>
        <h2 className="section-title">Contactanos</h2>
        <div className="rule" />
        <p className="section-sub">Escribinos, llamanos o acercate al taller. Te ayudamos a encontrar la mejor alternativa para tu vehículo.</p>
        <div className="contact-grid">
          <a className="contact-card" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener">
            <span className="contact-icon"><img src="/img/galeria/icono-wp.jpg" alt="" /></span>
            <h3>WhatsApp</h3>
            <span>{DISPLAY_PHONE}</span>
          </a>
          <a className="contact-card" href={`tel:+${WHATSAPP_NUMBER}`}>
            <span className="contact-icon"><svg width="22" height="22"><use href="#icon-phone" /></svg></span>
            <h3>Teléfono</h3>
            <span>{DISPLAY_PHONE}</span>
          </a>
          <a className="contact-card" href="mailto:contacto@escape1.com.ar">
            <span className="contact-icon"><img src="/img/galeria/icono-email.jpg" alt="" /></span>
            <h3>Email</h3>
            <span>contacto@escape1.com.ar</span>
          </a>
        </div>
      </div>
    </section>
  </>
);

export default LocationContact;
