// Servicios del taller (sección "Servicios" de la home y datos para Google).
//
// `image`: foto de /public/img/stock (sin la extensión .jpg).
// `service`: opción que se precarga en el formulario de presupuesto
// (tiene que coincidir con una de SERVICE_OPTIONS de BudgetForm.jsx).

const SERVICES = [
  { image: 'servicio-originales', title: 'Escapes originales', text: 'Reemplazo de silenciadores, precámaras, salidas y componentes dañados.', service: 'Cambio de escape original' },
  { image: 'servicio-deportivos', title: 'Escapes deportivos', text: 'Instalación y adaptación de líneas deportivas para autos, camionetas y motos.', service: 'Cambio de escape deportivo' },
  { image: 'servicio-medida', title: 'Fabricación a medida', text: 'Diseño de sistemas completos para proyectos especiales y vehículos modificados.', service: 'Modificación a medida' },
  { image: 'servicio-catalizadores', title: 'Catalizadores', text: 'Diagnóstico, reemplazo y reparación según el estado del sistema.', service: 'Catalizador' },
  { image: 'servicio-reprogramacion', title: 'Reprogramación', text: 'Reprogramación de vehículos (DPF - EGR OFF).', service: 'Reprogramación (DPF - EGR OFF)' },
  { image: 'servicio-reparaciones', title: 'Reparaciones', text: 'Juntas, soportes, pérdidas, vibraciones y arreglos del sistema de escape.', service: 'Reparación / otro' },
];

export default SERVICES;
