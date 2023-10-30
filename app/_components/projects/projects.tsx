import { projectsData } from '@/data/projects-data';
import { ProjectContainer } from './project-container';

export function Projects() {
  return (
    <div id='projects' className='container pb-10 pt-10 lg:pt-20'>
      <h2 className='text-center text-4xl font-semibold'>Projects</h2>
      <p className='mx-auto mt-5 text-center text-white/60 md:max-w-[450px]'>
        Here&apos;s the project which I have completed recently.
      </p>
      <div className='mt-16 flex flex-wrap justify-center gap-10 lg:px-10'>
        {projectsData.map((project, index) => (
          <ProjectContainer key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
