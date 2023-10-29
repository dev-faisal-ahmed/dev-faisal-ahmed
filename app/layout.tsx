import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navbar } from './_components/navbar/navbar';
import { ThemeProvider } from '@/components/provider/theme-provider';
import './globals.css';

const font = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata: Metadata = {
  title: 'Faisal Ahmed',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${font.className} min-h-[100dvh] bg-gray-100 dark:bg-indigo-950/50`}
      >
        <ThemeProvider attribute='class'>
          <Navbar />
          <main className='container mx-auto px-5'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
