import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styles from './ProductsPage.module.css';
import { getCategoryBySlug, getSubcategories } from '../../constants/categories';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import PageHero from '../../components/ui/PageHero/PageHero';

const ProductsPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(
    searchParams.get('filter') || 'all'
  );

  const category = useMemo(
    () => (categorySlug ? getCategoryBySlug(categorySlug) : undefined),
    [categorySlug]
  );

  const subcategories = useMemo(
    () => (categorySlug ? getSubcategories(categorySlug) : []),
    [categorySlug]
  );

  const handleFilterChange = (subcategorySlug: string) => {
    setSelectedSubcategory(subcategorySlug);
    if (subcategorySlug === 'all') {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', subcategorySlug);
    }
    setSearchParams(searchParams);
  };

  if (!category) {
    return (
      <div className={styles.errorContainer}>
        <h1>Categoría no encontrada</h1>
        <p>La categoría que buscas no existe.</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <PageHero
        title={category.name}
        subtitle={category.description}
        showDivider
      />

      {subcategories.length > 1 && (
        <CategoryFilter
          subcategories={subcategories}
          selectedSubcategory={selectedSubcategory}
          onFilterChange={handleFilterChange}
        />
      )}

      <ProductGrid
        categorySlug={categorySlug!}
        subcategoryFilter={selectedSubcategory}
      />
    </div>
  );
};

export default ProductsPage;
