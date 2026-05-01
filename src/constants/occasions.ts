export interface Occasion {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export const OCCASIONS: Occasion[] = [
  {
    id: 1,
    title: 'RAMOS ELEGANTES',
    subtitle: 'Elegancia floral exclusiva',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=800&fit=crop'
  },
  {
    id: 2,
    title: 'RAMOS CLÁSICOS',
    subtitle: 'Tradición y belleza atemporal',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&h=800&fit=crop'
  },
  {
    id: 3,
    title: 'BODAS DE ENSUEÑO',
    subtitle: 'Tu día perfecto merece flores únicas',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop'
  },
  {
    id: 4,
    title: 'CUMPLEAÑOS',
    subtitle: 'Celebra cada año con flores',
    image: 'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=600&h=800&fit=crop'
  },
  {
    id: 5,
    title: 'QUINCEAÑERA',
    subtitle: 'Un momento mágico e inolvidable',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=800&fit=crop'
  },
  {
    id: 6,
    title: 'CELEBRACIONES ESPECIALES',
    subtitle: 'Para momentos únicos y especiales',
    image: 'https://images.unsplash.com/photo-1478146059904-0dfaa2f8d022?w=600&h=800&fit=crop'
  },
  {
    id: 7,
    title: 'EVENTOS RELIGIOSOS',
    subtitle: 'Flores con significado espiritual',
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&h=800&fit=crop'
  },
  {
    id: 8,
    title: 'PARA RECORDAR Y...',
    subtitle: 'Un último homenaje con amor',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=800&fit=crop'
  }
];
