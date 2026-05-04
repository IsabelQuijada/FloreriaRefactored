import React from 'react';
import styles from './PageHero.module.css';

interface Props {
  title: string;
  subtitle?: string;
  showDivider?: boolean;
}

const PageHero: React.FC<Props> = ({ title, subtitle, showDivider }) => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {showDivider && <span className={styles.divider} aria-hidden="true" />}
    </div>
  </section>
);

export default PageHero;
