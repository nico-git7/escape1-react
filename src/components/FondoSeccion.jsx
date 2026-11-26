import { fondoCelular } from '../utils/imagenes';

// Foto de fondo de una sección (detrás del contenido, oscurecida).
// En celulares se baja la versión recortada "-celu.webp" (ver utils/imagenes.js).
const FondoSeccion = ({ src }) => (
  <picture>
    <source media="(max-width: 700px)" srcSet={fondoCelular(src)} />
    <img className="ps-bg" src={src} alt="" loading="lazy" />
  </picture>
);

export default FondoSeccion;
