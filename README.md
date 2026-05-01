# Florería Valeria — Sitio Web

Sitio web de presentación para **Florería Valeria**, construido con React, TypeScript y Vite. Muestra el catálogo de la floristería, información de contacto y redes sociales con una interfaz elegante y responsiva.

---

## Tecnologías

| Herramienta | Versión |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| react-icons | 5 |

---

## Estructura del proyecto

```
src/
├── App.tsx                  # Componente raíz (Navbar + Hero + Footer)
├── index.css                # Estilos globales
├── main.tsx                 # Punto de entrada
├── assets/                  # Imágenes estáticas (logo, bouquet)
├── constants/
│   ├── nav.ts               # Lista de enlaces de navegación
│   ├── occasions.ts         # Lista de ocasiones especiales
│   └── products.ts          # Lista de productos favoritos
└── components/
    ├── Button/              # Botón reutilizable (variantes: primary / text)
    ├── Cta/                 # Ribbon de llamada a la acción
    ├── Favoritas/           # Galería de productos favoritos
    ├── Footer/              # Pie de página con contacto y redes sociales
    ├── Hero/                # Sección principal (título, descripción, imagen)
    ├── Navbar/              # Barra de navegación responsiva con menú hamburguesa
    ├── Ocasiones/           # Grid de ocasiones especiales
    └── Petals/              # Animación decorativa de pétalos flotantes
```

---

## Componentes

### `Navbar`
Barra de navegación fija en la parte superior. Incluye:
- **Ribbon** superior con números de teléfono y enlace a WhatsApp.
- Logo e imagen de la floristería.
- **Links de navegación** en escritorio generados desde `NAV_LINKS`.
- Íconos de redes sociales (Facebook, Instagram).
- **Menú hamburguesa** en móvil/tablet que se cierra automáticamente al volver a escritorio.

### `Hero`
Sección principal de la página. Incluye:
- Título y tagline de la marca.
- Descripción de los servicios.
- Dos botones de acción: **Ver catálogo** y **Saber más**.
- Imagen del arreglo floral destacado.
- Componente `Petals` como fondo animado.
- **Altura**: Ocupa 60% de la altura de la ventana (60vh).

### `Favoritas`
Galería de productos favoritos de la floristería:
- Grid responsivo de tarjetas de productos.
- Cada tarjeta muestra imagen, título, precio y botón.
- Modal con detalles del producto al hacer clic.
- Fondo con gradiente rosa a crema para diferenciación visual.

### `Ocasiones`
Grid de ocasiones especiales para las que la floristería ofrece servicios:
- Grid responsivo (4 columnas en desktop, 2 en tablet, 1 en móvil).
- 8 categorías: Ramos Elegantes, Ramos Clásicos, Bodas, Cumpleaños, Quinceañera, Celebraciones, Eventos Religiosos, Recordatorios.
- Tarjetas con imagen de fondo, overlay oscuro y botón "VER GALERÍA".
- Fondo blanco para contrastar con la sección de Favoritas.
- Hover effect con elevación y sombra rosa.

### `Cta`
Ribbon minimalista de llamada a la acción entre el contenido principal y el footer:
- **Título**: "Seremos tus cómplices" con mensaje inspirador.
- **Subtítulo**: Mensaje en una sola línea para máxima claridad.
- **Botón CTA elegante**: "CONTÁCTANOS" rosa con hover sutil.
- **Fondo cálido claro**: Usa `--bg-warm` para transición suave hacia el footer rosa.
- **Bordes sutiles**: Líneas superior e inferior para delimitar el área sin dominar.
- **Overlay decorativo**: Degradado radial muy sutil para textura visual.
- Diseño compacto y refinado que respeta la jerarquía visual.
- Mensaje conciso y directo sin información redundante.

### `Footer`
Pie de página con tres columnas de información:
- **Información**: links de navegación (desde `NAV_LINKS`).
- **Sobre Nosotros**: links institucionales.
- **Contacto**: teléfonos y acceso a WhatsApp.
- **Síguenos**: íconos de redes sociales.

### `Button`
Botón genérico reutilizable.

| Prop | Tipo | Descripción |
|---|---|---|
| `label` | `string` | Texto del botón |
| `variant` | `'primary' \| 'text'` | Estilo visual (por defecto: `'primary'`) |
| `onClick` | `() => void` | Manejador de clic opcional |

### `Petals`
Animación CSS de 17 pétalos flotantes que caen por la pantalla. Cada pétalo tiene posición, tamaño, duración y retraso de animación únicos, configurados mediante el arreglo `PETALS`.

---

## Constantes

### `src/constants/nav.ts`
```ts
export const NAV_LINKS = ['Favoritas', 'Ocasiones', 'Nosotros', 'Contacto'] as const;
```
Array de enlaces compartido entre `Navbar` y `Footer`.

### `src/constants/occasions.ts`
Define las 8 ocasiones especiales mostradas en la sección `Ocasiones`:
```ts
export interface Occasion {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}
```
Cada ocasión incluye título, subtítulo e imagen representativa de Unsplash.

### `src/constants/products.ts`
Define los productos favoritos mostrados en la sección `Favoritas` con nombre, precio, descripción e imagen.

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview

# Lint
npm run lint
```

---


## Estilos y paleta de colores

Cada componente usa **CSS Modules** (`.module.css`) para evitar colisiones de clases. Los estilos globales (fuentes, reset, variables de color) se definen en `src/index.css`.

### Paleta principal (2026)

| Variable        | Color     | Hex      | Uso principal                |
|----------------|-----------|----------|------------------------------|
| `--brand`      | Rosa      | #d64d7a  | Botones, títulos, acentos    |
| `--brand-dark` | Frambuesa | #b03468  | Hover, variantes oscuras     |
| `--accent`     | Coral     | #f4a678  | Detalles, tagline, iconos    |
| `--bg-ribbon`  | Rosa claro| #fce4ec  | Fondo de secciones y footer  |
| `--bg-cream`   | Crema     | #f0e8e5  | Fondo secundario             |
| `--bg-warm`    | Blanco cálido | #fffaf7 | Fondo general                |
| `--pink-mid`   | Rosa medio| #e8b4b8  | Bordes, detalles sutiles     |

### Ejemplo de uso

- El **footer** usa `--bg-ribbon` (rosa claro) para un cierre cálido y acogedor.
- La sección de **Favoritas** tiene un gradiente de rosa a crema (`--bg-ribbon` → `--bg-cream` → `--white`).
- La sección de **Ocasiones** usa fondo blanco puro (`--white`) para contrastar con Favoritas.
- El **ribbon CTA** usa `--bg-warm` (blanco cálido) para transición suave hacia el footer rosa.
- Los botones principales usan `--brand` y `--brand-dark`.
- Los títulos y tagline usan `--brand` y `--accent`.
- El **Hero** ocupa el 60% de la altura de la ventana (60vh) para mejor balance visual.
- Los hover effects usan sombras con color rosa (`rgba(214, 77, 122, 0.2)`).

Puedes modificar la paleta en `src/index.css` para adaptar la identidad visual.
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
