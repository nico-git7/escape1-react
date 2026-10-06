import { useEffect, useState } from 'react';
import NAV_ITEMS from '../data/nav';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');

  const closeMenu = () => setOpen(false);

  // Cierra el menú mobile si la ventana se agranda o se aprieta Escape
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) closeMenu();
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Header compacto y más opaco cuando se scrollea
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: marca el link activo según qué sección está más visible
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

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
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <nav className="nav" aria-label="Navegación principal">
        <a className="logo" href="#inicio" aria-label="Escape1, inicio" onClick={closeMenu}>
          <span className="e1">Escape</span>
          <span className="e2">1</span>
        </a>
        <div className={`nav-menu${open ? ' open' : ''}`} id="navMenu">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  className={activeHref === item.href ? 'active' : ''}
                  aria-current={activeHref === item.href ? 'location' : undefined}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="#presupuesto" onClick={closeMenu}>
            Pedí presupuesto
            <svg className="icon" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </a>
        </div>
        <button
          className={`burger${open ? ' is-open' : ''}`}
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
};

export default Header;
