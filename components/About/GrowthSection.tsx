import Image from 'next/image';
import { Factory } from 'lucide-react';

import { ABOUT_OPERATIONS } from './about-data';

export default function AboutGrowthSection() {
  return (
    <section className="grid gap-8 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
      <div className="relative overflow-hidden rounded-4xl bg-white/70">
        <div className="relative h-104">
          <Image
            src="/images/img03.webp"
            alt="Commodity storage and agricultural operations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#2D2926]/30 via-transparent to-transparent" />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        {/* <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
          How It Started
        </span> */}
        <span className="mb-6 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#8F9A80] border-2 border-[#8F9A80]/60 rounded-full px-4 py-1.5 w-max">
          How It Started
        </span>
        <h2 className="max-w-2xl font-hero text-4xl leading-tight md:text-6xl">
          Agribusiness was the first sector identified for growth
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
          The first branch to be developed was agribusiness, with commodity
          trading at its core. Since then, Vaultman House has built a record of
          over 4,000 MT of soybean supply, equal to about 80 trailers delivered
          to Tema port for export, local processing, or resale.
        </p>

        <div className="mt-8 grid gap-4">
          {ABOUT_OPERATIONS.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#2D2926]/8 bg-[#EBECE7] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D46A3A] text-white">
                  <Factory className="h-4 w-4" />
                </div>
                <h3 className="font-hero text-2xl leading-tight">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#2D2926]/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
