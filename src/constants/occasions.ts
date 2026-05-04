export interface Occasion {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  categorySlug: string;
}

const ramosElegantesImage = new URL('../assets/ramosElegantes.jpeg', import.meta.url).href;
const ramosClasicosImage = new URL('../assets/ramosClasicos.avif', import.meta.url).href;
const bodasDeEnsuenoImage = new URL('../assets/bodasDeEnsueno.jpeg', import.meta.url).href;
const cumpleanosImage = new URL('../assets/cumpleanos.avif', import.meta.url).href;
const quinceaneraImage = new URL('../assets/quinceanera.avif', import.meta.url).href;
const celebracionesEspecialesImage = new URL(
  '../assets/celebracionesEspeciales.avif',
  import.meta.url
).href;
const eventosReligiososImage = new URL('../assets/eventosReligiosos.avif', import.meta.url).href;
const paraRecordarYHonrarImage = new URL('../assets/paraRecordarYHonrar.avif', import.meta.url).href;

export const OCCASIONS: Occasion[] = [
  {
    id: 1,
    title: 'RAMOS ELEGANTES',
    subtitle: 'Elegancia floral exclusiva',
    image: ramosElegantesImage,
    categorySlug: 'ramos-elegantes'
  },
  {
    id: 2,
    title: 'RAMOS CLÁSICOS',
    subtitle: 'Tradición y belleza atemporal',
    image: ramosClasicosImage,
    categorySlug: 'ramos-clasicos'
  },
  {
    id: 3,
    title: 'BODAS DE ENSUEÑO',
    subtitle: 'Tu día perfecto merece flores únicas',
    image: bodasDeEnsuenoImage,
    categorySlug: 'bodas-de-ensueno'
  },
  {
    id: 4,
    title: 'CUMPLEAÑOS',
    subtitle: 'Celebra cada año con flores',
    image: cumpleanosImage,
    categorySlug: 'cumpleanos'
  },
  {
    id: 5,
    title: 'QUINCEAÑERA',
    subtitle: 'Un momento mágico e inolvidable',
    image: quinceaneraImage,
    categorySlug: 'quinceanera'
  },
  {
    id: 6,
    title: 'CELEBRACIONES ESPECIALES',
    subtitle: 'Para momentos únicos y especiales',
    image: celebracionesEspecialesImage,
    categorySlug: 'celebraciones-especiales'
  },
  {
    id: 7,
    title: 'EVENTOS RELIGIOSOS',
    subtitle: 'Flores con significado espiritual',
    image: eventosReligiososImage,
    categorySlug: 'eventos-religiosos'
  },
  {
    id: 8,
    title: 'PARA RECORDAR Y DESPEDIR',
    subtitle: 'Un último homenaje con amor',
    image: paraRecordarYHonrarImage,
    categorySlug: 'galeria-funeraria'
  }
];
