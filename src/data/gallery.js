// Categorías de la galería (el orden acá es el orden en que se muestran)
export const galleryCategories = [
  { id: 'autos', label: 'Autos - Camionetas' },
  { id: 'motos', label: 'Motos' },
];

// Video propio: `video` es el archivo completo (se abre en grande), `preview` la versión
// liviana que se reproduce en la tarjeta y `poster` la imagen que se ve mientras carga.
const video = (category, name, extra = {}) => ({
  category,
  video: `/video/galeria/${name}.mp4`,
  preview: `/video/galeria/previews/${name}.mp4`,
  poster: `/video/galeria/posters/${name}.jpg`,
  ...extra,
});

const photo = (category, src) => ({ category, image: `/img/galeria/${src}` });

const galleryItems = [
  // ---------- AUTOS ----------
  video('autos', 'golf'),
  photo('autos', 'ss1.jpeg'),
  video('autos', 'galeria-auto1'),
  video('autos', 'galeria-auto2'),
  video('autos', 'soldando-auto1'),
  photo('autos', 'bora.jpeg'),
  photo('autos', 'audi1.png'),
  photo('autos', 'silen-pro1.jpeg'),

  // ---------- MOTOS ----------
  video('motos', 'escape-moto'),
  video('motos', 'escapeZ', { muted: true }),
  video('motos', 'escape-duke2', { muted: true }),
  // El original de este video tiene la extensión en mayúsculas
  video('motos', 'soplete', { video: '/video/galeria/soplete.MP4', muted: true }),
  video('motos', 'escape-mt03', { muted: true }),
  video('motos', 'moto-s', { muted: true }),
  photo('motos', 'moto6.jpg'),
];

export default galleryItems;
