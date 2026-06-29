import { ABOUT_IMPACT_AREAS } from './about-data';

export default function ImpactSection() {
  return (
    <section className="rounded-[2.5rem] bg-[#EBECE7] px-6 py-14 md:px-10 md:py-18 mb-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div>
          {/* <span className="mb-6 inline-flex text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
            Vision For Impact
          </span> */}
          <span className="mb-6 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#8F9A80] border-2 border-[#8F9A80]/60 rounded-full px-4 py-1.5 w-max">
            Vision For Impact
          </span>
          <h2 className="max-w-3xl font-hero font-extrabold text-4xl leading-tight md:text-[40px]">
            <span className="font-extrabold">Designed to make a wider economic impact beyond trade</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
            The broader Vaultman House vision is to integrate vital sectors that
            strengthen communities, support investor confidence, and improve
            everyday quality of life in Ghana and beyond.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {ABOUT_IMPACT_AREAS.map((item) => (
            <article
              key={item}
              className="rounded-full border border-[#8F9A80]/50 bg-[#8F9A80]/20 px-5 py-2 text-sm font-medium text-[#2D2926]/85"
            >
              {item}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
