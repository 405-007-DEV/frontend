import { PropsWithChildren } from 'react';

interface BottomBarProps extends PropsWithChildren {}

export function BottomBar({ children }: BottomBarProps) {
  return (
    <div className="fixed bottom-0 w-full right-0 left-0 border-[1px] pt-26 pb-64 px-20 bg-accent-w">
      {children}
    </div>
  );
}
