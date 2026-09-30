import { useEffect, useRef, useState } from 'react';

// item: { caption, image?, video?, youtube?, icon } | null. onClose: () => void
const Lightbox = ({ item, onClose }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const closeButtonRef = useRef(null);

  // Resetea el estado de "imagen rota" cada vez que cambia el item mostrado
  useEffect(() => {
    setImageFailed(false);
  }, [item]);

  // Foco en el botón cerrar al abrir + cerrar con Escape
  useEffect(() => {
    if (!item) return;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  const isYoutube = Boolean(item?.youtube);
  const isFileVideo = Boolean(item?.video);
  const isPhoto = Boolean(item?.image) && !isYoutube && !isFileVideo;

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
      <div className={`lightbox-inner${isYoutube || isFileVideo ? ' lightbox-video' : ''}`}>
        {/* Al cerrar (item = null) estos elementos se desmontan y el video se detiene solo */}
        {isYoutube && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1&loop=1&playlist=${item.youtube}&rel=0`}
            title={item.caption}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        )}
        {isFileVideo && (
          <video src={item.video} poster={item.poster} controls autoPlay loop playsInline muted={item.muted} />
        )}
        {isPhoto && !imageFailed && (
          <img
            src={item.image}
            alt={item.caption}
            onError={() => setImageFailed(true)}
          />
        )}
        {isPhoto && imageFailed && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <use href={`#${item.icon}`} />
          </svg>
        )}
        <p className="lightbox-caption" id="lightboxCaption">{item?.caption}</p>
        <button className="lightbox-close" type="button" ref={closeButtonRef} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
