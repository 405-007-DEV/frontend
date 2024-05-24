import { PropsWithChildren } from 'react';

export interface RecommendButtonProps extends PropsWithChildren {
  handleClick: () => void;
}

export default function RecommendButton({
  children,
  handleClick,
}: RecommendButtonProps) {
  return (
    <div
      className="break-keep cursor-pointer text-gr6 b2_light rounded-[24px] border border-[#d9d9d9] py-8 px-16 w-full"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
