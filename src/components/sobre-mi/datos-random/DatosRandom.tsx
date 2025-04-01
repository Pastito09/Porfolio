'use client';

import { useEffect, useState } from 'react';
import { datos } from './datos';

export const DatosRandom = () => {
  const [dato, setDato] = useState('');

  const datoRandom = () => {
    const numAleat = Math.floor(Math.random() * 23);
    const nuevoDato = datos[numAleat].dato;
    setDato(nuevoDato);
  };
  useEffect(() => {
    datoRandom();
  }, []);

  return (
    <>
      <div className='flex flex-col h-52 justify-between bg-gray-100/50 text-gray-700 rounded-md m-2 md:m-16'>
        <div className='m-1 p-2 text-sm md:text-xl'>
          Datos aleatorios:
        </div>
        <div className='h-full text-center justify-center flex flex-col'>
          <div className='text-2xl text-slate-800 font-sans '>
            {dato}
          </div>
        </div>
        <div className='m-2 place-self-end'>
          <button
            type='button'
            className='border border-gray-600 rounded-xl p-1 text-sm hover:bg-gray-200 hover:text-slate-800'
            onClick={datoRandom}
          >
            Más datos
          </button>
        </div>
      </div>
    </>
  );
};
