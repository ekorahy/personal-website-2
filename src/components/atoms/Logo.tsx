import { LogoProps } from '@/types/header';
import Image from 'next/image';

export default function Logo({ width, height }: LogoProps) {
  return (
    <div className='flex items-center gap-1'>
      <Image
        src='/light-logo.png'
        width={width}
        height={height}
        alt='Logo eksa'
      />
      <h1 className='text-3xl font-bold'>EKSA</h1>
    </div>
  );
}
