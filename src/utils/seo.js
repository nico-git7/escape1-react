// Datos para buscadores y redes de cada página: título, descripción, link canónico,
// imagen para compartir (WhatsApp, Facebook…) y datos estructurados para Google
// (JSON-LD con el taller, dirección, horario, servicios, etc.).
//
// Se usan en dos lugares:
//  - En el build (scripts/prerender.js) para escribir el <head> de cada página.
//  - En el navegador (App.jsx) para actualizarlo al pasar de la home a una ficha.
//
// Todo sale de data/site.js, data/catalog.js y data/services.js: si cambia un dato
// del negocio o se agrega un producto, esto se actualiza solo.

import catalogItems from '../data/catalog';
import HOME_FAQS from '../data/faq';
import {
  ADDRESS, CITY, GEO, POSTAL_CODE, GOOGLE_PROFILE_URL, HOURS, MAPS_URL, PAYMENT_METHODS, SITE_URL, SOCIALS, WHATSAPP_NUMBER,
} from '../data/site';
import { catalogPath } from './useRoute';

const BUSINESS_NAME = 'Escape1';
// Otras formas en que la gente escribe o conoce el nombre del taller (el logo dice
// "Escape1 Repro-Chip"). Ayudan a que Google relacione esas búsquedas con el sitio.
const ALTERNATE_NAMES = ['Escape 1', 'Escape1 Repro-Chip', 'Taller Escape1'];
const LOGO = '/img/logo-soldador.webp';
// Las imágenes para compartir miden 1200 × 630 (el formato que usan WhatsApp y Facebook)
const DEFAULT_SHARE_IMAGE = '/img/compartir/escape1.jpg';
// Fotos del taller para Google: frente del local y adentro
const BUSINESS_PHOTOS = ['/img/proceso/paso-1-frente.webp', '/img/nosotros-taller.webp', DEFAULT_SHARE_IMAGE];

const HOME = {
  title: 'Taller de escapes y silenciadores en Tucumán | Escape1',
  description:
    'Escapes originales y deportivos, silenciadores, catalizadores, enganches y fabricación a medida en acero inoxidable en San Miguel de Tucumán. Presupuesto sin cargo.',
};

const absoluteUrl = (path) => `${SITE_URL}${path}`;
const BUSINESS_ID = absoluteUrl('/#taller');
const TUCUMAN = { '@type': 'State', name: 'Tucumán' };

// "9:00" -> "09:00"
const time = (value) => value.padStart(5, '0');

// Todas las páginas del sitio que van a Google (las usan el build y el sitemap)
export const PAGE_PATHS = ['/', ...catalogItems.map((item) => catalogPath(item.slug))];

// ---------- Datos estructurados (schema.org) ----------

const businessSchema = {
  '@type': 'AutoRepair',
  '@id': BUSINESS_ID,
  name: BUSINESS_NAME,
  alternateName: ALTERNATE_NAMES,
  description: HOME.description,
  url: absoluteUrl('/'),
  logo: absoluteUrl(LOGO),
  image: BUSINESS_PHOTOS.map(absoluteUrl),
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS,
    postalCode: POSTAL_CODE,
    addressLocality: CITY,
    addressRegion: 'Tucumán',
    addressCountry: 'AR',
  },
  ...(GEO ? { geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng } } : {}),
  hasMap: GOOGLE_PROFILE_URL || MAPS_URL,
  // La ciudad y los alrededores desde donde viene la gente (ver data/faq.js)
  areaServed: [
    TUCUMAN,
    ...['San Miguel de Tucumán', 'Yerba Buena', 'Tafí Viejo', 'Banda del Río Salí', 'Alderetes']
      .map((name) => ({ '@type': 'City', name })),
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: HOURS.schemaDays,
      opens: time(HOURS.open),
      closes: time(HOURS.close),
    },
  ],
  paymentAccepted: PAYMENT_METHODS.join(', '),
  currenciesAccepted: 'ARS',
  sameAs: [...(GOOGLE_PROFILE_URL ? [GOOGLE_PROFILE_URL] : []), ...SOCIALS.map((social) => social.url)],
  // Todas las fichas del catálogo, cada una con su página
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios y productos del taller',
    itemListElement: catalogItems.map((item) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: item.seoTitle || item.title,
        description: item.description,
        url: absoluteUrl(catalogPath(item.slug)),
      },
    })),
  },
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': absoluteUrl('/#sitio'),
  name: BUSINESS_NAME,
  alternateName: ALTERNATE_NAMES,
  url: absoluteUrl('/'),
  inLanguage: 'es-AR',
  publisher: { '@id': BUSINESS_ID },
};

// Preguntas frecuentes que se ven en la página
const faqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

