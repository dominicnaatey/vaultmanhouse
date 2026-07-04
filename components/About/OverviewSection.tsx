import { ABOUT_PRINCIPLES } from './about-data';

export default function OverviewSection() {
  return (
    <section className="grid gap-8 pt-8 lg:gap-20 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] mb-36">
      <div className="flex flex-col justify-center">
        {/* <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
          Company Overview
        </span> */}
        <span className="mb-6 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#8F9A80] border-2 border-[#8F9A80]/60 rounded-full px-4 py-1.5 w-max">
          Company Overview
        </span>
        <h2 className="max-w-xl font-extrabold text-4xl leading-tight md:text-[40px]">
          <span className="font-extrabold">Built as a connected ecosystem, not just a single business</span>
        </h2>
        <p className="mt-6 max-w-xl text-sm font-normal md:text-base leading-normal text-gray-900 ">
          Founded in 2020 after a careful study of economic patterns and trade
          data, Vaultman House was created as a self-serving and self-sustaining
          business ecosystem with expert control across critical sectors.
        </p>
        <p className="mt-4 max-w-xl text-sm font-normal md:text-base leading-normal text-gray-900 ">
          Its branches are designed to work both independently and dependently
          toward one goal: building an organization capable of sustaining
          meaningful, comfortable, and high-quality human living.
        </p>
      </div>

      <div className="w-full">
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] xl:grid-rows-2">
          {ABOUT_PRINCIPLES.map((item, index) => {
            const Icon = item.icon;
            const layoutClass =
              index === 0
                ? 'xl:col-start-1 xl:row-start-1'
                : index === 1
                  ? 'xl:col-start-1 xl:row-start-2'
                  : 'xl:col-start-2 xl:row-span-2 xl:self-center';
            const heightClass = index === 2 ? 'xl:min-h-[21rem]' : '';

            return (
              <article
                key={item.title}
                className={`min-h-60 rounded-4xl bg-[#F3E287]/0 duration-300 hover:bg-[#F3E287]/70 transition-colors px-8 py-10 group-hover:shadow-[0_18px_35px_rgba(45,41,38,0.06)] ${layoutClass} ${heightClass}`}
              >
                <div className="flex h-full flex-col gap-5">
                  <Icon className="h-7 w-7 text-black" strokeWidth={2.2} />
                  <h3 className="font-sans text-xl font-bold leading-normal text-black">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-normal leading-normal text-black">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
