import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

// items: lista de { caption, image?, video?, poster?, youtube?, muted? } | null
// index: posición del item abierto. onClose(): cierra. onNavigate(nuevoIndex): cambia de item.
const Lightbox = ({ items, index, onClose, onNavigate }) => {
  const [failedSrc, setFailedSrc] = useState(null);
  const closeButtonRef = useRef(null);

  const item = items?.[index] ?? null;
  const total = items?.length ?? 0;
  const hasNav = total > 1;

  const go = (step) => onNavigate((index + step + total) % total);

  // Foco en cerrar al abrir, teclado (Escape / flechas) y bloqueo del scroll de fondo
  useEffect(() => {
    if (!item) return undefined;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (!hasNav) return;
      const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
      if (step) onNavigate((index + step + total) % total);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, index, total, hasNav, onClose, onNavigate]);

  const isYoutube = Boolean(item?.youtube);
  const isFileVideo = Boolean(item?.video);
  const isPhoto = Boolean(item?.image) && !isYoutube && !isFileVideo;
  const imageFailed = isPhoto && failedSrc === item.image;
  const caption = item?.caption || (item ? `${isPhoto ? 'Foto' : 'Video'} del taller` : '');

  return (
    <div
      className={`lightbox${item ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightboxCaption"
      aria-hidden={!item}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button className="lightbox-close" type="button" ref={closeButtonRef} onClick={onClose} aria-label="Cerrar">
        <Icon name="close" />
      </button>

      {item && hasNav && (
        <>
          <button className="lightbox-nav prev" type="button" onClick={() => go(-1)} aria-label="Anterior">
            <Icon name="chevron-left" />
          </button>
          <button className="lightbox-nav next" type="button" onClick={() => go(1)} aria-label="Siguiente">
            <Icon name="chevron-right" />
          </button>
        </>
      )}

      <figure className={`lightbox-inner${isYoutube || isFileVideo ? ' lightbox-video' : ''}`}>
        {/* Al cerrar o cambiar de item estos elementos se desmontan y el video se detiene solo */}
        {isYoutube && (
          <iframe
            key={item.youtube}
            src={`https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1&loop=1&playlist=${item.youtube}&rel=0`}
            title={caption}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        )}
        {isFileVideo && (
          <video key={item.video} src={item.video} poster={item.poster} controls autoPlay loop playsInline muted={item.muted} />
        )}
        {isPhoto && !imageFailed && (
          <img key={item.image} src={item.image} alt={caption} onError={() => setFailedSrc(item.image)} />
        )}
        {isPhoto && imageFailed && <Icon name="custom" className="lightbox-fallback" />}
        <figcaption className="lightbox-caption" id="lightboxCaption">
          <span>{caption}</span>
          {hasNav && <span className="lightbox-count">{index + 1} / {total}</span>}
        </figcaption>
      </figure>
    </div>
  );
};

export default Lightbox;
