import React from 'react';
import styles from './RibbonFooter.module.css';

const RibbonFooter: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>SEREMOS TUS CÓMPLICES</h2>
        <p className={styles.subtitle}>
          Nos encargaremos de hacer la atmósfera perfecta para el evento de tus sueños.
        </p>

        {/* CTA Button */}
        <button className={styles.ctaButton}>CONTÁCTANOS</button>
      </div>
    </section>
  );
};

export default RibbonFooter;
