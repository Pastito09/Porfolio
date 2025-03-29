import { DescripcionEmpleos } from '../ui/descripcion-empleos/DescripcionEmpleos';
import { Titulo } from '../ui/titulo/Titulo';

interface PropsExperienciaLaboral {
  fecha: string;
  lugar: string;
  titulo: string;
  empleador: string;
  descripcion: string;
  web?: string | undefined;
}

const experienciasLaborales: PropsExperienciaLaboral[] = [
  {
    fecha: '10/2024',
    lugar: 'Almagro, Ciudad Autónoma de Buenos Aires, Argentina.',
    titulo: 'Desarrollador Frontend',
    empleador: 'DeEspacios Centro Terapéutico',
    descripcion:
      'Desarrollo de página web interactiva y responsiva. Implementación de interfaces visuales siguiendo principios de diseño responsivo y accesible, garantizando que la página se vea bien en todos los dispositivos. Utilización de tecnologías web modernas como HTML, CSS, JavaScript, y frameworks/librerías como React.js y Next.js para crear componentes interactivos y dinámicos. Mejora del rendimiento de la página mediante técnicas como la carga diferida de imágenes, minimización de recursos y optimización de tiempos de carga. Realización de pruebas en diferentes navegadores y dispositivos para garantizar la compatibilidad y corregir errores de funcionalidad.',
    web: 'https://www.deespacios.com.ar',
  },
  {
    fecha: '12/2014 - 12/2021',
    lugar: 'Ezeiza, Provincia de Buenos Aires, Argentina.',
    titulo: 'Agente de tráfico aeroportuário',
    empleador: 'CrossRacer S.A.',
    descripcion:
      'Coordinación y control del flujo de pasajeros y aeronaves en tierra, asistencia a pilotos y tripulación, gestión eficiente de embarque y desembarque, y supervisión de seguridad operativa. Interacción con distintos sectores aeroportuarios para garantizar el cumplimiento de procedimientos y normativas. Capacidad para resolver incidencias bajo presión y gestionar situaciones de estrés, asegurando la continuidad y eficiencia de las operaciones.',
  },
  {
    fecha: '01/2006 - 12/2014',
    lugar: 'Almirante Brown, Provincia de Buenos Aires, Argentina.',
    titulo: 'Atención al público',
    empleador: 'Receptoría Adrogué',
    descripcion:
      'Diseño y armado de avisos destacados. Venta de pauta publicitaria en cuerpo principal del diario, suplementos y diarios zonales. Venta de pasajes de micros de larga y corta distancia con Plataforma10. Cobros, manejos de caja y cierres de Pago Fácil. Destreza en comunicación, ventas y gestión de múltiples tareas en entornos dinámicos.',
  },
  // {
  //   fecha: '',
  //   lugar: '',
  //   titulo: '',
  //   empleador: '',
  //   descripcion: '',
  // },
];

export const MainContent = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-6 md:mt-10 sm:px-6 lg:px-8'>
      <Titulo
        title='Experiencia Laboral:'
        styles='text-3xl antialiased font-semibold mb-8 text-yellow-900/75 ms-10 '
      />

      <div className=''>
        {experienciasLaborales.map(
          ({ fecha, lugar, titulo, empleador, descripcion, web }) => (
            <div
              className='mt-4 border-b rounded border-gray-200 flex flex-col pb-2 md:grid-cols-6 md:grid '
              key={descripcion}
            >
              <DescripcionEmpleos
                fecha={fecha}
                lugar={lugar}
                titulo={titulo}
                empleador={empleador}
                descripcion={descripcion}
                web={web}
              />
            </div>
          )
        )}
      </div>
      <Titulo
        title={'Idiomas:'}
        styles='text-3xl mt-5 text-center md:text-start mb-4 md:mb-0 antialiased font-semibold text-yellow-900/75 ms-10'
      />
      <div className='border-b rounded border-gray-200 flex flex-col pb-2 md:grid-cols-6 md:grid '>
        <div className='col-span-1 font-semibold antialiased text-gray-800 text-center mb-2 md:mb-0'>
          <span className=''></span>
        </div>
        <div className='col-span-5 ms-4 text-center antialiased'>
          <div className='grid grid-cols-6 '>
            <div className='flex flex-col me-4 ms-1 gap-2 mt-1 md:mt-0 items-center'>
              <span className='font-semibold antialiased text-lg text-gray-500 '>
                Inglés
              </span>
              <span className='font-semibold antialiased text-sm text-gray-500'>
                Profesional
              </span>
            </div>
            <div className='ms-6 col-span-5'>
              <span className='text-center antialiased text-gray-700 text-base'>
                Más de 7 años de experiencia utilizando el idioma
                inglés en el Aeropuerto Internacional, interactuando
                con pasajeros, tripulación y personal de diversas
                nacionalidades. Habilidades avanzadas en comunicación
                oral y escrita, resolución de consultas y manejo de
                situaciones en un entorno dinámico y multicultural.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
