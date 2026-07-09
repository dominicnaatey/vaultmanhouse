import { FACILITY_FEATURES } from './Data';

export default function FacilitySection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight text-black md:text-3xl">
        Processing Facility Highlights
      </h2>
      <p className="mt-4 text-sm font-normal leading-relaxed text-black md:text-base">
        Our state-of-the-art facility is designed to keep soybean oil and meal
        production efficient, safe, and scalable for growing market demand.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {FACILITY_FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="rounded-3xl bg-[#FEF4CC] px-8 py-10"
          >
            <h3 className="font-bold text-2xl leading-tight text-black">
              {feature.title}
            </h3>
            <p className="mt-4 text-sm font-normal leading-relaxed text-black">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
