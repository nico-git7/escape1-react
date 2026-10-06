const MARQUEE_WORDS = [
  'Escapes originales',
  'Línea deportiva',
  'Fabricación a medida',
  'Catalizadores',
  'Dowpipes',
  'Acero inoxidable',
  'Autos y motos',
];

const CATEGORY_TILES = [
  { href: '#servicios', image: '/img/stock/cat-originales.jpg', alt: 'Escape original', label: 'Escapes originales' },
  { href: '#servicios', image: '/img/stock/cat-deportiva.jpg', alt: 'Escape deportivo', label: 'Línea deportiva' },
  { href: '#catalogo', image: '/img/stock/cat-autos.jpg', alt: 'Sistema de escape para auto', label: 'Autos y camionetas' },
  { href: '#servicios', image: '/img/stock/cat-catalizadores.jpg', alt: 'Catalizador', label: 'Catalizadores' },
  { href: '#catalogo', image: '/img/stock/cat-accesorios.jpg', alt: 'Accesorios para vehículos', label: 'Accesorios' },
];

const REASONS = [
  { image: 'razon-medida', title: 'Trabajo a medida', text: 'Medidas, recorrido, salidas y sonido adaptados a lo que necesitás.' },
  { image: 'razon-acero', title: 'Acero inoxidable', text: 'Fabricación y modificaciones con materiales preparados para el uso real.' },
  { image: 'razon-asesoramiento', title: 'Asesoramiento directo', text: 'Revisamos tu vehículo y te explicamos las alternativas antes de empezar.' },
];

// La lista se repite dos veces para que la animación sea continua (la copia se oculta a lectores de pantalla)
const MarqueeList = ({ hidden }) => (
  <ul className="marquee-list" aria-hidden={hidden || undefined}>
    {MARQUEE_WORDS.map((word) => (
      <li key={word}>{word}</li>
    ))}
  </ul>
);

const CategoriesAndReasons = () => (
  <>
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        <MarqueeList />
        <MarqueeList hidden />
      </div>
    </div>

    <section className="cat-strip" aria-label="Categorías principales">
      {CATEGORY_TILES.map((tile, index) => (
        <a className="cat-tile" href={tile.href} key={tile.label}>
          <img className="cat-tile-photo" src={tile.image} alt={tile.alt} loading="lazy" />
          <span className="cat-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <span className="cat-label">
            {tile.label}
            <svg className="icon" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </span>
        </a>
      ))}
    </section>

    <section className="photo-section" id="nosotros">
      <img className="ps-bg" src="/img/galeria/ferrari.jpg" alt="" loading="lazy" />
      <div className="wrap">
        <div className="reasons-text" data-reveal>
          <p className="eyebrow">El trabajo bien hecho se nota</p>
          <h2 className="section-title">Una solución para cada vehículo</h2>
          <div className="rule" />
          {REASONS.map((reason, index) => (
            <div className="reason-item" key={reason.title} data-reveal={index + 1}>
              <img className="reason-photo" src={`/img/stock/${reason.image}.jpg`} alt="" loading="lazy" />
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
