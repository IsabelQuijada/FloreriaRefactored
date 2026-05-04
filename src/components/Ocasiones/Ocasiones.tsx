import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Ocasiones.module.css';
import { OCCASIONS } from '../../constants/occasions';
import SectionHeader from '../ui/SectionHeader/SectionHeader';

const Ocasiones: React.FC = () => {
  return (
    <section id="ocasiones" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          title="OCASIONES ESPECIALES"
          subtitle="Encuentra el arreglo perfecto para cada momento especial"
        />

        <div className={styles.grid}>
          {OCCASIONS.map((occasion) => (
            <Link
              key={occasion.id}
              to={`/productos/${occasion.categorySlug}`}
              className={styles.card}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${occasion.image})` }}
              >
                <div className={styles.overlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{occasion.title}</h3>
                <p className={styles.cardSubtitle}>{occasion.subtitle}</p>
                <span className={styles.cardButton}>VER GALERÍA</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ocasiones;
