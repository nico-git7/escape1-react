import Icon from '../Icon';
import SERVICES from '../../data/services';
import { rememberHomeScroll } from '../../utils/scrollMemory';
import { catalogPath } from '../../utils/useRoute';

// `when` marca el orden de cada paso; `image` es una foto de /public/img/proceso
const PROCESS_STEPS = [
  { when: 'Primero', image: 'paso-1-silenciadores', title: 'Contanos qué necesitás', text: 'Mandanos marca, modelo, año y una descripción de lo que querés resolver.' },
  { when: 'Después', image: 'paso-2-camioneta', title: 'Revisamos tu vehículo', text: 'Evaluamos el trabajo y te explicamos las opciones antes de avanzar.' },
  { when: 'Por último', image: 'paso-3-colocado', title: 'Coordinamos el trabajo', text: 'Definimos turno, materiales y alcance para que tengas claridad en cada etapa.' },
];

// onSelectService(nombreServicio) hace scroll al presupuesto y precarga el select
const ServicesProcess = ({ onSelectService }) => (
  <>
    <section className="photo-section is-subtle" id="servicios">
      <img className="ps-bg" src="/img/fondos/inicio.webp" alt="" loading="lazy" />
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Servicios del taller</p>
            <h2 className="section-title">De mantenimiento a preparación</h2>
            <div className="rule" />
          </div>
          <p className="section-sub">Trabajamos sobre todo el sistema de escape: reemplazo, reparación, adaptación y fabricación personalizada.</p>
        </div>
        {/* Mosaico: los dos primeros servicios van grandes y el resto en una fila más chica */}
        <div className="services-mosaic">
          {SERVICES.map((service, index) => (
            <article className={`service-tile${index < 2 ? ' is-large' : ''}`} key={service.title} data-reveal={(index % 4) + 1}>
              <img src={`/img/stock/${service.image}.jpg`} alt="" loading="lazy" />
              <div className="service-tile-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-actions">
                  <button className="service-link" type="button" onClick={() => onSelectService(service.service)}>
                    Consultar servicio
                    <Icon name="arrow" />
                  </button>
                  {service.page && (
                    <a className="service-more" href={catalogPath(service.page)} onClick={rememberHomeScroll}>
                      Ver más<span className="sr-only"> sobre {service.title.toLowerCase()}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-soft" id="proceso">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Así trabajamos</p>
            <h2 className="section-title">Claro desde el primer contacto</h2>
            <div className="rule" />
          </div>
        </div>
        <ol className="process-panels">
          {PROCESS_STEPS.map((step, index) => (
            <li className="process-panel" key={step.title} data-reveal={index + 1}>
              <img src={`/img/proceso/${step.image}.webp`} alt="" loading="lazy" />
              <div className="process-body">
                <p className="process-when">{step.when}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export default ServicesProcess;
