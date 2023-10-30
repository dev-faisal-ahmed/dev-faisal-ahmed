import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navbar } from './_components/navbar/navbar';
import './globals.css';
import { Footer } from './_components/footer/footer';

const font = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata: Metadata = {
  title: 'Faisal Ahmed',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body
        className={`${font.className} overflow-x-hidden bg-black text-white`}
      >
        <div className='relative min-h-[100dvh] bg-indigo-950/40'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
