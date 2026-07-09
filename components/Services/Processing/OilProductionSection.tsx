import { OIL_PROCESS_STEPS } from './Data';

export default function OilProductionSection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight text-black md:text-3xl">
        Soybean Oil Production
      </h2>
      <p className="mt-4 text-sm font-normal leading-relaxed text-black md:text-base">
        Our soybean oil production process is built to deliver a versatile,
        healthy edible oil with strong nutritional value, a mild flavor, and a
        high smoke point for multiple uses.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {OIL_PROCESS_STEPS.map((step) => (
          <article
            key={step.id}
            className="flex flex-col gap-4 rounded-3xl border border-[#2D2926]/6 bg-[#FEF4CC] px-8 py-10 text-black"
          >
            <span className="flex items-center justify-start text-base font-bold text-black">
              {step.id}
            </span>
            <h3 className="font-bold text-2xl leading-tight text-black">
              {step.title}
            </h3>
            <p className="text-sm font-normal leading-relaxed text-black">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
