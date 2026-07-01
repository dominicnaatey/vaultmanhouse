import { FACILITY_FEATURES } from './Data';

export default function FacilitySection() {
  return (
    <section className="mx-auto mt-24 max-w-4xl">
      <h2 className="font-hero text-2xl leading-tight md:text-3xl">
        Processing Facility Highlights
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
        Our state-of-the-art facility is designed to keep soybean oil and meal
        production efficient, safe, and scalable for growing market demand.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {FACILITY_FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="rounded-3xl border border-[#2D2926]/8 bg-[#806F63] px-6 py-6 shadow-[0_12px_30px_rgba(45,41,38,0.05)]"
          >
            <h3 className="font-hero text-2xl leading-tight text-white">
              {feature.title}
            </h3>
            <p className="mt-4 text-sm font-normal leading-relaxed text-white/90">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
