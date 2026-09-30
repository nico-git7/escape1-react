import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#galeria', label: 'Trabajos' },
  { href: '#ubicacion', label: 'Ubicación' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');
  const navLinksRef = useRef(null);

  const closeMenu = () => setOpen(false);

  // Cierra el menú mobile si la ventana se agranda (igual que el resize listener original)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll-spy: marca el link activo según qué sección está más visible
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const sections = NAV_ITEMS
      .map((item) => ({ href: item.href, section: document.querySelector(item.href) }))
      .filter(({ section }) => section);

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;
        const match = sections.find(({ section }) => section === current.target);
        if (match) setActiveHref(match.href);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.01, 0.25, 0.5] }
    );

    sections.forEach(({ section }) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <nav className="nav" aria-label="Navegación principal">
        <a className="logo" href="#inicio" aria-label="Escape1, inicio">
          <span className="e1">Escape</span>
          <span className="e2">1</span>
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks" ref={navLinksRef}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                className={activeHref === item.href ? 'active' : ''}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="#presupuesto">Pedí presupuesto</a>
        <button
          className="burger"
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
