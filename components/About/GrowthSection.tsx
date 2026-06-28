import { Factory } from 'lucide-react';

import { ABOUT_OPERATIONS } from './about-data';

export default function AboutGrowthSection() {
  return (
    <section className="pt-8 mb-36">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="flex flex-col justify-center">
        {/* <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
          How It Started
        </span> */}
          <span className="mb-6 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#8F9A80] border-2 border-[#8F9A80]/60 rounded-full px-4 py-1.5 w-max">
            How It Started
          </span>
          <h2 className="max-w-xl font-hero text-4xl leading-tight md:text-5xl">
            Agribusiness was the first sector identified for growth
          </h2>
        </div>

        <div className="flex flex-col justify-center lg:pt-12">
          <p className="max-w-xl text-sm leading-relaxed text-[#2D2926]/75 md:text-base">
            The first branch to be developed was agribusiness, with commodity
            trading at its core. Since then, Vaultman House has built a record
            of over 4,000 MT of soybean supply, equal to about 80 trailers
            delivered to Tema port for export, local processing, or resale.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ABOUT_OPERATIONS.map((item) => (
          <article
            key={item.title}
            className="flex flex-col justify-between rounded-[1.75rem] border border-[#2D2926]/8 bg-[#8F9A80] p-8"
          >
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E287] text-[#2D2926]">
                  <Factory className="h-5 w-5" />
                </div>
                <h3 className="font-hero text-2xl leading-tight text-white">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm font-normal leading-relaxed text-white">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
