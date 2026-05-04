/**
 * Cloudinary Upload Script
 * Uploads images from FloreriaValeriaCocula to Cloudinary with optimized settings
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from parent directory's .env file
dotenv.config({ path: path.join(__dirname, '../.env') });

const INVENTORY_PATH = path.join(__dirname, '../migration-data/imageInventory.json');
const OUTPUT_PATH = path.join(__dirname, '../migration-data');

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Verify configuration
if (!cloudinary.config().cloud_name || !cloudinary.config().api_key || !cloudinary.config().api_secret) {
  console.error('❌ Error: Cloudinary credentials not found in environment variables.');
  console.error('Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your .env file.');
  process.exit(1);
}

// Upload settings
const UPLOAD_OPTIONS = {
  folder: 'floreria', // Base folder in Cloudinary
  resource_type: 'image',
  type: 'upload',
  transformation: [
    {
      quality: 'auto:good',
      fetch_format: 'auto'
    }
  ],
  // Generate responsive breakpoints
  responsive_breakpoints: {
    create_derived: true,
    bytes_step: 20000,
    min_width: 300,
    max_width: 1200,
    max_images: 4
  }
};

/**
 * Sleep function for rate limiting
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Upload a single image to Cloudinary
 */
async function uploadImage(imagePath, publicId, retries = 3) {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      ...UPLOAD_OPTIONS,
      public_id: publicId,
      use_filename: false
    });
    
    return {
      success: true,
      publicId: result.public_id,
      url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes
    };
  } catch (error) {
    if (retries > 0) {
      console.warn(`   ⚠️  Upload failed, retrying... (${retries} attempts left)`);
      await sleep(2000); // Wait 2 seconds before retry
      return uploadImage(imagePath, publicId, retries - 1);
    }
    
    // Log the actual error for debugging
    console.error(`\n   ❌ Error details: ${error.message}`);
    if (error.http_code) {
      console.error(`   HTTP Code: ${error.http_code}`);
    }
    
    return {
      success: false,
      error: error.message,
      errorDetails: {
        message: error.message,
        http_code: error.http_code,
        name: error.name
      }
    };
  }
}

/**
 * Main upload function
 */
async function uploadToCloudinary() {
  console.log('☁️  Starting Cloudinary upload...\n');
  
  // Load inventory
  if (!fs.existsSync(INVENTORY_PATH)) {
    console.error('❌ Inventory file not found. Run auditImages.js first.');
    process.exit(1);
  }
  
  const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf-8'));
  
  const uploadResults = {
    timestamp: new Date().toISOString(),
    cloudinary: {
      cloud_name: cloudinary.config().cloud_name
    },
    categories: {},
    summary: {
      totalImages: 0,
      successCount: 0,
      failureCount: 0,
      totalBytes: 0
    },
    errors: []
  };
  
  // Upload each category
  for (const [categorySlug, categoryData] of Object.entries(inventory.categories)) {
    console.log(`\n📤 Uploading: ${categoryData.name} (${categoryData.images.length} images)`);
    console.log('─'.repeat(50));
    
    uploadResults.categories[categorySlug] = {
      name: categoryData.name,
      images: [],
      successCount: 0,
      failureCount: 0
    };
    
    for (let i = 0; i < categoryData.images.length; i++) {
      const image = categoryData.images[i];
      
      // Generate Cloudinary public_id
      // Format: floreria/category/subcategory/filename (without extension)
      const relativeParts = image.relativePath.split(path.sep);
      const filename = path.parse(image.filename).name; // Remove extension
      
      // Build public_id path
      const publicIdParts = [categorySlug];
      if (relativeParts.length > 1) {
        // Include subdirectory (subcategory)
        publicIdParts.push(...relativeParts.slice(0, -1));
      }
      publicIdParts.push(filename);
      
      const publicId = publicIdParts.join('/');
      
      process.stdout.write(`   [${i + 1}/${categoryData.images.length}] Uploading ${image.filename}... `);
      
      const result = await uploadImage(image.path, publicId);
      
      if (result.success) {
        console.log('✓');
        uploadResults.categories[categorySlug].images.push({
          originalPath: image.relativePath,
          filename: image.filename,
          publicId: result.publicId,
          url: result.url,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes
        });
        uploadResults.categories[categorySlug].successCount++;
        uploadResults.summary.successCount++;
        uploadResults.summary.totalBytes += result.bytes;
      } else {
        console.log('✗');
        uploadResults.categories[categorySlug].failureCount++;
        uploadResults.summary.failureCount++;
        uploadResults.errors.push({
          category: categorySlug,
          image: image.filename,
          error: result.error
        });
      }
      
      uploadResults.summary.totalImages++;
      
      // Rate limiting - pause between uploads
      await sleep(100);
    }
    
    console.log(`✓ ${uploadResults.categories[categorySlug].successCount} uploaded, ${uploadResults.categories[categorySlug].failureCount} failed`);
  }
  
  // Save results
  const resultsFile = path.join(OUTPUT_PATH, 'uploadResults.json');
  fs.writeFileSync(resultsFile, JSON.stringify(uploadResults, null, 2));
  
  // Save errors separately if any
  if (uploadResults.errors.length > 0) {
    const errorsFile = path.join(OUTPUT_PATH, 'uploadErrors.json');
    fs.writeFileSync(errorsFile, JSON.stringify(uploadResults.errors, null, 2));
  }
  
  // Print summary
  console.log('\n\n📊 Upload Summary:');
  console.log('═'.repeat(50));
  console.log(`Total Images: ${uploadResults.summary.totalImages}`);
  console.log(`✓ Successful: ${uploadResults.summary.successCount}`);
  console.log(`✗ Failed: ${uploadResults.summary.failureCount}`);
  console.log(`Total Size: ${(uploadResults.summary.totalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log('═'.repeat(50));
  console.log(`\n✅ Results saved to: ${resultsFile}`);
  
  if (uploadResults.errors.length > 0) {
    console.log(`⚠️  Errors logged to: ${path.join(OUTPUT_PATH, 'uploadErrors.json')}`);
  }
  
  console.log('\n');
}

// Run upload
uploadToCloudinary().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
