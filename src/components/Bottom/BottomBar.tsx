import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface BottomBarProps extends PropsWithChildren {
  className?: string;
}

export function BottomBar({ children, className }: BottomBarProps) {
  return (
    <div
      className={cn(
        'fixed z-10 bottom-0 w-full right-0 left-0 pt-26 pb-34 px-20 bg-accent-w max-w-[500px] mx-auto',
        className,
      )}
    >
      {children}
    </div>
  );
}
