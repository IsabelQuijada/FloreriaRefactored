import React, { useState, useRef } from 'react';
import styles from './Favoritas.module.css';
import { FAVORITES } from '../../constants/products';
import type { Product } from '../../constants/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Favoritas: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  /* ── Carousel scroll helpers ── */
  const getScrollStep = (): number => {
    const vp = viewportRef.current;
    if (!vp) return 296;
    const firstCard = vp.children[0] as HTMLElement | null;
    if (!firstCard) return 296;
    const gap = parseFloat(getComputedStyle(vp).gap) || 24;
    return firstCard.offsetWidth + gap;
  };

  const handlePrev = () =>
    viewportRef.current?.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });

  const handleNext = () =>
    viewportRef.current?.scrollBy({ left: getScrollStep(), behavior: 'smooth' });

  /* ── Modal helpers ── */
  const openModal = (product: Product) => {
    setSelectedIndex(FAVORITES.findIndex((p) => p.id === product.id));
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  const goModalPrev = () => {
    const i = (selectedIndex - 1 + FAVORITES.length) % FAVORITES.length;
    setSelectedIndex(i);
    setSelectedProduct(FAVORITES[i]);
  };

  const goModalNext = () => {
    const i = (selectedIndex + 1) % FAVORITES.length;
    setSelectedIndex(i);
    setSelectedProduct(FAVORITES[i]);
  };

  return (
    <section className={styles.section}>
      {/* ── Section header ── */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>colección destacada</p>
        <h2 className={styles.title}>FAVORITAS</h2>
        <p className={styles.subtitle}>Descubre nuestras flores más populares</p>
        <span className={styles.divider} aria-hidden="true" />
      </div>

      {/* ── Carousel ── */}
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={handlePrev}
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.viewport} ref={viewportRef}>
          {FAVORITES.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => openModal(product)}
            />
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleNext}
          aria-label="Siguiente"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* ── Quick-view modal ── */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onPrev={goModalPrev}
          onNext={goModalNext}
        />
      )}
    </section>
  );
};

export default Favoritas;
