import { skillsData } from '@/data/skills-data';
import { SkillsContainer } from './skills-container';

export function Skills() {
  return (
    <div className='mt-20 bg-gradient-to-tr from-indigo-700/10 to-indigo-950/10 py-8 lg:py-20'>
      <div className='container '>
        <h2 className='text-center text-4xl font-semibold'>Skills</h2>
        <p className='mx-auto mt-5 text-center text-white/60 md:max-w-[450px]'>
          Here&apos;s are some skills on which I have been working for the
          years.
        </p>
        <div className='mt-10 flex flex-wrap justify-center gap-10 lg:px-10'>
          <SkillsContainer skillType='Front-End' skills={skillsData.frontEnd} />
          <SkillsContainer skillType='Back-End' skills={skillsData.backEnd} />
          <SkillsContainer skillType='Others' skills={skillsData.others} />
        </div>
      </div>
    </div>
  );
}
