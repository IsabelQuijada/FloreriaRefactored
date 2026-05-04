import React from 'react';
import styles from './ProductCard.module.css';

export interface ProductCardData {
  id: string | number;
  name: string;
  image: string;
  badge: string;
  description: string;
  whatsappUrl: string;
  width?: number;
  height?: number;
}

interface Props {
  product: ProductCardData;
  onClick?: () => void;
  onContactClick?: () => void;
  snap?: boolean;
}

const ProductCard: React.FC<Props> = ({ product, onClick, onContactClick, snap }) => {
  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(`.${styles.contactBtn}`)) return;
    onClick?.();
  };

  return (
    <article
      className={`${styles.card} ${snap ? styles.snap : ''}`}
      onClick={onClick ? handleClick : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className={styles.imageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          loading="lazy"
          width={product.width}
          height={product.height}
        />
        <span className={styles.badge}>{product.badge}</span>
        {onClick && (
          <div className={styles.overlay}>
            <span className={styles.overlayText}>CLICK PARA VISTA RÁPIDA</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <a
          href={product.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
          onClick={(e) => { e.stopPropagation(); onContactClick?.(); }}
        >
          CONTÁCTANOS
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
