import { MainProps } from '@/types/main';

export default function Main({ children }: MainProps) {
  return <main className='container p-4'>{children}</main>;
}
