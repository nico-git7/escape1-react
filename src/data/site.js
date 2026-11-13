// Datos del negocio. Es el único lugar donde hay que tocar si cambia un teléfono,
// la dirección, el horario o una red social.

// Dirección pública del sitio, sin barra al final. Se usa para el sitemap, los links
// canónicos y la vista previa al compartir. Si el sitio se muda a un dominio
// distinto, alcanza con cambiarlo acá.
export const SITE_URL = 'https://tallerescape1.com';

export const WHATSAPP_NUMBER = '5493815452531';
export const DISPLAY_PHONE = '+54 9 381 545-2531';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_URL = `tel:+${WHATSAPP_NUMBER}`;

// Escrita igual que en la ficha de Google Maps: si el sitio y la ficha dicen lo mismo,
// Google confía más en que son el mismo negocio
export const ADDRESS = 'Santiago del Estero 3593';
export const POSTAL_CODE = 'T4000DXS';
export const CITY = 'San Miguel de Tucumán';
export const MAPS_URL = 'https://www.google.com/maps?q=escape1+San+Miguel+de+Tucum%C3%A1n';

// Link fijo de la ficha del taller en Google Maps (Perfil de Empresa "Taller de escape
// escape1"). Con este link Google relaciona el sitio con la ficha, que es lo que más
// pesa para aparecer en el mapa de "taller de escapes en Tucumán". El número (cid) es
// el identificador de la ficha y no cambia aunque se edite el nombre.
export const GOOGLE_PROFILE_URL = 'https://maps.google.com/?cid=816588305794621978';

// Ubicación exacta del pin del taller, sacada de la ficha de Google Maps
export const GEO = { lat: -26.8145475, lng: -65.2492695 };

// `schemaDays`: los mismos días en inglés, como los pide Google (schema.org)
export const HOURS = {
  days: 'Lunes a sábado',
  schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  open: '9:00',
  close: '19:00',
};

export const SOCIALS = [
  { id: 'instagram', label: 'Instagram', handle: '@escape1_2025', url: 'https://www.instagram.com/escape1_2025' },
  { id: 'tiktok', label: 'TikTok', handle: '@escape_1_', url: 'https://www.tiktok.com/@escape_1_' },
];

// Medios de pago (los muestra Google; en la web están en BudgetForm.jsx)
export const PAYMENT_METHODS = ['Efectivo', 'Transferencia', 'Tarjeta de crédito', 'Tarjeta de débito'];
