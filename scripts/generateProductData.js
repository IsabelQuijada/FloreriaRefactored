/**
 * Generate Product Data from Cloudinary Upload Results
 * Run this AFTER uploading images to Cloudinary
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UPLOAD_RESULTS_PATH = path.join(__dirname, '../migration-data/uploadResults.json');
const OUTPUT_FILE = path.join(__dirname, '../src/constants/productsData.ts');

// Maps source folder names to subcategory slugs used in the app's URL/filter system
const FOLDER_TO_SLUG = {
  // bodas-de-ensueno
  'arreglosCentrosDeMesa': 'arreglos-centros-mesa',
  'ramosNovia': 'ramos-novia',
  // ramos-clasicos
  'ramoEstilizado': 'ramo-estilizado',
  'ramoGirasoles': 'ramo-girasoles',
  'ramoMix': 'ramo-mix',
  'ramoRosas': 'ramo-rosas',
  'ramoTulipanes': 'ramo-tulipanes',
  // celebraciones-especiales
  'canastasFlores': 'canastas-florales',
  'centrosDeMesaFestivos': 'centros-de-mesa-festivos',
  'detallesEnFormaDeCorazon': 'detalles-en-forma-de-corazon',
  // eventos-religiosos
  'arregloDeTemplo': 'arreglo-de-templo',
  'bautizo': 'bautizo',
  'hermita': 'hermita',
  // galeria-funeraria
  'coronas': 'coronas',
  'cruces': 'cruces',
  'cubreCaja': 'cubre-caja',
  'pieCajaAltar': 'pie-caja-altar',
  // quinceanera
  'centroDeMesa': 'centroDeMesa',
  'ramos': 'ramos',
  // single-subcategory categories — folder name matches slug already
  'templo': 'templo',
  'arreglosFestivos': 'arreglos-festivos',
};

// Product descriptions from ImageManager files (consolidated)
const PRODUCT_DESCRIPTIONS = {
  'bodas-de-ensueno': {
    'ramo-novia1': 'Ramo en cascada con rosas blancas y follaje, elegante y fresco para bodas románticas.',
    'ramo-novia2': 'Bouquet alegre con girasoles, rosas y margaritas, ideal para bodas campestres.',
    // ... Add more as needed
  },
  // Add other categories
};

function generateProductData() {
  console.log('📝 Generating product data from Cloudinary upload results...\n');

  if (!fs.existsSync(UPLOAD_RESULTS_PATH)) {
    console.error('❌ Upload results not found. Run uploadToCloudinary.js first.');
    process.exit(1);
  }

  const uploadResults = JSON.parse(fs.readFileSync(UPLOAD_RESULTS_PATH, 'utf-8'));

  let productId = 1;
  const allProducts = [];

  // Generate products for each category
  for (const [categorySlug, categoryData] of Object.entries(uploadResults.categories)) {
    console.log(`📁 Processing: ${categoryData.name}...`);

    for (const image of categoryData.images) {
      // Skip pre-generated optimized variants — they are duplicate entries of originals
      if (image.originalPath.includes('/optimized/') || image.publicId.includes('/optimized/')) {
        continue;
      }

      const subcategory = extractSubcategory(image.originalPath);
      
      const product = {
        id: productId++,
        cloudinaryId: image.publicId,
        name: generateProductName(image.filename, categorySlug, subcategory),
        category: categorySlug,
        subcategory: subcategory,
        description: getDescription(image.filename, categorySlug) || `Hermoso arreglo floral de ${categoryData.name}`,
        cloudinaryUrl: image.url,
        width: image.width,
        height: image.height
      };

      allProducts.push(product);
    }

    const countAdded = allProducts.filter(p => p.category === categorySlug).length;
    console.log(`   ✓ Generated ${countAdded} products`);
  }

  // Generate TypeScript file
  const tsContent = `/**
 * Product Data - Auto-generated from Cloudinary Upload
 * Generated: ${new Date().toISOString()}
 * Total Products: ${allProducts.length}
 */

export interface Product {
  id: number;
  cloudinaryId: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  cloudinaryUrl: string;
  width: number;
  height: number;
}

export const ALL_PRODUCTS: Product[] = ${JSON.stringify(allProducts, null, 2)};

