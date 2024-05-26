import { BottomBar } from '@/components/Bottom/BottomBar';
import { Icon } from '@/components/Button/Icon';
import RecommendButton from '@/components/Button/RecommendButton';
import { ChatBox } from '@/components/Chat/ChatBox';
import { ProfileHeader } from '@/components/Header/ProfileHeader';
import { ChatInput } from '@/components/Input/ChatInput';
import { recommendQuestions } from '@/constants/chat';
import { profileCardData, userId } from '@/mock/data';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PROFILE_IMAGE =
  'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png';
// const mockData: { [key: string]: any } = {
//   notSend: {
//     chatHistory: [],
//     id: '2',
//     from: '서현주',
//     to: '조현우',
//     jobType: 'design',
//   },
//   sent: {
//     chatHistory: [
//       {
//         content:
//           '안녕하세요 최근에는 인공지능과 머신러닝 기술의 발전에 관심이 많습니다. 특히, 이 기술들을 어떻게 효율적으로 활용할 수 있을지 연구하고 있어요.',
//         id: '2',
//         from: '서현주',
//         profileImage:
//           'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png',
//         date: '2024년 5월 21일 화요일',
//         time: '오전 10:15',
//       },
//     ],
//     id: '2',
//     from: '서현주',
//     to: '조현우',
//     jobType: 'design',
//   },
// };

interface DataType {
  chatHistory: {
    content: string;
    id: string;
    from: string;
    profileImage: string;
    date: string;
    time: string;
  }[];
  id: string;
  from: string;
  to: string;
  jobType: string;
}

const data: DataType = {
  chatHistory: [],
  id: userId,
  from: '서현주',
  to: '조현우',
  jobType: 'design',
};

const user = {
  id: userId,
  name: '서현주',
};

export function ChatPage() {
  const userId = useLocation().pathname.split('/')[2];

  const name = profileCardData.find((data) => data.id == userId)?.name ?? '';

  const [chatHistory, setChatHistory] = useState(data.chatHistory);

  const [input, setInput] = useState('');
  const [isSent, setIsSent] = useState(false);

  const Questions = (
    <div className="flex flex-col space-y-16 px-20 mt-20">
      <div className="flex items-center gap-4">
        <Icon icon="chat_dot" size={12} />
        <p className="b4_bold text-gr5">추천 질문으로 대화를 시작해보세요</p>
      </div>
      {recommendQuestions[data.jobType].map((recommendation) => (
        <RecommendButton
          key={recommendation}
          handleClick={() => {
            setInput(recommendation);
            handleSubmit(recommendation);
          }}
        >
          {recommendation}
        </RecommendButton>
      ))}
    </div>
  );

  const handleSubmit = (input: string) => {
    const newChatData = {
      content: JSON.stringify(input),
      id: user.id,
      from: user.id,
      profileImage: PROFILE_IMAGE,
      date: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      time: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setChatHistory((prev) => [...prev, newChatData]);
    setInput('');
    setIsSent(true);
  };

  return (
    <div>
      <ProfileHeader title={name} />
      {user.id === data.id && !chatHistory.length && Questions}
      <div className="px-20 pt-20">
        {chatHistory.length > 0 &&
          chatHistory.map((history: any, idx: number) => {
            return (
              <div key={idx}>
                {(!idx || chatHistory[idx - 1].date !== history.date) && (
                  <p className="text-gr4 b3_medium text-center mb-20 whitespace-pre">
                    {history.date}
                  </p>
                )}
                <div className="flex flex-col items-end text-gr4 b3_medium space-y-8 mb-8">
                  <ChatBox
                    className="whitespace-pre-wrap"
                    variant={history.id === user.id ? 'send' : 'receive'}
                  >
                    {JSON.parse(history.content)}
                  </ChatBox>
                  <p className="">{history.time}</p>
                </div>
              </div>
            );
          })}
      </div>
      <BottomBar className="border-t-[1px] border-t-[#e7e7e7]">
        <ChatInput
          value={input}
          onChange={(value) => {
            setInput(value);
          }}
          isSent={isSent}
          onSubmit={() => handleSubmit(input)}
        />
      </BottomBar>
    </div>
  );
}
