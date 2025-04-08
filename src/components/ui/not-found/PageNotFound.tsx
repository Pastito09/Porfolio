import Link from 'next/link';
import { IoArrowDownOutline } from 'react-icons/io5';

export const PageNotFound = () => {
  return (
    <>
      <div className='flex flex-col w-full h-screen justify-center items-center bg-gray-100 '>
        <div className='bg-[url(/notfound.jpg)] md:h-10/12 md:w-10/12 h-full w-full bg-cover bg-center rounded-md flex gap-4 flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-gray-800'>404</h1>
          <span className='text-slate-50'>
            ¡Hola! esta página no existe.
          </span>
          <span className='text-slate-50'>
            ¿Querés volver al inicio?
          </span>
          <div className='flex flex-col justify-center items-center '>
            <IoArrowDownOutline
              className='text-amber-50 rounded'
              size={25}
            />{' '}
            <Link
              href={'/'}
              className='bg-transparent text-gray-50 rounded-md text-xl text-center hover:underline hover:text-amber-50 p-1'
            >
              {' '}
              Volver con la frente marchita, las nieves del tiemplo
              platearon mi sien
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
