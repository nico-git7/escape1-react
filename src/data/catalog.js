// Catálogo: cada producto o servicio tiene su propia página (/catalogo/<slug>).
//
// Para cambiar las fotos de un producto, editá el array `photos` (siempre rutas
// dentro de /public, empezando con "/"). Podés poner más o menos de 5, la página
// se adapta sola.
//
// `service`: opción que se precarga en el formulario de presupuesto
// (tiene que coincidir con una de SERVICE_OPTIONS de BudgetForm.jsx).
// `image`: foto de portada. `thumb` (opcional): la misma foto en chico y cuadrada
//   (480 × 480) para las grillas; si no está, se usa `image`.
// `showInCatalog: false`: la página existe pero no aparece en la grilla del
//   catálogo de la home (se llega desde "Servicios" y desde las otras fichas).
// `eyebrow` (opcional): rótulo chico arriba del título. Por defecto, "Catálogo".
//
// Texto de la página (lo lee la gente y también Google, así que conviene que sea
// propio, concreto y con las palabras que usa la gente para buscar):
// `content`: párrafos de "Qué hacemos".
// `includes`: lista de lo que incluye el servicio.
// `faqs`: preguntas frecuentes de esa página ({ q: pregunta, a: respuesta }).
//
// Para Google y redes (ver utils/seo.js):
// `seoTitle` (opcional): nombre más descriptivo para el título de la página y de
//   Google, cuando `title` es muy corto (ej. "Motos" -> "Escapes para motos").
// `shareImage` (opcional): imagen de 1200 × 630 que se ve al compartir el link por
//   WhatsApp o redes. Si no está, se usa la imagen general del taller.

const P = '/img/galeria/';
const F = '/img/fotos/'; // fotos nuevas del catálogo, optimizadas para web
const S = '/img/stock/'; // fotos de Unsplash (licencia libre, ver public/img/stock/CREDITOS.txt)
const T = '/img/proceso/'; // fotos del taller
const C = '/img/compartir/'; // imágenes para compartir el link (1200 × 630)
const M = '/img/miniaturas/'; // portadas en chico para las grillas (480 × 480)