/**
 * Get all products for a specific category
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  return ALL_PRODUCTS.filter(p => p.category === categorySlug);
}

/**
 * Get all products for a specific subcategory
 */
export function getProductsBySubcategory(categorySlug: string, subcategorySlug: string): Product[] {
  if (subcategorySlug === 'all') {
    return getProductsByCategory(categorySlug);
  }
  return ALL_PRODUCTS.filter(p => p.category === categorySlug && p.subcategory === subcategorySlug);
}

/**
 * Get product by ID
 */
export function getProductById(id: number): Product | undefined {
  return ALL_PRODUCTS.find(p => p.id === id);
}

/**
 * Get product by Cloudinary ID
 */
export function getProductByCloudinaryId(cloudinaryId: string): Product | undefined {
  return ALL_PRODUCTS.find(p => p.cloudinaryId === cloudinaryId);
}
`;

  fs.writeFileSync(OUTPUT_FILE, tsContent);

  console.log('\n✅ Product data generated successfully!');
  console.log(`📄 File: ${OUTPUT_FILE}`);
  console.log(`📊 Total Products: ${allProducts.length}\n`);
}

/**
 * Extrae el número del nombre del archivo
 */
function extractNumber(filename) {
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
  const match = nameWithoutExt.match(/(\d+)$/);
  return match ? match[1] : '1';
}

/**
 * Obtiene el nombre base del producto según la subcategoría
 */
function getProductBaseName(subcategory) {
  const subcategoryMap = {
    // Bodas de Ensueño
    'arreglos-centros-mesa': 'Arreglo de Boda',
    'ramos-novia': 'Ramo de Novia',
    'decoracion-ceremonia': 'Decoración de Ceremonia',
    
    // Cumpleaños
    'arreglos-cumpleanos': 'Arreglo de Cumpleaños',
    'centros-mesa-cumpleanos': 'Centro de Mesa',
    
    // Eventos Religiosos
    'arreglo-de-templo': 'Arreglo de Templo',
    'bautizo': 'Arreglo de Bautizo',
    'hermita': 'Arreglo para Hermita',
    'templo': 'Arreglo de Templo',
    
    // Celebraciones Especiales
    'canastas-florales': 'Canasta Floral',
    'centros-de-mesa-festivos': 'Centro de Mesa Festivo',
    'detalles-en-forma-de-corazon': 'Detalle en Forma de Corazón',
    'arreglos-festivos': 'Arreglo Festivo',
    
    // Galería Funeraria
    'coronas': 'Corona Funeraria',
    'cruces': 'Cruz Funeraria',
    'cubre-caja': 'Cubre Caja',
    'pie-caja-altar': 'Arreglo de Altar',
    
    // Ramos Clásicos
    'ramo-estilizado': 'Ramo Estilizado',
    'ramo-girasoles': 'Ramo de Girasoles',
    'ramo-mix': 'Ramo Mix',
    'ramo-rosas': 'Ramo de Rosas',
    'ramo-tulipanes': 'Ramo de Tulipanes',
    
    // Ramos Elegantes
    'ramos-elegantes': 'Ramo Elegante',
    
    // Quinceañera
    'centroDeMesa': 'Centro de Mesa',
    'ramos': 'Ramo para Quinceañera',
  };
  
  // Si no hay match específico, usar el nombre de categoría como fallback
  return subcategoryMap[subcategory] || subcategory;
}

/**
 * Genera el nombre del producto basado en su cloudinaryId y subcategoría
 */
function generateProductName(filename, categorySlug, subcategory) {
  const number = extractNumber(filename);
  const baseName = getProductBaseName(subcategory);
  
  return `${baseName} ${number}`;
}

function extractSubcategory(originalPath) {
  const parts = originalPath.split('/');
  // Get the folder name directly above the filename
  const folderName = parts.length > 1 ? parts[parts.length - 2] : '';
  // Translate folder name to the slug used by the filter system
  return FOLDER_TO_SLUG[folderName] ?? folderName;
}

function getDescription(filename, categorySlug) {
  return PRODUCT_DESCRIPTIONS[categorySlug]?.[filename] || null;
}

// Run generation
try {
  generateProductData();
} catch (error) {
  console.error('❌ Error generating product data:', error);
  process.exit(1);
}
