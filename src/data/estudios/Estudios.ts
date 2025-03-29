interface Estudio {
  id: number;
  nombre: string;
  url: string;
  imagen: string;
  institucion: string;
  descripcion: string;
}

export const estudios: Estudio[] = [
  {
    id: 6,
    nombre: 'Responsive Web Design',
    url:
      'https://www.freecodecamp.org/certification/Pastito09/responsive-web-design',
    imagen: '/freeCodeCamp.png',
    institucion: 'FreeCodeCamp',
    descripcion: 'HTML, CSS, web-responsive.',
  },
  {
    id: 5,
    nombre: 'JavaScript Algorithms and Data Structures',
    url:
      'https://www.freecodecamp.org/certification/Pastito09/javascript-algorithms-and-data-structures',
    imagen: '/freeCodeCamp.png',
    institucion: 'FreeCodeCamp',
    descripcion:
      'Fundamentos de JavaScript: Variables, arreglos, objetos, loops, funciones. POO y FP.',
  },
  {
    id: 2,
    nombre: 'The Joy of React',
    url:
      'https://courses.joshwcomeau.com/certificate/66155624a405b64af03ff60f',
    imagen: '/joyOfReact.png',
    institucion: 'Joshua Comeau',
    descripcion:
      'Fundamentos de React, componentes, props, iteraciones, manejador de eventos, useState, forms, React Hooks, useEffect, useMemo, useCallback, useReducer, NextJs.',
  },
  {
    id: 1,
    nombre: 'Next.js: El framework de React para producción',
    url:
      'https://www.udemy.com/certificate/UC-4a2c3790-73c3-4c6d-9a56-7cb9c23a7601/',
    imagen: '/udemy.jpg',
    institucion: 'Udemy',
    descripcion:
      'SSR, SSG, CSR, ISR, Middlewares, Rutas dinámicas, Next API, Next Auth, Material UI, despliegues, Cookies y más.',
  },
  {
    id: 4,
    nombre: 'React: De cero a experto ( Hooks y MERN )',
    url: 'https://www.udemy.com/course/react-cero-experto/',
    imagen: '/udemy.jpg',
    institucion: 'Udemy',
    descripcion:
      'Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers.',
  },
  {
    id: 3,
    nombre: 'React PRO: Lleva tus bases al siguiente nivel',
    url: 'https://www.udemy.com/course/react-pro/',
    imagen: '/udemy.jpg',
    institucion: 'Udemy',
    descripcion:
      'Storybook, Github Actions, publicar NPM, TypeScript, patrones de componentes, PWA, Formik, formularios dinámicos.',
  },
];
