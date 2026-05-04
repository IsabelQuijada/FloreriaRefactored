import React, { useState, useRef, useMemo } from 'react';
import styles from './Favoritas.module.css';
import { getRandomFavoritas, getFavoritasCount } from '../../constants/favoritasProducts';
import type { FavoritaProduct } from '../../constants/favoritasProducts';
import ProductCard from '../product/ProductCard/ProductCard';
import ProductModal from '../product/ProductModal/ProductModal';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const WHATSAPP_URL = 'https://wa.me/523322023270';

const Favoritas: React.FC = () => {
  const FAVORITES = useMemo(() => getRandomFavoritas(getFavoritasCount()), []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<FavoritaProduct | null>(null);
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
  const openModal = (product: FavoritaProduct) => {
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
    <section id="favoritas" className={styles.section}>
      <SectionHeader
        title="FAVORITAS"
        subtitle="Descubre nuestras flores más populares"
      />

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
              snap
              product={{
                id: product.id,
                name: product.name,
                image: product.image,
                badge: product.category,
                description: product.shortDescription,
                whatsappUrl: WHATSAPP_URL,
              }}
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

      <ProductModal
        product={selectedProduct ? {
          name: selectedProduct.name,
          image: selectedProduct.image,
          badge: selectedProduct.category,
          description: selectedProduct.description,
          whatsappUrl: WHATSAPP_URL,
        } : null}
        onClose={closeModal}
        onPrev={goModalPrev}
        onNext={goModalNext}
      />
    </section>
  );
};

export default Favoritas;
