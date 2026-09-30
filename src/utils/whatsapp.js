export const WHATSAPP_NUMBER = '5493815452531';
export const DISPLAY_PHONE = '+54 9 381 545-2531';

export function localDateValue(date = new Date()) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

export function formatDate(value) {
  if (!value) return 'A coordinar';
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
}

export function openWhatsApp(lines) {
  const text = encodeURIComponent(lines.filter(Boolean).join('\n'));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
}
