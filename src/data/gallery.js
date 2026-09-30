// Categorías de la galería (el orden acá es el orden de las pestañas)
export const galleryCategories = [
  { id: 'autos', label: 'Autos - Camionetas' },
  { id: 'motos', label: 'Motos' },
];

const galleryItems = [
  // ---------- AUTOS ----------
   { category: 'autos', caption: '', video: '/public/video/galeria/golf.mp4' },
  //{ category: 'autos', caption: 'Escape SilenPro', Image: '/img/galeria/escape-silen.jpg' },
  { category: 'autos', caption: '', image: '/img/galeria/ss1.jpeg' },
  { category: 'autos', caption: '', video: '/public/video/galeria/soldando-auto1.mp4' },
 




  // { category: 'autos', caption: 'Video de ejemplo', video: '/video/galeria/auto-1.mp4' },

  // ---------- MOTOS ----------
  { category: 'motos', caption: '', video: '/video/galeria/escape-moto.mp4' },
  { category: 'motos', caption: 'Escape SCprojetc para Z900', video: '/video/galeria/escapeZ.mp4', muted: true },
  { category: 'motos', caption: 'Escape Akrapovic para KTM Duke', video: '/video/galeria/escape-duke2.mp4', muted: true },
  { category: 'motos', caption: '', video: '/video/galeria/soplete.MP4', muted: true },
  { category: 'motos', caption: '', video: '/video/galeria/escape-mt03.mp4', muted: true },
  // { category: 'motos', caption: 'Video de ejemplo', video: '/video/galeria/moto-1.mp4' },


];

export default galleryItems;
