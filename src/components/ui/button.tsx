import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none w-full',
  {
    variants: {
      variant: {
        default: 'bg-bp text-white b1_bold',
        outline: 'border border-gr3 bg-w text-bp b1_bold',
        disabled: 'border border-gr2 bg-gr1 text-gr3 b1_bold',
      },
      size: {
        default: 'h-56 px-4 py-2 rounded-md',
        xs: 'h-32 rounded-md px-3 b',
        sm: 'h-58 rounded-md px-3',
        lg: 'h-60 rounded-md px-8',
        icon: 'h-10 w-10 b3_bold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
