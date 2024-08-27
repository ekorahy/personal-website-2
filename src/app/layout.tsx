import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/templates/Header';
import { raleway } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'EKSA',
  icons: 'favicon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${raleway.className} bg-zinc-50`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
