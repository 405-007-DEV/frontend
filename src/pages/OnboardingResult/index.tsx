import { Button } from '@/components/ui/button';
import { FadeUpMotion } from '@/components/Motion/FadeUpMotion';
import { safeSessionStorage } from '@toss/storage';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { OnboardingResult, OnboardingResults } from '@/constants/onboarding';

const predefinedTypes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export function OnboardingResultPage() {
  const navigate = useNavigate();
  const [type, setType] = useState<OnboardingResult>({
    personality: '',
    personality_en: '',
    image: '',
    image_alt: '',
    description: '',
  });

  // get type
  const query = new URLSearchParams(window.location.search);
  const typeFromQuery = query.get('type');
  const typeFromSession = safeSessionStorage.get('onboardingResult');
  const typeAlphabet = typeFromQuery || typeFromSession || '';

  useEffect(() => {
    const isTypeProvided = typeFromQuery || typeFromSession;
    const isValidType = predefinedTypes.includes(
      typeFromQuery || typeFromSession || '',
    );

    if (!isTypeProvided || !isValidType) {
      navigate('/onboarding');
    } else {
      setType(OnboardingResults[typeFromQuery || typeFromSession || '']);
      safeSessionStorage.remove('onboardingResult');
    }
  }, [navigate, typeFromQuery, typeFromSession]);

  return (
    <div className="px-20">
      <FadeUpMotion duration={0.5} delay={0.2}>
        <p className="text-center text-bp b1_bold mt-72">조사 결과 내 유형은</p>
      </FadeUpMotion>

      <FadeUpMotion duration={0.5} delay={0.7}>
        <section className="mt-16 mb-65 text-center">
          <h1 className="font-bold text-2xl">{type.personality}</h1>
          <h2 className="text-gr7 b1_medium">{type.personality_en}</h2>
        </section>
      </FadeUpMotion>

      <FadeUpMotion duration={0.5} delay={0.9}>
        <div className="flex justify-center mb-65">
          <img
            src={type.image}
            alt={type.image_alt}
            className="max-w-[360px] w-full"
          />
        </div>
      </FadeUpMotion>

      <FadeUpMotion duration={0.5} delay={1.1}>
        <div className="text-center mb-53 text-gr6">{type.description}</div>
      </FadeUpMotion>

      <FadeUpMotion duration={0.5} delay={1.6}>
        <Link to={`${'/recommend/result'}?type=${typeAlphabet}`}>
          <Button>나와 잘 맞는 회원 만나기</Button>
        </Link>
      </FadeUpMotion>
    </div>
  );
}
