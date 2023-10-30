'use client';
import Link from 'next/link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { navLinks } from '@/data/nav-links';

export function MobileNavMenu() {
  const [open, steOpen] = useState(false);

  return (
    <div className='z-20 ml-auto block md:hidden'>
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
                className={`absolute ml-auto h-fit w-full space-y-3 bg-indigo-950/50 py-5 text-center backdrop-blur-md`}
              >
                <h1 className='mb-8 flex items-center justify-center gap-3 text-xl font-semibold'>
                  <span className='h-[2px] w-5 bg-gray-600' />
                  Faisal
                  <span className='h-[2px] w-5 bg-gray-600' />
                </h1>

                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    className='block text-sm font-semibold text-white/75'
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className='h-6' />
                <Link className='button-secondary' href={'#contact'}>
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
