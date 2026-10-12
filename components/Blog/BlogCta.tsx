import Link from 'next/link';

export default function BlogCta() {
  return (
    <section className="mt-24">
      <div className="rounded-[2rem] bg-[#59644D] px-6 py-12 text-white md:px-10 md:py-14">
        <span className="inline-flex w-max items-center rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/78">
          Work With Vaultman House
        </span>
        <h2 className="mt-6 max-w-2xl font-extrabold text-3xl leading-tight md:text-[2.5rem]">
          Need support with sourcing, processing, or export planning?
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/82 md:text-base">
          Speak with the Vaultman House team about regional commodity supply,
          operational partnerships, and growth opportunities across the value chain.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2D2926] transition-colors hover:bg-[#F9F7F2]"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
