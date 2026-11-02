import Icon from '../Icon';
import { ADDRESS, CITY, DISPLAY_PHONE, HOURS, MAPS_URL, PHONE_URL, SOCIALS, WHATSAPP_URL } from '../../data/site';

const CONTACT_CARDS = [
  { icon: 'whatsapp', title: 'WhatsApp', value: DISPLAY_PHONE, href: WHATSAPP_URL, external: true, featured: true },
  { icon: 'phone', title: 'Teléfono', value: DISPLAY_PHONE, href: PHONE_URL },
  ...SOCIALS.map((social) => ({ icon: social.id, title: social.label, value: social.handle, href: social.url, external: true })),
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
              title={`Mapa de Escape1 en ${CITY}`}
              src={`${MAPS_URL}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <aside className="location-card" data-reveal="2">
            <h3>{CITY}</h3>
            <p className="location-line">
              <Icon name="pin" />
              <span>{ADDRESS}<br />{CITY}</span>
            </p>
            <p className="location-line">
              <Icon name="clock" />
              <span><strong>{HOURS.days}</strong><br />{HOURS.open} a {HOURS.close}</span>
            </p>
            <a className="btn btn-outline" href={MAPS_URL} target="_blank" rel="noopener">
              Cómo llegar
              <Icon name="arrow" />
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
          <p className="section-sub">Escribinos, llamanos, seguinos en redes o acercate al taller. Te ayudamos a encontrar la mejor alternativa para tu vehículo.</p>
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
                <Icon name={card.icon} />
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
