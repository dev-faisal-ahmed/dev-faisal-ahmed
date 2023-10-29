'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navLinks } from '@/data/nav-links';
import { Kalam } from 'next/font/google';
import { MobileNavMenu } from './mobile-nav-menu';

const font = Kalam({ weight: '700', subsets: ['latin'] });

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`sticky left-0 top-0 py-3 ${
        scrollPosition > 10
          ? 'bg-indigo-950/20 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className='container flex items-center gap-5 md:gap-8'>
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
          <Link href={'#contact-me'} className='button-primary'>
            Contact Me
          </Link>
        </ul>
        <MobileNavMenu />
      </div>
    </nav>
  );
}
