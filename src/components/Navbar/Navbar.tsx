import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../../assets/floreriaValeriaLogo.png';
import { NAV_LINKS } from '../../constants/nav';
import { useNavigation } from '../../hooks/useNavigation';

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

  return [isDark, () => setIsDark((v) => !v)] as const;
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();
  const navigate = useNavigate();
  const { goToHomeSection } = useNavigation();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (link: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);

    if (link === 'Favoritas') { goToHomeSection('favoritas'); return; }
    if (link === 'Ocasiones') { goToHomeSection('ocasiones'); return; }
    if (link === 'Nosotros')  { navigate('/nosotros'); return; }
    if (link === 'Contacto')  { navigate('/contacto'); }
  };

  return (
    <header className={styles.stickyHeader}>
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
        <Link to="/" className={styles.logo}>
          <img src={logoImg} alt="Florería Valeria logo" className={styles.logoImg} />
          <span>Florería Valeria</span>
        </Link>

        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" className={styles.navLink} onClick={(e) => handleNavClick(link, e)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/FloreriaValeriaCoculaJalisco/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/coculafloreriavaleria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
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

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul className={styles.mobileNavLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={styles.mobileNavLink}
                  onClick={(e) => handleNavClick(link, e)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileBtns}>
            <button
              className={styles.signInBtn}
              onClick={() => { navigate('/contacto'); setMenuOpen(false); }}
            >
              Contáctanos
            </button>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/FloreriaValeriaCoculaJalisco/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/coculafloreriavaleria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
