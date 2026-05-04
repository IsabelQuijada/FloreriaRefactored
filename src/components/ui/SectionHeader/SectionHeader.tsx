import React from 'react';
import styles from './SectionHeader.module.css';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => (
  <div className={styles.header}>
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    <span className={styles.divider} aria-hidden="true" />
  </div>
);

export default SectionHeader;
