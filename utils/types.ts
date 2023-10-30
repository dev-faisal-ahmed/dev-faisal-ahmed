import { ReactNode } from 'react';

export type SkillType = {
  title: string;
  icon: ReactNode;
  color?: string;
};

export type SkillsDataType = {
  frontEnd: SkillType[];
  backEnd: SkillType[];
  others: SkillType[];
};

export type ProjectType = {
  title: string;
  image: string;
  technologies: string[];
  detail: string;
  sourceCode: {
    code?: string;
    frontEnd?: string;
    backEnd?: string;
  };
  liveLink?: string;
};
