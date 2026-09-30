const CATEGORY_TILES = [
  { href: '#servicios', image: '/img/galeria/escapes-originales.jpg', alt: 'Escape original', label: 'Escapes originales' },
  { href: '#servicios', image: '/img/galeria/escapes-deportivos.jpg', alt: 'Escape deportivo', label: 'Línea deportiva' },
  { href: '#catalogo', image: '/img/galeria/escape-auto.jpg', alt: 'Sistema de escape para auto', label: 'Autos y camionetas' },
  { href: '#servicios', image: '/img/galeria/catalizadores.jpg', alt: 'Catalizador', label: 'Catalizadores' },
  { href: '#catalogo', image: '/img/galeria/accesorios.jpg', alt: 'Accesorios para vehículos', label: 'Accesorios' },
];

const REASONS = [
  { icon: 'icon-custom', title: 'Trabajo a medida', text: 'Medidas, recorrido, salidas y sonido adaptados a lo que necesitás.' },
  { icon: 'icon-escape', title: 'Acero inoxidable', text: 'Fabricación y modificaciones con materiales preparados para el uso real.' },
  { icon: 'icon-check', title: 'Asesoramiento directo', text: 'Revisamos tu vehículo y te explicamos las alternativas antes de empezar.' },
];

const CategoriesAndReasons = () => (
  <>
    <div className="finish-line" aria-hidden="true" />

    <section className="cat-strip" aria-label="Categorías principales">
      {CATEGORY_TILES.map((tile) => (
        <a className="cat-tile" href={tile.href} key={tile.label}>
          <img className="cat-tile-photo" src={tile.image} alt={tile.alt} />
          <span className="cat-label">{tile.label}</span>
        </a>
      ))}
    </section>

    <section className="photo-section" id="nosotros">
      <img className="ps-bg" src="/img/galeria/ferrari.jpg" alt="Auto deportivo con escape personalizado" loading="lazy" />
      <div className="wrap">
        <div className="reasons-text">
          <p className="eyebrow">El trabajo bien hecho se nota</p>
          <h2 className="section-title">Una solución para cada vehículo</h2>
          <div className="rule" />
          {REASONS.map((reason) => (
            <div className="reason-item" key={reason.title}>
              
            
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CategoriesAndReasons;
