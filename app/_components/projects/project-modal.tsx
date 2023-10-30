import Link from 'next/link';
import { Modal } from '@/components/ui/modal';
import { ProjectType } from '@/utils/types';
import Image from 'next/image';
import { TechnologyContainer } from './technology-container';
import { twMerge } from 'tailwind-merge';

type ProjectModalProps = ProjectType & {
  modalSate: boolean;
  onModalClose: () => void;
};

export function ProjectModal({
  modalSate,
  onModalClose,
  title,
  image,
  technologies,
  detail,
  sourceCode,
  liveLink,
}: ProjectModalProps) {
  return (
    <Modal
      title={title}
      modalSate={modalSate}
      onModalClose={onModalClose}
      footer={
        <div className='ml-auto mt-5 flex w-fit items-center gap-3'>
          <Link
            className={
              'rounded-md px-3 py-2 font-semibold transition hover:bg-purple-700'
            }
            href={sourceCode.code || ''}
            target='_blank'
          >
            View Code
          </Link>
          <Link
            className={twMerge('button-secondary', 'px-3 py-2 font-semibold')}
            href={liveLink || ''}
            target='_blank'
          >
            View Live Link
          </Link>
        </div>
      }
    >
      <div className='w-full'>
        <Image
          className='w-full rounded-md'
          src={image}
          width={450}
          height={450}
          alt={title}
        />
      </div>
      <div className='mt-5 flex flex-wrap items-center gap-2'>
        {technologies.map((technology, index) => (
          <TechnologyContainer key={index} technology={technology} />
        ))}
      </div>
      <p className='mt-5 text-justify text-sm text-white/60'>{detail}</p>
    </Modal>
  );
}
