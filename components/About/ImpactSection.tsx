import { ABOUT_IMPACT_AREAS } from './about-data';

export default function ImpactSection() {
  return (
    <section className="rounded-[2.5rem] bg-[#EBECE7] px-6 py-12 md:px-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          {/* <span className="mb-6 inline-flex text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
            Vision For Impact
          </span> */}
          <span className="mb-6 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#8F9A80] border-2 border-[#8F9A80]/60 rounded-full px-4 py-1.5 w-max">
            Vision For Impact
          </span>
          <h2 className="max-w-xl font-hero text-4xl leading-tight md:text-4xl">
            Designed to make a wider economic impact beyond trade
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
            The broader Vaultman House vision is to integrate vital sectors that
            strengthen communities, support investor confidence, and improve
            everyday quality of life in Ghana and beyond.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:self-center">
          {ABOUT_IMPACT_AREAS.map((item) => (
            <article
              key={item}
              className="rounded-3xl border border-[#2D2926]/8 bg-[#8F9A80]/50 px-5 py-4 text-sm text-black/90"
            >
              {item}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
