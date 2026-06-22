import Image from 'next/image';
import { Sprout, Tractor } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-[#3B4631] text-white flex flex-col justify-between p-6 md:p-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-overlay">
        <Image
          src="https://placehold.co/1920x1080/3B4631/F3E287.webp?text=Golden+Wheat"
          fill
          className="object-cover"
          alt="Wheat field"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 mt-8">
        <h1 className="font-serif text-6xl md:text-8xl max-w-2xl leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Rooted in<br />the Land
        </h1>
        <div className="text-left md:text-right animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="font-serif text-7xl md:text-8xl text-[#F3E287] leading-none mb-2">
            20<span className="text-4xl text-white font-sans align-top">k</span>
          </div>
          <p className="text-sm font-medium opacity-90 max-w-[180px] md:ml-auto leading-tight">
            Hectares under sustainable cultivation
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start gap-8 mt-auto mb-20 md:mb-0">
        <p className="text-lg md:text-xl max-w-xl font-medium leading-relaxed opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          We are committed to growing more than crops &mdash; we&apos;re growing a better future for people, communities, and the planet.
        </p>
      </div>

      <div className="absolute bottom-6 left-6 right-6 md:left-16 flex justify-between items-end z-20 pointer-events-none">
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
        <h1 className="hidden lg:block font-serif text-6xl md:text-8xl leading-none text-right opacity-90 pointer-events-auto absolute right-0 bottom-0 pr-6">
          Driven by<br />Innovation
        </h1>
      </div>
    </section>
  );
}
