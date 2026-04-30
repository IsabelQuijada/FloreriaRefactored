import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS } from '../../constants/nav';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Información</h4>
            <ul className={styles.colLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Sobre Nosotros</h4>
            <ul className={styles.colLinks}>
              <li><a href="#">Quiénes Somos</a></li>
              <li><a href="#">Nuestra Historia</a></li>
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
                  href="https://wa.me/523322023270"
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
              <a href="#" aria-label="Facebook" className={styles.socialBtn}>
                <FaFacebookF size={15} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialBtn}>
                <FaInstagram size={15} />
              </a>
            </div>
            <p className={styles.socialCaption}>
              Inspírate con nuestros arreglos
            </p>
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
