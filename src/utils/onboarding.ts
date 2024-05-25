import { onboardingQuestions } from '@/constants/onboarding';
import { safeRandom } from './util';

export const calculateOnboardingResult = (answers: number[]): string => {
  // initialize calculatedWeights
  const calculatedWeights = [];
  for (let i = 0; i < 8; i++) {
    calculatedWeights.push(0);
  }

  // calculate weights
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < 8; j++) {
      calculatedWeights[j] += onboardingQuestions[i].weights[answers[i]][j];
    }
  }

  // find max weight
  const maxWeight = Math.max(...calculatedWeights);

  // find max weight index
  const maxWeightIndexes = [];
  for (let i = 0; i < 8; i++) {
    if (calculatedWeights[i] === maxWeight) {
      maxWeightIndexes.push(i);
    }
  }

  // return max weight index
  const randomIndex = safeRandom(0, maxWeightIndexes.length);
  const resultIndex = maxWeightIndexes[randomIndex];

  // change it to A, B, C, D, E, F, G, H
  return String.fromCharCode(65 + resultIndex);
};
