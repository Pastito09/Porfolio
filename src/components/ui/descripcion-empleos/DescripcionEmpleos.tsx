interface Props {
  fecha: string;
  lugar: string;
  titulo: string;
  empleador?: string;
  descripcion: string;
}
export const DescripcionEmpleos = ({
  fecha,
  lugar,
  titulo,
  empleador,
  descripcion,
}: Props) => {
  return (
    <>
      <div className='col-span-1 font-semibold text-gray-800 text-center mb-2 md:mb-0'>
        <small>
          <div className='items-center'>{fecha}</div>
          <div className='px-1'>{lugar}</div>
        </small>
      </div>
      <div className='col-span-5 ms-4 text-center'>
        <div className=' flex'>
          <div className='flex flex-col items-center'>
            <span className='font-semibold text-lg text-gray-500'>
              {titulo}
            </span>
            <span className='font-semibold text-lg text-gray-500'>
              {empleador}
            </span>
          </div>
          <div className='ms-4'>
            <span className='text-center  text-gray-700 text-base'>
              {descripcion}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
