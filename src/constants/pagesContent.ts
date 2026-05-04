export type AboutValue = {
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
};

export type AboutTeamMember = {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export type ContactQuickItem = {
  title: string;
  value: string;
  href: string;
  iconUrl: string;
  iconAlt: string;
  kind: 'phone' | 'whatsapp' | 'schedule';
};

export type Branch = {
  name: string;
  tag: string;
  addressLines: string[];
  mapEmbedUrl: string;
  mapsUrl: string;
};

export type ContactInfoCard = {
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
};

export const ABOUT_PAGE_CONTENT = {
  heroTitle: 'NUESTRA HISTORIA',
  heroSubtitle: 'Mas de dos decadas creando momentos inolvidables',
  sectionTitle: 'La Historia de Floreria Valeria',
  intro:
    'En el corazon de Cocula, Jalisco, nuestra historia comenzo en el ano 2000, movida por el carino a las flores y a nuestra gente. Aidee Camacho, con el apoyo de su familia y muchas ganas de compartir belleza, abrio las puertas de Floreria Valeria.',
  paragraphs: [
    'Empezamos en un pequeno local del centro, donde cada arreglo se hacia con dedicacion y mucho amor. Pronto, nuestros clientes se volvieron amigos, y sus historias y celebraciones tambien fueron parte de la nuestra.',
    'Con el tiempo, la floreria fue creciendo, pero nunca perdimos ese trato cercano y familiar. Cada ramo y cada arreglo lleva un pedacito de nosotros, acompanando bodas, quinceaneras, aniversarios, despedidas y muchos momentos importantes de la vida.',
    'Hoy, mas de 20 anos despues, Floreria Valeria sigue siendo un negocio familiar y parte de la comunidad. Seguimos trabajando con el mismo carino y compromiso, agradecidos de ser parte de tantos recuerdos y celebraciones.',
  ],
  imageUrl:
    '/src/assets/testtes.jpeg',
  imageAlt: 'Floreria Valeria - Fundadora',
  valuesTitle: 'Nuestros Valores',
} as const;

export const ABOUT_VALUES: AboutValue[] = [
  {
    title: 'Pasion',
    description:
      'Cada arreglo floral es creado con amor y dedicacion, reflejando la pasion que sentimos por nuestro arte.',
    iconUrl: '/src/assets/pasion.png',
    iconAlt: 'Pasion',
  },
  {
    title: 'Calidad',
    description:
      'Seleccionamos cuidadosamente las mejores flores para garantizar la frescura y belleza de cada creacion.',
    iconUrl: '/src/assets/calidad.png',
    iconAlt: 'Calidad',
  },
  {
    title: 'Confianza',
    description:
      'Mas de 20 anos de experiencia nos respaldan como la floreria de confianza en Cocula y sus alrededores.',
    iconUrl: '/src/assets/confianza.png',
    iconAlt: 'Confianza',
  },
  {
    title: 'Tradicion',
    description:
      'Honramos las tradiciones florales mexicanas mientras incorporamos tecnicas y estilos contemporaneos.',
    iconUrl: '/src/assets/tradicion.png',
    iconAlt: 'Tradicion',
  },
];

export const ABOUT_TEAM = {
  title: 'Nuestro Equipo',
  intro:
    'Detras de cada arreglo floral hay un equipo de artistas apasionados por su trabajo, comprometidos con brindar la mejor experiencia a nuestros clientes.',
} as const;

export const ABOUT_TEAM_MEMBERS: AboutTeamMember[] = [
  {
    name: 'Aidee Camacho',
    role: 'Fundadora y Disenadora Principal',
    description:
      'Con mas de 20 anos de experiencia, Aidee sigue siendo el corazon creativo de la floreria.',
    imageUrl:
     '/src/assets/perfilPicture.png',
    imageAlt: 'Aidee Camacho',
  },
  {
    name: 'Nuestro Equipo',
    role: 'Artistas Florales',
    description:
      'Un equipo comprometido con la excelencia y la atencion personalizada en cada proyecto.',
    imageUrl:
      '/src/assets/perfilPicture.jpeg',
    imageAlt: 'Equipo',
  },
];

export const CONTACT_PAGE_CONTENT = {
  heroTitle: 'CONTÁCTANOS',
  heroSubtitle:
    'Cuéntanos cómo imaginas tu evento y nosotros lo haremos realidad.',
  branchesTitle: 'Nuestras Sucursales',
} as const;

export const CONTACT_QUICK_ITEMS: ContactQuickItem[] = [
  {
    title: 'Telefonos',
    value: '37 51 19 78 12 / 33 22 02 32 70',
    href: 'tel:3751197812',
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/126/126509.png',
    iconAlt: 'Telefono',
    kind: 'phone',
  },
  {
    title: 'WhatsApp',
    value: '33 35 55 89 28',
    href: 'https://wa.me/523335558928?text=Hola,%20me%20interesan%20sus%20flores',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
    iconAlt: 'WhatsApp',
    kind: 'whatsapp',
  },
  {
    title: 'Horarios',
    value: 'Lun - Dom: 9:00 AM - 8:00 PM',
    href: '#',
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/2088/2088617.png',
    iconAlt: 'Horarios',
    kind: 'schedule',
  },
];

export const CONTACT_BRANCHES: Branch[] = [
  {
    name: 'Sucursal Centro',
    tag: 'Principal',
    addressLines: ['5 de Mayo 59,', 'Col. Centro, Cocula, Jal., Mexico', 'C.P. 48500'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.4567824529895!2d-103.9995!3d20.4591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5c3c5c3c5c3d%3A0x2b2b2b2b2b2b2b2b!2s5%20de%20Mayo%2059%2C%20Centro%2C%2048500%20Cocula%2C%20Jal.!5e0!3m2!1ses!2smx!4v1700000000001!5m2!1ses!2smx',
    mapsUrl: 'https://maps.google.com/?q=5+de+Mayo+59,+Cocula,+Jalisco',
  },
  {
    name: 'Sucursal Ocampo',
    tag: 'Sucursal',
    addressLines: ['Ocampo 35,', 'Col. Centro, Cocula, Jal., Mexico', 'C.P. 48500'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.4567824529895!2d-103.99892938507397!3d20.458925086378775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5c3c5c3c5c3d%3A0x1a1a1a1a1a1a1a1a!2sOcampo%2035%2C%20Centro%2C%2048500%20Cocula%2C%20Jal.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx',
    mapsUrl: 'https://maps.google.com/?q=Ocampo+35,+Cocula,+Jalisco',
  },
];

export const CONTACT_INFO_CARDS: ContactInfoCard[] = [
  {
    title: 'Envio a Domicilio',
    description:
      'Entregamos en todo el municipio de Cocula con el cuidado que tus flores merecen. Horarios de entrega: Lun - Dom: 09:00 AM - 06:00 PM. Costo adicional por envio.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/2769/2769339.png',
    iconAlt: 'Envio',
  },
  {
    title: 'Metodos de Pago',
    description: 'Aceptamos efectivo y transferencias bancarias. Expedimos factura si la requieres.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/1170/1170576.png',
    iconAlt: 'Pago',
  },
  {
    title: 'Atencion Personalizada',
    description: 'Nuestro equipo te ayudara a crear el arreglo perfecto para cada ocasion especial.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    iconAlt: 'Atencion',
  },
];
