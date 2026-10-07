// Categorías de la galería (el orden acá es el orden de las pestañas)
export const galleryCategories = [
  { id: 'autos', label: 'Autos - Camionetas' },
  { id: 'motos', label: 'Motos' },
];

const galleryItems = [
  // ---------- AUTOS ----------
  {category: 'autos', caption: '', video: '/video/galeria/golf.mp4', preview: '/video/galeria/previews/golf.mp4', poster: '/video/galeria/posters/golf.jpg' },
  //{category: 'autos', caption: 'Escape SilenPro', Image: '/img/galeria/escape-silen.jpg' },
  {category: 'autos', caption: '', image: '/img/galeria/ss1.jpeg' },
  {category: 'autos', caption: '', video: '/video/galeria/soldando-auto1.mp4', preview: '/video/galeria/previews/soldando-auto1.mp4', poster: '/video/galeria/posters/soldando-auto1.jpg' },
  {category: 'autos', image: '/img/galeria/bora.jpeg', caption: ''},
  {category: 'autos', image: '/img/galeria/audi1.png', caption: ''},
  {category: 'autos', image: '/img/galeria/silen-pro1.jpeg', caption: ''},
         



  // { category: 'autos', caption: 'Video de ejemplo', video: '/video/galeria/auto-1.mp4' },

  // ---------- MOTOS ----------
  { category: 'motos', caption: '', video: '/video/galeria/escape-moto.mp4', preview: '/video/galeria/previews/escape-moto.mp4', poster: '/video/galeria/posters/escape-moto.jpg' },
  { category: 'motos', caption: '', video: '/video/galeria/escapeZ.mp4', preview: '/video/galeria/previews/escapeZ.mp4', poster: '/video/galeria/posters/escapeZ.jpg', muted: true },
  { category: 'motos', caption: '', video: '/video/galeria/escape-duke2.mp4', preview: '/video/galeria/previews/escape-duke2.mp4', poster: '/video/galeria/posters/escape-duke2.jpg', muted: true },
  { category: 'motos', caption: '', video: '/video/galeria/soplete.MP4', preview: '/video/galeria/previews/soplete.mp4', poster: '/video/galeria/posters/soplete.jpg', muted: true },
  { category: 'motos', caption: '', video: '/video/galeria/escape-mt03.mp4', preview: '/video/galeria/previews/escape-mt03.mp4', poster: '/video/galeria/posters/escape-mt03.jpg', muted: true },
  { category: 'motos', caption: '', video: '/video/galeria/moto-s.mp4', preview: '/video/galeria/previews/moto-s.mp4', poster: '/video/galeria/posters/moto-s.jpg', muted: true },
  // { category: 'motos', caption: 'Video de ejemplo', video: '/video/galeria/moto-1.mp4' },


];

export default galleryItems;
