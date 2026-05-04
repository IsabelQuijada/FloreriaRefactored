# Migration Scripts

Scripts for auditing and migrating images from FloreriaValeriaCocula to Cloudinary.

## Setup

1. Navigate to the scripts directory:
```bash
cd scripts
```

2. Install dependencies:
```bash
npm install
```

3. Configure Cloudinary credentials:

Set environment variables:
```bash
export CLOUDINARY_CLOUD_NAME="your_cloud_name"
export CLOUDINARY_API_KEY="your_api_key"
export CLOUDINARY_API_SECRET="your_api_secret"
```

Or edit `uploadToCloudinary.js` and update the configuration values.

## Usage

### 1. Audit Images

Scan the FloreriaValeriaCocula assets folder and generate an inventory:

```bash
npm run audit
```

This will:
- Scan all category folders
- Prefer WebP over PNG/JPG for same images
- Skip -optimizada folders (we only upload normal versions)
- Generate `migration-data/imageInventory.json`

### 2. Upload to Cloudinary

Upload all images to Cloudinary with automatic optimization:

```bash
npm run upload
```

This will:
- Upload images to `floreria/{category}/{subcategory}/` structure
- Apply automatic format and quality optimization
- Generate responsive breakpoints (300w, 768w, 1200w)
- Retry failed uploads 3 times
- Save results to `migration-data/uploadResults.json`

### 3. Full Migration

Run audit, upload, and generate product data:

```bash
npm run migrate
```

This will:
1. Audit local images
2. Upload to Cloudinary
3. Generate `src/constants/productsData.ts`

### 4. Generate Product Data Only

If you already uploaded images and just need to regenerate product data:

```bash
npm run generate
```

## Output Files

All output files are saved in `migration-data/`:

- `imageInventory.json` - Complete inventory of local images
- `uploadResults.json` - Mapping of original paths to Cloudinary URLs
- `uploadErrors.json` - List of failed uploads (if any)

## Cloudinary Folder Structure

Images will be organized as:

```
floreria/
  ├── bodas-de-ensueno/
  │   ├── ramosNovia/
  │   │   ├── ramo-novia1
  │   │   └── ramo-novia2
  │   ├── arreglosCentrosDeMesa/
  │   └── templo/
  ├── ramos-elegantes/
  ├── ramos-clasicos/
  │   ├── ramo-estilizado/
  │   ├── ramo-girasoles/
  │   └── ...
  └── ...
```

## Next Steps

After successful upload:

1. Use `uploadResults.json` to generate React constants
2. Implement Cloudinary URL builder in React app
3. Test image loading in development
4. Delete local image folders after verification
