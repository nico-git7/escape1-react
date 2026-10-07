const METRICS = [
  { title: 'Autos y camionetas', text: 'Original y deportivo' },
  { title: 'Motos', text: 'Tachos deportivos y adaptación a medida en acero inox.' },
  { title: 'Fabricación', text: 'Fabricación en acero inox.' },
  { title: 'Enganches', text: 'Enganches nuevos, reforzados y de todas las marcas' },
  { title: 'Servicios', text: 'Diagnóstico computarizado y reprogramación' },
];

const Hero = () => (
  <section className="hero photo-section" id="inicio">
    <img className="ps-bg hero-bg" src="/img/galeria/fondo.jpeg" alt="" fetchPriority="high" />
    <div className="wrap hero-layout">
      <div>
        <p className="eyebrow" data-reveal>Taller especializado · Tucumán</p>
        <h1 data-reveal="1">Sonido, rendimiento<br />y <em>precisión.</em></h1>
        <p className="hero-copy" data-reveal="2">
          Escapes originales, deportivos y fabricación a medida para autos, camionetas y motos.
          Trabajos en acero inoxidable, pensados para tu vehículo.
        </p>
        <div className="hero-actions" data-reveal="3">
          <a className="btn btn-solid" href="#presupuesto">
            Pedí presupuesto
            <svg className="icon" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </a>
          <a className="btn btn-outline" href="#servicios">Conocé los servicios</a>
        </div>
        <ul className="hero-metrics" aria-label="Especialidades del taller" data-reveal="4">
          {METRICS.map((metric) => (
            <li className="metric" key={metric.title}>
              <strong>{metric.title}</strong>
              <span>{metric.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <aside className="hero-panel" data-reveal="3">
        <span className="panel-label">
          <span className="live-dot" aria-hidden="true" />
          Atención personalizada
        </span>
        <strong>Traé tu vehículo. Lo vemos juntos.</strong>
        <p>Contanos qué buscás: reparación, cambio, sonido deportivo o una solución fabricada desde cero.</p>
        <p className="hero-panel-hours">
          <svg className="icon" aria-hidden="true"><use href="#icon-clock" /></svg>
          Lunes a sábado · 9:00 a 19:00
        </p>
      </aside>
    </div>
    <a className="scroll-cue" href="#nosotros" aria-label="Bajar a la siguiente sección">
      <span />
    </a>
  </section>
);

export default Hero;
