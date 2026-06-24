import Image from 'next/image';
import { Sprout, Tractor } from 'lucide-react';

import BookingForm from './booking form/BookingForm';

export default function HeroSection() {
  return (
    <section className="relative -mt-22 min-h-screen w-full pt-22 text-white flex flex-col justify-between p-6 md:-mt-19 md:pt-24 md:p-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100">
        <Image
          src="/images/soybeans.webp"
          fill
          className="object-cover scale-x-[-1]"
          alt="Wheat field"
        />
        <div className="absolute inset-0 bg-[#59644D]/50" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mt-8">
        <h1 className="font-serif font-bold text-6xl md:text-[78px] max-w-230 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          We Trade, Produce, Process, and Export to give you maximum value.
        </h1>
        <div className="w-full max-w-md lg:self-start animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <BookingForm />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start gap-8 mb-20 md:mb-0">
        <p className="text-lg md:text-xl max-w-xl font-medium leading-relaxed opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          The future rests on agribusiness and its supply chain network
        </p>
      </div>

      {/* <div className="relative z-20 mt-10 flex flex-col gap-6 lg:absolute lg:bottom-6 lg:left-6 lg:right-6 md:lg:left-16 lg:flex-row lg:justify-between lg:items-end pointer-events-none">
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
      </div> */}
    </section>
  );
}
