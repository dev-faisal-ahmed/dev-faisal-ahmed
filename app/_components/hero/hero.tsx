'use client';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { BsFillCaretDownFill } from 'react-icons/bs';

export function Hero() {
  return (
    <motion.div
      id='about'
      className='container flex flex-col-reverse items-center gap-10 pt-10 lg:flex-row lg:pt-20'
    >
      <motion.div
        initial={{ x: '-100px' }}
        animate={{ x: 0 }}
        className='w-full text-center  lg:text-left'
      >
        <h1 className='text-3xl font-semibold md:text-6xl'>
          Hi, I am <br /> Faisal Ahmed
        </h1>
        <h3 className='mt-8 text-2xl md:text-3xl'>
          <span>I am a</span> &nbsp;
          <span className='inline-block font-bold text-indigo-600'>
            <TypewriterComponent
              options={{
                strings: ['Front-End Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h3>
        <p className='mt-5 text-sm text-white/60 md:text-base'>
          As a front-end developer, I see myself as a digital architect crafting
          intricate and interactive applications. Just like an architect designs
          beautiful structures, I design and build the user interfaces of modern
          digital products.
        </p>
        <button
          className={twMerge(
            'button-secondary',
            'mx-auto mt-10 flex w-fit items-center gap-2 py-3 text-sm lg:mx-0 lg:text-base',
          )}
        >
          Download Resume
          <BsFillCaretDownFill />
        </button>
      </motion.div>
      <motion.div
        initial={{ x: '200px' }}
        animate={{ x: 0, y: 0 }}
        className='w-full'
      >
        <div className='mx-auto mb-8 h-[300px] w-[300px] md:mb-0 md:mr-auto md:h-[400px] md:w-[400px]'>
          <Image
            className='w-full rounded-full border-2 border-indigo-700/90'
            src={'/assets/myPic.jpg'}
            alt='Faisal-Ahmed'
            width={400}
            height={400}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
