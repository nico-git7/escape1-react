const MARQUEE_WORDS = [
  'Escapes originales',
  'Línea deportiva',
  'Fabricación a medida',
  'Catalizadores',
  'Downpipes',
  'Acero inoxidable',
  'Autos, camionetas y motos',
];

const CATEGORY_TILES = [
  { href: '#servicios', image: '/img/categorias/originales.webp', alt: 'Silenciador original junto a un Peugeot 206', label: 'Escapes originales' },
  { href: '#servicios', image: '/img/categorias/deportiva.webp', alt: 'Silenciadores deportivos Escape1', label: 'Línea deportiva' },
  { href: '#catalogo', image: '/img/categorias/camionetas.webp', alt: 'Camioneta en el taller', label: 'Autos y camionetas' },
  { href: '#servicios', image: '/img/stock/cat-catalizadores.jpg', alt: 'Catalizador', label: 'Catalizadores' },
  { href: '#catalogo', image: '/img/categorias/accesorios.webp', alt: 'Enganches colgados en la pared del taller', label: 'Accesorios' },
];

const REASONS = [
  { title: 'Trabajo a medida', text: 'Medidas, recorrido, salidas y sonido adaptados a lo que necesitás.' },
  { title: 'Acero inoxidable', text: 'Fabricación y modificaciones con materiales preparados para el uso real.' },
  { title: 'Asesoramiento directo', text: 'Revisamos tu vehículo y te explicamos las alternativas antes de empezar.' },
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

    <section className="photo-section is-subtle" id="nosotros">
      <img className="ps-bg" src="/img/fondos/nosotros.webp" alt="" loading="lazy" />
      <div className="wrap about">
        <figure className="about-photo" data-reveal>
          <img
            src="/img/nosotros-taller.webp"
            alt="Auto dentro del taller, frente a la pared de caños y repuestos de escape"
            width="1000"
            height="1250"
            loading="lazy"
          />
        </figure>
        <div className="about-text">
          <div data-reveal>
            <p className="eyebrow">El trabajo bien hecho se nota</p>
            <h2 className="section-title">Una solución para cada vehículo</h2>
            <div className="rule" />
          </div>
          <ul className="about-list">
            {REASONS.map((reason, index) => (
              <li key={reason.title} data-reveal={index + 1}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default CategoriesAndReasons;
