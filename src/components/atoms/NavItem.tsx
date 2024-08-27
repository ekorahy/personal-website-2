import { NavItemProps } from '@/types/header';
import Link from 'next/link';

export default function NavItem({ title, route }: NavItemProps) {
  return (
    <Link
      href={route}
      className='text-2xl px-4 py-3 w-full text-center hover:bg-amber-400'
    >
      {title}
    </Link>
  );
}
