export interface Product {
  id: number;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  /** Replace with real product images. Currently using picsum placeholders. */
  image: string;
}

export const FAVORITES: Product[] = [
  {
    id: 1,
    name: 'Ramo Premium 1',
    category: 'RAMOS-ELEGANTES',
    shortDescription: 'Ramo premium elegante con flores selectas, perfectamente combinadas para cada momento.',
    description:
      'Ramo premium elegante con flores selectas, perfectamente combinadas para crear una composición sofisticada y única. Ideal para momentos especiales que merecen lo mejor.',
    image: 'https://picsum.photos/seed/floral-a/480/600',
  },
  {
    id: 2,
    name: 'Ramo de Girasoles',
    category: 'RAMOS-CLÁSICOS',
    shortDescription: 'Composición solar de girasoles que transmite calidez, optimismo y la alegría del día.',
    description:
      'Composición solar de girasoles que transmite calidez, optimismo y la alegría del día. Un regalo que ilumina cualquier ambiente y celebra la vida con su color vibrante y natural.',
    image: 'https://picsum.photos/seed/floral-b/480/600',
  },
  {
    id: 3,
    name: 'Ramo Premium 2',
    category: 'RAMOS-ELEGANTES',
    shortDescription: 'Arreglo floral exclusivo que combina belleza y elegancia en cada detalle.',
    description:
      'Arreglo floral exclusivo que combina belleza y elegancia en cada detalle, ideal para ocasiones especiales. Una mezcla armoniosa de rosas blancas y rosas rosadas con verdes complementarios.',
    image: 'https://picsum.photos/seed/floral-c/480/600',
  },
  {
    id: 4,
    name: 'Ramo Estilizado',
    category: 'RAMOS-CLÁSICOS',
    shortDescription: 'Creación estilizada que juega con alturas y volúmenes para lograr un arreglo arquitectónico.',
    description:
      'Creación estilizada que juega con alturas y volúmenes para lograr un arreglo arquitectónico único. Incorpora rosas crema, crisantemos y follaje selecto en una presentación sofisticada y moderna.',
    image: 'https://picsum.photos/seed/floral-d/480/600',
  },
  {
    id: 5,
    name: 'Bouquet Romántico',
    category: 'RAMOS-ELEGANTES',
    shortDescription: 'Bouquet diseñado para expresar amor con rosas rojas de primera selección y detalles en satín.',
    description:
      'Bouquet diseñado para expresar amor con rosas rojas de primera selección y delicados detalles en satín. La elección perfecta para aniversarios, cumpleaños y declaraciones de amor eterno.',
    image: 'https://picsum.photos/seed/floral-e/480/600',
  },
  {
    id: 6,
    name: 'Arreglo Pastel',
    category: 'ARREGLOS-ESPECIALES',
    shortDescription: 'Composición en tonos pastel con flores de temporada para alegrar cualquier espacio.',
    description:
      'Composición en tonos pastel con flores de temporada para alegrar cualquier espacio. Una paleta suave de rosas, peonías y flores silvestres que evoca ternura, delicadeza y un toque de primavera.',
    image: 'https://picsum.photos/seed/floral-f/480/600',
  },
  {
    id: 7,
    name: 'Ramo de Orquídeas',
    category: 'RAMOS-ELEGANTES',
    shortDescription: 'Elegante arreglo de orquídeas exóticas que transmite sofisticación y distinción.',
    description:
      'Elegante arreglo de orquídeas exóticas que transmite sofisticación y distinción. Cada flor es seleccionada cuidadosamente para garantizar la máxima frescura, garantizando un arreglo que perdura.',
    image: 'https://picsum.photos/seed/floral-g/480/600',
  },
  {
    id: 8,
    name: 'Caja de Rosas Eternas',
    category: 'ARREGLOS-ESPECIALES',
    shortDescription: 'Hermosas rosas preservadas en una caja elegante que conservan su belleza por años.',
    description:
      'Hermosas rosas preservadas en una caja elegante que conservan su belleza durante años sin perder su color ni textura. Un regalo eterno que simboliza un amor que no se marchita con el tiempo.',
    image: 'https://picsum.photos/seed/floral-h/480/600',
  },
  {
    id: 9,
    name: 'Ramo Silvestre',
    category: 'RAMOS-CLÁSICOS',
    shortDescription: 'Composición de flores silvestres con un toque natural, fresco y encantadoramente rústico.',
    description:
      'Composición de flores silvestres con un toque natural y fresco que evoca los campos en flor. Mezcla de margaritas, lavanda y flores de campo en una presentación rústica, espontánea y encantadora.',
    image: 'https://picsum.photos/seed/floral-i/480/600',
  },
  {
    id: 10,
    name: 'Arreglo de Peonías',
    category: 'RAMOS-ELEGANTES',
    shortDescription: 'Lujoso arreglo de peonías rosas con su inconfundible fragancia y volumen deslumbrante.',
    description:
      'Lujoso arreglo de peonías rosas con su inconfundible fragancia y volumen deslumbrante. Las peonías representan prosperidad y buena fortuna, haciendo de este arreglo un regalo lleno de significado.',
    image: 'https://picsum.photos/seed/floral-j/480/600',
  },
];
