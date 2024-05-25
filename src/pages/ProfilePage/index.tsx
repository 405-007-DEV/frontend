import { BottomBar } from '@/components/Bottom/BottomBar';
import { ProfileCard } from '@/components/Card/ProfileCard';
import { ProfileHeader } from '@/components/Header/ProfileHeader';
import { Button } from '@/components/ui/button';
import { profileCardData, userId } from '@/mock/data';
import { Link, useLocation } from 'react-router-dom';

export function ProfilePage() {
  const currentLocation = useLocation().pathname;
  const currentUserId = currentLocation.split('/')[2];
  const isMyProfile = currentUserId === userId;
  const profileData = profileCardData.find((data) => data.id === currentUserId);

  if (!profileData) return <></>;
  return (
    <>
      <div className={`space-y-36 ${isMyProfile ? 'pb-24' : 'pb-164'}`}>
        <ProfileHeader title="회원 프로필" />
        <div className="px-20 space-y-36">
          <ProfileCard
            company={profileData.company}
            name={profileData.name}
            job={profileData.job}
            year={profileData.year}
            info={profileData.info}
            profileImg={profileData.profileImg}
            isBookmark={profileData.isBookmark}
            id={profileData.id}
          />
          <div>
            <h3 className="b1_bold text-gr8 mb-12">소개</h3>
            <p className="b1_light text-gr8">{profileData.intro}</p>
          </div>

          <div>
            <h3 className="b1_bold text-gr8 mb-12">이력</h3>
            {profileData.experience.map(
              ({ startYear, endYear, company, job }, idx) => (
                <p
                  className="b1_light text-gr8"
                  key={idx}
                >{`${endYear ? '전)' : '현)'} ${company} / ${job} (${startYear}~${endYear ?? ''})`}</p>
              ),
            )}
          </div>

          <div>
            <h3 className="b1_bold text-gr8 mb-12">
              <span className="text-bp">{profileData.name}</span>님이 제안하는
              스몰톡 주제
            </h3>
            <p className="b3_light text-gr5">
              {profileData.topics.length
                ? '아래 주제 외에도 궁금한 것을 자유롭게 질문할 수 있어요.'
                : `${profileData.name}이 제안한 스몰톡 주제가 아직 없어요.`}
            </p>
            <div>
              {profileData.topics.length ? (
                profileData.topics.map((topic) => (
                  <div
                    key={topic}
                    className="b2_medium text-gr6 py-8 pl-16 bg-[#EBF3FF] rounded-[8px] mt-24"
                  >
                    {topic}
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      {currentLocation.split('/')[2] !== userId && (
        <BottomBar>
          {/* CHECK: chat route 설정 */}
          <Link to={`/chat/${profileData.id}`}>
            <Button className="w-full">스몰챗 신청</Button>
          </Link>
        </BottomBar>
      )}
    </>
  );
}
