'use client';

import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();
  return (
    <div className='cursor-pointer text-xl'>
      {theme === 'dark' ? (
        <BsMoon onClick={() => setTheme('light')} />
      ) : (
        <BsSun className='text-2xl' onClick={() => setTheme('dark')} />
      )}
    </div>
  );
}
