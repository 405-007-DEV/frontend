import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { OnboardingResults } from '@/constants/onboarding';

const BlankSection = () => {
  return <div className="w-full h-8 bg-[#F5F5F5]"></div>;
};

export function Mypage() {
  return (
    <div className="">
      <section className="flex justify-between items-center px-20 py-35">
        <Link to="/profile/1">
          <div className="flex gap-8">
            <img
              src="../../../../images/profile/profile_3.webp"
              alt=""
              className="w-40 h-40 rounded-full"
            />
            <div>
              <h2 className="h1_medium text-black">서현주</h2>
              <div className="b4_light text-gr3">UX Designer | 8년</div>
            </div>
          </div>
        </Link>
        <Button className="bg-gr7 w-90 h-32 b2_medium rounded-sm">
          프로필 수정
        </Button>
      </section>

      <BlankSection />

      <section className="flex justify-between items-center px-20 py-35">
        <div className="b1_bold">프로필 공개</div>

        <div className="w-56 h-30 bg-b2 rounded-full relative">
          <div className="w-22 h-22 bg-white rounded-full absolute right-4 top-4"></div>
        </div>
      </section>

      <BlankSection />

      <section className="px-20 py-35">
        <h3 className="b1_bold mb-20">내 유형</h3>

        <div className="flex items-center border-gr1 border-1 rounded-md p-20 mb-20 gap-20">
          <div className="w-84 h-84 flex justify-center items-center">
            <img
              className="w-56 h-56"
              src="/images/personality/g-square.png"
              alt={OnboardingResults['A'].image_alt}
            />
          </div>

          <div className="flex flex-col gap-12">
            <h2 className="b3_bold text-grs">
              {OnboardingResults['A'].personality}
            </h2>
            <div className="b3_medium text-gr6">
              {OnboardingResults['A'].description_text}
            </div>
          </div>
        </div>

        <Link to="/onboarding">
          <Button variant="outline" className="border-bp b3_bold h-32">
            챗 유형 다시 설정하기
          </Button>
        </Link>
      </section>

      <BlankSection />

      <section className="px-20 py-24">
        <Link to="/">
          <div className="b1_bold text-gr5 font-medium py-14">로그아웃</div>
        </Link>
      </section>
    </div>
  );
}
