import { useEffect, useState } from 'react';
import catalogItems from '../data/catalog';
import './CatalogDetail.css';

// item: producto de data/catalog.js (o undefined si el slug no existe)
// onRequestBudget: ({ service, detail }) => void — precarga el formulario de presupuesto
const CatalogDetail = ({ slug, onRequestBudget }) => {
  const item = catalogItems.find((entry) => entry.slug === slug);
  const [current, setCurrent] = useState(0);

  const total = item?.photos.length ?? 0;
  const go = (delta) => setCurrent((value) => (value + delta + total) % total);

  // Flechas del teclado para pasar fotos
  useEffect(() => {
    if (!total) return;
    const onKey = (event) => {
      if (event.key === 'ArrowLeft') setCurrent((value) => (value - 1 + total) % total);
      if (event.key === 'ArrowRight') setCurrent((value) => (value + 1) % total);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [total]);

  if (!item) {
    return (
      <main id="contenido" className="detail-page">
        <div className="wrap">
          <a className="detail-back" href="#catalogo">← Volver al catálogo</a>
          <h1 className="section-title">Producto no encontrado</h1>
        </div>
      </main>
    );
  }

  return (
    <main id="contenido" className="detail-page">
      <div className="wrap">
        <a className="detail-back" href="#catalogo">← Volver al catálogo</a>
        <div className="detail-layout">
          <div>
            <div className="viewer">
              <img
                src={item.photos[current]}
                alt={`${item.title} — foto ${current + 1} de ${total}`}
              />
              {total > 1 && (
                <>
                  <button className="viewer-btn prev" type="button" aria-label="Foto anterior" onClick={() => go(-1)}>‹</button>
                  <button className="viewer-btn next" type="button" aria-label="Foto siguiente" onClick={() => go(1)}>›</button>
                </>
              )}
              <span className="viewer-count">{current + 1} / {total}</span>
            </div>
            <div className="thumbs">
              {item.photos.map((photo, index) => (
                <button
                  key={photo + index}
                  type="button"
                  className={`thumb${index === current ? ' active' : ''}`}
                  aria-label={`Ver foto ${index + 1}`}
                  aria-current={index === current}
                  onClick={() => setCurrent(index)}
                >
                  <img src={photo} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <aside className="detail-info">
            <p className="eyebrow">Catálogo</p>
            <h1 className="section-title">{item.title}</h1>
            <div className="rule" />
            <p>{item.description}</p>
            <div className="detail-actions">
              <a
                className="btn btn-solid"
                href="#presupuesto"
                onClick={() => onRequestBudget({ service: item.service, detail: `Consulta por: ${item.title}` })}
              >
                Consultar presupuesto
              </a>
              <a className="btn btn-outline" href="#catalogo">Ver más productos</a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CatalogDetail;
