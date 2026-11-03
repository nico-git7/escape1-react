// Categorías de la galería (el orden acá es el orden en que se muestran)
export const galleryCategories = [
  { id: 'autos', label: 'Autos - Camionetas' },
  { id: 'motos', label: 'Motos' },
];

// Video propio: `video` es el archivo completo (se abre en grande), `preview` la versión
// liviana que se reproduce en la tarjeta y `poster` la imagen que se ve mientras carga.
// `caption` (opcional): texto que se ve en la tarjeta y en el visor, y que leen
// Google y los lectores de pantalla. Conviene poner el vehículo y el trabajo.
const video = (category, name, extra = {}) => ({
  category,
  video: `/video/galeria/${name}.mp4`,
  preview: `/video/galeria/previews/${name}.mp4`,
  poster: `/video/galeria/posters/${name}.jpg`,
  ...extra,
});

const photo = (category, src, caption) => ({ category, image: `/img/galeria/${src}`, caption });

const galleryItems = [
  // ---------- AUTOS ----------
  video('autos', 'golf', { caption: 'VW Golf' }),
  photo('autos', 'ss1.webp'),
  video('autos', 'galeria-auto1', { caption: 'Escape colocado debajo del auto' }),
  video('autos', 'galeria-auto2', { caption: 'Instalación de escape' }),
  video('autos', 'soldando-auto1', { caption: 'Soldadura de escape' }),
  photo('autos', 'bora.webp', 'VW Bora'),
  photo('autos', 'audi1.webp', 'Audi A3'),
  photo('autos', 'silen-pro1.webp', 'Cola SilenPro colocada'),

  // ---------- MOTOS ----------
  video('motos', 'escape-moto', { caption: 'Soldadura de escape de moto' }),
  video('motos', 'escapeZ', { muted: true, caption: 'Kawasaki Z' }),
  video('motos', 'escape-duke2', { muted: true, caption: 'KTM Duke' }),
  // El original de este video tiene la extensión en mayúsculas
  video('motos', 'soplete', { video: '/video/galeria/soplete.MP4', muted: true, caption: 'Trabajo con soplete' }),
  video('motos', 'escape-mt03', { muted: true, caption: 'Yamaha MT-03' }),
  video('motos', 'moto-s', { muted: true }),
  photo('motos', 'moto6.webp'),
];

export default galleryItems;
