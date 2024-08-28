'use client';

import { useState } from 'react';
import ButtonDrawer from '../atoms/ButtonDrawer';
import Logo from '../atoms/Logo';
import NavList from '../molecules/NavList';
import clsx from 'clsx';
import AdditionalFeatures from '../molecules/AdditionalFeatures';

export default function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='lg:hidden'>
      <div className='flex justify-between p-4'>
        <Logo width={50} height={50} />
        <ButtonDrawer handleMenuOpen={handleMenuOpen} />
      </div>
      <div
        className={clsx(
          'z-20 fixed top-0 bottom-0 w-full h-full bg-zinc-100 transform transition-transform duration-1000 ease-in-out',
          {
            '-translate-x-0': isMenuOpen,
            'translate-x-full': !isMenuOpen,
          }
        )}
        onClick={handleMenuOpen}
      >
        <div className='relative h-full flex flex-col justify-center items-center'>
          <NavList />
          <AdditionalFeatures />
        </div>
      </div>
    </div>
  );
}
