// Corre al final de `npm run build` y genera dos versiones livianas de cada foto del
// catálogo (ver utils/imagenes.js):
//   - una miniatura cuadrada (280 × 280) para la tira de fotos de las fichas. Antes
//     la tira bajaba cada foto en tamaño completo: más de 1 MB extra por ficha.
//   - una versión de 900 px de lado para el visor en celulares, que lo muestran a
//     menos de 400 px de ancho.
//
// Si agregás o cambiás fotos en src/data/catalog.js no hay que hacer nada: en el
// próximo build se generan solas.
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import catalogItems from '../src/data/catalog.js';
import { rutaFotoCelular, rutaMiniatura } from '../src/utils/imagenes.js';

const publicDir = new URL('../public/', import.meta.url);
const dist = new URL('../dist/', import.meta.url);

const fotos = [...new Set(catalogItems.flatMap((item) => item.photos))];

const generar = async (ruta, transformar) => {
  const destino = new URL(`.${ruta}`, dist);
  await mkdir(new URL('.', destino), { recursive: true });
  await transformar.toFile(fileURLToPath(destino));
};

await Promise.all(fotos.map((foto) => {
  // .rotate(): respeta la orientación de las fotos sacadas con el celular
  const original = sharp(fileURLToPath(new URL(`.${foto}`, publicDir))).rotate();
  return Promise.all([
    // fit "cover": recorta al centro, igual que object-fit: cover en el CSS
    generar(rutaMiniatura(foto), original.clone().resize(280, 280, { fit: 'cover' }).webp({ quality: 72 })),
    // fit "inside": achica sin recortar y sin agrandar las que ya son chicas
    generar(rutaFotoCelular(foto), original.clone().resize(900, 900, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 75 })),
  ]);
}));

console.log(`miniaturas: ${fotos.length} fotos del catálogo (miniatura y versión para celular)`);
