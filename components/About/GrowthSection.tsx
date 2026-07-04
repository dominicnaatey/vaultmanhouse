import { Globe, Handshake, Truck } from 'lucide-react';

import { ABOUT_OPERATIONS } from './about-data';

const CARD_ICONS = [Globe, Truck, Handshake] as const;
const CARD_LAYOUTS = [
  'xl:col-start-1 xl:row-start-1',
  'xl:col-start-1 xl:row-start-2',
  'xl:col-start-2 xl:row-span-2 xl:self-center',
] as const;

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

      <div className="mt-14 flex justify-center xl:justify-end">
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2 xl:grid-cols-[minmax(0,15rem)_minmax(0,12.5rem)] xl:grid-rows-2">
          {ABOUT_OPERATIONS.map((item, index) => {
            const Icon = CARD_ICONS[index] ?? Globe;
            const layoutClass = CARD_LAYOUTS[index] ?? '';

            return (
              <article
                key={item.title}
                className={`min-h-[15rem] rounded-[2rem] border border-[#2D2926]/6 bg-[#F3E287]/70 p-7 shadow-[0_18px_35px_rgba(45,41,38,0.06)] ${layoutClass}`}
              >
                <div className="flex h-full flex-col">
                  <Icon className="h-5 w-5 text-[#111111]" strokeWidth={2.2} />
                  <h3 className="mt-7 max-w-[12rem] font-sans text-[1.7rem] font-semibold leading-[1.05] text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-[15rem] text-sm leading-[1.55] text-[#111111]/82">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
