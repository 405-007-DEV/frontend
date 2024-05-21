import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const profileVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border border-gr1',
        // outline: 'border border-gr3 bg-w text-bp b1_bold',
        // disabled: 'border border-gr2 bg-gr1 text-gr3 b1_bold',
      },
      size: {
        default: 'h-64 w-64 rounded-full',
        sm: 'h-58 rounded-md px-3',
        lg: 'h-60 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ProfileImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof profileVariants> {
  asChild?: boolean;
}

export function ProfileImage({
  src,
  className,
  variant,
  size,
}: ProfileImageProps) {
  return (
    <div className={cn(profileVariants({ variant, size, className }))}>
      <img src={src} />
    </div>
  );
}
