import { Header } from '@/components/header/Header';
import StyleContainer from '@/components/ui/contenedor/StyleContainer';

import Link from 'next/link';
import {
  IoCalendarNumberOutline,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from 'react-icons/io5';

export default function ContactoPage() {
  return (
    <StyleContainer>
      <Header />
      <div className='flex mt-2 flex-col justify-start'>
        <div className='flex gap-2 ms-4 my-2'>
          <IoLogoWhatsapp className=' mt-0.5' />
          <span className='text-sm font-bold antialiased'>
            Telefono:
          </span>
          <span className='text-sm ms-2 antialiased hover:underline'>
            <Link href={'https://wa.me/1138560060'} target='_blank'>
              +54 (11)3856-0060
            </Link>
          </span>
        </div>
        <div className='flex ms-4 my-2'>
          <IoCalendarNumberOutline className='me-2 mt-0.5' />
          <span className='text-sm font-bold antialiased'>
            15/02/1987
          </span>
          <span className='text-sm ms-4 antialiased'>
            Sao Pablo, Brasil.
          </span>
        </div>
        <div className='flex ms-4 my-2'>
          <IoLogoInstagram className='me-2 mt-0.5' />
          <span className='text-sm font-bold antialiased'>
            Instagram
          </span>
          <span className='text-sm ms-4 antialiased hover:underline'>
            <Link
              href={'https://www.instagram.com/pasto.on.the.controls'}
              target='_blank'
            >
              @pasto.on.the.controls
            </Link>
          </span>
        </div>
      </div>
    </StyleContainer>
  );
}