const catalogItemSchemas = (item, name, url) => [
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  },
  {
    '@type': 'Service',
    '@id': `${url}#servicio`,
    name,
    serviceType: item.title,
    description: item.description,
    url,
    image: item.photos.map(absoluteUrl),
    provider: { '@id': BUSINESS_ID },
    areaServed: TUCUMAN,
  },
  ...(item.faqs ? [faqSchema(item.faqs)] : []),
];

// ---------- Datos de cada página ----------

const notFoundMeta = (path) => ({
  title: `Página no encontrada | ${BUSINESS_NAME}`,
  description: HOME.description,
  path,
  robots: 'noindex',
  image: DEFAULT_SHARE_IMAGE,
  imageAlt: BUSINESS_NAME,
  schema: [businessSchema],
});

// `page` y `slug`: los de la ruta actual (ver utils/useRoute.js)
export function getPageMeta(page = 'home', slug = null) {
  if (page === 'home') {
    return {
      ...HOME,
      path: '/',
      robots: 'index, follow, max-image-preview:large',
      image: DEFAULT_SHARE_IMAGE,
      imageAlt: 'Escape1, taller de escapes en San Miguel de Tucumán',
      schema: [businessSchema, websiteSchema, faqSchema(HOME_FAQS)],
    };
  }

  const item = page === 'catalog-item' && catalogItems.find((entry) => entry.slug === slug);
  if (!item) return notFoundMeta(page === 'catalog-item' ? catalogPath(slug) : '/404');

  // `seoTitle` (opcional en catalog.js): nombre más descriptivo para Google
  const name = item.seoTitle || item.title;
  const path = catalogPath(item.slug);
  return {
    title: `${name} en Tucumán | ${BUSINESS_NAME}`,
    description: `${item.description} Taller ${BUSINESS_NAME}, ${CITY}.`,
    path,
    robots: 'index, follow, max-image-preview:large',
    image: item.shareImage || DEFAULT_SHARE_IMAGE,
    imageAlt: `${name} en ${BUSINESS_NAME}`,
    schema: [businessSchema, websiteSchema, ...catalogItemSchemas(item, name, absoluteUrl(path))],
  };
}

// Etiquetas del <head> de una página, como [etiqueta, atributos]. El primer
// atributo es el que la identifica (para encontrarla y actualizarla después).
const headTags = (meta) => {
  const url = absoluteUrl(meta.path);
  return [
    ['meta', { name: 'description', content: meta.description }],
    ['meta', { name: 'robots', content: meta.robots }],
    ['link', { rel: 'canonical', href: url }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'es_AR' }],
    ['meta', { property: 'og:site_name', content: BUSINESS_NAME }],
    ['meta', { property: 'og:title', content: meta.title }],
    ['meta', { property: 'og:description', content: meta.description }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:image', content: absoluteUrl(meta.image) }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: meta.imageAlt }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ];
};

const jsonLd = (meta) => JSON.stringify({ '@context': 'https://schema.org', '@graph': meta.schema });

// ---------- Build: <head> como texto ----------

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

export function renderHead(meta) {
  const tags = headTags(meta).map(([tag, attrs]) => {
    const attributes = Object.entries(attrs).map(([key, value]) => `${key}="${escapeHtml(value)}"`).join(' ');
    return `<${tag} ${attributes} />`;
  });
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    ...tags,
    // "<" escapado para que ningún texto pueda cerrar el <script> antes de tiempo
    `<script type="application/ld+json">${jsonLd(meta).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
}

// Fotos de cada página: van al sitemap para que Google las muestre en Imágenes
const pageImages = (path) => {
  if (path === '/') return BUSINESS_PHOTOS;
  const item = catalogItems.find((entry) => catalogPath(entry.slug) === path);
  return item ? item.photos : [];
};

export function renderSitemap(lastModified) {
  const urls = PAGE_PATHS.map((path) => [
    '  <url>',
    `    <loc>${absoluteUrl(path)}</loc>`,
    `    <lastmod>${lastModified}</lastmod>`,
    ...pageImages(path).map((image) => `    <image:image><image:loc>${absoluteUrl(image)}</image:loc></image:image>`),
    '  </url>',
  ].join('\n'));
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

export const renderRobots = () => `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`;

// ---------- Navegador: actualiza el <head> al cambiar de página ----------

export function applyPageMeta(meta) {
  document.title = meta.title;

  headTags(meta).forEach(([tag, attrs]) => {
    const [key, value] = Object.entries(attrs)[0];
    let element = document.head.querySelector(`${tag}[${key}="${value}"]`);
    if (!element) {
      element = document.createElement(tag);
      document.head.append(element);
    }
    Object.entries(attrs).forEach(([name, content]) => element.setAttribute(name, content));
  });

  let script = document.head.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.append(script);
  }
  script.textContent = jsonLd(meta);
}
