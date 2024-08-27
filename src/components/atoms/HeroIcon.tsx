import { HeroIconProps } from '@/types/hero';
import clsx from 'clsx';
import Image from 'next/image';

export default function HeroIcon({
  src,
  title,
  className,
  width,
  height,
}: HeroIconProps) {
  return (
    <Image
      src={src}
      height={height}
      width={width}
      alt={`${title} icon`}
      className={clsx(
        'grayscale group-hover:grayscale-0 transition duration-300 ease-in-out -z-10',
        className
      )}
    />
  );
}
