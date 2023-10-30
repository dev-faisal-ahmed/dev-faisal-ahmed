import Link from 'next/link';
import { navLinks } from '@/data/nav-links';
import { socialLinks } from '@/data/social-links';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='mx-auto w-fit  py-10 lg:container'>
      <div className='space-y-5 text-center lg:grid lg:grid-cols-3 lg:space-y-0'>
        <div>
          <h1 className='text-2xl font-semibold'>Faisal Ahmed</h1>
          <p className='mt-1 text-white/70'>Front-End Developer</p>
        </div>

        <div className='mx-auto flex w-fit flex-row gap-5'>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className='mx-auto flex w-fit gap-5 text-2xl lg:ml-auto'>
          <Link
            className='transition hover:text-purple-500'
            href={socialLinks.github}
            target='_blank'
          >
            <FaGithubSquare />
          </Link>
          <Link
            className='transition hover:text-purple-500'
            href={socialLinks.linkedIn}
            target='_blank'
          >
            <FaLinkedin />
          </Link>
          <Link
            className='transition hover:text-purple-500'
            href={socialLinks.facebook}
            target='_blank'
          >
            <FaFacebookSquare />
          </Link>
        </div>
      </div>
      <p className='mt-5 text-center text-white/60'>&copy;All right reserved</p>
    </footer>
  );
}
