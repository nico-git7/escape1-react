import { DISPLAY_PHONE, WHATSAPP_NUMBER } from '../../utils/whatsapp';

const MAPS_URL = 'https://www.google.com/maps?q=escape1+San+Miguel+de+Tucum%C3%A1n';
const EMAIL = 'contacto@escape1.com.ar';

const CONTACT_CARDS = [
  { icon: 'icon-whatsapp', title: 'WhatsApp', value: DISPLAY_PHONE, href: `https://wa.me/${WHATSAPP_NUMBER}`, external: true, featured: true },
  { icon: 'icon-phone', title: 'Teléfono', value: DISPLAY_PHONE, href: `tel:+${WHATSAPP_NUMBER}` },
  { icon: 'icon-mail', title: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
];

const LocationContact = () => (
  <>
    <section className="photo-section" id="ubicacion">
      <img className="ps-bg" src="/img/fondos/ubicacion.webp" alt="" loading="lazy" />
      <div className="wrap">
        <div data-reveal>
          <p className="eyebrow">Dónde encontrarnos</p>
          <h2 className="section-title">Ubicación</h2>
          <div className="rule" />
        </div>
        <div className="two-col">
          <div className="map-frame" data-reveal="1">
            <iframe
              title="Mapa de Escape1 en San Miguel de Tucumán"
              src={`${MAPS_URL}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <aside className="location-card" data-reveal="2">
            <h3>San Miguel de Tucumán</h3>
            <p className="location-line">
              <svg className="icon" aria-hidden="true"><use href="#icon-pin" /></svg>
              <span>Santiago y América<br />San Miguel de Tucumán</span>
            </p>
            <p className="location-line">
              <svg className="icon" aria-hidden="true"><use href="#icon-clock" /></svg>
              <span><strong>Lunes a sábado</strong><br />9:00 a 19:00</span>
            </p>
            <a className="btn btn-outline" href={MAPS_URL} target="_blank" rel="noopener">
              Cómo llegar
              <svg className="icon" aria-hidden="true"><use href="#icon-arrow" /></svg>
            </a>
          </aside>
        </div>
      </div>
    </section>

    <section className="contact-band photo-section is-subtle" id="contacto">
      <img className="ps-bg" src="/img/fondos/contacto.webp" alt="" loading="lazy" />
      <div className="wrap">
        <div className="contact-head" data-reveal>
          <p className="eyebrow">Hablemos</p>
          <h2 className="section-title">¿Listo para cambiar el sonido de tu vehículo?</h2>
          <p className="section-sub">Escribinos, llamanos o acercate al taller. Te ayudamos a encontrar la mejor alternativa para tu vehículo.</p>
        </div>
        <div className="contact-grid">
          {CONTACT_CARDS.map((card, index) => (
            <a
              className={`contact-card${card.featured ? ' is-featured' : ''}`}
              href={card.href}
              key={card.title}
              data-reveal={index + 1}
              {...(card.external ? { target: '_blank', rel: 'noopener' } : {})}
            >
              <span className="contact-icon" aria-hidden="true">
                <svg className="icon"><use href={`#${card.icon}`} /></svg>
              </span>
              <h3>{card.title}</h3>
              <span>{card.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default LocationContact;
