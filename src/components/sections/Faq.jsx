import Icon from '../Icon';
import FaqList from '../FaqList';
import HOME_FAQS from '../../data/faq';
import { WHATSAPP_URL } from '../../data/site';

const Faq = () => (
  <section className="section-grid" id="preguntas">
    <div className="wrap faq-layout">
      <div className="faq-intro" data-reveal>
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 className="section-title">Lo que más nos consultan</h2>
        <div className="rule" />
        <p className="section-sub">¿Tenés otra duda? Escribinos por WhatsApp y te respondemos.</p>
        <a className="btn btn-solid" href={WHATSAPP_URL} target="_blank" rel="noopener">
          <Icon name="whatsapp" />
          Consultar por WhatsApp
        </a>
      </div>
      <div data-reveal="2">
        <FaqList items={HOME_FAQS} />
      </div>
    </div>
  </section>
);

export default Faq;
