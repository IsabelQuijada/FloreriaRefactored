import React, { useState, useEffect } from 'react';
// Utilidad para alternar dark mode
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => setIsDark((v) => !v);
  return [isDark, toggle] as const;
};
import styles from './Navbar.module.css';
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../../assets/floreriaValeriaLogo.png';
import { NAV_LINKS } from '../../constants/nav';


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={styles.stickyHeader}>
      {/* Top contact ribbon */}
      <div className={styles.ribbon}>
        <div className={styles.ribbonInner}>
          <span className={styles.ribbonItem}>
            <FaPhone className={styles.ribbonIcon} />
            37 51 19 78 12
          </span>
          <span className={styles.ribbonDivider}>|</span>
          <span className={styles.ribbonItem}>
            <FaPhone className={styles.ribbonIcon} />
            33 22 02 32 70
          </span>
          <span className={styles.ribbonDivider}>|</span>
          <a
            href="https://wa.me/523322023270"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ribbonWhatsapp}
          >
            <FaWhatsapp className={styles.ribbonIcon} />
            WhatsApp
          </a>
        </div>
      </div>

    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Florería Valeria logo" className={styles.logoImg} />
        <span>Floreria Valeria</span>
      </div>

      {/* Desktop nav links */}
      <ul className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href="#" className={styles.navLink}>{link}</a>
          </li>
        ))}
      </ul>

      {/* Desktop right section */}

      <div className={styles.navRight}>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <button
            className={styles.darkToggle}
            onClick={toggleDark}
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            <span className={styles.toggleTrack}>
              <span className={styles.toggleThumb} style={{ left: isDark ? '18px' : '2px' }} />
              <span className={styles.toggleIcon} aria-hidden="true">{isDark ? '🌙' : '☀️'}</span>
            </span>
          </button>
        </div>
      </div>

      {/* Hamburger button — only visible on mobile/tablet */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
      </button>

      {/* Mobile dropdown menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileBtns}>
          <button className={styles.signInBtn}>Contáctanos</button>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
