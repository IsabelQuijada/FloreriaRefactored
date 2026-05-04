import React, { useState, useMemo } from 'react';
import styles from './ProductGrid.module.css';
import { getProductsBySubcategory } from '../../constants/productsData';
import type { Product } from '../../constants/productsData';
import { getCategoryBySlug } from '../../constants/categories';
import ProductCard from '../product/ProductCard/ProductCard';
import ProductModal from '../product/ProductModal/ProductModal';
import { Analytics } from '../../analytics/events';

interface Props {
  categorySlug: string;
  subcategoryFilter: string;
}

function buildWhatsappUrl(productName: string): string {
  return `https://wa.me/523335558928?text=${encodeURIComponent(
    `Hola, me interesa "${productName}". ¿Podrían darme más información sobre disponibilidad y precio?`
  )}`;
}

const ProductGrid: React.FC<Props> = ({ categorySlug, subcategoryFilter }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = useMemo(
    () => getProductsBySubcategory(categorySlug, subcategoryFilter),
    [categorySlug, subcategoryFilter]
  );

  const selectedIndex = useMemo(
    () => (selectedProduct ? products.findIndex((p) => p.id === selectedProduct.id) : -1),
    [selectedProduct, products]
  );

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    Analytics.viewProduct(product.id, product.name, categorySlug);
  };

  const handleCloseModal = () => setSelectedProduct(null);

  const handleNavigatePrev = () => {
    if (selectedIndex > 0) setSelectedProduct(products[selectedIndex - 1]);
  };

  const handleNavigateNext = () => {
    if (selectedIndex < products.length - 1) setSelectedProduct(products[selectedIndex + 1]);
  };

  return (
    <>
      <div className={styles.container}>
        {products.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No se encontraron productos para este filtro.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {products.map((product) => {
              const categoryName =
                getCategoryBySlug(product.category)?.name ?? product.category;
              return (
                <ProductCard
                  key={product.id}
                  product={{
                    id: product.id,
                    name: product.name,
                    image: product.cloudinaryUrl,
                    badge: categoryName,
                    description: product.description,
                    whatsappUrl: buildWhatsappUrl(product.name),
                    width: product.width,
                    height: product.height,
                  }}
                  onClick={() => handleOpenModal(product)}
                  onContactClick={() =>
                    Analytics.contactProduct(product.id, product.name, categorySlug)
                  }
                />
              );
            })}
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct ? {
          name: selectedProduct.name,
          image: selectedProduct.cloudinaryUrl,
          badge: selectedProduct.category.toUpperCase(),
          description: selectedProduct.description,
          whatsappUrl: buildWhatsappUrl(selectedProduct.name),
        } : null}
        onClose={handleCloseModal}
        onPrev={handleNavigatePrev}
        onNext={handleNavigateNext}
        canPrev={selectedIndex > 0}
        canNext={selectedIndex < products.length - 1}
      />
    </>
  );
};

export default ProductGrid;
