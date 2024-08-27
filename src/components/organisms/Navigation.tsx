import NavMobile from './NavMobile';
import NavWeb from './NavWeb';

export default function Navigation() {
  return (
    <div className='container'>
      <NavMobile />
      <NavWeb />
    </div>
  );
}
