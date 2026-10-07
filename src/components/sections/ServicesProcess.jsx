const SERVICES = [
  { image: 'servicio-originales', title: 'Escapes originales', text: 'Reemplazo de silenciadores, precámaras, salidas y componentes dañados.', service: 'Cambio de escape original' },
  { image: 'servicio-deportivos', title: 'Escapes deportivos', text: 'Instalación y adaptación de líneas deportivas para autos, camionetas y motos.', service: 'Cambio de escape deportivo' },
  { image: 'servicio-medida', title: 'Fabricación a medida', text: 'Diseño de sistemas completos para proyectos especiales y vehículos modificados.', service: 'Modificación a medida' },
  { image: 'servicio-catalizadores', title: 'Catalizadores', text: 'Diagnóstico, reemplazo y reparación según el estado del sistema.', service: 'Catalizador' },
  { image: 'servicio-reprogramacion', title: 'Reprogramación', text: 'Reprogramación de vehículos (DPF - EGR OFF).', service: 'Reprogramación (DPF - EGR OFF)' },
  { image: 'servicio-reparaciones', title: 'Reparaciones', text: 'Juntas, soportes, pérdidas, vibraciones y arreglos del sistema de escape.', service: 'Reparación / otro' },
];

const PROCESS_STEPS = [
  { title: 'Contanos qué necesitás', text: 'Mandanos marca, modelo, año y una descripción de lo que querés resolver.' },
  { title: 'Revisamos tu vehículo', text: 'Evaluamos el trabajo y te explicamos las opciones antes de avanzar.' },
  { title: 'Coordinamos el trabajo', text: 'Definimos turno, materiales y alcance para que tengas claridad en cada etapa.' },
];

const pad = (n) => String(n).padStart(2, '0');

// onSelectService(nombreServicio) hace scroll al presupuesto y precarga el select
const ServicesProcess = ({ onSelectService }) => (
  <>
    <section className="section-grid" id="servicios">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Servicios del taller</p>
            <h2 className="section-title">De mantenimiento a preparación</h2>
            <div className="rule" />
          </div>
          <p className="section-sub">Trabajamos sobre todo el sistema de escape: reemplazo, reparación, adaptación y fabricación personalizada.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <article className="service-card" key={service.title} data-reveal={(index % 3) + 1}>
              <div className="service-media">
                <img src={`/img/stock/${service.image}.jpg`} alt="" loading="lazy" />
                <span className="service-number" aria-hidden="true">{pad(index + 1)}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <button className="service-link" type="button" onClick={() => onSelectService(service.service)}>
                Consultar servicio
                <svg className="icon" aria-hidden="true"><use href="#icon-arrow" /></svg>
              </button>
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
        <ol className="process-grid">
          {PROCESS_STEPS.map((step, index) => (
            <li className="process-item" key={step.title} data-reveal={index + 1}>
              <span className="process-number" aria-hidden="true">{pad(index + 1)}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export default ServicesProcess;
