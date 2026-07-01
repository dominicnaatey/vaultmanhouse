import { EXPORT_MARKETS } from './Data';

export default function MarketsSection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight md:text-3xl">
        Markets We Are Exploring
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
        We are exploring opportunities in West Africa, East Africa, Europe, and
        Asia to expand our global presence, diversify our customer base, and
        improve competitiveness.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {EXPORT_MARKETS.map((market) => (
          <article
            key={market.name}
            className="rounded-[1.5rem] border border-[#2D2926]/8 bg-white px-6 py-6 shadow-[0_12px_30px_rgba(45,41,38,0.05)]"
          >
            <h3 className="font-hero text-2xl leading-tight text-[#2D2926]">
              {market.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70">
              {market.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
