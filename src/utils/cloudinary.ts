/**
 * Cloudinary Integration Utilities
 * Generates optimized image URLs with responsive transformations
 */

// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'YOUR_CLOUD_NAME';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | 'auto:low' | 'auto:good' | 'auto:best' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb';
  gravity?: 'auto' | 'face' | 'center';
  dpr?: number | 'auto';
  blur?: number;
}

/**
 * Generate Cloudinary URL with transformations
 * @param publicId - The Cloudinary public ID (e.g., "floreria/bodas-de-ensueno/ramosNovia/ramo-novia1")
 * @param options - Transformation options
 * @returns Optimized Cloudinary URL
 */
export function buildCloudinaryUrl(
  publicId: string,
  options: CloudinaryTransformOptions = {}
): string {
  const {
    width,
    height,
    quality = 'auto:good',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
    dpr = 'auto',
    blur
  } = options;

  const transformations: string[] = [];

  // Add width
  if (width) transformations.push(`w_${width}`);

  // Add height
  if (height) transformations.push(`h_${height}`);

  // Add crop mode
  if (crop) transformations.push(`c_${crop}`);

  // Add gravity
  if (gravity && (crop === 'fill' || crop === 'crop' || crop === 'thumb')) {
    transformations.push(`g_${gravity}`);
  }

  // Add quality
  transformations.push(`q_${quality}`);

  // Add format
  transformations.push(`f_${format}`);

  // Add DPR (device pixel ratio)
  if (dpr) transformations.push(`dpr_${dpr}`);

  // Add blur for LQIP (Low Quality Image Placeholder)
  if (blur) transformations.push(`e_blur:${blur}`);

  const transformString = transformations.join(',');

  return `${CLOUDINARY_BASE_URL}/${transformString}/${publicId}`;
}

/**
 * Generate responsive srcset for different screen sizes
 * @param publicId - The Cloudinary public ID
 * @param sizes - Array of widths for responsive images
 * @returns srcset string for img element
 */
export function buildResponsiveSrcSet(
  publicId: string,
  sizes: number[] = [300, 600, 900, 1200]
): string {
  return sizes
    .map(width => {
      const url = buildCloudinaryUrl(publicId, { width, quality: 'auto:good' });
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Generate sizes attribute for responsive images
 * @returns sizes string for img element
 */
export function getResponsiveSizes(): string {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
}

/**
 * Generate blur placeholder URL (LQIP - Low Quality Image Placeholder)
 * @param publicId - The Cloudinary public ID
 * @returns Blurred, low-quality placeholder URL
 */
export function buildPlaceholderUrl(publicId: string): string {
  return buildCloudinaryUrl(publicId, {
    width: 50,
    quality: 'auto:low',
    blur: 1000
  });
}

/**
 * Preload image to browser cache
 * @param url - Image URL to preload
 */
export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = url;
  });
}

/**
 * Build Cloudinary URL from category and filename
 * @param category - Category slug (e.g., "bodas-de-ensueno")
 * @param subcategory - Subcategory folder name (e.g., "ramosNovia")
 * @param filename - Image filename without extension (e.g., "ramo-novia1")
 * @param options - Transformation options
 * @returns Cloudinary URL
 */
export function buildProductImageUrl(
  category: string,
  subcategory: string,
  filename: string,
  options: CloudinaryTransformOptions = {}
): string {
  // Build public ID: floreria/{category}/{subcategory}/{filename}
  const publicIdParts = ['floreria', category];
  
  if (subcategory) {
    publicIdParts.push(subcategory);
  }
  
  publicIdParts.push(filename);
  
  const publicId = publicIdParts.join('/');
  
  return buildCloudinaryUrl(publicId, options);
}

/**
 * Extract filename from full image path
 * @param imagePath - Full image path (e.g., "../../assets/bodas/ramo1.png")
 * @returns Filename without extension
 */
export function extractFilename(imagePath: string): string {
  const filename = imagePath.split('/').pop() || '';
  return filename.replace(/\.(png|jpg|jpeg|webp)$/i, '');
}

/**
 * Get optimized image config for product cards
 */
export const PRODUCT_CARD_CONFIG: CloudinaryTransformOptions = {
  width: 480,
  quality: 'auto:good',
  format: 'auto',
  crop: 'fill',
  gravity: 'auto',
  dpr: 'auto'
};

/**
 * Get optimized image config for modal/lightbox
 */
export const MODAL_IMAGE_CONFIG: CloudinaryTransformOptions = {
  width: 1200,
  quality: 'auto:best',
  format: 'auto',
  crop: 'fit',
  dpr: 'auto'
};

/**
 * Get optimized image config for thumbnails
 */
export const THUMBNAIL_CONFIG: CloudinaryTransformOptions = {
  width: 200,
  height: 200,
  quality: 'auto:good',
  format: 'auto',
  crop: 'thumb',
  gravity: 'auto'
};
