import React from 'react';
import styles from './CategoryFilter.module.css';
import type { SubcategoryMetadata } from '../../constants/categories';

interface Props {
  subcategories: SubcategoryMetadata[];
  selectedSubcategory: string;
  onFilterChange: (subcategorySlug: string) => void;
}

const CategoryFilter: React.FC<Props> = ({
  subcategories,
  selectedSubcategory,
  onFilterChange
}) => {
  return (
    <section className={styles.filterSection}>
      <div className={styles.container}>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterBtn} ${selectedSubcategory === 'all' ? styles.active : ''}`}
            onClick={() => onFilterChange('all')}
          >
            Toda la Colección
          </button>
          {subcategories.map((subcategory) => (
            <button
              key={subcategory.id}
              className={`${styles.filterBtn} ${selectedSubcategory === subcategory.slug ? styles.active : ''}`}
              onClick={() => onFilterChange(subcategory.slug)}
            >
              {subcategory.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
