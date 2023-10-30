import { ProjectType } from '@/utils/types';
import Image from 'next/image';
import { TechnologyContainer } from './technology-container';

type ProjectShortInfoProps = ProjectType & {
  onModalOpen: () => void;
};

export function ProjectShortInfo({
  title,
  detail,
  image,
  technologies,
  onModalOpen,
}: ProjectShortInfoProps) {
  return (
    <div
      onClick={onModalOpen}
      className='w-full max-w-[500px] cursor-pointer overflow-x-hidden rounded-md bg-indigo-900/10 shadow-[0_0_5px_2px] shadow-indigo-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_5px_5px] hover:shadow-indigo-800/50'
    >
      <div className='w-full'>
        <Image
          className='w-full'
          src={image}
          alt={title}
          width={400}
          height={400}
        />
      </div>
      <div className='p-5'>
        <h3 className='text-xl font-semibold text-white/70'>{title}</h3>
        <div className='mt-5 flex flex-wrap items-center gap-2'>
          {technologies.map((technology, index) => (
            <TechnologyContainer key={index} technology={technology} />
          ))}
        </div>
        <p className='mt-5 text-justify text-sm text-white/60'>
          {detail.length > 150 ? (
            <>
              {detail.slice(0, 150) + '....'} &nbsp;{' '}
              <span className='font-semibold'>See More</span>
            </>
          ) : (
            detail
          )}
        </p>
      </div>
    </div>
  );
}
