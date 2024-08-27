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
          'absolute top-0 left-0 w-screen h-screen bg-zinc-100 transform transition-transform duration-1000 ease-in-out',
          {
            'translate-x-0': isMenuOpen,
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
