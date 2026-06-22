import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const ACCORDION_ITEMS = ['Cost Efficiency', 'Expert Support'];

export default function AccordionSection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[650px]">
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <Image
          src="https://placehold.co/800x800/EAE7DE/3B4631.webp?text=Tractor+Field"
          fill
          alt="Tractor"
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-[#5F4B3C] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-wider text-white/70 border border-white/20 rounded-full px-4 py-1.5 mb-10 w-max">
          Trusted Farming Solutions
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight">
          From Field to Future
        </h2>

        <div className="flex flex-col gap-8">
          {/* First item — expanded by default */}
          <div className="border-b border-white/20 pb-8">
            <div className="flex justify-between items-center mb-6 cursor-pointer">
              <h3 className="text-2xl font-medium text-[#F3E287]">Higher Yields</h3>
              <div className="w-8 h-8 rounded-full border border-[#F3E287] flex items-center justify-center">
                <ArrowDown className="rotate-180 w-4 h-4 text-[#F3E287] transition-transform duration-300" />
              </div>
            </div>
            <p className="text-sm md:text-base text-white/80 leading-relaxed pr-8 lg:pr-16">
              Our advanced seeds, soil care, and farming techniques help farmers produce more — with less. We promote eco-friendly practices that protect soil, water, and biodiversity for long-term success.
            </p>
          </div>

          {ACCORDION_ITEMS.map((title) => (
            <div
              key={title}
              className="border-b border-white/20 pb-8 flex justify-between items-center cursor-pointer group hover:border-white/50 transition-colors"
            >
              <h3 className="text-2xl font-medium group-hover:text-[#F3E287] transition-colors">{title}</h3>
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#F3E287]">
                <ArrowDown className="w-4 h-4 group-hover:text-[#F3E287] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
