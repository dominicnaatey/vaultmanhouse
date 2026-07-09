import { TRADING_SERVICES } from './Data';

export default function ServicesSection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight text-black md:text-3xl">
        Our Agro-Commodity Trading Services
      </h2>
      <p className="mt-4 text-sm font-normal leading-relaxed text-black md:text-base">
        At Vaultman House Agro Commodities, we offer a range of agro commodity
        trading services, including:
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {TRADING_SERVICES.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-4 rounded-3xl border border-[#2D2926]/6 bg-[#FEF4CC] px-8 py-10 text-black"
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
