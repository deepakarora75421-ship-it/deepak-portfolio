import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section highlighting
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        const top = s.offsetTop - 120;
        if (window.scrollY >= top) current = s.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          DA<span className="dot">.</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{ color: activeSection === link.href.slice(1) ? '#a855f7' : '' }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          Hire Me
        </a>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <span style={{ transform: mobileMenuOpen ? 'translateY(7px) rotate(45deg)' : '' }}></span>
          <span style={{ opacity: mobileMenuOpen ? '0' : '' }}></span>
          <span style={{ transform: mobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : '' }}></span>
        </button>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={closeMobileMenu}>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
