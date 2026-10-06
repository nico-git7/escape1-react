import catalogItems from '../../data/catalog';

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
        {catalogItems.map((item) => (
          <a
            className="cat-link"
            href={`#/catalogo/${item.slug}`}
            key={item.slug}
            aria-label={`Ver fotos de ${item.title}`}
          >
            <article className="cat-item">
              <img className="cat-item-photo" src={item.image} alt={item.alt} loading="lazy" />
              <h3>{item.title}</h3>
              <span>Ver fotos →</span>
            </article>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Catalog;
