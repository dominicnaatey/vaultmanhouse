import { EXPORT_STRATEGIES } from './Data';

export default function StrategySection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl text-black leading-tight md:text-3xl">
        Our Export Strategy
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-black font-normal md:text-base">
        Exporting agro commodities is central to our growth strategy. It helps
        us diversify markets, increase revenue potential, and support wider
        regional economic development.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {EXPORT_STRATEGIES.map((item) => (
          <article
            key={item.id}
            className="flex flex-col  px-8 py-10 gap-4 rounded-3xl border border-[#2D2926]/6 bg-[#FEF4CC] text-black"
          >
            <span className="flex items-center justify-start text-base font-bold text-black">
              {item.id}
            </span>
            <h3 className="font-bold text-2xl leading-tight text-black">
              {item.title}
            </h3>
            <p className="text-sm font-normal leading-relaxed text-black">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
