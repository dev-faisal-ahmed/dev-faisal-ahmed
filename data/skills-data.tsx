import { SkillsDataType } from '@/utils/types';
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiReactquery,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiCanva,
  SiVercel,
} from 'react-icons/si';
import { TbBrandGraphql, TbBrandMysql, TbBrandVscode } from 'react-icons/tb';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { BiLogoNetlify } from 'react-icons/bi';

export const skillsData: SkillsDataType = {
  frontEnd: [
    {
      title: 'Next Js',
      icon: <SiNextdotjs />,
    },
    {
      title: 'React Js',
      icon: <FaReact />,
    },
    {
      title: 'Redux',
      icon: <SiRedux />,
    },
    {
      title: 'HTML',
      icon: <SiHtml5 />,
    },
    {
      title: 'CSS',
      icon: <SiCss3 />,
    },
    {
      title: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      title: 'TypeScript',
      icon: <SiTypescript />,
    },
    {
      title: 'JavaScript',
      icon: <SiJavascript />,
    },

    {
      title: 'React Query',
      icon: <SiReactquery />,
    },
  ],
  backEnd: [
    {
      title: 'Node Js',
      icon: <FaNodeJs />,
    },
    {
      title: 'Express Js',
      icon: <SiExpress />,
    },
    {
      title: 'Rest Api',
      icon: <TbBrandGraphql />,
    },
    {
      title: 'Mongo DB',
      icon: <SiMongodb />,
    },
    {
      title: 'Firebase',
      icon: <SiFirebase />,
    },
    {
      title: 'MySql',
      icon: <TbBrandMysql />,
    },
  ],
  others: [
    {
      title: 'VS Code',
      icon: <TbBrandVscode />,
    },
    {
      title: 'Git',
      icon: <BsGit />,
    },
    {
      title: 'GitHub',
      icon: <SiGithub />,
    },
    {
      title: 'Canva',
      icon: <SiCanva />,
    },
    {
      title: 'Vercel',
      icon: <SiVercel />,
    },
    {
      title: 'Netlify',
      icon: <BiLogoNetlify />,
    },
  ],
};
