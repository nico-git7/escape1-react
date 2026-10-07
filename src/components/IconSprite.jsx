// Se renderiza una sola vez (en App.jsx). Los íconos se usan en cualquier
// parte de la app con <svg className="icon"><use href="#icon-x" /></svg>.
// Todos son de trazo (stroke), salvo icon-whatsapp que es relleno.
const IconSprite = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
    <defs>
      <symbol id="icon-moto" viewBox="0 0 24 24"><path d="M4 18l6-12h4l-2 6h5l-9 9 2-7H4z" /></symbol>
      <symbol id="icon-escape" viewBox="0 0 24 24"><path d="M3 12h14m-4-4 5 4-5 4M4 8h4M4 16h4" /></symbol>
      <symbol id="icon-custom" viewBox="0 0 24 24"><path d="M4 17 17 4l3 3L7 20H4v-3Z" /><path d="m13 6 5 5" /></symbol>
      <symbol id="icon-catalizador" viewBox="0 0 24 24"><rect x="5" y="8" width="14" height="8" rx="2" /><path d="M2 12h3m14 0h3M9 8v8m6-8v8" /></symbol>
      <symbol id="icon-downpipe" viewBox="0 0 24 24"><path d="M5 5c7 0 1 14 14 14M5 19h5m4-14h5" /></symbol>
      <symbol id="icon-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></symbol>
      <symbol id="icon-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></symbol>
      <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h13m-5-5 5 5-5 5" /></symbol>
      <symbol id="icon-wrench" viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.6 17.2a1.4 1.4 0 0 0 2 2l5.7-5.7a4 4 0 0 0 5.2-5.4l-2.4 2.4-2.1-.6-.6-2.1 2.3-2.4Z" /></symbol>
      <symbol id="icon-flame" viewBox="0 0 24 24"><path d="M12 3c.5 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.2 1.2-3.5 2.3-4.6.3 1.6 1 2.6 2.2 3.1C11 9 11 6 12 3Z" /></symbol>
      <symbol id="icon-gauge" viewBox="0 0 24 24"><path d="M4.5 17a8.5 8.5 0 1 1 15 0" /><path d="m12 13 4-4" /><circle cx="12" cy="13" r="1.3" /></symbol>
      <symbol id="icon-shield" viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></symbol>
      <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 10h8M8 13h5" /></symbol>
      <symbol id="icon-pin" viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></symbol>
      <symbol id="icon-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></symbol>
      <symbol id="icon-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></symbol>
      <symbol id="icon-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></symbol>
      <symbol id="icon-chevron-left" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7" /></symbol>
      <symbol id="icon-chevron-right" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7" /></symbol>
      <symbol id="icon-whatsapp" viewBox="0 0 24 24">
        <path fill="currentColor" stroke="none" d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.8.83-3-.2-.31a8.2 8.2 0 1 1 6.97 3.84Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47a.9.9 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
      </symbol>
    </defs>
  </svg>
);

export default IconSprite;
