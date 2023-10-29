'use client';
import Link from 'next/link';
import { navLinks } from '@/data/nav-links';
import { Kalam } from 'next/font/google';
import { ThemeToggler } from './theme-toggler';
import { MobileNavMenu } from './mobile-nav-menu';

const font = Kalam({ weight: '700', subsets: ['latin'] });

export function Navbar() {
  return (
    <nav className='px-5 py-3'>
      <div className='container mx-auto flex items-center gap-5 md:gap-8'>
        <h1 className={`${font.className} text-3xl`}>Faisal</h1>
        <ul className='ml-auto hidden gap-8 md:flex'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className={`group mt-2 block text-gray-600 dark:text-white`}
                href={link.url}
              >
                {link.title}
                <span className='block h-[2px] w-6 transition-colors duration-300 group-hover:bg-gray-600 group-hover:dark:bg-white' />
              </Link>
            </li>
          ))}
          <Link
            href={'#contact-me'}
            className='rounded-md bg-indigo-600 px-5 py-2 font-semibold text-white shadow-[0_0_5px_2px] shadow-indigo-400 transition-colors duration-300 dark:bg-indigo-600/20 dark:shadow-[0_0_5px_2px] dark:shadow-indigo-600 dark:hover:shadow-[0_0_5px_5px] dark:hover:shadow-indigo-600'
          >
            Contact Me
          </Link>
        </ul>
        <MobileNavMenu />
        <ThemeToggler />
      </div>
    </nav>
  );
}
