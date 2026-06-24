'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const ACCORDION_ITEMS = [
  {
    title: 'International Supply',
    content:
      'Vaultman House is tried and tested in the commodity trade space, with over 4,000MT+ of soybean supply and a growing footprint across regional markets.',
  },
  {
    title: 'Transparent Relations',
    content:
      'We prioritize crystal-clear business relationships, open communication, and customer satisfaction so every partnership is built on trust.',
  },
  {
    title: 'Reliable Delivery',
    content:
      'Our team focuses on fast, dependable supply support that helps clients meet targets, deadlines, and quality expectations without compromise.',
  },
  // {
  //   title: 'Regional Reach',
  //   content:
  //     'From Ghana to Burkina Faso and Mali, our operations are built around strong market knowledge and a practical understanding of cross-border agribusiness trade.',
  // },
  // {
  //   title: 'Processing And Export Growth',
  //   content:
  //     'Beyond commodity trading, we are expanding into processing and export to create a sustainable agribusiness ecosystem that delivers even greater value.',
  // },
];

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section className="relative flex min-h-150 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/img05.webp"
          fill
          alt="Soybean commodity supply"
          className="object-cover scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-[#2D2926]/35" />
      </div>

      <div className="relative z-10 ml-auto w-full lg:w-1/2 bg-black/5 text-white p-8 md:p-16 lg:p-34 backdrop-blur-xl flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-wider text-white/80 border-2 border-white/50 rounded-full px-4 py-1.5 mb-10 w-max">
          Why Choose Vaultman House
        </span>
        <h2 className="font-hero text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight">
          Built for Reliable Agro Trade Across West Africa
        </h2>

        <div className="flex flex-col gap-6">
          {ACCORDION_ITEMS.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={item.title}
                className="border-b border-white/20 pb-6 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="flex w-full items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <h3 className={`font-hero text-2xl transition-colors`}>
                    {item.title}
                  </h3>
                  <div className={` flex items-center justify-center transition-colors ${isOpen ? 'border-[#F3E287]' : 'border-white/30 group-hover:border-[#F3E287]'}`}>
                    <ArrowDown
                      className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#F3E287]' : 'group-hover:text-[#F3E287]'}`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed pr-8 lg:pr-16">
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
