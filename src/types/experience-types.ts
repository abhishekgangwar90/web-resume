import { skillData } from './../organisms/Skills/profile-skills-types';
export type ExperienceData = {
  id: number;
  organization: string;
  startDate: string;
  endDate: string | null;
  experienceDetails?: Array<{ id: number; description: string }>;
  // positionDetails: Array<{
  //   id: number;
  //   title: string;
  //   startDate: string;
  //   endDate: string | null;
  //   extendedDetails?: Array<{ id: number; description: string }>;
  // }>;
};

export type ExperienceConfig = {
  title: string;
  icon: any;
  totalExp: number;
  experienceData: Array<ExperienceData>;
};

