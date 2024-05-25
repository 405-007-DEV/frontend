import { BottomBar } from '@/components/Bottom/BottomBar';
import { ProfileCard } from '@/components/Card/ProfileCard';
import { ProfileHeader } from '@/components/Header/ProfileHeader';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const userData = {
  id: '1',
  name: '조현우',
  job: 'Back-end',
  company: '세븐텐 회사',
  intro:
    '저는 백엔드 개발자로서 진로 고민, 취업 준비, 그리고 직장 생활에 대해 멘토링을 하고 있습니다. 듣기 좋은 추상적인 이야기보다는 현실적이고 구체적인 경험을 나누려 노력합니다.',
  info: {
    smallTalk: 36,
    responsePercent: 90,
  },
  experience: [
    {
      startYear: '2022',
      endYear: null,
      company: '세븐텐',
      job: '시니어 백엔드 개발',
    },
    {
      startYear: '2014',
      endYear: '2022',
      company: '일렉트로',
      job: '백엔드 개발',
    },
  ],
  year: '15년+',
  profileImg:
    'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png',
  isBookmark: false,
  topics: [
    '최근 관심있는 개발 이슈',
    '핀테크 회사에서의 백엔드 개발자의 업무 환경',
    '효율성 있게 개발하는 방법',
  ],
};

const userId = '1';

export function ProfilePage() {
  const currentLocation = useLocation().pathname;

  const isMyProfile = currentLocation.split('/')[2] === userId;

  return (
    <>
      <div className={`space-y-36 ${isMyProfile ? 'pb-24' : 'pb-164'}`}>
        <ProfileHeader title="회원 프로필" />
        <div className="px-20 space-y-36">
          <ProfileCard
            company={userData.company}
            name={userData.name}
            job={userData.job}
            year={userData.year}
            info={userData.info}
            profileImg={userData.profileImg}
            isBookmark={userData.isBookmark}
            id={userData.id}
          />
          <div>
            <h3 className="b1_bold text-gr8 mb-12">소개</h3>
            <p className="b1_light text-gr8">{userData.intro}</p>
          </div>

          <div>
            <h3 className="b1_bold text-gr8 mb-12">이력</h3>
            {userData.experience.map(
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
              <span className="text-bp">{userData.name}</span>님이 제안하는
              스몰톡 주제
            </h3>
            <p className="b3_light text-gr5">
              {userData.topics.length
                ? '아래 주제 외에도 궁금한 것을 자유롭게 질문할 수 있어요.'
                : `${userData.name}이 제안한 스몰톡 주제가 아직 없어요.`}
            </p>
            <div>
              {userData.topics.length ? (
                userData.topics.map((topic) => (
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
          <Link to={`/chat/${userData.id}`}>
            <Button className="w-full">스몰챗 신청</Button>
          </Link>
        </BottomBar>
      )}
    </>
  );
}
