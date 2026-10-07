// Catálogo: cada producto tiene su propia página (#/catalogo/<slug>).
//
// Para cambiar las 5 fotos de un producto, editá el array `photos` (siempre
// rutas dentro de /public, empezando con "/"). Podés poner más o menos de 5,
// la página se adapta sola.
//
// `service`: opción que se precarga en el formulario de presupuesto
// (tiene que coincidir con una de SERVICE_OPTIONS de BudgetForm.jsx).

const P = '/img/galeria/';
const F = '/img/fotos/'; // fotos nuevas del catálogo, optimizadas para web
const S = '/img/stock/'; // fotos de Unsplash (licencia libre, ver public/img/stock/CREDITOS.txt)

const catalogItems = [
  {
    slug: 'escapes-originales',
    title: 'Escapes originales',
    image: `${P}catalogo-escape-original1.jpeg`,
    alt: 'Escape original',
    service: 'Cambio de escape original',
    description:
      'Reemplazo y fabricación de escapes con la medida y el sonido de fábrica. Trabajamos con cañerías, silenciadores y colas para autos, camionetas y motos.',
    photos: [
      `${P}catalogo-escape-original1.jpeg`,
      `${P}catalogo-escape-original2.jpeg`,
      `${P}corsa.jpeg`,
      `${P}catalogo-escape-original4.jpeg`,
      `${P}catalogo-escape-original5.jpeg`,
    ],
  },
  {
    slug: 'escapes-deportivos',
    title: 'Escapes deportivos',
    image: `${F}deportivos-silenciadores-escape1.webp`,
    alt: 'Escape deportivo',
    service: 'Cambio de escape deportivo',
    description:
      'Escapes deportivos para ganar sonido y respuesta. Colocamos y fabricamos sistemas completos, silenciadores y colas, con terminaciones en acero.',
    photos: [
      `${F}deportivos-medio-equipo-silen.webp`,
      `${F}deportivos-silenciadores-escape1.webp`,
      `${F}deportivos-escapes-a-la-venta.webp`,
      `${F}deportivos-silenciadores-en-mesa.webp`,
    ],
  },
  {
    slug: 'downpipe-y-reprogramacion',
    title: 'Downpipe y reprogramación',
    image: `${S}catalogo-downpipe.jpg`,
    alt: 'Downpipe y reprogramación',
    service: 'Dowpipe a medida',
    description:
      'Downpipe a medida, catalizadores y reprogramación (DPF - EGR OFF). Contanos el modelo de tu vehículo y te asesoramos.',
    photos: [
      `${P}dowpipe.jpg`,
      `${P}catalizadores.jpg`,
      `${P}ss1.jpeg`,
      `${P}sistema-escape1.jpg`,
      `${P}bora.jpeg`,
    ],
  },
  {
    slug: 'trabajos-en-acero-inoxidable',
    title: 'Trabajos en acero inoxidable',
    image: `${F}acero-silenciadores-silenpro.webp`,
    alt: 'Trabajos en acero inoxidable',
    service: 'Modificación a medida',
    description:
      'Fabricación y soldadura en acero inoxidable: codos, curvas, cañerías y piezas a medida para autos, camionetas y motos.',
    photos: [
      `${F}acero-silenciadores-silenpro.webp`,
      `${F}acero-equipos-completos.webp`,
      `${F}acero-escapes-inoxidable.webp`,
    ],
  },
  {
    slug: 'motos',
    title: 'Motos',
    image: `${S}catalogo-motos.jpg`,
    alt: 'Escapes para motos',
    service: 'Cambio de escape deportivo',
    description:
      'Escapes, codos y precámaras para motos. Repuestos, adaptación y fabricación a medida.',
    photos: [
      `${P}escapes-originales.jpg`,
      `${P}akra.jpg`,
      `${P}escapes-deportivos.jpg`,
      `${P}codo-escape.jpg`,
      `${P}precamara.jpg`,
    ],
  },
  {
    slug: 'enganches',
    title: 'Enganches',
    image: `${F}enganches-amarok.webp`,
    alt: 'Enganches y portabicicletas',
    service: 'Accesorio del catálogo',
    description:
      'Colocación y fabricación de enganches, bochas de acero y portabicicletas para tu vehículo.',
    photos: [
      `${F}enganches-amarok.webp`,
      `${F}enganches-tres-modelos.webp`,
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
    service: 'Accesorio del catálogo',
    description:
      'Juntas, abrazaderas y soportes en distintas medidas para dejar tu escape firme y sin pérdidas.',
    photos: [
      `${P}juntas.jpg`,
      `${P}accesorios.jpg`,
      `${P}bocha-acero.jpg`,
      `${P}precamara.jpg`,
      `${P}codo-escape.jpg`,
    ],
  },
];

export default catalogItems;
