type OnboardingQuestion = {
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
];
