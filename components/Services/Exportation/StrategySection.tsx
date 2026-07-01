import { EXPORT_STRATEGIES } from './Data';

export default function StrategySection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight md:text-3xl">
        Our Export Strategy
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
        Exporting agro commodities is central to our growth strategy. It helps
        us diversify markets, increase revenue potential, and support wider
        regional economic development.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {EXPORT_STRATEGIES.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl bg-[#8F9A80] p-6 text-white"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3E287] text-[10px] font-bold text-[#2D2926]">
                {item.id}
              </span>
              <h3 className="font-hero text-2xl leading-tight text-white/95">
                {item.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
