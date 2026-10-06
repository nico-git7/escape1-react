import { WHATSAPP_NUMBER } from '../utils/whatsapp';

const WhatsAppFloat = () => (
  <a
    className="wa-float"
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener"
    aria-label="Escribir a Escape1 por WhatsApp"
  >
    <svg className="icon" aria-hidden="true"><use href="#icon-whatsapp" /></svg>
    <span className="wa-float-label" aria-hidden="true">¿Consultas?</span>
  </a>
);

export default WhatsAppFloat;
