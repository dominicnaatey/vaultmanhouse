'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-28 w-full rounded-[1.5rem] border border-[#2D2926]/10 bg-white/80 px-5 py-4 text-sm text-[#2D2926] shadow-sm outline-none transition-[border-color,box-shadow] placeholder:text-[#2D2926]/45 focus-visible:border-[#59644D]/50 focus-visible:ring focus-visible:ring-[#59644D]/25 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };
