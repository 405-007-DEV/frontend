import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-sm border px-5 py-4 b4_medium font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent text-b5 bg-[#ebf3ff]',
        notification:
          'rounded-[19px] bg-accent-r2 text-accent-w b4_bold py-0 border-none',
        outline: 'p-4 rounded-[4px] border-[1px] border-gr1 text-gr4 b2_light',
        // secondary:
        //   'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // destructive:
        //   'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        // outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
