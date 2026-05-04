export interface Occasion {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  categorySlug: string;
}

export const OCCASIONS: Occasion[] = [
  {
    id: 1,
    title: 'RAMOS ELEGANTES',
    subtitle: 'Elegancia floral exclusiva',
    image: '/src/assets/ramosElegantes.jpeg',
    categorySlug: 'ramos-elegantes'
  },
  {
    id: 2,
    title: 'RAMOS CLÁSICOS',
    subtitle: 'Tradición y belleza atemporal',
    image: '/src/assets/ramosClasicos.avif',
    categorySlug: 'ramos-clasicos'
  },
  {
    id: 3,
    title: 'BODAS DE ENSUEÑO',
    subtitle: 'Tu día perfecto merece flores únicas',
    image: '/src/assets/bodasDeEnsueno.jpeg',
    categorySlug: 'bodas-de-ensueno'
  },
  {
    id: 4,
    title: 'CUMPLEAÑOS',
    subtitle: 'Celebra cada año con flores',
    image: '/src/assets/cumpleanos.avif',
    categorySlug: 'cumpleanos'
  },
  {
    id: 5,
    title: 'QUINCEAÑERA',
    subtitle: 'Un momento mágico e inolvidable',
    image: '/src/assets/quinceanera.avif',
    categorySlug: 'quinceanera'
  },
  {
    id: 6,
    title: 'CELEBRACIONES ESPECIALES',
    subtitle: 'Para momentos únicos y especiales',
    image: '/src/assets/celebracionesEspeciales.avif',
    categorySlug: 'celebraciones-especiales'
  },
  {
    id: 7,
    title: 'EVENTOS RELIGIOSOS',
    subtitle: 'Flores con significado espiritual',
    image: '/src/assets/eventosReligiosos.avif',
    categorySlug: 'eventos-religiosos'
  },
  {
    id: 8,
    title: 'PARA RECORDAR Y DESPEDIR',
    subtitle: 'Un último homenaje con amor',
    image: '/src/assets/paraRecordarYHonrar.avif',
    categorySlug: 'galeria-funeraria'
  }
];
