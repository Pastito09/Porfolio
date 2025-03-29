import ProyectosGrid from '@/components/proyectos/ProyectosGrid';
import StyleContainer from '@/components/ui/contenedor/StyleContainer';
import { Titulo } from '@/components/ui/titulo/Titulo';
import Link from 'next/link';

export default function ProyectosPage() {
  return (
    <StyleContainer>
      <>
        <Titulo
          title='Proyectos'
          styles='text-4xl text-center border-b border-gray-200 pb-10 mt-5 md:mt-0 font-semibold antialiased'
        />
        <div className='flex flex-col mt-4 w-full '>
          <p className='text-md antialiased mt-2 ms-2 text-gray-700'>
            En esta sección puedes encontrar algunos de mis proyectos
            más destacados.
          </p>
          <p className='text-md antialiased mt-2 ms-2 text-gray-700'>
            O también, en mi{' '}
            <Link
              href={'https://github.com/Pastito09'}
              target='_black'
              className='underline hover:text-gray-500'
            >
              perfil de Github
            </Link>{' '}
            podes ver mas...
          </p>
          <div className='border-gray-200 border-b w-2/3 m-auto my-10' />
          <div className=''>
            <ProyectosGrid />
          </div>
        </div>
      </>
    </StyleContainer>
  );
}
