// Preguntas frecuentes de la home (sección "Preguntas frecuentes").
// Se muestran en la página y también se le pasan a Google (ver utils/seo.js).
// Los datos del taller salen de data/site.js, así no quedan desactualizados.

import { ADDRESS, CITY, HOURS } from './site';

const HOME_FAQS = [
  {
    q: '¿Dónde queda Escape1?',
    a: `En ${ADDRESS}, ${CITY}. Si venís de Yerba Buena, Tafí Viejo, Banda del Río Salí o Alderetes, estás a pocos minutos. En la sección Ubicación tenés el mapa para llegar.`,
  },
  {
    q: '¿Qué horario tienen?',
    a: `Atendemos de ${HOURS.days.toLowerCase()}, de ${HOURS.open} a ${HOURS.close}.`,
  },
  {
    q: '¿Cómo pido un presupuesto?',
    a: 'Completá el formulario de esta página o escribinos por WhatsApp con la marca, el modelo y el año del vehículo y lo que necesitás. El presupuesto es sin cargo y sin compromiso.',
  },
  {
    q: '¿Hace falta sacar turno?',
    a: 'Conviene escribirnos antes por WhatsApp: vemos qué necesitás y coordinamos el día.',
  },
  {
    q: '¿Qué medios de pago aceptan?',
    a: 'Efectivo, transferencia y tarjeta de crédito o débito.',
  },
  {
    q: '¿Trabajan con motos?',
    a: 'Sí. Colocamos escapes y tachos deportivos, codos y precámaras, y adaptamos la salida a medida en acero inoxidable.',
  },
  {
    q: '¿Fabrican escapes a medida?',
    a: 'Sí. Fabricamos escapes completos, codos, curvas y cañerías en acero inoxidable, adaptados al vehículo y al sonido que buscás.',
  },
  {
    q: '¿Colocan enganches?',
    a: 'Sí. Colocamos enganches nuevos y reforzados para autos y camionetas de todas las marcas, con bocha de acero, y también tenemos portabicicletas.',
  },
  {
    q: '¿Hacen diagnóstico computarizado?',
    a: 'Sí. Hacemos diagnóstico computarizado y reprogramación. Contanos el modelo y el motor de tu vehículo y te asesoramos.',
  },
];

export default HOME_FAQS;
