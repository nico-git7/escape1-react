// Se renderiza una sola vez (en App.jsx). Los íconos se usan en cualquier
// parte de la app con <svg><use href="#icon-x" /></svg>, igual que en el HTML original.
const IconSprite = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
    <defs>
      <symbol id="icon-moto" viewBox="0 0 24 24"><path d="M4 18l6-12h4l-2 6h5l-9 9 2-7H4z" /></symbol>
      <symbol id="icon-escape" viewBox="0 0 24 24"><path d="M3 12h14m-4-4 5 4-5 4M4 8h4M4 16h4" /></symbol>
      <symbol id="icon-custom" viewBox="0 0 24 24"><path d="M4 17 17 4l3 3L7 20H4v-3Z" /><path d="m13 6 5 5" /></symbol>
      <symbol id="icon-catalizador" viewBox="0 0 24 24"><rect x="5" y="8" width="14" height="8" rx="2" /><path d="M2 12h3m14 0h3" /></symbol>
      <symbol id="icon-dowpipe" viewBox="0 0 24 24"><path d="M5 5c7 0 1 14 14 14M5 19h5m4-14h5" /></symbol>
      <symbol id="icon-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></symbol>
      <symbol id="icon-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></symbol>
      <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h13m-5-5 5 5-5 5" /></symbol>
    </defs>
  </svg>
);

export default IconSprite;
