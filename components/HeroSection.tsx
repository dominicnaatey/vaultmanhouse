 'use client';

import * as React from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import { CalendarIcon, Sprout, Tractor } from 'lucide-react';
import Button from './ui/Button';
import { Calendar } from './ui/calendar';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [appointmentDate, setAppointmentDate] = React.useState<Date | undefined>();

  return (
    <section className="relative w-full min-h-[980px] lg:min-h-[760px] xl:h-[85vh] text-white flex flex-col justify-between p-6 md:p-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100">
        <Image
          src="/images/soybeans.webp"
          fill
          className="object-cover scale-x-[-1]"
          alt="Wheat field"
        />
        <div className="absolute inset-0 bg-[#59644D]/40" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mt-8">
        <h1 className="font-serif text-6xl md:text-8xl max-w-2xl leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Rooted in<br />the Land
        </h1>
        <div className="w-full max-w-md lg:self-start animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="rounded-[2rem] bg-[#F9F7F2]/92 text-[#2D2926] backdrop-blur-xl border border-white/25 shadow-2xl p-6 md:p-8">
            <div className="mb-6">
              <span className="inline-flex rounded-full border border-[#2D2926]/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#59644D]">
                Appointment
              </span>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mt-4 mb-3">
                Book a Farm Visit
              </h2>
              <p className="text-sm text-[#2D2926]/70 leading-relaxed">
                Reserve a quick consultation with our field team to discuss crops, soil health, and tailored support.
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
                        'flex h-12 w-full items-center justify-between rounded-full border border-[#2D2926]/10 bg-white/80 px-5 text-sm text-left text-[#2D2926] shadow-sm outline-none transition-[border-color,box-shadow] focus-visible:border-[#59644D] focus-visible:ring-2 focus-visible:ring-[#59644D]/15',
                        !appointmentDate && 'text-[#2D2926]/45'
                      )}
                    >
                      <span>
                        {appointmentDate
                          ? format(appointmentDate, 'PPP')
                          : 'Pick a date'}
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
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start gap-8 mt-auto mb-20 md:mb-0">
        <p className="text-lg md:text-xl max-w-xl font-medium leading-relaxed opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          We are committed to growing more than crops &mdash; we&apos;re growing a better future for people, communities, and the planet.
        </p>
      </div>

      <div className="relative z-20 mt-10 flex flex-col gap-6 lg:absolute lg:bottom-6 lg:left-6 lg:right-6 md:lg:left-16 lg:flex-row lg:justify-between lg:items-end pointer-events-none">
        <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
          <div className="bg-[#2B3521]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-[#2B3521] transition-colors cursor-pointer">
            <Sprout className="text-[#F3E287] w-8 h-8 shrink-0" />
            <span className="text-sm font-medium leading-tight">Seed Supply &<br />Crop Planning</span>
          </div>
          <div className="bg-[#59644D]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-[#59644D] transition-colors cursor-pointer">
            <Tractor className="text-white w-8 h-8 shrink-0" />
            <span className="text-sm font-medium leading-tight">Crop Protection<br />Services</span>
          </div>
        </div>
        <h1 className="hidden lg:block font-serif text-6xl md:text-8xl leading-none text-right opacity-90 pointer-events-auto lg:absolute lg:right-0 lg:bottom-0 lg:pr-6">
          Driven by<br />Innovation
        </h1>
      </div>
    </section>
  );
}
