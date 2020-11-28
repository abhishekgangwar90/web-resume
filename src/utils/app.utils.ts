/* eslint-disable import/prefer-default-export */
export const getTotalExperience = (): number => {
  const careerStartDate = new Date('10/03/2016');
  const currentDate = new Date();
  return currentDate.getUTCFullYear() - careerStartDate.getUTCFullYear();
};
