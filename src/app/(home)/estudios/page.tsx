import StyleContainer from '@/components/ui/contenedor/StyleContainer';
import { Titulo } from '@/components/ui/titulo/Titulo';
import { estudios } from '@/data/estudios/Estudios';
import Image from 'next/image';
import Link from 'next/link';

export default function EstudiosPage() {
  const cursos = estudios.sort((a, b) => a.id - b.id);

  return (
    <StyleContainer>
      <Titulo
        title={'Estudios y certificaciones'}
        styles='text-4xl text-center border-b border-gray-200 pb-10 mt-5 md:mt-0 font-semibold antialiased'
      />
      <div className='flex flex-col w-full'>
        {cursos.map((curso) => (
          <Link href={curso.url} key={curso.id} target='_blank'>
            <div className='flex flex-col w-full p-4 shadow-sm  rounded-md mt-5'>
              <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-row gap-5'>
                  <h3 className='text-2xl text-gray-800 antialiased font-semibold'>
                    {curso.nombre}
                  </h3>

                  <p className='text-lg antialiased text-gray-600 ms-2 mt-1'>
                    ({curso.institucion})
                  </p>
                </div>

                <Image
                  src={curso.imagen}
                  width={70}
                  height={50}
                  alt='Logo de la institución educativa'
                  quality={100}
                  className='me-5 rounded-md hidden md:block'
                />
              </div>

              <p className='text-md antialiased mt-2 ms-2 text-gray-700'>
                {curso.descripcion}
              </p>
            </div>{' '}
          </Link>
        ))}
      </div>
    </StyleContainer>
  );
}
