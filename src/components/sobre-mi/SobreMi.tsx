import Link from 'next/link';

export const SobreMi = () => {
  return (
    <>
      <div className='flex flex-col mt-12 md:mt-24 text-center gap-1 md:text-xl text-gray-800'>
        <span>
          <p>
            Nací en Sao Pablo, Brasil. Al año y diez meses, me radiqué
            en Argentina. Tengo nacionalidad Lituana, por parte de mi
            abuelos maternos.
          </p>
        </span>
        <span>
          <p>
            Ávido lector, preferentemente novelas policiales. Autores
            como John Fante, Frederick Brown, Phillip Dick, Jean-Paul
            Sartre, Paul Auster, entre otros.
          </p>
        </span>
        <span>
          <p>
            Masajista descontracturante-relajante en{' '}
            <Link
              href={'https://www.instagram.com/patohoganmasajista'}
              rel='noreferrer'
              target='_blank'
              className='underline underline-offset-1 hover:decoration-slate-700  hover:text-gray-900 decoration-gray-500'
            >
              @patohoganmasajista
            </Link>
          </p>
        </span>
        <span>
          <p>
            Deportista, ex-jugador de Handball en la Sociedad Alemana
            de Gimnasia de Almirante Brown{' '}
            <Link
              href={'http://sagab.com.ar/'}
              rel='noreferrer'
              target='_blank'
              className='underline underline-offset-1 hover:decoration-slate-700  hover:text-gray-900 decoration-gray-500'
            >
              (S.A.G.A.B.)
            </Link>
            . Ciclista aficionado.
          </p>
        </span>

        <span>
          <p>
            Amante de las plantas, realicé un terciario en{' '}
            <Link
              href='https://www.instagram.com/emajea.lomas/'
              rel='noreferrer'
              target='_blank'
              className='underline underline-offset-1 hover:decoration-slate-700  hover:text-gray-900 decoration-gray-500'
            >
              E.M.A.J.E.A.
            </Link>{' '}
            (Escuela Municipal de Arboricultura, Jardinería, y
            Ecología Aplicada de Lomas de Zamora). Hoy cultivo algunos
            de mis alimentos.
          </p>
        </span>
        <span>
          <p>
            Músico, guitarrista y bajista, compositor. Actualmente
            tengo un proyecto activo hace 6 años.
          </p>
        </span>
        <span>
          <p>
            Hago y reparo mis propios pedales analógicos, cables, y
            fuentes para mis intrumentos. También, les cambio las
            cuerdas y los calibro.
          </p>
        </span>
        <span>
          <p>Electrisista domiciliario, repararo lavarropas.</p>
        </span>
        <span>
          <p></p>
        </span>
      </div>
    </>
  );
};
