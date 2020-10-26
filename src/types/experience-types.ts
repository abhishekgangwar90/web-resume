export type ExperienceData = {
  id: number;
  title: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  experienceDetails?: Array<{ id: number; description: string }>;
  extendedDetails?: Array<{ id: number; description: string }>;
};

export type ExperienceConfig = {
  title: string;
  experienceData: Array<ExperienceData>;
};
