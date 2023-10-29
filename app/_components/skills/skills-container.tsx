import { SkillType } from '@/utils/types';

type SkillsContainerProps = {
  skillType: string;
  skills: SkillType[];
};

export function SkillsContainer({ skillType, skills }: SkillsContainerProps) {
  return (
    <div className='w-full rounded-md border border-indigo-800 p-5 shadow-[0_0_5px_2px] shadow-indigo-950 md:w-[500px]'>
      <h4 className='mb-8 text-center text-2xl text-white/70'>{skillType}</h4>
      <div className='flex flex-wrap items-center justify-center gap-5'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3'
          >
            <span style={{ color: skill.color }} className='md:text-xl'>
              {skill.icon}
            </span>
            <span className='text-sm text-white/60 md:text-base'>
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
