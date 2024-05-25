export type OnboardingQuestion = {
  question: React.ReactNode;
  answers: React.ReactNode[];
  weights: number[][];
};

export const onboardingQuestions: OnboardingQuestion[] = [
  {
    question: (
      <>
        프로젝트 초기에 팀이
        <br />
        아이디어를 모으고 있습니다.
        <br />
        <span className="h1_bold">당신은 어떻게 기여하겠습니까?</span>
      </>
    ),
    answers: [
      <>
        독창적인 아이디어를 제시하며
        <br />
        팀의 <span className="b2_bold">창의성을 자극합니다.</span>
      </>,
      <>
        현재 상황과 데이터를 분석하여
        <br />
        실현 가능한 <span className="b2_bold">아이디어를 제안합니다.</span>
      </>,
      <>
        팀원들과 함께 브레인스토밍 세션을 열어
        <br />
        <span className="b2_bold">협력하며</span> 아이디어를 발전시킵니다.
      </>,
      <>
        조용히 <span className="b2_bold">혼자서 생각을 정리한 후</span>
        <br />
        나중에 독립적으로 아이디어를 제안합니다.
      </>,
      <>
        새로운 학습 자료를 찾아와
        <br />
        <span className="b2_bold">팀과 공유하며 지속적인 학습을 촉진</span>
        합니다.
      </>,
    ],
    weights: [
      [2, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 2, 0, 1, 0, 0, 1],
      [1, 0, 0, 2, 0, 0, 1, 0],
      [0, 1, 1, 0, 2, 1, 0, 0],
      [0, 0, 0, 1, 0, 2, 1, 0],
    ],
  },
  {
    question: (
      <>
        프로젝트의 마감일이 다가오고 있는데,
        <br />
        갑자기 큰 문제가 발생했습니다.
        <br />
        <span className="h1_bold">당신은 어떻게 대처하겠습니까?</span>
      </>
    ),
    answers: [
      <>
        <span className="b2_bold">새롭고 창의적인 방법을 찾아</span>
        <br />
        문제를 해결하려고 합니다.
      </>,
      <>
        문제의 원인을 철저히 <span className="b2_bold">분석하고 데이터를</span>
        <br />
        <span className="b2_bold">기반으로 해결책</span>을 제안합니다.
      </>,
      <>
        문제 해결을 위한 <span className="b2_bold">실행 계획을 세우고</span>
        <br />
        이를 즉시 실행합니다.
      </>,
      <>
        <span className="b2_bold">팀원들과 긴급 회의를 열어</span> 의견을 모으고
        <br />
        협력하여 해결책을 찾습니다.
      </>,
      <>
        문제를 <span className="b2_bold">혼자서 해결하기 위해</span> 집중하고,
        필요
        <br />한 모든 조치를 취합니다.
      </>,
    ],
    weights: [
      [2, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 1, 1, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 2],
      [1, 0, 0, 2, 0, 0, 2, 0],
      [0, 0, 1, 0, 2, 1, 0, 1],
    ],
  },
  {
    question: (
      <>
        새로운 기술을
        <br />
        배워야 하는 상황입니다.
        <br />
        <span className="h1_bold">당신의 학습 방식은 무엇입니까?</span>
      </>
    ),
    answers: [
      <>
        기술 문서를 <span className="b2_bold">철저히 분석하고</span>
        <br />
        <span className="b2_bold">논리적으로 학습</span>합니다.
      </>,
      <>
        지속적인 학습과 성장을 위해
        <br />
        <span className="b2_bold">새로운 자료를 찾고 끊임없이 배웁니다.</span>
      </>,
      <>
        <span className="b2_bold">스스로 학습 계획을 세우고</span> 목표
        <br />
        달성을 위해 노력합니다.
      </>,
      <>
        새로운 기술을 적용할 <span className="b2_bold">창의적인</span>
        <br />
        <span className="b2_bold">방법을 찾아보며 학습</span>합니다.
      </>,
      <>
        동료들과 <span className="b2_bold">함께 학습 모임을 만들어</span>
        <br />
        <span className="b2_bold">협력하여</span> 배웁니다.
      </>,
    ],
    weights: [
      [0, 0, 2, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 2, 0, 0],
      [1, 1, 0, 0, 2, 1, 0, 1],
      [2, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 2, 1],
    ],
  },
  {
    question: (
      <>
        회사의 장기 전략을 수립하는
        <br />
        팀에 참여하게 되었습니다.
        <br />
        <span className="h1_bold">당신의 역할은 무엇입니까?</span>
      </>
    ),
    answers: [
      <>
        팀원들과 <span className="b2_bold">협력하여 모두가 공감할 수 있는</span>
        <br />
        공동의 전략을 수립합니다.
      </>,
      <>
        현재 시장 데이터를 분석하고 <span className="b2_bold">논리적으로</span>
        <br />
        <span className="b2_bold">실현 가능한 전략을 제안</span>합니다.
      </>,
      <>
        개인별로 달성을 위한 <span className="b2_bold">목표를 정하고,</span>
        <br />
        <span className="b2_bold">세부 실행 계획을 수립</span>합니다.
      </>,
      <>
        회사의 <span className="b2_bold">장기적인 목표와 큰 그림을 고려한</span>
        <br />
        <span className="b2_bold">전략을 제시</span>합니다.
      </>,
      <>
        창의적인 비전을 제시하며
        <br />
        <span className="b2_bold">혁신적인 전략을 수립합니다.</span>
      </>,
    ],
    weights: [
      [0, 0, 0, 2, 0, 0, 1, 0],
      [0, 0, 2, 0, 1, 1, 0, 1],
      [0, 0, 0, 0, 2, 0, 0, 1],
      [1, 2, 1, 1, 0, 1, 0, 0],
      [2, 1, 0, 0, 0, 0, 1, 0],
    ],
  },
];

