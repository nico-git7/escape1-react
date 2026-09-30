import { WHATSAPP_NUMBER } from '../utils/whatsapp';

const WhatsAppFloat = () => (
  <a
    className="wa-float"
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener"
    aria-label="Escribir a Escape1 por WhatsApp"
  >
    <img src="/img/galeria/icono-wp.jpg" alt="" />
  </a>
);

export default WhatsAppFloat;
