import { TRADING_SERVICES } from './Data';

export default function ServicesSection() {
  return (
    <section className="mt-14">
      <h2 className="font-hero text-2xl leading-tight md:text-3xl">
        Our Agro-Commodity Trading Services
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
        At Vaultman House Agro Commodities, we offer a range of agro commodity
        trading services, including:
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {TRADING_SERVICES.map((item) => (
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