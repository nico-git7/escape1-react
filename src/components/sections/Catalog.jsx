import catalogItems from '../../data/catalog';
import { rememberHomeScroll } from '../../utils/scrollMemory';
import { whatsAppLink } from '../../utils/whatsapp';

const ASK_URL = whatsAppLink(['Hola, quiero consultar por un producto que no está en el catálogo de la web.']);

const Catalog = () => (
  <section className="bg-soft" id="catalogo">
    <div className="section-photo-header photo-section">
      <img className="ps-bg" src="/img/fondos/catalogo.webp" alt="" loading="lazy" />
      <div className="wrap" data-reveal>
        <p className="eyebrow">Catálogo y accesorios</p>
        <h2 className="section-title">Lo que necesitás, en un solo lugar</h2>
        <div className="rule" />
        <p className="section-sub">Además de los escapes, fabricamos y colocamos accesorios para autos, camionetas y motos. Tocá una categoría para ver fotos.</p>
      </div>
    </div>
    <div className="wrap">
      <div className="cat-grid">
        {catalogItems.map((item, index) => (
          <a
            className="cat-link"
            href={`#/catalogo/${item.slug}`}
            key={item.slug}
            aria-label={`Ver fotos de ${item.title}`}
            onClick={rememberHomeScroll}
            data-reveal={(index % 3) + 1}
          >
            <article className="cat-item">
              <div className="cat-item-media">
                <img className="cat-item-photo" src={item.image} alt={item.alt} loading="lazy" />
                <span className="cat-item-count">{item.photos.length} fotos</span>
              </div>
              <div className="cat-item-body">
                <h3>{item.title}</h3>
                <span className="cat-item-cta">
                  Ver fotos
                  <svg className="icon" aria-hidden="true"><use href="#icon-arrow" /></svg>
                </span>
              </div>
            </article>
          </a>
        ))}
      </div>
      <p className="cat-note" data-reveal>
        ¿Buscás algo que no está en la lista?{' '}
        <a href={ASK_URL} target="_blank" rel="noopener">Consultanos <svg className="icon" aria-hidden="true"><use href="#icon-arrow" /></svg></a>
      </p>
    </div>
  </section>
);

export default Catalog;
