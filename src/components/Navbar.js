import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          GM<span>_</span>SEC
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {[
            ['sobre',      '// sobre'],
            ['experiencia','// experiência'],
            ['skills',     '// skills'],
            ['certs',      '// certs'],
            ['projetos',   '// projetos'],
            ['contact',    '// contato'],
          ].map(([id, label]) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}>{label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
