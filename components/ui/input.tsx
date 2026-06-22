'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex h-12 w-full rounded-full border border-[#2D2926]/10 bg-white/80 px-5 text-sm text-[#2D2926] shadow-sm outline-none transition-[border-color,box-shadow] placeholder:text-[#2D2926]/45 focus-visible:border-[#59644D] focus-visible:ring-2 focus-visible:ring-[#59644D]/15 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