export type OnboardingResult = {
  personality: string;
  personality_en: string;
  image: string;
  image_alt: string;
  description: React.ReactNode;
  description_text?: string;
};

export const OnboardingResults: {
  [key: string]: OnboardingResult;
} = {
  A: {
    personality: '아이디어뱅크 유형',
    personality_en: 'Idea Generator',
    image: '/images/personality/a.png',
    image_alt:
      '보라색 캐릭터가 멋진 아이디어를 생각해내고 엄지 손가락을 들고 있습니다.',
    description: (
      <>
        <span className="b1_bold">창의적이고 혁신적인 아이디어</span>를
        <br />
        창출해내는 멋진 능력을
        <br />
        가지고 있군요!
      </>
    ),
    description_text:
      '창의적이고 혁신적인 아이디어를 창출해내는 멋진 능력을 가지고 있군요!',
  },
  B: {
    personality: '전략가 유형',
    personality_en: 'Strategic Thinker',
    image: '/images/personality/b.png',
    image_alt:
      '노란색 캐릭터가 한 손에는 연필과 포스트잇을, 다른 한 손에는 노트를 들고 전략을 세우고 있습니다.',
    description: (
      <>
        장기적인 목표를 설정하고
        <br />
        <span className="b1_bold">전략적으로 계획을 세워 실행</span>하는
        <br />
        능력을 가지고 있군요!
      </>
    ),
  },
  C: {
    personality: '논리적 분석가 유형',
    personality_en: 'Logical Analyzer',
    image: '/images/personality/c.png',
    image_alt:
      '주황색 캐릭터가 돋보기를 들고 차트를 보며 데이터를 분석하고 있습니다.',
    description: (
      <>
        논리적인 접근으로 결론을 도출하고,
        <br />
        <span className="b1_bold">데이터를 중심으로</span> 사고하는
        <br />
        능력을 가지고 있군요!
      </>
    ),
  },
  D: {
    personality: '팀 플레이어 유형',
    personality_en: 'Team Player',
    image: '/images/personality/d.png',
    image_alt:
      '초록색 캐릭터가 점프를 하며 팀워크를 중시하는 모습을 보여줍니다.',
    description: (
      <>
        팀워크를 중시하며, <span className="b1_bold">협력을 통해</span>
        <br />
        함께 힘 모아 목표를 달성하는
        <br />
        능력을 가지고 있군요!
      </>
    ),
  },
  E: {
    personality: '집중력 대장 유형',
    personality_en: 'Focused Achiever',
    image: '/images/personality/e.png',
    image_alt:
      '파란색 캐릭터가 엄지 손가락을 들고 웃는 표정을 짓고 있습니다. 배경에는 집중력을 나타내는 우상향하는 차트가 있습니다.',
    description: (
      <>
        <span className="b1_bold">독립적으로 작업</span>하면서
        <br />
        스스로 목표를 설정하고
        <br />
        달성하는 능력을 가지고 있군요!
      </>
    ),
  },
  F: {
    personality: '꾸준한 학습자 유형',
    personality_en: 'Continuos Learner',
    image: '/images/personality/f.png',
    image_alt:
      '파란색 캐릭터가 손을 들고 전구를 가리키고 있습니다. 지식을 습득했을 때 기뻐하는 모습을 전구 아이콘으로 표현했습니다.',
    description: (
      <>
        성장의 비결은 꾸준함!
        <br />
        <span className="b1_bold">지속적인 학습과 성장을 중시</span>하는
        <br />
        꾸준한 학습자군요!
      </>
    ),
  },
  G: {
    personality: '커뮤니티 활동가 유형',
    personality_en: 'Community Builder',
    image: '/images/personality/g.png',
    image_alt:
      '빨간색 캐릭터의 머리 위에 말풍선과 하트 아이콘이 그려져 있습니다. 커뮤니티 활동을 즐기는 모습을 표현했습니다.',
    description: (
      <>
        <span className="b1_bold">사람들과의 네트워킹</span>을 통해
        <br />
        교류하며 기회를 만들어 나가는
        <br />
        능력을 가지고 있군요!
      </>
    ),
  },
  H: {
    personality: '실행력 마스터 유형',
    personality_en: 'Execution Master',
    image: '/images/personality/h.png',
    image_alt:
      '빨간색 캐릭터가 계획을 세우고 실행하는 모습을 보여줍니다. 배경에는 체크리스트를 나타내는 그림이 있습니다.',
    description: (
      <>
        <span className="b1_bold">계획을 세우고 실행</span>해서
        <br />
        목표를 달성해내는 멋진 능력을
        <br />
        가지고 있군요!
      </>
    ),
  },
};
