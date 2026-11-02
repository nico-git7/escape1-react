import { WHATSAPP_URL } from '../data/site';

// Link a WhatsApp del taller con el mensaje ya escrito (una línea por elemento)
export function whatsAppLink(lines) {
  const text = encodeURIComponent(lines.filter(Boolean).join('\n'));
  return `${WHATSAPP_URL}?text=${text}`;
}

export function openWhatsApp(lines) {
  window.open(whatsAppLink(lines), '_blank', 'noopener');
}
