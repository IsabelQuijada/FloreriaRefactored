import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RibbonFooter.module.css';

type RibbonFooterProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

const RibbonFooter: React.FC<RibbonFooterProps> = ({
  title = 'SEREMOS TUS COMPLICES',
  subtitle = 'Nos encargaremos de hacer la atmosfera perfecta para el evento de tus suenos.',
  buttonLabel = 'CONTACTANOS',
  buttonHref = '/contacto',
}) => {
  const isExternal = buttonHref.startsWith('http');

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {isExternal ? (
          <a href={buttonHref} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            {buttonLabel}
          </a>
        ) : (
          <Link to={buttonHref} className={styles.ctaButton}>
            {buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
};

export default RibbonFooter;
