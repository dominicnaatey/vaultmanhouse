import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <>
      <section className="max-w-full rounded-[2.5rem] px-6 py-16 md:py-26 text-center md:px-12">
        {/* <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#59644D]/15 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#59644D]">
          <span className="h-2 w-2 rounded-full bg-[#D46A3A]" />
          Hi, We&apos;re Vaultman House
        </span> */}
        <span className="mb-6 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#8F9A80] border-2 border-[#8F9A80]/60 rounded-full px-4 py-1.5 w-max">
          Hi, We&apos;re Vaultman House
        </span>
        <h1 className="mx-auto max-w-4xl font-hero text-4xl leading-tight md:text-6xl">
          Building a self-sustaining
          <span className="text-[#8F9A80] font-bold"> business ecosystem </span>
          through agribusiness and trade
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-[#2D2926]/70">
          Vaultman House was founded post-pandemic as a Ghanaian commingling
          designed to create long-term value through agribusiness, trade, and
          future sector expansion.
        </p>
        {/* <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#services"
            className="font-ui inline-flex items-center justify-center rounded-full bg-[#2D2926] px-8 py-3 text-sm text-white transition-colors hover:bg-[#1f1d1b]"
          >
            Our Services
          </Link>
          <Link
            href="/#contact-us"
            className="font-ui inline-flex items-center justify-center rounded-full border border-[#2D2926]/15 bg-white/70 px-8 py-3 text-sm text-[#2D2926] transition-colors hover:bg-white"
          >
            Contact Us
          </Link>
        </div> */}
      </section>

      <section className="relative overflow-hidden rounded-4xl mb-36">
        <div className="relative h-85 md:h-140">
          <Image
            src="/images/homehero.webp"
            alt="Vaultman House agribusiness operations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#2D2926]/35 via-transparent to-transparent" />
        </div>
      </section>
    </>
  );
}
