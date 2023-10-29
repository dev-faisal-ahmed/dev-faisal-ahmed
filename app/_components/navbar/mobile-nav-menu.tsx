'use client';

import { HiMenuAlt1 } from 'react-icons/hi';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/data/nav-links';

export function MobileNavMenu() {
  const [open, steOpen] = useState(false);

  return (
    <div className='ml-auto block md:hidden'>
      <HiMenuAlt1
        onClick={() => steOpen(true)}
        className='cursor-pointer text-2xl'
      />
      <AnimatePresence>
        {open && (
          <motion.aside
            onClick={() => steOpen(false)}
            className='ml-auto block md:hidden'
          >
            <div className='fixed left-0 top-0 h-[100dvh] w-full bg-black/60'>
              <motion.div
                initial={{ y: '-100vw' }}
                transition={{ duration: 0.3 }}
                exit={{ y: '-100vw' }}
                animate={{ y: 0 }}
                onClick={(event) => event.stopPropagation()}
                className={`absolute ml-auto h-fit w-full space-y-3 bg-white/80 py-5 text-center backdrop-blur-md dark:bg-indigo-950/20`}
              >
                <h1 className='mb-8 flex items-center justify-center gap-3 text-xl font-semibold'>
                  <span className='h-[2px] w-5 bg-gray-600' />
                  Faisal
                  <span className='h-[2px] w-5 bg-gray-600' />
                </h1>

                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    className='block text-sm font-semibold text-gray-600 dark:text-white/75'
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className='h-6' />
                <Link
                  className='w-fit rounded-md bg-indigo-600 px-2 py-1 text-sm font-semibold text-white dark:bg-indigo-600/20 dark:shadow-[0_0_5px_3px] dark:shadow-indigo-600/50'
                  href={'#contact-me'}
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
