export const calculateOnboardingScore = (answers: number[]) => {
  return answers.reduce((acc, cur) => acc + cur, 0);
};
