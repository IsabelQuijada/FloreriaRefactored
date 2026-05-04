import React, { useEffect } from 'react';
import styles from './ProductModal.module.css';
import { FaChevronLeft, FaChevronRight, FaTimes, FaWhatsapp } from 'react-icons/fa';

export interface ModalProductData {
  name: string;
  image: string;
  badge: string;
  description: string;
  whatsappUrl: string;
}

interface Props {
  product: ModalProductData | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
}

const ProductModal: React.FC<Props> = ({
  product,
  onClose,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
}) => {
  useEffect(() => {
    if (!product) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      if (e.key === 'ArrowLeft' && onPrev && canPrev) { e.preventDefault(); onPrev(); }
      if (e.key === 'ArrowRight' && onNext && canNext) { e.preventDefault(); onNext(); }
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose, onPrev, onNext, canPrev, canNext]);

  if (!product) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      {onPrev && canPrev && (
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Producto anterior"
          type="button"
        >
          <FaChevronLeft />
        </button>
      )}

      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar" type="button">
          <FaTimes />
        </button>

        <div className={styles.imagePanel}>
          <img src={product.image} alt={product.name} className={styles.image} />
        </div>

        <div className={styles.infoPanel}>
          <span className={styles.badge}>{product.badge}</span>
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <a
            href={product.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            <FaWhatsapp size={16} />
            CONTÁCTANOS
          </a>
        </div>
      </div>

      {onNext && canNext && (
        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Producto siguiente"
          type="button"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default ProductModal;
