import { ABOUT_PRINCIPLES } from './about-data';

export default function OverviewSection() {
  return (
    <section className="grid gap-8 lg:gap-14 pt-8 lg:grid-cols-[1.05fr_0.95fr] mb-36">
      <div className="flex flex-col justify-center">
        {/* <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
          Company Overview
        </span> */}
        <span className="mb-6 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#8F9A80] border-2 border-[#8F9A80]/60 rounded-full px-4 py-1.5 w-max">
          Company Overview
        </span>
        <h2 className="max-w-xl font-hero text-4xl leading-tight md:text-5xl">
          Built as a connected ecosystem, not just a single business
        </h2>
        <p className="mt-6 max-w-xl text-sm md:text-lg leading-relaxed text-[#2D2926]/70 ">
          Founded in 2020 after a careful study of economic patterns and trade
          data, Vaultman House was created as a self-serving and self-sustaining
          business ecosystem with expert control across critical sectors.
        </p>
        <p className="mt-4 max-w-xl text-sm md:text-lg leading-relaxed text-[#2D2926]/70 ">
          Its branches are designed to work both independently and dependently
          toward one goal: building an organization capable of sustaining
          meaningful, comfortable, and high-quality human living.
        </p>
      </div>

      <div className="grid gap-5">
        {ABOUT_PRINCIPLES.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#2D2926]/8 bg-[#8F9A80] p-8 shadow-[0_12px_40px_rgba(45,41,38,0.05)]"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E287] text-[#2D2926]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-hero text-2xl leading-tight text-white/90">{item.title}</h3>
              </div>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/80">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
