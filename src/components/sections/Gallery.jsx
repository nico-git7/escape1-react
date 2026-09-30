import { useEffect, useRef, useState } from 'react';
import galleryItems, { galleryCategories } from '../../data/gallery';
import Lightbox from '../Lightbox';

const isVideo = (item) => Boolean(item.video || item.youtube);

const youtubeThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// Imagen de portada de un item (foto, poster de video o miniatura de YouTube)
const getThumb = (item) => item.image || item.poster || (item.youtube ? youtubeThumb(item.youtube) : null);

// Vista previa de un video propio: se reproduce solo, sin sonido y en bucle.
// Solo corre mientras está visible en pantalla (ahorra datos y batería).
const VideoPreview = ({ item }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="gallery-photo"
      src={item.video}
      poster={item.poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
};

const GalleryTile = ({ item, onOpen }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const video = isVideo(item);
  const filePreview = Boolean(item.video);
  const thumb = getThumb(item);

  return (
    <button
      type="button"
      className={`gallery-item${video ? ' is-video' : ''}`}
      aria-label={`${video ? 'Ver video' : 'Ver imagen'}: ${item.caption}`}
      onClick={() => onOpen(item)}
    >
      {filePreview && <VideoPreview item={item} />}
      {!filePreview && thumb && !imageFailed && (
        <img
          className="gallery-photo"
          src={thumb}
          alt={item.caption}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      )}
      {!filePreview && (!thumb || imageFailed) && (
        <span className="gallery-fallback">
          <svg viewBox="0 0 24 24"><use href={`#${item.icon || 'icon-custom'}`} /></svg>
        </span>
      )}
      {/* El botón de play solo en videos de YouTube (los propios ya se ven reproduciéndose) */}
      {video && !filePreview && <span className="play-badge" aria-hidden="true" />}
      <span className="cap">{item.caption}</span>
    </button>
  );
};

// Cantidad de elementos (fotos o videos) visibles por categoría antes de "Mostrar más"
const VISIBLE_COUNT = 3;

const GalleryGroup = ({ category, items, onOpen }) => {
  const [expanded, setExpanded] = useState(false);

  const hasMore = items.length > VISIBLE_COUNT;
  const visibleItems = expanded ? items : items.slice(0, VISIBLE_COUNT);
  const panelId = `gallery-panel-${category.id}`;

  return (
    <div className="gallery-group">
      <h3 className="gallery-group-title">
        {category.label}
        <span className="gallery-group-count">{items.length}</span>
      </h3>
      {items.length === 0 && (
        <p className="gallery-empty">Pronto vamos a subir fotos y videos de esta sección.</p>
      )}
      {visibleItems.length > 0 && (
        <div id={panelId} className="gallery-grid gallery-grid-mixed">
          {visibleItems.map((item) => (
            <GalleryTile item={item} key={item.image || item.video || item.youtube} onOpen={onOpen} />
          ))}
        </div>
      )}
      {hasMore && (
        <div className="gallery-more">
          <button
            type="button"
            className="btn btn-outline gallery-more-btn"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? 'Mostrar menos' : `Mostrar más (${items.length - VISIBLE_COUNT})`}
          </button>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <section id="galeria">
        <div className="section-photo-header photo-section">
          <img className="ps-bg" src="/img/galeria/ferrari.jpg" alt="Vehículo deportivo" loading="lazy" />
          <div className="wrap">
            <p className="eyebrow">Trabajos del taller</p>
            <h2 className="section-title">Galería</h2>
            <div className="rule" />
            <p className="section-sub">Una muestra de piezas, terminaciones y trabajos realizados.</p>
          </div>
        </div>
        <div className="wrap">
          {galleryCategories.map((cat) => {
            const items = galleryItems.filter((item) => item.category === cat.id);
            if (items.length === 0) return null;
            return <GalleryGroup key={cat.id} category={cat} items={items} onOpen={setActiveItem} />;
          })}
        </div>
      </section>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
};

export default Gallery;