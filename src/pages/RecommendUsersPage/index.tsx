import { BottomBar } from '@/components/Bottom/BottomBar';
import { UserCard } from '@/components/UserCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export interface CardInfoProps {
  id: string;
  name: string;
  job: string;
  intro: string;
  status: string;
  info: {
    smallTalk: number;
    deepTalk: number;
    responsePercent: number;
  };
  isBookmark: boolean;
}

export function RecommendUsersPage() {
  const mockUserList = [
    {
      id: '1',
      name: 'Alex',
      job: 'ux designer',
      intro:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem tenetur qui',
      status: '스몰톡가능',
      info: {
        smallTalk: 36,
        deepTalk: 30,
        responsePercent: 90,
      },
    },
    {
      id: '2',
      name: 'Alex',
      job: 'ux designer',
      intro:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem tenetur qui',
      status: 'on',
      info: {
        smallTalk: 36,
        deepTalk: 30,
        responsePercent: 90,
      },
    },
    {
      id: '3',
      name: 'Alex',
      job: 'ux designer',
      intro:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem tenetur qui',
      status: 'on',
      info: {
        smallTalk: 36,
        deepTalk: 30,
        responsePercent: 90,
      },
    },
  ];

  return (
    <div className="pt-32 pb-164">
      <h2 className="h1_bold mb-16">나와 잘 어울리는 회원</h2>
      <p className="b1_light text-gr7 mb-32">
        테스트 결과를 바탕으로 내 성장을
        <br />
        가장 잘 도와줄 회원을 추천해요
      </p>
      <div>
        {mockUserList.map((item) => (
          <UserCard {...item} isBookmark={true} key={item.id} />
        ))}
      </div>
      <BottomBar>
        <Link to="/">
          <Button className="w-full">더 많은 회원 보기</Button>
        </Link>
      </BottomBar>
    </div>
  );
}
