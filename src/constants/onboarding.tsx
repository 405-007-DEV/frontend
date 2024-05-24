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
