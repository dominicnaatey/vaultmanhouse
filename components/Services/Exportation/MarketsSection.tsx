import { EXPORT_MARKETS } from './Data';

export default function MarketsSection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight md:text-3xl">
        Markets We Are Exploring
      </h2>
      <p className="mt-4 text-sm font-normal leading-relaxed md:text-base">
        We are exploring opportunities in West Africa, East Africa, Europe, and
        Asia to expand our global presence, diversify our customer base, and
        improve competitiveness.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {EXPORT_MARKETS.map((market) => (
          <article
            key={market.name}
            className="rounded-3xl bg-[#FEF4CC] hover:bg-[#FEF4CC] px-8 py-10"
          >
            <h3 className="font-bold text-2xl leading-tight text-black">
              {market.name}
            </h3>
            <p className="mt-4 text-sm font-normal leading-relaxed text-black">
              {market.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
