import { LogoProps } from '@/types/header';
import Image from 'next/image';

export default function Logo({ width, height }: LogoProps) {
  return (
    <Image
      src='/light-logo.png'
      width={width}
      height={height}
      alt='Logo eksa'
    />
  );
}
