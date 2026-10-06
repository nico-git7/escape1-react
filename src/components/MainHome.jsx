import Hero from './sections/Hero';
import CategoriesAndReasons from './sections/CategoriesAndReasons';
import ServicesProcess from './sections/ServicesProcess';
import Gallery from './sections/Gallery';
import Catalog from './sections/Catalog';
import BudgetForm from './sections/BudgetForm';
import AppointmentForm from './sections/AppointmentForm';
import LocationContact from './sections/LocationContact';

// preset / onRequestBudget vienen de App, así también se puede precargar el
// presupuesto desde la página de detalle de un producto del catálogo.
const MainHome = ({ preset, onRequestBudget }) => {
  // Cuando se clickea "Consultar servicio", precarga el select del presupuesto
  // y hace scroll suave hasta esa sección
  const handleSelectService = (service) => {
    onRequestBudget({ service });
    document.getElementById('presupuesto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      document.getElementById('p-servicio')?.focus();
    }, 550);
  };

  return (
    <main id="contenido">
      <Hero />
      <CategoriesAndReasons />
      <ServicesProcess onSelectService={handleSelectService} />
      <Gallery />
      <Catalog />
      <BudgetForm preset={preset} />
      <AppointmentForm />
      <LocationContact />
    </main>
  );
};

export default MainHome;
