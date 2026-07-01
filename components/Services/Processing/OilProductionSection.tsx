import { OIL_PROCESS_STEPS } from './Data';

export default function OilProductionSection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight md:text-3xl">
        Soybean Oil Production
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
        Our soybean oil production process is built to deliver a versatile,
        healthy edible oil with strong nutritional value, a mild flavor, and a
        high smoke point for multiple uses.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {OIL_PROCESS_STEPS.map((step) => (
          <article
            key={step.id}
            className="rounded-3xl bg-[#8F9A80] p-6 text-white"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3E287] text-[10px] font-bold text-[#2D2926]">
                {step.id}
              </span>
              <h3 className="font-hero text-2xl leading-tight text-white/95">
                {step.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
