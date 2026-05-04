/**
 * Image Audit Script
 * Scans FloreriaValeriaCocula assets and generates inventory for Cloudinary migration
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_PATH = path.join(__dirname, '../../FloreriaValeriaCocula/assets');
const OUTPUT_PATH = path.join(__dirname, '../migration-data');

// Category mapping from folder names to readable names
const CATEGORY_MAP = {
  'bodasDeEnsueno': {
    name: 'Bodas de Ensueño',
    slug: 'bodas-de-ensueno',
    subcategories: ['ramosNovia', 'arreglosCentrosDeMesa', 'templo']
  },
  'ramosElegantes': {
    name: 'Ramos Elegantes',
    slug: 'ramos-elegantes',
    subcategories: ['ramos-elegantes']
  },
  'ramosClasicos': {
    name: 'Ramos Clásicos',
    slug: 'ramos-clasicos',
    subcategories: ['ramo-estilizado', 'ramo-girasoles', 'ramo-mix', 'ramo-rosas', 'ramo-tulipanes']
  },
  'celebracionesEspeciales': {
    name: 'Celebraciones Especiales',
    slug: 'celebraciones-especiales',
    subcategories: ['canastas-florales', 'centros-de-mesa-festivos', 'detalles-en-forma-de-corazon']
  },
  'cumpleanos': {
    name: 'Cumpleaños',
    slug: 'cumpleanos',
    subcategories: ['arreglos-festivos']
  },
  'eventosReligiosos': {
    name: 'Eventos Religiosos',
    slug: 'eventos-religiosos',
    subcategories: ['arreglo-de-templo', 'bautizo', 'hermita']
  },
  'galeriaFuneraria': {
    name: 'Para Recordar y...',
    slug: 'galeria-funeraria',
    subcategories: ['coronas', 'cruces', 'cubre-caja', 'pie-caja-altar']
  },
  'quinceanera': {
    name: 'Quinceañera',
    slug: 'quinceanera',
    subcategories: ['ramos', 'centroDeMesa', 'templo']
  }
};

// Image extensions to scan (prefer WebP, then PNG, then JPG)
const IMAGE_EXTENSIONS = ['.webp', '.png', '.jpg', '.jpeg'];

/**
 * Check if file is an image
 */
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Prefer WebP over PNG/JPG for same base filename
 */
function preferWebP(files) {
  const fileMap = new Map();
  
  files.forEach(file => {
    // file is now an object with {filename, path, relativePath, size, ext}
    const ext = file.ext;
    const baseName = path.basename(file.filename, ext);
    
    if (!fileMap.has(baseName)) {
      fileMap.set(baseName, file);
    } else {
      const existing = fileMap.get(baseName);
      const existingExt = existing.ext;
      
      // Prefer WebP > PNG > JPG
      if (ext === '.webp' || (ext === '.png' && existingExt === '.jpg')) {
        fileMap.set(baseName, file);
      }
    }
  });
  
  return Array.from(fileMap.values());
}

/**
 * Scan a directory recursively
 */
function scanDirectory(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath);
  const images = [];
  
  for (const item of items) {
    if (item.startsWith('.')) continue; // Skip hidden files
    
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip pre-generated optimized variant folders — they duplicate originals
      if (item === 'optimized') continue;
      // Recursively scan subdirectories
      const subImages = scanDirectory(fullPath, path.join(relativePath, item));
      images.push(...subImages);
    } else if (isImageFile(item)) {
      images.push({
        filename: item,
        path: fullPath,
        relativePath: path.join(relativePath, item),
        size: stat.size,
        ext: path.extname(item).toLowerCase()
      });
    }
  }
  
  return images;
}

/**
 * Main audit function
 */
function auditImages() {
  console.log('🔍 Starting image audit...\n');
  
  const inventory = {
    timestamp: new Date().toISOString(),
    categories: {},
    summary: {
      totalCategories: 0,
      totalSubcategories: 0,
      totalImages: 0,
      totalSize: 0,
      byFormat: {}
    }
  };
  
  // Scan each category
  for (const [folderName, categoryInfo] of Object.entries(CATEGORY_MAP)) {
    const categoryPath = path.join(ASSETS_PATH, folderName);
    
    // Skip -optimizada folders, we only want the normal versions
    if (folderName.includes('-optimizada')) continue;
    
    if (!fs.existsSync(categoryPath)) {
      console.warn(`⚠️  Category folder not found: ${folderName}`);
      continue;
    }
    
    console.log(`📁 Scanning: ${categoryInfo.name}...`);
    
    const images = scanDirectory(categoryPath);
    const preferredImages = preferWebP(images);
    
    inventory.categories[categoryInfo.slug] = {
      name: categoryInfo.name,
      folder: folderName,
      images: preferredImages,
      count: preferredImages.length,
      totalSize: preferredImages.reduce((sum, img) => sum + img.size, 0)
    };
    
    // Update summary
    inventory.summary.totalCategories++;
    inventory.summary.totalImages += preferredImages.length;
    inventory.summary.totalSize += preferredImages.reduce((sum, img) => sum + img.size, 0);
    
    // Count by format
    preferredImages.forEach(img => {
      const ext = img.ext;
      inventory.summary.byFormat[ext] = (inventory.summary.byFormat[ext] || 0) + 1;
    });
    
    console.log(`   ✓ Found ${preferredImages.length} images`);
  }
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_PATH)) {
    fs.mkdirSync(OUTPUT_PATH, { recursive: true });
  }
  
  // Write inventory file
  const inventoryFile = path.join(OUTPUT_PATH, 'imageInventory.json');
  fs.writeFileSync(inventoryFile, JSON.stringify(inventory, null, 2));
  
  // Print summary
  console.log('\n📊 Audit Summary:');
  console.log('═'.repeat(50));
  console.log(`Total Categories: ${inventory.summary.totalCategories}`);
  console.log(`Total Images: ${inventory.summary.totalImages}`);
  console.log(`Total Size: ${(inventory.summary.totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log('\nBy Format:');
  Object.entries(inventory.summary.byFormat).forEach(([ext, count]) => {
    console.log(`  ${ext}: ${count} files`);
  });
  console.log('═'.repeat(50));
  console.log(`\n✅ Inventory saved to: ${inventoryFile}\n`);
  
  return inventory;
}

// Run audit
try {
  auditImages();
} catch (error) {
  console.error('❌ Error during audit:', error);
  process.exit(1);
}
