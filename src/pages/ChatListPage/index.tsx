import { Icon } from '@/components/Button/Icon';
import { ChatCard } from '@/components/Card';
import { Link } from 'react-router-dom';

const chatListData = [
  {
    id: '1',
    username: '조현우',
    job: 'Back-end',
    message: '안녕하세요 최근에는 인공지능과 머신러능 프로젝트를 진행중입니다.',
    time: '오후 4:20', // TODO: datetime 처리 여부
    profileImg:
      'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png',
  },
  {
    id: '2',

    username: '조현우',
    job: 'Back-end',
    message: '안녕하세요 최근에는 인공지능과 머신러능 프로젝트를 진행중입니다.',
    time: '오후 4:20', // TODO: datetime 처리 여부
    profileImg:
      'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png',
  },
  {
    id: '3',

    username: '조현우',
    job: 'Back-end',
    message:
      '안녕하세요! 김멘토 입니다. 궁금한 점 있으면 편하게 문의해주세요! 가능한 시간대는 오후 7-9시입니다.',
    time: '오후 4:20', // TODO: datetime 처리 여부
    profileImg:
      'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png',
  },
  {
    id: '4',
    username: '조현우',
    job: 'Back-end',
    message: '안녕하세요 최근에는 인공지능과 머신러능 프로젝트를 진행중입니다.',
    time: '오후 4:20', // TODO: datetime 처리 여부
    profileImg:
      'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png',
  },
];

export function ChatListPage() {
  return (
    <div className="h2_bold text-gr8 mt-9">
      {/* TODO: Change to tab with deep chat */}
      <div className="w-full h-44 flex justify-between pr-16">
        <div className="border-b-[2px] border-b-bp h-full w-86 px-20 pt-4">
          스몰챗
        </div>
        <div className="flex gap-8 items-center">
          <Icon icon="search" size={24} />
          <Icon icon="kebab" size={24} />
        </div>
      </div>
      <div>
        {chatListData.map((data) => (
          <Link to={`/chat/${data.id}`} key={data.id}>
            <ChatCard {...data} />
          </Link>
        ))}
      </div>
    </div>
  );
}
