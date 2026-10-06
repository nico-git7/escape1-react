import { useRef, useState } from 'react';
import { formatDate, localDateValue, openWhatsApp } from '../../utils/whatsapp';

const SERVICE_OPTIONS = [
  'Cambio de escape original',
  'Cambio de escape deportivo',
  'Modificación a medida',
  'Catalizador',
  'Dowpipe a medida',
  'Reprogramación',
  'Reparación / otro',
];

const AppointmentForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [minDate, setMinDate] = useState(() => localDateValue());

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    setStatus('Abriendo WhatsApp con tu solicitud…');
    openWhatsApp([
      'Hola, quiero solicitar un turno desde la web.',
      `• Nombre: ${values.get('nombre')}`,
      `• Teléfono: ${values.get('telefono')}`,
      `• Vehículo: ${values.get('vehiculo')}`,
      `• Servicio: ${values.get('servicio')}`,
      `• Fecha preferida: ${formatDate(values.get('fecha'))}`,
      `• Horario preferido: ${values.get('hora') || 'A coordinar'}`,
      values.get('comentario') ? `• Comentario: ${values.get('comentario')}` : '',
    ]);
    form.reset();
    setMinDate(localDateValue());
  };

  return (
    <section className="bg-soft section-grid" id="turnos">
      <div className="wrap two-col">
        <div data-reveal>
          <p className="eyebrow">Coordinación</p>
          <h2 className="section-title">Sacá tu turno</h2>
          <div className="rule" />
          <p className="section-sub">Elegí una fecha y horario preferidos. Confirmamos la disponibilidad por WhatsApp.</p>
          <form className="form-panel" id="turnoForm" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="t-nombre">Nombre</label>
                <input id="t-nombre" name="nombre" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="t-telefono">Teléfono</label>
                <input id="t-telefono" name="telefono" type="tel" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor="t-vehiculo">Vehículo</label>
                <input id="t-vehiculo" name="vehiculo" type="text" placeholder="Marca y modelo" required />
              </div>
              <div className="field">
                <label htmlFor="t-servicio">Servicio</label>
                <select id="t-servicio" name="servicio" required defaultValue="">
                  <option value="">Elegí una opción</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="t-fecha">Fecha preferida</label>
                <input id="t-fecha" name="fecha" type="date" min={minDate} required />
              </div>
              <div className="field">
                <label htmlFor="t-hora">Horario preferido</label>
                <input id="t-hora" name="hora" type="time" required />
              </div>
              <div className="field full">
                <label htmlFor="t-comentario">Comentario</label>
                <textarea id="t-comentario" name="comentario" placeholder="Contanos cualquier detalle que debamos tener en cuenta." />
              </div>
            </div>
            <div className="submit-row">
              <button className="btn btn-solid" type="submit">
                <svg className="icon" aria-hidden="true"><use href="#icon-whatsapp" /></svg>
                Solicitar turno
              </button>
              <span className={`form-status${status ? ' show' : ''}`} role="status">{status}</span>
            </div>
          </form>
        </div>
        <ul className="info-list" data-reveal="2">
          <li><svg className="icon" aria-hidden="true"><use href="#icon-clock" /></svg><strong>Horario</strong><span>Lunes a sábado, de 9:00 a 19:00.</span></li>
          <li><svg className="icon" aria-hidden="true"><use href="#icon-check" /></svg><strong>Confirmación</strong><span>La fecha queda sujeta a disponibilidad del taller.</span></li>
          <li><svg className="icon" aria-hidden="true"><use href="#icon-whatsapp" /></svg><strong>Consultas</strong><span>También podés escribirnos directamente por WhatsApp.</span></li>
        </ul>
      </div>
    </section>
  );
};

export default AppointmentForm;
