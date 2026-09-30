import { useState } from 'react';
import Hero from './sections/Hero';
import CategoriesAndReasons from './sections/CategoriesAndReasons';
import ServicesProcess from './sections/ServicesProcess';
import Gallery from './sections/Gallery';
import Catalog from './sections/Catalog';
import BudgetForm from './sections/BudgetForm';
import AppointmentForm from './sections/AppointmentForm';
import LocationContact from './sections/LocationContact';

const MainHome = () => {
  const [presetService, setPresetService] = useState('');

  // Cuando se clickea "Consultar servicio", precarga el select del presupuesto
  // y hace scroll suave hasta esa sección (igual que setupServiceButtons en app.js)
  const handleSelectService = (service) => {
    setPresetService(service);
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
      <BudgetForm presetService={presetService} />
      <AppointmentForm />
      <LocationContact />
    </main>
  );
};

export default MainHome;
