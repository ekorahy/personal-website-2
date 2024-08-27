import { nav } from '@/constant/nav';
import NavItem from '../atoms/NavItem';

export default function NavList() {
  return (
    <nav className='flex flex-col gap-4 w-full px-4 lg:flex-row lg:w-max'>
      {nav.map(({ id, title, route }) => (
        <NavItem key={id} title={title} route={route} />
      ))}
    </nav>
  );
}
