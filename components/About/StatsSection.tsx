import { ABOUT_STATS } from './about-data';

export default function StatsSection() {
  return (
    <section className="grid gap-4 pt-6 mb-36 sm:grid-cols-2 xl:grid-cols-4">
      {ABOUT_STATS.map((item) => (
        <article
          key={item.label}
          className="rounded-[1.75rem] border border-[#2D2926]/8 bg-white/75 p-6"
        >
          <p className="font-hero text-4xl text-[#59644D]">{item.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#2D2926]/55">
            {item.label}
          </p>
        </article>
      ))}
    </section>
  );
}
