import { DescripcionEmpleos } from '../ui/descripcion-empleos/DescripcionEmpleos';
import { Titulo } from '../ui/titulo/Titulo';

const experienciasLaborales = [
  {
    fecha: '10/2024',
    lugar: 'Almagro, Ciudad Autónoma de Buenos Aires, Argentina.',
    titulo: 'Desarrollador Frontend',
    empleador: 'DeEspacios Centro Terapéutico',
    descripcion:
      'Desarrollo de página web interactiva y responsiva. Implementación de interfaces visuales siguiendo principios de diseño responsivo y accesible, garantizando que la página se vea bien en todos los dispositivos. Utilización de tecnologías web modernas como HTML, CSS, JavaScript, y frameworks/librerías como React.js y Next.js para crear componentes interactivos y dinámicos. Mejora del rendimiento de la página mediante técnicas como la carga diferida de imágenes, minimización de recursos y optimización de tiempos de carga. Realización de pruebas en diferentes navegadores y dispositivos para garantizar la compatibilidad y corregir errores de funcionalidad.',
  },
  {
    fecha: '12/2014 - 12/2021',
    lugar: 'Ezeiza, Provincia de Buenos Aires, Argentina.',
    titulo: 'Aeroportuário',
    empleador: 'CrossRacer',
    descripcion:
      'Coordinación y control del flujo de pasajeros y aeronaves en tierra, asistencia a pilotos, gestión de embarque y desembarque, y supervisión de seguridad operativa en el aeropuerto',
  },
  {
    fecha: '01/2006 - 12/2014',
    lugar: 'Almirante Brown, Provincia de Buenos Aires, Argentina.',
    titulo: 'Atención al publico',
    empleador: 'Receptoría Adrogué',
    descripcion:
      'Diseño y armado de avisos destacados. Venta de pauta publicitaria en cuerpo principal del diario, suplementos y diarios zonales. Venta de pasajes de micros de larga y corta distancia con Plataforma10. Cobros, manejos de caja y cierres de Pago Fácil.',
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
        styles='text-3xl antialised font-semibold mb-8 text-yellow-900/75 ms-10 '
      />
      <div>
        <div className=''>
          {experienciasLaborales.map(
            ({ fecha, lugar, titulo, empleador, descripcion }) => (
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
                />
              </div>
            )
          )}

          {/* <div className='col-span-1 font-semibold text-gray-800 text-center'>
            <small>
              <div className='flex flex-col items-center'>
                12/2014 - 12/2021
              </div>
              <div className='px-1'>
                Ezeiza, Provincia de Buenos Aires, Argentina.
              </div>
            </small>
          </div>
          <div className='col-span-5 text-center'>
            <p className='text-lg text-gray-500'>
              <span className='font-semibold'>
                Desarrollador Frontend:
              </span>{' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas, quidem voluptas
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
