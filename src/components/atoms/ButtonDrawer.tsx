import { ButtonDrawerProps } from '@/types/header';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function ButtonDrawer({ handleMenuOpen }: ButtonDrawerProps) {
  return (
    <button
      className='bg-zinc-100 hover:bg-zinc-300 rounded-full px-3'
      onClick={handleMenuOpen}
    >
      <HiOutlineMenuAlt4 className='text-2xl' />
    </button>
  );
}
