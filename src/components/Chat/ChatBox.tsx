import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

export interface ChatBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBoxVariants>,
    PropsWithChildren {}

const chatBoxVariants = cva(
  'text-gr7 b1_light p-12 rounded-[15px] max-w-[80%]',
  {
    variants: {
      variant: {
        send: 'bg-[#ecf1ff] rounded-tr-none float-right',
        receive: 'bg-gr1 rounded-tl-none',
      },
    },
    defaultVariants: {
      variant: 'send',
    },
  },
);

export function ChatBox({ children, variant, className }: ChatBoxProps) {
  return (
    <div className={cn(chatBoxVariants({ variant }), className)}>
      {children}
    </div>
  );
}
