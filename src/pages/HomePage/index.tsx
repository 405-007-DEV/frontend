import { ProfileCard } from '@/components/Card/ProfileCard';
import { Swiper } from '@/components/Swiper/Swiper';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { UserCard } from '@/components/Card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/Button/Icon';
import { positionList } from '@/constants/positions';
import { profileCardData, userId } from '@/mock/data';

export function HomePage() {
  const navigate = useNavigate();

  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  const [nickname, setNickname] = useState('');

  return (
    <>
      <div className="pb-90">
        <div className="px-20 pt-40">
          <h3 className="h1_bold text-grs">나와 잘 어울리는 회원</h3>
          <div className="flex justify-between items-end space-y-8 mb-32">
            <p className="b1_light gr7">
              추천 회원에게
              <br />
              스몰챗을 보내보세요
            </p>
            <button
              className="h-fit"
              onClick={() => {
                // invalidate query
              }}
            >
              <Badge variant={'default'}>다시 추천 받기</Badge>
            </button>
          </div>
          <Swiper>
            {profileCardData.slice(0, 3).map((item) => (
              <SwiperSlide
                onClick={() => {
                  navigate(`/profile/${item.id}`);
                }}
                key={item.id}
              >
                <ProfileCard
                  company={item.company}
                  name={item.name}
                  job={item.job}
                  year={item.year}
                  info={item.info}
                  profileImg={item.profileImg}
                  isBookmark={item.isBookmark}
                  id={item.id}
                  className="px-10 py-20"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="h-8 bg-[#f5f5f5] my-24" />

        <div className="px-20">
          <div className="text-gr1 b2_medium py-10 px-18 h-40 bg-gr1 rounded-full flex justify-between gap-2 mb-20">
            <Input
              className="bg-gr1 py-10 text-gr8 border-none"
              placeholder="검색"
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (!isMobile && e.key === 'Enter' && !e.shiftKey) {
                  navigate(`/search?nickname=${nickname}`);
                  e.preventDefault();
                }
              }}
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(`/search?nickname=${nickname}`);
              }}
            >
              <Icon icon="search" />
            </div>
          </div>

          <ul className="flex items-center h-103 justify-center py-8 px-20 gap-4">
            {positionList.map((item) => (
              <li
                className="flex flex-col justify-end items-center h-full space-y-8 w-84 cursor-pointer"
                onClick={() => {
                  navigate(`/search?position=${item.position}`);
                }}
                key={item.position}
              >
                <Icon size={item.size} icon={item.icon} />
                <p
                  className={`b3_medium text-grs ${item.title === '개발' ? 'pt-5' : ''}`}
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-8 bg-[#f5f5f5] my-24" />

        <div className="px-20">
          <h3 className="h1_bold text-grs mb-24">더 많은 회원</h3>
          {profileCardData
            .filter((data) => data.id !== userId)
            .map((item) => (
              <UserCard
                id={item.id}
                name={item.name}
                job={item.job}
                intro={item.interest}
                status={item.status}
                info={item.info}
                profileImage={item.profileImg}
                key={item.id}
                onClick={() => {
                  navigate(`/profile/${item.id}`);
                }}
                isBookmark={item.isBookmark}
                extraContent={
                  <Button
                    variant={'outline'}
                    size="xs"
                    className="border-bp mt-16 b3_bold"
                    onClick={(e) => {
                      navigate(`/chat/${item.id}`);
                      e.stopPropagation();
                    }}
                  >
                    스몰챗 보내기
                  </Button>
                }
              />
            ))}
        </div>
      </div>
    </>
  );
}
