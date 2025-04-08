import { proyectos } from '@/data/proyectos/Proyectos';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io';
// id: number;
//   nombre: string;
//   descripcion: string;
//   tecnologias: string[];
//   github: string;
//   web?: string;
export const ProyectosGrid = () => {
  const proyectosPorId = proyectos.sort((a, b) => a.id - b.id);

  return (
    <>
      <div className='flex flex-col m-auto gap-4 md:gap-8 w-full md:w-[80%]'>
        {proyectosPorId.map(
          ({ id, nombre, descripcion, tecnologias, github, web }) => (
            <div
              className='border-s-blue-200 border-e-gray-300/60 border-e rounded-md border-s p-2'
              key={id}
            >
              <div className='flex flex-col text-center md:flex-row justify-between pb-2'>
                <span className='text-md text-center md:text-xl ms-2'>
                  {nombre}
                </span>
                <Link
                  href={web || ''}
                  target='_blank'
                  className='m-2'
                >
                  <small className='text-gray-800 hover:text-gray-600'>
                    Ir a la página
                  </small>
                </Link>

                <Link href={github} target='_blank'>
                  <span className='flex flex-row justify-center'>
                    <small className='mt-2 me-1 hover:underline hidden md:block'>
                      Github
                    </small>
                    <IoLogoGithub size={30} className='' />
                  </span>
                </Link>
              </div>
              <div className='text-center flex  flex-col gap-4 mt-2 text-sm font-semibold p-1'>
                <div className='text-gray-700'>{descripcion}</div>
                <div className='flex flex-row justify-center gap-3'>
                  <div className='text-gray-900'>Tecnologias: </div>
                  <div className='text-gray-800'>
                    {tecnologias.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ProyectosGrid;
