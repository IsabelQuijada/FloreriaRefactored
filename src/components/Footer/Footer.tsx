import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS } from '../../constants/nav';
import { useNavigation } from '../../hooks/useNavigation';

const Footer: React.FC = () => {
  const { goToHomeSection } = useNavigation();

  const renderNavLink = (link: (typeof NAV_LINKS)[number]) => {
    if (link === 'Favoritas') {
      return (
        <a href="/#favoritas" onClick={(e) => { e.preventDefault(); goToHomeSection('favoritas'); }}>
          {link}
        </a>
      );
    }
    if (link === 'Ocasiones') {
      return (
        <a href="/#ocasiones" onClick={(e) => { e.preventDefault(); goToHomeSection('ocasiones'); }}>
          {link}
        </a>
      );
    }
    if (link === 'Nosotros') return <Link to="/nosotros">{link}</Link>;
    return <Link to="/contacto">{link}</Link>;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Información</h4>
            <ul className={styles.colLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link}>{renderNavLink(link)}</li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Sobre Nosotros</h4>
            <ul className={styles.colLinks}>
              <li><Link to="/nosotros">Quienes Somos</Link></li>
              <li><Link to="/nosotros">Nuestra Historia</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contacto</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaPhone size={12} className={styles.contactIcon} />
                <span>37 51 19 78 12</span>
              </li>
              <li className={styles.contactItem}>
                <FaPhone size={12} className={styles.contactIcon} />
                <span>33 22 02 32 70</span>
              </li>
              <li className={styles.contactItem}>
                <FaWhatsapp size={14} className={styles.contactIcon} />
                <a
                  href="https://wa.me/523335558928?text=Hola,%20me%20interesan%20sus%20flores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Síguenos</h4>
            <div className={styles.socialRow}>
              <a
                href="https://www.facebook.com/FloreriaValeriaCoculaJalisco/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialBtn}
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="https://www.instagram.com/coculafloreriavaleria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialBtn}
              >
                <FaInstagram size={15} />
              </a>
            </div>
            <p className={styles.socialCaption}>Inspírate con nuestros arreglos</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span>© 2026 Florería Valeria. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