const catalogItems = [
  {
    slug: 'escapes-originales',
    seoTitle: 'Escapes y silenciadores originales',
    title: 'Escapes originales',
    image: `${P}catalogo-escape-original1.webp`,
    thumb: `${M}escapes-originales.webp`,
    alt: 'Caño de escape original junto a un VW Gol',
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
    content: [
      'Cuando el escape de fábrica se rompe, se oxida o empieza a hacer ruido, lo reemplazamos por uno con la misma medida, el mismo recorrido y el mismo sonido de origen. Cambiamos el sistema completo o solo la parte que hace falta: silenciador, precámara, caño intermedio o cola.',
      'Tenemos silenciadores y caños para modelos muy comunes en Tucumán, como VW Gol, Fiat Siena, Peugeot 206, Renault Kangoo y Chevrolet Corsa. Si el de tu vehículo no está, lo fabricamos o lo adaptamos a medida.',
      'Antes de empezar revisamos el vehículo y te explicamos qué conviene cambiar. El presupuesto es sin cargo.',
    ],
    includes: [
      'Silenciadores traseros e intermedios',
      'Precámaras',
      'Caños y tramos intermedios',
      'Colas de escape',
      'Juntas, abrazaderas y soportes',
    ],
    faqs: [
      {
        q: '¿Cómo me doy cuenta de que tengo que cambiar el escape?',
        a: 'Las señales más comunes son un ruido más fuerte de lo normal, vibraciones, óxido con agujeros, un caño que cuelga u olor a gases. Si notás alguna, traé el vehículo y lo revisamos.',
      },
      {
        q: '¿Hay que cambiar todo el escape?',
        a: 'No siempre. Muchas veces alcanza con cambiar el silenciador o el tramo dañado. Lo revisamos y te decimos qué hace falta.',
      },
      {
        q: '¿Cuánto sale cambiar el escape?',
        a: 'Depende del modelo y de las piezas. El presupuesto es sin cargo: mandanos marca, modelo y año por WhatsApp.',
      },
    ],
  },
  {
    slug: 'escapes-deportivos',
    title: 'Escapes deportivos',
    image: `${F}deportivos-silenciadores-escape1.webp`,
    thumb: `${M}escapes-deportivos.webp`,
    alt: 'Silenciadores deportivos Escape1 con colas de acero',
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
    content: [
      'Si buscás más sonido y una respuesta más deportiva, colocamos y fabricamos escapes deportivos para autos, camionetas y motos: equipos completos, medio equipo, silenciadores y colas, con terminaciones en acero.',
      'Trabajamos con silenciadores SilenPro y armamos cada línea según tu vehículo y el sonido que buscás: más grave, más fuerte o más discreto. El recorrido y las salidas se adaptan a medida.',
      'Antes de empezar te mostramos las opciones y te pasamos el presupuesto sin cargo.',
    ],
    includes: [
      'Equipos completos y medio equipo',
      'Silenciadores deportivos SilenPro',
      'Colas y salidas en acero',
      'Adaptación a medida para cada vehículo',
    ],
    faqs: [
      {
        q: '¿Cuánto más suena un escape deportivo?',
        a: 'Depende del silenciador y de cómo se arme la línea. Se puede dejar con un sonido más grave sin que moleste, o más fuerte si es lo que buscás. Te asesoramos según tu vehículo.',
      },
      {
        q: '¿Qué es un medio equipo?',
        a: 'Es la parte del escape que va desde el catalizador hasta la salida: caño intermedio, silenciadores y cola. Sirve para cambiar el sonido sin tocar el resto del sistema.',
      },
      {
        q: '¿Hacen escapes deportivos para motos?',
        a: 'Sí. Colocamos tachos deportivos y adaptamos la salida a medida en acero inoxidable.',
      },
    ],
  },
  {
    slug: 'downpipe-y-reprogramacion',
    title: 'Downpipe y reprogramación',
    image: `${S}catalogo-downpipe.jpg`,
    thumb: `${M}downpipe-y-reprogramacion.webp`,
    alt: 'Escape deportivo con llamarada',
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
    content: [
      'El downpipe es el caño que sale directo del turbo. Lo fabricamos a medida en acero inoxidable para vehículos turbo. También trabajamos con flexibles, bajadas y catalizadores.',
      'También hacemos diagnóstico computarizado y reprogramación. Como cada motor es distinto, primero revisamos el vehículo y te explicamos las opciones antes de avanzar.',
    ],
    includes: [
      'Downpipe a medida para motores turbo',
      'Flexibles y bajadas',
      'Catalizadores',
      'Diagnóstico computarizado',
      'Reprogramación',
    ],
    faqs: [
      {
        q: '¿Qué es un downpipe?',
        a: 'Es el primer tramo del escape en los motores turbo: el caño que sale del turbo. Uno a medida y de mayor diámetro deja salir los gases con menos restricción.',
      },
      {
        q: '¿Sirve para mi vehículo?',
        a: 'Se usa en vehículos con turbo. Mandanos marca, modelo, año y motor por WhatsApp y te decimos qué opciones hay.',
      },
    ],
  },
  {
    slug: 'trabajos-en-acero-inoxidable',
    seoTitle: 'Escapes a medida en acero inoxidable',
    title: 'Trabajos en acero inoxidable',
    image: `${F}acero-silenciadores-silenpro.webp`,
    thumb: `${M}trabajos-en-acero-inoxidable.webp`,
    alt: 'Colas de acero inoxidable SilenPro',
    shareImage: `${C}trabajos-en-acero-inoxidable.jpg`,
    service: 'Modificación a medida',
    description:
      'Fabricación y soldadura en acero inoxidable: codos, curvas, cañerías y piezas a medida para autos, camionetas y motos.',
    photos: [
      `${F}acero-silenciadores-silenpro.webp`,
      `${F}acero-equipos-completos.webp`,
      `${F}acero-escapes-inoxidable.webp`,
      `${P}inoxidable1.webp`,
      `${P}inox4.jpeg`,
    ],
    content: [
      'Fabricamos escapes y piezas a medida en acero inoxidable: equipos completos, codos, curvas, cañerías y adaptaciones para proyectos especiales o vehículos modificados.',
      'El acero inoxidable aguanta mejor el calor y la humedad que el caño común, no se oxida igual y mantiene la terminación por más tiempo. Cada pieza se mide, se corta y se suelda en el taller.',
    ],
    includes: [
      'Escapes completos a medida',
      'Codos, curvas y cañerías',
      'Soldadura en acero inoxidable',
      'Adaptaciones para vehículos modificados',
    ],
    faqs: [
      {
        q: '¿Por qué hacer el escape en acero inoxidable?',
        a: 'Porque resiste mejor la temperatura y la corrosión que el caño común, así que dura más y conserva la terminación.',
      },
      {
        q: '¿Pueden fabricar una pieza que no se consigue?',
        a: 'Sí. Traé el vehículo o la pieza y vemos cómo fabricarla o adaptarla a medida.',
      },
    ],
  },
  {
    slug: 'motos',
    seoTitle: 'Escapes para motos',
    title: 'Motos',
    image: `${S}catalogo-motos.jpg`,
    thumb: `${M}motos.webp`,
    alt: 'Escape deportivo de moto',
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
    content: [
      'Colocamos escapes y tachos deportivos para motos, y adaptamos la salida a medida en acero inoxidable cuando hace falta. También tenemos codos, precámaras y repuestos de escape.',
      'Trabajamos con motos de calle y deportivas: en la galería hay trabajos en modelos como KTM Duke, Kawasaki Z y Yamaha MT-03.',
      'Contanos tu modelo y qué sonido buscás, y te mostramos las opciones.',
    ],
    includes: [
      'Tachos deportivos',
      'Codos y precámaras',
      'Adaptación de la salida en acero inoxidable',
      'Repuestos de escape para motos',
    ],
    faqs: [
      {
        q: '¿Qué es un tacho?',
        a: 'Es como se le dice al silenciador de la moto. Tenemos tachos deportivos y los adaptamos a tu modelo.',
      },
      {
        q: '¿Hay que modificar la moto para poner un escape deportivo?',
        a: 'Depende del modelo. Muchas veces alcanza con un acople o una adaptación de la salida, que hacemos en acero inoxidable.',
      },
    ],
  },
  {
    slug: 'enganches',
    seoTitle: 'Enganches y portabicicletas',
    title: 'Enganches',
    image: `${F}enganches-amarok.webp`,
    thumb: `${M}enganches.webp`,
    alt: 'VW Amarok con enganches reforzados',
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
    content: [
      'Colocamos enganches nuevos y reforzados para autos y camionetas de todas las marcas, con bocha de acero. También fabricamos enganches a medida y tenemos portabicicletas.',
      'Hicimos enganches para camionetas como Toyota Hilux y VW Amarok, entre muchas otras. Escribinos con el modelo y el año y te confirmamos disponibilidad.',
    ],
    includes: [
      'Enganches nuevos y reforzados',
      'Bochas de acero',
      'Portabicicletas',
      'Fabricación de enganches a medida',
    ],
    faqs: [
      {
        q: '¿Tienen enganche para mi camioneta?',
        a: 'Trabajamos con todas las marcas. Escribinos con el modelo y el año y te confirmamos disponibilidad.',
      },
      {
        q: '¿El portabicicletas va en el enganche?',
        a: 'Sí, hay portabicicletas que se montan en el enganche. Te asesoramos según tu vehículo y cuántas bicis querés llevar.',
      },
    ],
  },
  {
    slug: 'juntas-abrazaderas-y-soportes',
    title: 'Juntas, abrazaderas y soportes',
    image: `${P}juntas.jpg`,
    thumb: `${M}juntas-abrazaderas-y-soportes.webp`,
    alt: 'Juntas y bulones para escape',
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
    content: [
      'Las juntas, abrazaderas y soportes son piezas chicas, pero cuando fallan aparecen pérdidas, ruidos y vibraciones. Tenemos repuestos en distintas medidas y los colocamos en el taller.',
      'Si el escape golpea o vibra, muchas veces el problema es un soporte de goma gastado o una abrazadera floja.',
    ],
    includes: [
      'Juntas de escape',
      'Abrazaderas',
      'Soportes de goma',
      'Colocación en el taller',
    ],
    faqs: [
      {
        q: '¿Por qué vibra o golpea el escape?',
        a: 'Lo más común es un soporte de goma roto o gastado, o una abrazadera floja. Suele ser un arreglo simple.',
      },
    ],
  },
  {
    slug: 'catalizadores',
    title: 'Catalizadores',
    eyebrow: 'Servicio',
    showInCatalog: false,
    image: `${S}servicio-catalizadores.jpg`,
    thumb: `${M}catalizadores.webp`,
    alt: 'Catalizadores de escape',
    shareImage: `${C}catalizadores.jpg`,
    service: 'Catalizador',
    description:
      'Diagnóstico, reemplazo y reparación de catalizadores según el estado del sistema de escape, para autos y camionetas.',
    photos: [
      `${S}servicio-catalizadores.jpg`,
      `${P}flex3.jpeg`,
      `${S}cat-catalizadores.jpg`,
    ],
    content: [
      'El catalizador es la parte del escape que reduce los gases contaminantes. Con el tiempo se puede tapar o romper por dentro, y eso afecta el funcionamiento del motor.',
      'Hacemos diagnóstico, reemplazo y reparación de catalizadores según el estado del sistema. Primero revisamos el vehículo y te explicamos si conviene repararlo o cambiarlo.',
    ],
    includes: [
      'Diagnóstico del catalizador',
      'Reemplazo de catalizadores',
      'Reparación según el estado del sistema',
      'Revisión del resto del escape',
    ],
    faqs: [
      {
        q: '¿Cómo sé si el catalizador está fallando?',
        a: 'Algunas señales son pérdida de potencia, más consumo, olor a huevo podrido, un ruido metálico debajo del vehículo o la luz de "check engine" encendida. Si notás alguna, traelo para revisarlo.',
      },
      {
        q: '¿Cuánto sale cambiar el catalizador?',
        a: 'Depende del modelo y del tipo de catalizador. Mandanos los datos del vehículo por WhatsApp y te pasamos el presupuesto sin cargo.',
      },
    ],
  },
  {
    slug: 'reparacion-de-escapes',
    title: 'Reparación de escapes',
    eyebrow: 'Servicio',
    showInCatalog: false,
    image: `${T}paso-2-revision.webp`,
    thumb: `${M}reparacion-de-escapes.webp`,
    alt: 'Escape desarmado en el piso del taller para reparar',
    shareImage: `${C}reparacion-de-escapes.jpg`,
    service: 'Reparación / otro',
    description:
      'Arreglamos pérdidas, roturas, ruidos y vibraciones del escape: cambio de tramos, silenciadores, juntas y soportes, con soldadura en el taller.',
    photos: [
      `${T}paso-2-revision.webp`,
      `${T}paso-2-camioneta.webp`,
      `${P}abrazaderas-juntas.jpg`,
      `${S}servicio-reparaciones.jpg`,
    ],
    content: [
      'Si el escape hace más ruido de lo normal, vibra, golpea o tiene una pérdida, lo revisamos y lo reparamos. Cuando se puede, cambiamos solo el tramo dañado; si no, el silenciador, las juntas o los soportes que hagan falta.',
      'Un escape roto no es solo ruido: los gases pueden entrar al habitáculo. Si sentís olor a gases dentro del vehículo, conviene revisarlo cuanto antes.',
      'Trabajamos con autos, camionetas y motos, y soldamos en el taller.',
    ],
    includes: [
      'Pérdidas y roturas de caño',
      'Cambio de silenciadores y tramos',
      'Juntas, abrazaderas y soportes',
      'Ruidos y vibraciones',
      'Soldadura',
    ],
    faqs: [
      {
        q: '¿Se puede soldar un escape roto?',
        a: 'Depende del estado del caño. Si el resto está sano, muchas veces se puede soldar o cambiar solo el tramo dañado. Si está muy oxidado, conviene reemplazarlo.',
      },
      {
        q: '¿Hace falta sacar turno?',
        a: 'Escribinos por WhatsApp con el modelo y lo que le pasa al escape, y coordinamos el día.',
      },
    ],
  },
];

export default catalogItems;
