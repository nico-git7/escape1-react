const SERVICES = [
  { title: 'Escapes originales', text: 'Reemplazo de silenciadores, precámaras, salidas y componentes dañados.', service: 'Cambio de escape original' },
  { title: 'Escapes deportivos', text: 'Instalación y adaptación de líneas deportivas para autos y motos.', service: 'Cambio de escape deportivo' },
  { title: 'Fabricación a medida', text: 'Diseño de sistemas completos para proyectos especiales y vehículos modificados.', service: 'Modificación a medida' },
  { title: 'Catalizadores', text: 'Diagnóstico, reemplazo y reparación según el estado del sistema.', service: 'Catalizador' },
  { title: 'Reprogramación', text: 'Reprogramación de vehículos.', service: 'Reprogramación' },
  { title: 'Reparaciones', text: 'Juntas, soportes, pérdidas, vibraciones y arreglos del sistema de escape.', service: 'Reparación / otro' },
];

const PROCESS_STEPS = [
  { title: 'Contanos qué necesitás', text: 'Mandanos marca, modelo, año y una descripción de lo que querés resolver.' },
  { title: 'Revisamos tu vehículo', text: 'Evaluamos el trabajo y te explicamos las opciones antes de avanzar.' },
  { title: 'Coordinamos el trabajo', text: 'Definimos turno, materiales y alcance para que tengas claridad en cada etapa.' },
];

// onSelectService(nombreServicio) hace scroll al presupuesto y precarga el select
const ServicesProcess = ({ onSelectService }) => (
  <>
    <section className="photo-section" id="servicios">
      <img className="ps-bg" src="/img/galeria/cola.jpg" alt="Detalle de salida de escape" loading="lazy" />
      <div className="wrap">
        <p className="eyebrow">Servicios del taller</p>
        <h2 className="section-title">De mantenimiento a preparación</h2>
        <div className="rule" />
        <p className="section-sub">Trabajamos sobre todo el sistema de escape: reemplazo, reparación, adaptación y fabricación personalizada.</p>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <button className="service-link" type="button" onClick={() => onSelectService(service.service)}>
                Consultar servicio <svg width="15" height="15"><use href="#icon-arrow" /></svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-soft" id="proceso">
      <div className="wrap">
        <p className="eyebrow">Así trabajamos</p>
        <h2 className="section-title">Claro desde el primer contacto</h2>
        <div className="rule" />
        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <article className="process-item" key={step.number}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicesProcess;
