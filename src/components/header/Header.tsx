import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <header className='bg-white shadow-sm'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center'>
          <div>
            <h1 className='text-4xl text-center font-bold tracking-tight text-gray-900 mt-2 mb-4'>
              Patricio Augusto Zienka Hogan
            </h1>
            <div className='flex flex-col gap-1 ms-1'>
              <div>
                <span className='text-sm font-bold'>Dirección: </span>
                <span className='text-sm ms-2'>
                  Almagro, CABA. Buenos Aires, Argentina.
                </span>
              </div>
              <div>
                <span className='text-sm font-bold'>Email: </span>
                <span className='text-sm ms-8'>
                  <Link
                    href={'mailto:patriciozhogan@gmail.com'}
                    className='hover:underline cursor-pointer'
                  >
                    patriciozhogan@gmail.com
                  </Link>
                </span>
              </div>
              <div className='flex flex-row justify-between mt-2'>
                <div className='p-1 hover:bg-gray-100 rounded-xl'>
                  <Link
                    target='_blank'
                    href={
                      'https://www.linkedin.com/in/patricio-augusto-zienka-hogan-828484a5/'
                    }
                  >
                    <small className='text-sm font-bold'>
                      » Perfíl de LinkedIn{' '}
                    </small>
                  </Link>
                </div>
                <div className='p-1 hover:bg-gray-100 rounded-xl'>
                  <Link
                    target='_blank'
                    href={'https://github.com/Pastito09'}
                  >
                    <small className='text-sm font-bold'>
                      » Perfíl de Github{' '}
                    </small>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='hidden md:block'>
            <Image
              className='rounded-full '
              src={'/perfil.jpg'}
              height={550}
              width={250}
              quality={100}
              alt='hola'
            />
          </div>
        </div>
      </header>
    </>
  );
};
