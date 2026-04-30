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
│   └── nav.ts               # Lista de enlaces de navegación
└── components/
    ├── Button/              # Botón reutilizable (variantes: primary / text)
    ├── Footer/              # Pie de página con contacto y redes sociales
    ├── Hero/                # Sección principal (título, descripción, imagen)
    ├── Navbar/              # Barra de navegación responsiva con menú hamburguesa
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

## Estilos

Cada componente usa **CSS Modules** (`.module.css`) para evitar colisiones de clases. Los estilos globales (fuentes, reset, variables de color) se definen en `src/index.css`.
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
