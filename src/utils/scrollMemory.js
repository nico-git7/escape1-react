// Recuerda en qué punto de la home estaba el visitante cuando abrió una ficha del
// catálogo, para devolverlo al mismo lugar al volver.
//
// La posición se guarda en `history.state` de la entrada de la home. Así funciona
// igual con el link "Volver al catálogo" que con el botón Atrás del navegador o del
// celular, y no se pisa si hay otra pestaña abierta.

const SCROLL_KEY = 'homeScrollY';
const FROM_HOME_KEY = 'fromHome';

const patchState = (patch) => {
  window.history.replaceState({ ...window.history.state, ...patch }, '');
};

// Llamar justo antes de salir de la home hacia una ficha.
export function rememberHomeScroll() {
  patchState({ [SCROLL_KEY]: window.scrollY });
}

// Posición guardada en la entrada actual del historial, o null si no hay.
export function savedHomeScroll() {
  const value = window.history.state?.[SCROLL_KEY];
  return typeof value === 'number' ? value : null;
}

// Marca la entrada de la ficha como "abierta desde la home".
export function markOpenedFromHome() {
  patchState({ [FROM_HOME_KEY]: true });
}

// true si la ficha actual se abrió desde la home (y entonces "volver" es ir atrás).
export function openedFromHome() {
  return window.history.state?.[FROM_HOME_KEY] === true;
}
