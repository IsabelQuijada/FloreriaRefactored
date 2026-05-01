import React from 'react';
import styles from './ProductCard.module.css';
import type { Product } from '../../constants/products';

interface Props {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onClick }) => (
  <article className={styles.card}>
    <div
      className={styles.imageWrap}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Ver detalles de ${product.name}`}
    >
      <img
        src={product.image}
        alt={product.name}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.overlay}>
        <span className={styles.overlayText}>CLICK PARA VISTA RÁPIDA</span>
      </div>
      <span className={styles.badge}>{product.category}</span>
    </div>

    <div className={styles.body}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.description}>{product.shortDescription}</p>
      <a
        href="https://wa.me/523322023270"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactBtn}
      >
        CONTÁCTANOS
      </a>
    </div>
  </article>
);

export default ProductCard;
