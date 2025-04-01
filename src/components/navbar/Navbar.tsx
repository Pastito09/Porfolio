'use client';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// import {
//   Bars3Icon,
//   BellIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline';

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// };
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Estudios', href: '/estudios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
  { name: 'Sobre mi', href: '/perfil' },
];
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open }) => (
          <>
            <div className='mx-auto w-full px-4 sm:px-6 lg:px-8'>
              <div className='flex h-16 items-center justify-between'>
                <div className='flex items-center'>
                  {/* <div className='shrink-0'>
                <img
                  alt='Your Company'
                  src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500'
                  className='size-8'
                />
              </div> */}
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={
                            item.href === pathname
                              ? 'page'
                              : undefined
                          }
                          className={classNames(
                            item.href === pathname
                              ? 'bg-gray-900 text-white antialiased'
                              : 'text-gray-300 hover:bg-gray-700 antialiased hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View notifications</span>
                  hola
                  {/* <BellIcon aria-hidden="true" className="size-6" /> */}
                {/* </div> </button>

                {/* Profile dropdown */}
                {/* <Menu as='div' className='relative ml-3'>
                  <div>
                    <MenuButton className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden'>
                      <span className='absolute -inset-1.5' />
                      <span className='sr-only'>Open user menu</span>
                      <img
                        alt=''
                        src={'/perfil.jpg'}
                        className='size-8 object-fit rounded-full'
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden'
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div> */}
                <div className='-mr-2 flex md:hidden '>
                  {/* Mobile menu button */}

                  <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Abrir menú</span>
                    {!open ? (
                      <span className='m-2 antialiased'>
                        Abrir el menú
                      </span>
                    ) : (
                      <span className='m-2 antialiased'>
                        Cerrar menú
                      </span>
                    )}

                    <Image
                      src={'/perfil.JPG'}
                      width={65}
                      height={70}
                      quality={100}
                      alt='foto de perfil'
                      className='rounded-full '
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className='md:hidden '>
              <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3 '>
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as='a'
                    href={item.href}
                    aria-current={
                      item.href === pathname ? 'page' : undefined
                    }
                    className={classNames(
                      item.href === pathname
                        ? 'bg-gray-900 text-white antialiased'
                        : 'text-gray-300 hover:bg-gray-700 antialiased hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium antialiased'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
};
