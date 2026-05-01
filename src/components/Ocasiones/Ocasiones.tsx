import React from 'react';
import styles from './Ocasiones.module.css';
import { OCCASIONS } from '../../constants/occasions';

const Ocasiones: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>OCASIONES ESPECIALES</h2>
          <p className={styles.subtitle}>
            Encuentra el arreglo perfecto para cada momento especial
          </p>
          <span className={styles.divider}></span>
        </div>

        {/* Grid de ocasiones */}
        <div className={styles.grid}>
          {OCCASIONS.map((occasion) => (
            <div key={occasion.id} className={styles.card}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: `url(${occasion.image})` }}
              >
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{occasion.title}</h3>
                <p className={styles.cardSubtitle}>{occasion.subtitle}</p>
                <button className={styles.cardButton}>VER GALERÍA</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ocasiones;
