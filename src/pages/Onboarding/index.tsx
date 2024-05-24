import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { safeSessionStorage } from '@toss/storage';
import { onboardingQuestions } from '@/constants/onboarding';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { calculateOnboardingResult } from '@/utils/onboarding';
import { FadeUpMotion } from '@/components/Motion/FadeUpMotion';

const OnboardingQuestion: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="mb-[30px]">
      <h2 className="h1_light">{children}</h2>
    </section>
  );
};

type OnboardingItemProps = {
  itemIndex: number;
  currentAnswer: number;
  onClick: () => void;
};

const OnboardingItem: FC<PropsWithChildren<OnboardingItemProps>> = ({
  children,
  itemIndex,
  currentAnswer,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        'w-full rounded-full border-1 h-[56px] flex justify-center items-center hover:bg-b1 hover:cursor-pointer transition-colors duration-100 ease-in-out select-none',
        itemIndex === currentAnswer ? 'bg-b1 border-b4 text-b6' : 'bg-white',
      )}
      onClick={onClick}
      // 접근성 지원
      tabIndex={0}
      role="button"
      aria-pressed={itemIndex === currentAnswer}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <span className="b2_light text-center">{children}</span>
    </div>
  );
};

export function OnboardingPage() {
  const [cursor, setCursor] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState<number>(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  // 다음 버튼 클릭 시 실행되는 함수
  const handleSubmit = () => {
    // 답변이 선택되지 않았을 때 에러 메시지 출력
    if (currentAnswer === -1) {
      setShowError(true);
      return;
    }

    // 공통 로직
    const newAnswers = [...answers];
    newAnswers[cursor - 1] = currentAnswer;
    safeSessionStorage.set('onboardingAnswers', JSON.stringify(newAnswers));
    setAnswers(newAnswers);

    setShowError(false);
    setCurrentAnswer(-1);
    setCursor(cursor + 1);
    safeSessionStorage.set('onboardingCursor', String(cursor + 1));

    // 4번일 때는 최종 결과 계산 후 결과 페이지로 이동
    if (cursor === 4) {
      // 온보딩 결과 계산
      const result = calculateOnboardingResult(newAnswers);

      // 결과 이상 없으면 기본 처리
      setAnswers([]);
      setCursor(1);
      safeSessionStorage.remove('onboardingCursor');
      safeSessionStorage.remove('onboardingAnswers');

      // 결과 페이지로 이동
      safeSessionStorage.set('onboardingResult', String(result));
      navigate('/onboarding/result?type=' + result, { replace: true });
    }
  };

  // 각 답변 선택 시 실행되는 함수
  const handleSelect = (idx: number) => {
    if (currentAnswer === idx) {
      setCurrentAnswer(-1);
      return;
    }

    setCurrentAnswer(idx);
    setShowError(false);
  };

  useEffect(() => {
    const onboardingCursor = safeSessionStorage.get('onboardingCursor');
    const onboardingAnswers = safeSessionStorage.get('onboardingAnswers');

    if (onboardingCursor) {
      if (Number(onboardingCursor) > 4 || Number(onboardingCursor) < 1) {
        safeSessionStorage.set('onboardingCursor', '1');
      }

      setCursor(Number(onboardingCursor));
    } else {
      safeSessionStorage.set('onboardingCursor', '1');
    }

    if (onboardingAnswers) {
      setAnswers(JSON.parse(onboardingAnswers));
    } else {
      safeSessionStorage.set('onboardingAnswers', JSON.stringify([]));
    }
  }, []);

  return (
    <div className="px-20">
      <FadeUpMotion duration={0.5} delay={0}>
        <section className="w-full my-24">
          <Progress
            value={(cursor / 4) * 100}
            className="w-full bg-gr1 h-12"
            indicatorColor="var(--colors-b3)"
          />
        </section>
      </FadeUpMotion>

      <FadeUpMotion duration={0.5} delay={0.2}>
        <section className="mb-[35px]">
          <div className="b2_medium" aria-label={`Question ${cursor}`}>
            Q{cursor}
          </div>
        </section>
      </FadeUpMotion>

      <FadeUpMotion duration={0.5} delay={0.2}>
        <OnboardingQuestion>
          {onboardingQuestions[cursor - 1].question}
        </OnboardingQuestion>
      </FadeUpMotion>

      <FadeUpMotion duration={0.5} delay={0.4}>
        <section className="flex flex-col gap-20 mb-48">
          {onboardingQuestions[cursor - 1].answers.map((answer, idx) => (
            <OnboardingItem
              key={idx}
              onClick={() => handleSelect(idx)}
              itemIndex={idx}
              currentAnswer={currentAnswer}
            >
              {answer}
            </OnboardingItem>
          ))}
        </section>
      </FadeUpMotion>

      {showError && (
        <div className="text-red-500 text-center mb-20 text-sm">
          답변을 선택해주세요.
        </div>
      )}

      <FadeUpMotion duration={0.5} delay={0.6}>
        <Button variant={'default'} className="w-full" onClick={handleSubmit}>
          다음
        </Button>
      </FadeUpMotion>
    </div>
  );
}
