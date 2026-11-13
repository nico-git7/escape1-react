import { useEffect, useState } from 'react';
import Icon from '../components/Icon';
import FaqList from '../components/FaqList';
import catalogItems from '../data/catalog';
import { ADDRESS, CITY } from '../data/site';
import { openedFromHome } from '../utils/scrollMemory';
import { catalogPath } from '../utils/useRoute';
import { whatsAppLink } from '../utils/whatsapp';
import './CatalogDetail.css';

// Si la ficha se abrió desde el catálogo, "volver" es ir atrás en el historial:
// la home reaparece en el mismo punto donde estaba. Si se entró directo por el
// link de la ficha, se usa el href normal (/#catalogo).
const handleBack = (event) => {
  if (!openedFromHome()) return;
  event.preventDefault();
  window.history.back();
};

const BackLink = () => (
  <a className="detail-back" href="/#catalogo" onClick={handleBack}>
    <Icon name="chevron-left" />
    Volver al catálogo
  </a>
);

// Otras fichas para seguir mirando: las 4 que siguen en el orden del catálogo
// (dando la vuelta al llegar al final), así todas reciben links de otras páginas.
const relatedItems = (slug, count = 4) => {
  const index = catalogItems.findIndex((entry) => entry.slug === slug);
  return Array.from({ length: Math.min(count, catalogItems.length - 1) }, (_, i) => (
    catalogItems[(index + 1 + i) % catalogItems.length]
  ));
};

const CatalogDetail = ({ slug }) => {
  // Producto de data/catalog.js (o undefined si el slug no existe)
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
          <BackLink />
          <h1 className="section-title">Producto no encontrado</h1>
        </div>
      </main>
    );
  }

  const name = item.seoTitle || item.title;
  const hasMore = Boolean(item.content || item.includes || item.faqs);

  return (
    <main id="contenido" className="detail-page">
      <div className="wrap">
        <BackLink />
        <div className="detail-layout">
          <div data-reveal>
            <div className="viewer">
              <img
                key={item.photos[current] + current}
                src={item.photos[current]}
                alt={`${name} en Escape1, foto ${current + 1} de ${total}`}
                fetchPriority={current === 0 ? 'high' : undefined}
              />
              {total > 1 && (
                <>
                  <button className="viewer-btn prev" type="button" aria-label="Foto anterior" onClick={() => go(-1)}><Icon name="chevron-left" /></button>
                  <button className="viewer-btn next" type="button" aria-label="Foto siguiente" onClick={() => go(1)}><Icon name="chevron-right" /></button>
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
                  {/* Prioridad baja: primero tiene que cargar la foto grande */}
                  <img src={photo} alt="" loading="lazy" decoding="async" fetchPriority="low" />
                </button>
              ))}
            </div>
          </div>

          <aside className="detail-info" data-reveal="2">
            <p className="eyebrow">{item.eyebrow || 'Catálogo'}</p>
            <h1 className="section-title">{name}</h1>
            <div className="rule" />
            <p>{item.description}</p>
            <div className="detail-actions">
              <a
                className="btn btn-solid"
                href={whatsAppLink([`Hola, quiero consultar por: ${item.title}.`])}
                target="_blank"
                rel="noopener"
              >
                <Icon name="whatsapp" />
                Consultar presupuesto
              </a>
              <a className="btn btn-outline" href="/#catalogo" onClick={handleBack}>Ver más productos</a>
            </div>
          </aside>
        </div>

        {hasMore && (
          <div className="detail-more">
            {(item.content || item.includes) && (
              <div className="detail-article" data-reveal>
                <p className="eyebrow">Escape1 · San Miguel de Tucumán</p>
                <h2 className="detail-subtitle">Qué hacemos</h2>
                {item.content?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {item.includes && (
                  <ul className="detail-list">
                    {item.includes.map((entry) => (
                      <li key={entry}>
                        <Icon name="check" />
                        {entry}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Link a la home con las palabras que busca la gente: le indica a Google
                    que la home es la página principal del taller */}
                <p>
                  Somos un <a href="/">taller de escapes en Tucumán</a>: trabajamos todo el
                  sistema de escape en {ADDRESS}, {CITY}.
                </p>
              </div>
            )}
            {item.faqs && (
              <div className="detail-faq" data-reveal="2">
                <p className="eyebrow">Consultas</p>
                <h2 className="detail-subtitle">Preguntas frecuentes</h2>
                <FaqList items={item.faqs} />
              </div>
            )}
          </div>
        )}

        <section className="detail-related" aria-labelledby="otros-servicios">
          <div data-reveal>
            <p className="eyebrow">Más del taller</p>
            <h2 className="detail-subtitle" id="otros-servicios">Otros servicios y productos</h2>
          </div>
          <div className="related-grid">
            {relatedItems(item.slug).map((entry, index) => (
              <a className="cat-thumb" href={catalogPath(entry.slug)} key={entry.slug} data-reveal={index + 1}>
                <div className="cat-thumb-media">
                  <img src={entry.thumb || entry.image} alt={entry.alt} loading="lazy" />
                </div>
                <h3>{entry.seoTitle || entry.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CatalogDetail;
