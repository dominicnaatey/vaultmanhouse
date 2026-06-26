import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <>
      <section className="rounded-[2.5rem] bg-[#EBECE7] px-6 py-16 text-center md:px-12 md:py-20">
        {/* <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#59644D]/15 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#59644D]">
          <span className="h-2 w-2 rounded-full bg-[#D46A3A]" />
          Hi, We&apos;re Vaultman House
        </span> */}
        <h1 className="mx-auto max-w-4xl font-hero text-4xl leading-tight md:text-6xl">
          Building a self-sustaining
          <span className="italic"> business ecosystem </span>
          through agribusiness and trade
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
          Vaultman House was founded post-pandemic as a Ghanaian commingling
          designed to create long-term value through agribusiness, trade, and
          future sector expansion.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        </div>
      </section>

      <section className="relative overflow-hidden rounded-4xl">
        <div className="relative h-85 md:h-150">
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
