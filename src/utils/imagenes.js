// Versiones livianas de las fotos, para que la página cargue rápido en el celular.

// Fondo de sección (/public/img/fondos) en su versión para celular: el centro de la
// foto en vertical (3:4) y con la misma altura. En un celular el fondo se recorta al
// centro igual, así que se ve idéntico y pesa menos de la mitad.
// Si agregás un fondo nuevo, subí también su versión "-celu.webp".
export const fondoCelular = (src) => src.replace(/\.webp$/, '-celu.webp');

// Fotos del catálogo: scripts/miniaturas.js genera dos versiones de cada una al final
// de `npm run build` (no hay que hacerlas a mano), dentro de dist/img/generadas:
//   - miniatura cuadrada de 280 × 280 para la tira de fotos de la ficha
//     /img/galeria/moto1.webp -> /img/generadas/miniaturas/galeria/moto1.webp
//   - versión de 900 px de lado para el visor en celulares
//     /img/galeria/moto1.webp -> /img/generadas/celu/galeria/moto1.webp
// En desarrollo (npm run dev) no existen, así que se usa la foto original.
const generada = (carpeta) => (foto) => foto.replace(/^\/img\/(.+)\.[a-z]+$/i, `/img/generadas/${carpeta}/$1.webp`);

export const rutaMiniatura = generada('miniaturas');
export const rutaFotoCelular = generada('celu');

export const miniatura = (foto) => (import.meta.env.DEV ? foto : rutaMiniatura(foto));
export const fotoCelular = (foto) => (import.meta.env.DEV ? foto : rutaFotoCelular(foto));
