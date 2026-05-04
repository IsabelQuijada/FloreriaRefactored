# Florería Valeria - React Migration

Complete migration from HTML/CSS to React + TypeScript with Cloudinary image hosting.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Cloudinary

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Cloudinary cloud name to `.env`:
   ```
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   ```

### 3. Migrate Images to Cloudinary

Navigate to the scripts folder and run the migration:

```bash
cd scripts
npm install
```

Edit `uploadToCloudinary.js` and add your Cloudinary credentials:
```javascript
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});
```

Run the migration:
```bash
npm run migrate
```

This will:
- Audit all images in `FloreriaValeriaCocula/assets/`
- Upload to Cloudinary with automatic optimization
- Generate `migration-data/uploadResults.json` with image mappings

### 4. Start Development Server

```bash
cd ..
npm run dev
```

Visit `http://localhost:5173`

## 📁 Project Structure

```
FloreriaRefactored/
├── src/
│   ├── components/
│   │   ├── CategoryFilter/      # Subcategory filter buttons
│   │   ├── Favoritas/            # Homepage favorites carousel
│   │   ├── Footer/               # Site footer
│   │   ├── Hero/                 # Homepage hero section
│   │   ├── Navbar/               # Navigation bar
│   │   ├── Ocasiones/            # Occasions grid (updated with links)
│   │   ├── ProductGrid/          # Products grid layout
│   │   └── ...
│   ├── constants/
│   │   ├── categories.ts         # ✅ Category & subcategory metadata
│   │   ├── occasions.ts          # Occasions for homepage
│   │   └── products.ts           # Favorites products
│   ├── pages/
│   │   └── ProductsPage/         # ✅ Main products page
│   ├── utils/
│   │   └── cloudinary.ts         # ✅ Cloudinary URL builder
│   ├── App.tsx                   # ✅ Updated with routing
│   └── main.tsx                  # ✅ Updated with BrowserRouter
├── scripts/
│   ├── auditImages.js            # ✅ Image inventory script
│   ├── uploadToCloudinary.js     # ✅ Cloudinary upload script
│   └── README.md                 # Scripts documentation
└── migration-data/               # Created after running migration
    ├── imageInventory.json       # Local image inventory
    └── uploadResults.json        # Cloudinary upload results
```

## 🎯 Current Implementation Status

### ✅ Completed
- [x] Migration scripts (audit & upload)
- [x] React Router setup
- [x] Category metadata constants
- [x] Cloudinary utilities
- [x] ProductsPage route with category filtering
- [x] CategoryFilter component
- [x] ProductGrid component (placeholder)
- [x] Updated Ocasiones with navigation links

### 🔄 Next Steps (After Cloudinary Migration)

1. **Generate Product Data** - Create `src/constants/productsData.ts` from `uploadResults.json`
2. **Implement ProductGrid** - Display actual products with Cloudinary images
3. **Add Lazy Loading** - Implement IntersectionObserver for images
4. **Enhance ProductCard** - Update to use Cloudinary with responsive images
5. **Update ProductModal** - Add prev/next navigation between products
6. **Performance Optimization** - Virtual scrolling, prefetching, memoization

## 📸 Image Migration Details

### Before Migration
```
FloreriaValeriaCocula/assets/
├── bodasDeEnsueno/           (~40 images)
├── bodasDeEnsueno-optimizada/
├── ramosElegantes/           (~16 images)
├── ramosElegantes-optimizada/
└── ... (8 categories × 2 versions = 16 folders)
```

**Total:** ~300+ images × 4 versions (normal PNG, normal WebP, optimized PNG, optimized WebP) = ~1200 files

### After Migration
```
Cloudinary: floreria/
├── bodas-de-ensueno/
│   ├── ramosNovia/
│   ├── arreglosCentrosDeMesa/
│   └── templo/
├── ramos-elegantes/
├── ramos-clasicos/
│   ├── ramo-estilizado/
│   ├── ramo-girasoles/
│   └── ...
└── ... (8 categories)
```

**Total:** ~300 images (WebP preferred) with automatic optimization

**Benefits:**
- 75% reduction in file count
- Automatic format optimization (WebP, AVIF when supported)
- Responsive image generation
- CDN delivery worldwide
- Local storage freed: ~240MB

## 🔗 Routing Structure

```
/                                    → HomePage (Hero, Favoritas, Ocasiones)
/productos/bodas-de-ensueno          → Products for Bodas
/productos/bodas-de-ensueno?filter=ramos-novia  → Filtered by subcategory
/productos/ramos-elegantes           → Products for Ramos Elegantes
/productos/cumpleanos                → Products for Cumpleaños
... (8 category routes total)
```

## 🎨 Category Mappings

| Spanish Name            | Slug                      | Subcategories                                    |
|------------------------|---------------------------|--------------------------------------------------|
| Bodas de Ensueño       | bodas-de-ensueno          | ramos-novia, arreglos-centros-mesa, templo       |
| Ramos Elegantes        | ramos-elegantes           | ramos-elegantes                                  |
| Ramos Clásicos         | ramos-clasicos            | ramo-estilizado, ramo-girasoles, ramo-mix, ...   |
| Cumpleaños             | cumpleanos                | arreglos-festivos                                |
| Quinceañera            | quinceanera               | ramos, centroDeMesa, templo                      |
| Celebraciones Especiales| celebraciones-especiales | canastas-florales, centros-de-mesa-festivos, ... |
| Eventos Religiosos     | eventos-religiosos        | arreglo-de-templo, bautizo, hermita              |
| Para Recordar y...     | galeria-funeraria         | coronas, cruces, cubre-caja, pie-caja-altar      |

## 🛠️ Development Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📦 Dependencies

### Production
- `react` + `react-dom` - UI framework
- `react-router-dom` - Client-side routing
- `react-icons` - Icon library

### Development
- `vite` - Build tool
- `typescript` - Type safety
- `eslint` - Code linting

## 🚧 Known TODOs

1. **Product Data Generation** - Script to convert uploadResults.json → productsData.ts
2. **Lazy Image Loading** - IntersectionObserver implementation
3. **Error Boundaries** - Add React error boundaries
4. **Loading States** - Skeleton screens for products
5. **SEO Optimization** - Meta tags per category
6. **Analytics** - Track page views and conversions
7. **Accessibility** - ARIA labels, keyboard navigation
8. **Tests** - Unit tests for components

## 📞 Contact

- WhatsApp: +52 333 555 8928
- Phone 1: 375 119 7812
- Phone 2: 332 202 3270

## 📄 License

Private - Florería Valeria Cocula
