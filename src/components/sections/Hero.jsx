import Icon from '../Icon';
import { HOURS } from '../../data/site';

const METRICS = [
  { title: 'Autos y camionetas', text: 'Original y deportivo' },
  { title: 'Motos', text: 'Tachos deportivos y adaptación a medida en acero inox.' },
  { title: 'Fabricación', text: 'Fabricación en acero inox.' },
  { title: 'Enganches', text: 'Enganches nuevos, reforzados y de todas las marcas' },
  { title: 'Servicios', text: 'Diagnóstico computarizado y reprogramación' },
];

const Hero = () => (
  <section className="hero photo-section" id="inicio">
    <img className="ps-bg hero-bg" src="/img/galeria/fondo.webp" alt="" fetchPriority="high" />
    <div className="wrap hero-layout">
      <div>
        {/* El rótulo va dentro del h1 para que el título principal de la página diga
            qué es y dónde está el taller (lo que más mira Google) */}
        <h1>
          <span className="hero-kicker">
            <span className="eyebrow" data-reveal>Taller especializado en escapes · Tucumán</span>
          </span>
          <span className="hero-title" data-reveal="1">Sonido, rendimiento, calidad y <em>servicio.</em></span>
        </h1>
        <p className="hero-copy" data-reveal="2">
          Escapes originales, deportivos y fabricación a medida para autos, camionetas y motos.
          Trabajos en acero inoxidable, pensados para tu vehículo.
        </p>
        <div className="hero-actions" data-reveal="3">
          <a className="btn btn-solid" href="#presupuesto">
            Pedí presupuesto
            <Icon name="arrow" />
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
          <Icon name="clock" />
          {HOURS.days} · {HOURS.open} a {HOURS.close}
        </p>
      </aside>
    </div>
    <a className="scroll-cue" href="#nosotros" aria-label="Bajar a la siguiente sección">
      <span />
    </a>
  </section>
);

export default Hero;
