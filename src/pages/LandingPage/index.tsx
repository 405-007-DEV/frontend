import { LoginBottomSheet } from '@/components/Bottom/LoginBottomSheet';
import { Image } from '@/components/Image';
import { Button } from '@/components/ui/button';
import Router from '@/router/Router';
import { useState } from 'react';

export function LandingPage() {
  // TODO: 로그인 여부에 따라 버튼 문구 조건부 노출
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pt-67 pb-64 flex flex-col justify-between h-full">
      <div className="ml-20">
        <Image image="logo" size={96} />
        <h2 className="h1_bold text-gr7 mt-20 mb-16">
          실무자와 가볍게 스몰챗하며
          <br />
          커리어 레벨업!
        </h2>
        <p className="b2_light text-gr7">
          나와 잘 맞는 실무자를
          <br />
          스몰챗이 추천해드려요.
          <br />딱 30초! 4개의 질문만 답하면 돼요.
        </p>
      </div>
      <div className="space-y-[8px]">
        <Button variant={'default'}>추천받으러 가기</Button>
        {isLogin ? (
          <Button
            variant={'outline'}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            나만의 추천 목록 보기
          </Button>
        ) : (
          <LoginBottomSheet>
            <Button
              className="!w-full"
              variant={'outline'}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              로그인
            </Button>
          </LoginBottomSheet>
        )}
      </div>
    </section>
  );
}
