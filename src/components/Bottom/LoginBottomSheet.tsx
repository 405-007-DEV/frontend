import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { PropsWithChildren } from 'react';
import { Button } from '../ui/button';
import { Icon, IconButton } from '../Button/Icon';
import { Link } from 'react-router-dom';

interface LoginBottomSheetProps extends PropsWithChildren {}

export function LoginBottomSheet({ children }: LoginBottomSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side={'bottom'}
        className="h-[563px] bg-accent-w rounded-t-[24px] "
      >
        <div className="mt-26 mr-20 flex justify-end">
          <SheetClose asChild>
            <IconButton icon="close" />
          </SheetClose>
        </div>
        <SheetHeader className="text-start pl-25 mb-50 mt-18">
          <SheetTitle className="text-bp b3_bold mb-8">Welcome</SheetTitle>
          <SheetDescription className="h2_medium text-gr8">
            지금 가입하고
            <br />
            <span className="h2_bold text-grs">스몰챗을</span> 시작해 보아요!
          </SheetDescription>
        </SheetHeader>
        <img src="/images/login_img.png" />
        <SheetFooter className="mt-50 mx-20">
          <SheetClose asChild>
            {/* FIXME: 로그인 API 연동 */}
            <Link to="/home">
              <Button
                className="space-x-18 text-gr6 b2_medium"
                variant={'outline'}
              >
                <Icon size={20} icon="google" />
                <span>Google로 스몰챗 시작하기</span>
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
