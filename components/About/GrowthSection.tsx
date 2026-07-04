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
          <h2 className="max-w-xl font-extrabold text-4xl leading-tight md:text-[40px]">
            Agribusiness was the first sector identified for growth
          </h2>
        </div>

        <div className="flex flex-col justify-center lg:pt-12">
          <p className="max-w-xl text-sm font-normal leading-normal text-gray-900 md:text-base">
            The first branch to be developed was agribusiness, with commodity
            trading at its core. Since then, Vaultman House has built a record
            of over 4,000 MT of soybean supply, equal to about 80 trailers
            delivered to Tema port for export, local processing, or resale.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6">
        {ABOUT_OPERATIONS.map((item) => (
          <article
            key={item.title}
            className="rounded-[3rem] border border-[#2D2926]/6 bg-[#F3E287]/70 px-8 py-10 shadow-[0_18px_35px_rgba(45,41,38,0.06)] md:px-12 md:py-12"
          >
            <div className="flex h-full flex-col">
              <Factory className="h-10 w-10 text-black" strokeWidth={2.2} />
              <h3 className="mt-10 font-sans text-4xl font-bold leading-tight text-black">
                {item.title}
              </h3>
              <p className="mt-8 max-w-3xl text-xl leading-[1.45] text-black/80">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
