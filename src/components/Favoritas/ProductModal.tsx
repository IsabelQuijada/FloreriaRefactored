import React, { useEffect } from 'react';
import styles from './ProductModal.module.css';
import type { Product } from '../../constants/products';
import { FaChevronLeft, FaChevronRight, FaTimes, FaWhatsapp } from 'react-icons/fa';

interface Props {
  product: Product;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose, onPrev, onNext }) => {
  /* ── Keyboard navigation ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  /* ── Lock body scroll ── */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      {/* ── Prev arrow ── */}
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Producto anterior"
      >
        <FaChevronLeft />
      </button>

      {/* ── Modal card ── */}
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
          <FaTimes />
        </button>

        {/* Image panel */}
        <div className={styles.imagePanel}>
          <img src={product.image} alt={product.name} className={styles.image} />
        </div>

        {/* Info panel */}
        <div className={styles.infoPanel}>
          <span className={styles.badge}>{product.category}</span>
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <a
            href="https://wa.me/523322023270"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            <FaWhatsapp size={16} />
            CONTÁCTANOS
          </a>
        </div>
      </div>

      {/* ── Next arrow ── */}
      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Producto siguiente"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductModal;
