import Icon from './Icon';
import { WHATSAPP_URL } from '../data/site';

const WhatsAppFloat = () => (
  <a
    className="wa-float"
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener"
    aria-label="Escribir a Escape1 por WhatsApp"
  >
    <Icon name="whatsapp" />
    <span className="wa-float-label" aria-hidden="true">¿Consultas?</span>
  </a>
);

export default WhatsAppFloat;
