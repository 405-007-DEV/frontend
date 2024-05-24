import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { safeSessionStorage } from '@toss/storage';
import { onboardingQuestions } from '@/constants/onboarding';

const OnboardingQuestion: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="mb-[30px]">
      <h2 className="h1_light">{children}</h2>
    </section>
  );
};

const OnboardingItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full rounded-full border-1 h-[56px] flex justify-center items-center hover:bg-b1 hover:cursor-pointer transition-colors duration-100 ease-in-out">
      <span className="b2_light text-center">{children}</span>
    </div>
  );
};

export function OnboardingPage() {
  const [cursor] = useState(1);

  return (
    <div className="px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="w-full my-24">
          <Progress
            value={(cursor / 4) * 100}
            className="w-full bg-gr1 h-12"
            indicatorColor="var(--colors-b3)"
          />
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <section className="mb-[35px]">
          <div className="b2_medium">Q{cursor}</div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <OnboardingQuestion>
          {onboardingQuestions[cursor - 1].question}
        </OnboardingQuestion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <section className="flex flex-col gap-20 mb-48">
          {onboardingQuestions[cursor - 1].answers.map((answer, idx) => (
            <OnboardingItem key={idx}>{answer}</OnboardingItem>
          ))}
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button variant={'default'} className="w-full">
          다음
        </Button>
      </motion.div>
    </div>
  );
}
