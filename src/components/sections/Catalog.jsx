const CATALOG_ITEMS = [
  { image: '/img/galeria/enganche-auto.jpg', alt: 'Enganche para auto', title: 'Enganches', text: 'Colocación y fabricación' },
  { image: '/img/galeria/bocha-acero.jpg', alt: 'Bocha de acero', title: 'Bochas de acero', text: 'Para enganches' },
  { image: '/img/galeria/portabici.jpg', alt: 'Portabicicletas', title: 'Portabicicletas', text: 'Para enganche' },
  { image: '/img/galeria/codo-escape.jpg', alt: 'Codo de escape para moto', title: 'Codos de moto', text: 'Trabajo a medida' },
  { image: '/img/galeria/precamara.jpg', alt: 'Precámara de escape', title: 'Precámaras', text: 'Repuestos y adaptación' },
  { image: '/img/galeria/juntas.jpg', alt: 'Juntas para escape', title: 'Juntas y soportes', text: 'Distintas medidas' },
];

const Catalog = () => (
  <section className="bg-soft" id="catalogo">
    <div className="section-photo-header photo-section">
      <img className="ps-bg" src="/img/galeria/akra.jpg" alt="Escape deportivo de acero" loading="lazy" />
      <div className="wrap">
        <p className="eyebrow">Catálogo y accesorios</p>
        <h2 className="section-title">Lo que necesitás, en un solo lugar</h2>
        <div className="rule" />
        <p className="section-sub">Además de los escapes, fabricamos y colocamos accesorios para autos y motos.</p>
      </div>
    </div>
    <div className="wrap">
      <div className="cat-grid">
        {CATALOG_ITEMS.map((item) => (
          <article className="cat-item" key={item.title}>
            <img className="cat-item-photo" src={item.image} alt={item.alt} loading="lazy" />
            <h3>{item.title}</h3>
            <span>{item.text}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Catalog;
