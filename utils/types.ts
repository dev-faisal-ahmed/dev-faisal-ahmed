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
