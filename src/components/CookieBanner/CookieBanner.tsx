import React from 'react';
import styles from './CookieBanner.module.css';
import { useCookieConsent } from '../../hooks/useCookieConsent';

const CookieBanner: React.FC = () => {
  const { showBanner, accept, reject } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Aviso de cookies">
      <div className={styles.content}>
        <p className={styles.text}>
          <strong>Florería Valeria</strong> utiliza cookies únicamente con fines estadísticos:
          país de visita, ciudad, categorías y productos consultados. No se realiza
          seguimiento publicitario ni se comparte información con terceros.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnAccept} onClick={accept}>
            Aceptar
          </button>
          <button className={styles.btnReject} onClick={reject}>
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
