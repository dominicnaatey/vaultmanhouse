import { ABOUT_IMPACT_AREAS } from './about-data';

export default function AboutImpactSection() {
  return (
    <section className="rounded-[2.5rem] bg-[#EBECE7] px-6 py-12 md:px-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="mb-6 inline-flex text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
            Vision For Impact
          </span>
          <h2 className="max-w-xl font-hero text-4xl leading-tight md:text-5xl">
            Designed to make a wider economic impact beyond trade
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
            The broader Vaultman House vision is to integrate vital sectors that
            strengthen communities, support investor confidence, and improve
            everyday quality of life in Ghana and beyond.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {ABOUT_IMPACT_AREAS.map((item) => (
            <article
              key={item}
              className="rounded-[1.5rem] border border-[#2D2926]/8 bg-white/75 px-5 py-4 text-sm text-[#2D2926]/75"
            >
              {item}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
