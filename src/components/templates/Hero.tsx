import Image from 'next/image';
import HeroIcon from '../atoms/HeroIcon';

export default function Hero() {
  return (
    <section className='relative flex flex-col-reverse lg:flex-row gap-8 lg:gap-4'>
      <div className='flex flex-col justify-center'>
        <span className='text-xl'>
          Hi, I&apos;m <span className='text-amber-400 font-bold'>Eksa</span>
        </span>
        <h2 className='text-7xl font-bold mb-2'>Front-end Engineer</h2>
        <p className='text-xl'>
          Tell me about your <span className='text-amber-400'>ideas</span>, I
          will <span className='text-amber-400'>manifest</span> them for you
          through <span className='text-amber-400'>digital reality</span>.
        </p>
      </div>
      <div className='border z-10 mx-auto relative h-full rounded-tl-[8rem] lg:rounded-tl-[14rem] rounded-br-[8rem] lg:rounded-br-[14rem] bg-amber-400 overflow-hidden hover:grayscale-0 group'>
        <Image
          className='z-10 grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
          src='/hero.png'
          height={600}
          width={600}
          alt='Hero image'
        />
        <HeroIcon
          src='/tech/ic-react.svg'
          width={100}
          height={100}
          title='react.js'
          className='absolute top-20 left-4 lg:top-48 lg:left-16 group-hover:animate-spin'
        />
        <HeroIcon
          src='/tech/ic-nextjs.svg'
          width={200}
          height={200}
          title='next.js'
          className='absolute -bottom-20 -left-10 lg:bottom-10 lg:left-4'
        />
        <HeroIcon
          src='/tech/ic-figma.svg'
          width={50}
          height={20}
          title='figma'
          className='absolute top-20 right-20 rotate-12'
        />
        <HeroIcon
          src='/tech/ic-tailwind.svg'
          width={70}
          height={70}
          title='tailwind'
          className='absolute top-4 left-40 lg:top-4 lg:left-80 rotate-12'
        />
        <HeroIcon
          src='/tech/ic-typescript.svg'
          width={70}
          height={70}
          title='typescript'
          className='absolute top-0 left-10 lg:top-10 lg:left-32 -rotate-12'
        />
        <HeroIcon
          src='/tech/ic-nodejs.svg'
          width={70}
          height={70}
          title='node.js'
          className='absolute bottom-20 right-8 lg:bottom-40 lg:right-16 rotate-12'
        />
        <HeroIcon
          src='/tech/ic-css.svg'
          width={70}
          height={70}
          title='css'
          className='absolute -top-4 -right-4'
        />
        <HeroIcon
          src='/tech/ic-html.svg'
          width={40}
          height={40}
          title='html'
          className='absolute top-32 lg:top-60 right-4'
        />
        <HeroIcon
          src='/tech/ic-javascript.svg'
          width={70}
          height={70}
          title='javascript'
          className='absolute top-32 lg:top-60 right-40'
        />
        <HeroIcon
          src='/tech/ic-bootstrap.svg'
          width={70}
          height={70}
          title='bootstrap'
          className='absolute lg:bottom-4 bottom-0 right-1 lg:right-16 rotate-45'
        />
        <HeroIcon
          src='/tech/ic-redux.svg'
          width={70}
          height={70}
          title='redux'
          className='absolute top-40 -left-12 lg:top-24 lg:-left-4'
        />
      </div>
    </section>
  );
}
