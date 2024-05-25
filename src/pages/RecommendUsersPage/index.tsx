import { BottomBar } from '@/components/Bottom/BottomBar';
import { LoginBottomSheet } from '@/components/Bottom/LoginBottomSheet';
import { UserCard } from '@/components/Card';
import { Button } from '@/components/ui/button';
import { profileCardData } from '@/mock/data';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
export interface CardInfoProps {
  id: string;
  name: string;
  job: string;
  intro: string;
  status: string;
  info: {
    smallTalk: number;
    responsePercent: number;
  };
  isBookmark?: boolean;
  onClick?: () => void;
  extraContent?: ReactNode;
  profileImage: string;
}

export function RecommendUsersPage() {
  return (
    <div className="pt-32 pb-164 px-20">
      <h2 className="h1_bold mb-16">나와 잘 어울리는 회원</h2>
      <p className="b1_light text-gr7 mb-32">
        테스트 결과를 바탕으로 내 성장을
        <br />
        가장 잘 도와줄 회원을 추천해요
      </p>
      <div>
        {profileCardData.slice(0, 3).map((item) => (
          <LoginBottomSheet key={item.id}>
            <UserCard
              id={item.id}
              name={item.name}
              job={item.job}
              intro={item.interest}
              status={item.status}
              info={item.info}
              profileImage={item.profileImg}
              isBookmark={item.isBookmark}
            />
          </LoginBottomSheet>
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
