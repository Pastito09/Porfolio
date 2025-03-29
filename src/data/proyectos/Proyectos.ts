interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  github: string;
  web?: string;
}

export const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: `Tienda de Ropa "Teslo | Shop"`,
    descripcion:
      'Desarrollo de una tienda de ropa con Next.js, autenticación de usuarios con roles, gestión de productos, carrito de compras, pagos con PayPal y base de datos para almacenar información, asegurando seguridad y rendimiento.',
    tecnologias: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Docker',
      'Node.js',
      'Express',
      'PayPal',
      'NextAuth',
      'Prisma',
    ],

    github: 'https://github.com/Pastito09/Tienda-de-Ropa',
    web: 'https://tienda-ropa-udemy-pato-hogan.vercel.app',
  },
  {
    id: 3,
    nombre: 'Agenda Cultural',
    descripcion:
      'Aplicación web para gestionar eventos culturales, con registro de usuarios, creación de eventos y visualización de la agenda.',
    tecnologias: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',

      'Prisma',
      'Tailwind CSS',
      'Server Actions',
      'NextAuth',
    ],
    github: 'https://github.com/Pastito09/Calendario-cultural',
    web: 'https://calendario-cultural.vercel.app',
  },

  {
    id: 4,
    nombre: 'Amania Bio Arquitectura',
    descripcion:
      'Página web para el estudio de arquitectura Amania, de Amancay, Cordoba. Con un diseño moderno y atractivo, que destaca sus proyectos y servicios. La web es completamente responsiva y se adapta a cualquier dispositivo.',
    tecnologias: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Tailwind CSS',
      'Zustand',
      'Swiper',
      'Headless UI',
    ],
    github: 'https://github.com/Pastito09/Amania-BioArquitectura',
    web: 'https://amania-bio-arquitectura.vercel.app',
  },
  {
    id: 2,
    nombre: 'Mapa interactivo',
    descripcion:
      'App web de mapas que obtiene tu ubicación como referencia, incluye un buscador con sugerencias de direcciones y genera una ruta desde tu ubicación hasta el destino seleccionado.',
    tecnologias: ['React.js', 'Axios', 'TypeScript', 'Mapbox-gl'],
    github: 'https://github.com/Pastito09/Aplicacion-Mapa-React',
    web: 'https://react-mapapp-patriciozienkahogan.netlify.app',
  },
  {
    id: 5,
    nombre: 'Gif Expert App',
    descripcion:
      'App donde mediante un buscador retorna 10 .gif relacionados a tu busqueda',
    tecnologias: ['React.js'],
    github: 'https://github.com/Pastito09/react-gif-expert',
    web: 'https://gifsearch-pato-hogan.netlify.app',
  },
];
