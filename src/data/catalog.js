// Catálogo: cada producto tiene su propia página (/catalogo/<slug>).
//
// Para cambiar las 5 fotos de un producto, editá el array `photos` (siempre
// rutas dentro de /public, empezando con "/"). Podés poner más o menos de 5,
// la página se adapta sola.
//
// `service`: opción que se precarga en el formulario de presupuesto
// (tiene que coincidir con una de SERVICE_OPTIONS de BudgetForm.jsx).
//
// Para Google y redes (ver utils/seo.js):
// `seoTitle` (opcional): nombre más descriptivo para el título de la pestaña y de
//   Google, cuando `title` es muy corto (ej. "Motos" -> "Escapes para motos").
// `shareImage` (opcional): imagen de 1200 × 630 que se ve al compartir el link por
//   WhatsApp o redes. Si no está, se usa la imagen general del taller.

const P = '/img/galeria/';
const F = '/img/fotos/'; // fotos nuevas del catálogo, optimizadas para web
const S = '/img/stock/'; // fotos de Unsplash (licencia libre, ver public/img/stock/CREDITOS.txt)
const C = '/img/compartir/'; // imágenes para compartir el link (1200 × 630)

const catalogItems = [
  {
    slug: 'escapes-originales',
    title: 'Escapes originales',
    image: `${P}catalogo-escape-original1.webp`,
    alt: 'Escape original',
    shareImage: `${C}escapes-originales.jpg`,
    service: 'Cambio de escape original',
    description:
      'Reemplazo y fabricación de escapes con la medida y el sonido de fábrica. Trabajamos con cañerías, silenciadores y colas para autos, camionetas y motos.',
    photos: [
      `${P}catalogo-escape-original1.webp`,
      `${P}catalogo-escape-original2.webp`,
      `${P}corsa.webp`,
      `${P}catalogo-escape-original4.webp`,
      `${P}catalogo-escape-original5.webp`,
    ],
  },
  {
    slug: 'escapes-deportivos',
    title: 'Escapes deportivos',
    image: `${F}deportivos-silenciadores-escape1.webp`,
    alt: 'Escape deportivo',
    shareImage: `${C}escapes-deportivos.jpg`,
    service: 'Cambio de escape deportivo',
    description:
      'Escapes deportivos para ganar sonido y respuesta. Colocamos y fabricamos sistemas completos, silenciadores y colas, con terminaciones en acero.',
    photos: [
      `${F}deportivos-medio-equipo-silen.webp`,
      `${F}deportivos-escapes-a-la-venta.webp`,
      `${F}deportivos-silenciadores-escape1.webp`,
      `${F}deportivos-silenciadores-en-mesa.webp`,
      `${P}deportivo1.jpeg`,
      `${P}dep1.webp`,
    ],
  },
  {
    slug: 'downpipe-y-reprogramacion',
    title: 'Downpipe y reprogramación',
    image: `${S}catalogo-downpipe.jpg`,
    alt: 'Downpipe y reprogramación',
    shareImage: `${C}downpipe-y-reprogramacion.jpg`,
    service: 'Downpipe a medida',
    description:
      'Downpipe a medida, catalizadores y reprogramación (DPF - EGR OFF). Contanos el modelo de tu vehículo y te asesoramos.',
    photos: [
      `${P}dowpipe.jpg`,
      `${P}flex1.jpeg`,
      `${P}flex2.jpeg`,
      `${P}flex3.jpeg`,
      `${P}flex4.jpeg`,
    ],
  },
  {
    slug: 'trabajos-en-acero-inoxidable',
    title: 'Trabajos en acero inoxidable',
    image: `${F}acero-silenciadores-silenpro.webp`,
    alt: 'Trabajos en acero inoxidable',
    shareImage: `${C}trabajos-en-acero-inoxidable.jpg`,
    service: 'Modificación a medida',
    description:
      'Fabricación y soldadura en acero inoxidable: codos, curvas, cañerías y piezas a medida para autos, camionetas y motos.',
    photos: [
      `${F}acero-silenciadores-silenpro.webp`,
      `${F}acero-equipos-completos.webp`,
      `${F}acero-escapes-inoxidable.webp`,
      `${P}inoxidable1.webp`,
      `${P}inox4.jpeg`
    ],
  },
  {
    slug: 'motos',
    seoTitle: 'Escapes para motos',
    title: 'Motos',
    image: `${S}catalogo-motos.jpg`,
    alt: 'Escapes para motos',
    shareImage: `${C}motos.jpg`,
    service: 'Cambio de escape deportivo',
    description:
      'Escapes, codos y precámaras para motos. Repuestos, adaptación y fabricación a medida.',
    photos: [
      `${P}moto1.webp`,
      `${P}moto7.webp`,
      `${P}moto2.webp`,
      `${P}moto3.jpeg`,
      `${P}moto4.webp`,
      `${P}moto5.webp`,
    ],
  },
  {
    slug: 'enganches',
    seoTitle: 'Enganches y portabicicletas',
    title: 'Enganches',
    image: `${F}enganches-amarok.webp`,
    alt: 'Enganches y portabicicletas',
    shareImage: `${C}enganches.jpg`,
    service: 'Accesorio del catálogo',
    description:
      'Colocación y fabricación de enganches, bochas de acero y portabicicletas para tu vehículo.',
    photos: [
      `${F}enganches-amarok.webp`,
      `${P}enganche1.webp`,
      `${F}enganches-portabicicletas.webp`,
      `${F}enganches-camionetas.webp`,
      `${F}enganches-hilux.webp`,
    ],
  },
  {
    slug: 'juntas-abrazaderas-y-soportes',
    title: 'Juntas, abrazaderas y soportes',
    image: `${P}juntas.jpg`,
    alt: 'Juntas, abrazaderas y soportes',
    shareImage: `${C}juntas-abrazaderas-y-soportes.jpg`,
    service: 'Accesorio del catálogo',
    description:
      'Juntas, abrazaderas y soportes en distintas medidas para dejar tu escape firme y sin pérdidas.',
    photos: [
      `${P}juntas.jpg`,
      `${P}accesorios.jpg`,
      `${P}soporte-goma.jpg`,
      `${P}abrazaderas-juntas.jpg`,
      `${P}abrazaderas1.webp`,
    ],
  },
];

export default catalogItems;
