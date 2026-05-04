/**
 * Favoritas Products - Migrated from FloreriaValeriaCocula
 * Dynamic product selection for Favoritas section using real Cloudinary data
 */

import { ALL_PRODUCTS, type Product } from './productsData';
import { getDetailedDescription } from './productDescriptions';

export interface FavoritaProduct {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
}

/**
 * Convert a Product to FavoritaProduct with detailed descriptions
 */
function convertToFavorita(product: Product): FavoritaProduct {
  // Get detailed description or fallback to generic
  const detailedDescription = getDetailedDescription(product.cloudinaryId) || product.description;
  
  return {
    id: `favorita-${product.id}`,
    name: product.name,
    category: product.category.toUpperCase(),
    shortDescription: detailedDescription,
    description: detailedDescription,
    image: product.cloudinaryUrl,
  };
}

// Filter products by category and convert to FavoritaProduct
export const RAMOS_ELEGANTES: FavoritaProduct[] = ALL_PRODUCTS
  .filter(p => p.category === 'ramos-elegantes')
  .map(convertToFavorita);

export const RAMOS_CLASICOS: FavoritaProduct[] = ALL_PRODUCTS
  .filter(p => p.category === 'ramos-clasicos')
  .map(convertToFavorita);

// All favoritas products combined
export const ALL_FAVORITAS_PRODUCTS: FavoritaProduct[] = [
  ...RAMOS_ELEGANTES,
  ...RAMOS_CLASICOS
];

/**
 * Get random selection of favoritas products
 * @param count Number of products to return
 * @returns Array of randomly selected products
 */
export function getRandomFavoritas(count: number): FavoritaProduct[] {
  const shuffled = [...ALL_FAVORITAS_PRODUCTS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get device-appropriate count of favoritas products
 * @returns Number of products to display based on screen width
 */
export function getFavoritasCount(): number {
  if (typeof window === 'undefined') return 10;
  return window.innerWidth <= 768 ? 6 : 10;
}
