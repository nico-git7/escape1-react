import { useEffect, useRef, useState } from 'react';
import { openWhatsApp } from '../../utils/whatsapp';

const SERVICE_OPTIONS = [
  'Cambio de escape original',
  'Cambio de escape deportivo',
  'Modificación a medida',
  'Catalizador',
  'Dowpipe a medida',
  'Accesorio del catálogo',
  'Reprogramación (DPF - EGR OFF) ',
  'Quiero asesoramiento',
];

// preset: { service, detail, id } elegido desde "Servicios" o desde la ficha de un
// producto del catálogo (o null). El id cambia en cada click, así se vuelve a aplicar.
const BudgetForm = ({ preset }) => {
  const formRef = useRef(null);
  const [servicio, setServicio] = useState('');
  const [detalle, setDetalle] = useState('');
  const [status, setStatus] = useState('');
  const currentYear = new Date().getFullYear();

  // Cuando el usuario clickea "Consultar servicio" / "Consultar presupuesto" en otra
  // sección o página, precarga el select (y el detalle, si viene)
  useEffect(() => {
    if (!preset) return;
    if (preset.service) setServicio(preset.service);
    if (preset.detail) setDetalle(preset.detail);
  }, [preset]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    setStatus('Abriendo WhatsApp con tu consulta…');
    openWhatsApp([
      'Hola, quiero pedir un presupuesto desde la web.',
      `• Nombre: ${values.get('nombre')}`,
      `• Contacto: ${values.get('contacto')}`,
      `• Vehículo: ${values.get('vehiculo')}${values.get('anio') ? ` (${values.get('anio')})` : ''}`,
      `• Servicio: ${values.get('servicio')}`,
      values.get('detalle') ? `• Detalle: ${values.get('detalle')}` : '',
    ]);
    form.reset();
    setServicio('');
    setDetalle('');
  };

  return (
    <section className="photo-section" id="presupuesto">
      <img className="ps-bg" src="/img/galeria/akra.jpg" alt="Escape deportivo metálico" loading="lazy" />
      <div className="wrap two-col">
        <div>
          <p className="eyebrow">Cotización</p>
          <h2 className="section-title">Pedí tu presupuesto</h2>
          <div className="rule" />
          <p className="section-sub">Dejanos los datos de tu vehículo y lo que buscás. Te respondemos por WhatsApp para evaluar el trabajo.</p>
          <form className="form-panel" id="presupuestoForm" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="p-nombre">Nombre</label>
                <input id="p-nombre" name="nombre" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="p-contacto">Teléfono o email</label>
                <input id="p-contacto" name="contacto" type="text" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor="p-vehiculo">Marca y modelo</label>
                <input id="p-vehiculo" name="vehiculo" type="text" placeholder="Ej.: Honda Civic 2018" required />
              </div>
              <div className="field">
                <label htmlFor="p-anio">Año</label>
                <input id="p-anio" name="anio" type="number" min="1960" max={currentYear + 1} placeholder="Ej.: 2018" />
              </div>
              <div className="field full">
                <label htmlFor="p-servicio">Qué necesitás</label>
                <select
                  id="p-servicio"
                  name="servicio"
                  required
                  value={servicio}
                  onChange={(event) => setServicio(event.target.value)}
                >
                  <option value="">Elegí una opción</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="field full">
                <label htmlFor="p-detalle">Contanos más</label>
                <textarea
                  id="p-detalle"
                  name="detalle"
                  value={detalle}
                  onChange={(event) => setDetalle(event.target.value)}
                  placeholder="Sonido buscado, modelo de escape, medidas o cualquier dato que nos ayude a orientarte."
                />
              </div>
            </div>
            <div className="submit-row">
              <button className="btn btn-solid" type="submit">Enviar por WhatsApp</button>
              <span className={`form-status${status ? ' show' : ''}`} role="status">{status}</span>
            </div>
          </form>
        </div>
        <ul className="info-list">
          <li><strong>Sin cargo</strong><span>El presupuesto no tiene costo ni compromiso.</span></li>
          <li><strong>Respuesta</strong><span>Te respondemos por WhatsApp para coordinar y asesorarte.</span></li>
          <li><strong>Importante</strong><span>Si podés, incluí todos los detallesdel vehículo en la conversación.</span></li>
        </ul>
      </div>
    </section>
  );
};

export default BudgetForm;
