import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button/Button';
import Petals from '../Petals/Petals';
import bouquetImg from '../../assets/bouquet.png';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Petals />

      <div className={styles.content}>
        {/* Left column */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            FLORERÍA <br />VALERIA
          </h1>
          <p className={styles.tagline}>al color de tus sentimientos</p>
          <p className={styles.description}>
            Creamos arreglos florales únicos para cada momento especial. Rosas, girasoles,
            orquídeas y mucho más, con el cuidado y la pasión que tus sentimientos merecen.
          </p>
          <div className={styles.actions}>
            <Button label="Ver catálogo" variant="primary" />
          </div>
        </div>

        {/* Right column — image fills the panel */}
        <div className={styles.right}>
          <img
            src={bouquetImg}
            alt="Beautiful bouquet of cream roses"
            className={styles.bouquetImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
