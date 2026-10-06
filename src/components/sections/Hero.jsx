const Hero = () => (
  <section className="hero photo-section" id="inicio">
    <img className="ps-bg" src="/img/galeria/fondo.jpeg" alt="Escape deportivo de acero inoxidable" fetchPriority="high" />
    <div className="wrap hero-layout">
      <div>
        <p className="eyebrow">Taller especializado · Tucumán</p>
        <h1>Sonido, rendimiento<br />y <em>precisión.</em></h1>
        <p className="hero-copy">
          Escapes originales, deportivos y fabricación a medida para autos y motos.
          Trabajos en acero inoxidable, pensados para tu vehículo.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#presupuesto">Pedí presupuesto</a>
          <a className="btn btn-outline" href="#servicios">Conocé los servicios</a>
        </div>
        <div className="hero-metrics" aria-label="Especialidades del taller">
          <div className="metric"><strong>Autos</strong><span>Original y deportivo</span></div>
          <div className="metric"><strong>Motos</strong><span>Adaptación a medida</span></div>
          <div className="metric"><strong>Fabricación</strong><span>Fabricación especializada</span></div>
        </div>
      </div>
      <aside className="hero-panel">
        <span className="panel-label">Atención personalizada</span>
        <strong>Traé tu vehículo. Lo vemos juntos.</strong>
        <p>Contanos qué buscás: reparación, cambio, sonido deportivo o una solución fabricada desde cero.</p>
      </aside>
    </div>
  </section>
);

export default Hero;
