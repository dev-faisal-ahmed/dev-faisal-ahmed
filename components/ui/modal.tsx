'use client';
import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = {
  title: string;
  children: ReactNode;
  modalSate: boolean;
  onModalClose: () => void;
  footer?: ReactNode;
};

export function Modal({
  title,
  children,
  modalSate,
  onModalClose,
  footer,
}: ModalProps) {
  return (
    <AnimatePresence>
      {modalSate && (
        <div
          onClick={onModalClose}
          className='fixed left-0 top-0 flex h-[100dvh] w-screen items-center justify-center bg-black/70 backdrop-blur-lg'
        >
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0.5 }}
            onClick={(event) => event.stopPropagation()}
            className='w-[90%] max-w-[550px] rounded-md bg-indigo-700/10 p-5 shadow-[0_0_5px_2px] shadow-indigo-700 backdrop-blur-md md:w-1/3'
          >
            <header className='text-xl font-semibold text-white/70'>
              {title}
            </header>
            <section className='no-scrollbar mt-5 max-h-[350px] overflow-y-auto lg:max-h-[650px]'>
              {children}
            </section>
            {footer && <footer>{footer}</footer>}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
