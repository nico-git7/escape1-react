import { useCallback, useEffect, useRef, useState } from 'react';
import galleryItems, { galleryCategories } from '../../data/gallery';
import Lightbox from '../Lightbox';

const isVideo = (item) => Boolean(item.video || item.youtube);

const youtubeThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// Imagen de portada de un item (foto, poster de video o miniatura de YouTube)
const getThumb = (item) => item.image || item.poster || (item.youtube ? youtubeThumb(item.youtube) : null);

// Vista previa de un video propio: sin sonido y en bucle.
// No descarga nada hasta que la tarjeta está por entrar en pantalla; mientras
// tanto se ve el poster. Usa la versión liviana (`preview`) si existe: el video
// completo solo se baja al abrirlo en grande.
const saveData = () => Boolean(navigator.connection && navigator.connection.saveData);

const VideoPreview = ({ item }) => {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || saveData()) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          // Con el src recién puesto, el atributo autoPlay se encarga del arranque
          if (el.getAttribute('src')) el.play().catch(() => {});
        } else {
          el.pause();
        }
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
      src={load ? item.preview || item.video : undefined}
      poster={item.poster}
      autoPlay={load}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
};

const GalleryTile = ({ item, label, onOpen }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const video = isVideo(item);
  const filePreview = Boolean(item.video);
  const thumb = getThumb(item);

  return (
    <button
      type="button"
      className={`gallery-item${video ? ' is-video' : ''}`}
      aria-label={`${video ? 'Ver video' : 'Ver imagen'}: ${item.caption || label}`}
      onClick={onOpen}
    >
      {filePreview && <VideoPreview item={item} />}
      {!filePreview && thumb && !imageFailed && (
        <img
          className="gallery-photo"
          src={thumb}
          alt=""
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      )}
      {!filePreview && (!thumb || imageFailed) && (
        <span className="gallery-fallback">
          <svg className="icon" aria-hidden="true"><use href={`#${item.icon || 'icon-custom'}`} /></svg>
        </span>
      )}
      {/* El botón de play solo en videos de YouTube (los propios ya se ven reproduciéndose) */}
      {video && !filePreview && <span className="play-badge" aria-hidden="true" />}
      {video && filePreview && <span className="video-tag" aria-hidden="true">Video</span>}
      <span className="gallery-zoom" aria-hidden="true">
        <svg className="icon"><use href="#icon-arrow" /></svg>
      </span>
      {item.caption && <span className="cap">{item.caption}</span>}
    </button>
  );
};

// Una categoría de la galería: título y flechas a la izquierda, y a la derecha
// una tira de trabajos que se desliza hacia el costado (con el dedo, el mouse o las flechas).
const GalleryLane = ({ category, items, onOpen }) => {
  const trackRef = useRef(null);
  // Si la tira está al principio / al final, para apagar la flecha que no sirve
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setEdges({
      atStart: track.scrollLeft <= 4,
      atEnd: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
    });
  }, []);

  // Recalcula cuando cambia el tamaño de la tira (carga inicial, giro del celular, etc.)
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !('ResizeObserver' in window)) return undefined;
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateEdges]);

  const slide = (direction) => {
    const track = trackRef.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <div className="gallery-lane" data-reveal>
      <div className="gallery-lane-head">
        <h3>{category.label}</h3>
        <p>{items.length} {items.length === 1 ? 'trabajo' : 'trabajos'}</p>
        <div className="gallery-lane-arrows">
          <button type="button" aria-label={`${category.label}: anteriores`} disabled={edges.atStart} onClick={() => slide(-1)}>
            <svg className="icon" aria-hidden="true"><use href="#icon-chevron-left" /></svg>
          </button>
          <button type="button" aria-label={`${category.label}: siguientes`} disabled={edges.atEnd} onClick={() => slide(1)}>
            <svg className="icon" aria-hidden="true"><use href="#icon-chevron-right" /></svg>
          </button>
        </div>
      </div>
      <div className="gallery-lane-track" ref={trackRef} onScroll={updateEdges}>
        {items.map((item, index) => (
          <GalleryTile
            item={item}
            label={`${category.label}, trabajo ${index + 1}`}
            key={item.image || item.video || item.youtube}
            onOpen={() => onOpen(items, index)}
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  // { items, index } del lightbox abierto, o null
  const [viewer, setViewer] = useState(null);

  const openViewer = useCallback((items, index) => setViewer({ items, index }), []);
  const closeViewer = useCallback(() => setViewer(null), []);
  const navigate = useCallback((index) => setViewer((current) => current && { ...current, index }), []);

  return (
    <>
      <section id="galeria">
        <div className="section-photo-header photo-section">
          <img className="ps-bg" src="/img/fondos/galeria.webp" alt="" loading="lazy" />
          <div className="wrap" data-reveal>
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
            return <GalleryLane key={cat.id} category={cat} items={items} onOpen={openViewer} />;
          })}
        </div>
      </section>

      <Lightbox items={viewer?.items} index={viewer?.index ?? 0} onClose={closeViewer} onNavigate={navigate} />
    </>
  );
};

export default Gallery;
