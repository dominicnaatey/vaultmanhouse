'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col gap-4',
        month: 'space-y-4',
        month_caption: 'relative flex items-center justify-center pt-1',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center gap-1',
        button_previous:
          'absolute left-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#2D2926]/10 bg-white/80 text-[#2D2926] transition-colors hover:bg-[#59644D]/10',
        button_next:
          'absolute right-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#2D2926]/10 bg-white/80 text-[#2D2926] transition-colors hover:bg-[#59644D]/10',
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday:
          'w-9 rounded-md text-[0.8rem] font-medium text-[#2D2926]/55',
        week: 'mt-2 flex w-full',
        day: 'h-9 w-9 p-0 text-sm',
        day_button:
          'h-9 w-9 rounded-full text-sm transition-colors hover:bg-[#59644D]/10 aria-selected:bg-[#59644D] aria-selected:text-white',
        today: 'font-semibold text-[#59644D]',
        selected:
          'bg-[#59644D] text-white hover:bg-[#59644D] hover:text-white',
        outside: 'text-[#2D2926]/30 aria-selected:text-white/70',
        disabled: 'text-[#2D2926]/25',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: iconClassName, ...iconProps }) =>
          orientation === 'left' ? (
            <ChevronLeft className={cn('h-4 w-4', iconClassName)} {...iconProps} />
          ) : (
            <ChevronRight className={cn('h-4 w-4', iconClassName)} {...iconProps} />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
