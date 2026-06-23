'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import Button from '../ui/Button';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

export default function BookingForm() {
  const [appointmentDate, setAppointmentDate] = React.useState<Date | undefined>();

  return (
    <div className="rounded-[2rem] bg-[#F9F7F2]/92 text-[#2D2926] backdrop-blur-xl border border-white/25 shadow-2xl p-6 md:p-8">
      <div className="mb-6">
        {/* <span className="inline-flex rounded-full border border-[#2D2926]/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#59644D]">
          Appointment
        </span> */}
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mt-4 mb-3">
          Book a Farm Visit
        </h2>
        <p className="text-sm text-[#2D2926]/70 leading-relaxed">
          Reserve a quick consultation with our field team to discuss crops, soil
          health, and tailored support.
        </p>
      </div>
      <form className="grid grid-cols-1 gap-4">
        <Input type="text" placeholder="Full name" />
        <Input type="email" placeholder="Email address" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  'flex h-12 w-full items-center justify-between rounded-full border border-[#2D2926]/10 bg-white/80 px-5 text-sm text-left text-[#2D2926] outline-none transition-[border-color,box-shadow] focus-visible:border-[#59644D] focus-visible:ring-2 focus-visible:ring-[#59644D]/15',
                  !appointmentDate && 'text-[#2D2926]/45'
                )}
              >
                <span>
                  {appointmentDate ? format(appointmentDate, 'PPP') : 'Pick a date'}
                </span>
                <CalendarIcon className="h-4 w-4 text-[#2D2926]/55" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={appointmentDate}
                onSelect={setAppointmentDate}
              />
            </PopoverContent>
          </Popover>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="crop-planning">Crop Planning</SelectItem>
              <SelectItem value="seed-supply">Seed Supply</SelectItem>
              <SelectItem value="soil-assessment">Soil Assessment</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Textarea rows={4} placeholder="Tell us about your farm needs" />
        <Button className="w-full justify-center">
          Book Appointment
        </Button>
      </form>
    </div>
  );
}
