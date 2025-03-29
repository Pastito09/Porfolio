import Link from 'next/link';

interface Props {
  fecha: string;
  lugar: string;
  titulo: string;
  empleador?: string;
  descripcion: string;
  web?: string;
}
export const DescripcionEmpleos = ({
  fecha,
  lugar,
  titulo,
  empleador,
  descripcion,
  web,
}: Props) => {
  return (
    <>
      <div className='col-span-1 font-semibold antialiased text-gray-800 text-center mb-2 md:mb-0'>
        <small>
          <div className='items-center'>{fecha}</div>
          <div className='px-1'>{lugar}</div>
        </small>
      </div>
      <div className='col-span-5 ms-4 text-center'>
        <div className='grid grid-cols-6 '>
          <div className='flex flex-col me-4 ms-1 gap-2 mt-1 md:mt-0 items-center'>
            <span className='font-semibold text-sm text-gray-500 antialiased'>
              {titulo}
            </span>
            <span className='font-semibold text-lg text-gray-500 antialiased'>
              {empleador}
            </span>
          </div>
          <div className='ms-6 flex flex-col col-span-5'>
            <span className='text-center  text-gray-700 text-base antialiased'>
              {descripcion}
            </span>
            <span className=''>
              {web === undefined ? (
                ''
              ) : (
                <Link href={web} target='_blank'>
                  <small className='text-center text-slate-800  font-semibold antialiased hover:text-slate-800/75 transition duration-300 ease-in-out hover:underline'>
                    {web.replace(
                      /(?:https?:\/\/)?(?:www\.)?|\/+$/g,
                      ''
                    )}
                  </small>
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
