import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Factory,
  Globe2,
  Handshake,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Vaultman House',
  description:
    'Learn how Vaultman House builds value across commodity trading, processing, export, and transport in West Africa.',
};

const PRINCIPLES: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Globe2,
    title: 'International Supply',
    description:
      'We are tried and tested in commodity trade, backed by over 4,000MT+ of soybean supply and a growing regional network.',
  },
  {
    icon: Handshake,
    title: 'Transparent Relations',
    description:
      'Our business is built on clear communication, dependable partnerships, and a strong focus on client satisfaction.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description:
      'We move with speed and consistency so clients can meet production targets, deadlines, and market demand with confidence.',
  },
];

const OPERATIONS: Array<{
  title: string;
  description: string;
}> = [
  {
    title: 'Commodity Trading',
    description:
      'We trade premium agricultural commodities including soybeans, corn, sesame seeds, and groundnuts with attention to international standards.',
  },
  {
    title: 'Processing And Export Growth',
    description:
      'We are expanding into processing and export to create more local value through products such as cooking oil, flour, food inputs, and feed materials.',
  },
];

const STATS = [
  { value: '2020', label: 'Founded' },
  { value: '4,000MT+', label: 'Soybean Supply' },
  { value: '3', label: 'Core Markets' },
  { value: '5', label: 'Key Commodities' },
];

export default function AboutPage() {
  return (
    <div id="about-us" className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:px-16 md:py-10">
        <section className="rounded-[2.5rem] bg-[#EBECE7] px-6 py-16 text-center md:px-12 md:py-20">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#59644D]/15 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#59644D]">
            <span className="h-2 w-2 rounded-full bg-[#D46A3A]" />
            Hi, We&apos;re Vaultman House
          </span>
          <h1 className="mx-auto max-w-4xl font-hero text-4xl leading-tight md:text-6xl">
            Building trusted commodity trade and
            <span className="italic"> agribusiness value </span>
            across West Africa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
            We trade, produce, process, export, and transport agricultural commodities
            with a focus on quality, transparency, and long-term growth.
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

        <section className="relative overflow-hidden rounded-[2rem]">
          <div className="relative h-[340px] md:h-[560px]">
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

        <section className="grid gap-8 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="flex flex-col justify-center">
            <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
              For Partners
            </span>
            <h2 className="max-w-xl font-hero text-4xl leading-tight md:text-6xl">
              A reliable partner for sourcing, trade, and regional growth
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
              Vaultman House was founded in 2020 to build a diversified conglomerate
              across key African sectors, beginning with agro-commodity trade in Ghana,
              Burkina Faso, and Mali.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
              Today, we continue to grow through disciplined sourcing, dependable
              supply relationships, and strategic expansion into processing and export.
            </p>
          </div>

          <div className="grid gap-5">
            {PRINCIPLES.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-[#2D2926]/8 bg-white/70 p-6 shadow-[0_12px_40px_rgba(45,41,38,0.05)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E287] text-[#2D2926]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-hero text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#2D2926]/70">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-[2rem] bg-white/70">
            <div className="relative h-[420px]">
              <Image
                src="/images/img03.webp"
                alt="Commodity storage and agricultural operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2D2926]/30 via-transparent to-transparent" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C6A4A]">
              How We Grow
            </span>
            <h2 className="max-w-2xl font-hero text-4xl leading-tight md:text-6xl">
              Building a sustainable agribusiness ecosystem step by step
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#2D2926]/70 md:text-base">
              Our mission is to give clients maximum value by linking commodity trade
              with processing, export, and transport. That approach helps us serve
              both immediate supply needs and long-term regional opportunities.
            </p>

            <div className="mt-8 grid gap-4">
              {OPERATIONS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-[#2D2926]/8 bg-[#EBECE7] p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D46A3A] text-white">
                      <Factory className="h-4 w-4" />
                    </div>
                    <h3 className="font-hero text-2xl leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#2D2926]/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 pt-6 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((item) => (
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

        <section className="rounded-[2.5rem] bg-[#2D2926] px-6 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#F3E287]">
                <ShieldCheck className="h-4 w-4" />
                Let&apos;s Build Together
              </span>
              <h2 className="font-hero text-4xl leading-tight md:text-5xl">
                Ready to work with a dependable agribusiness partner?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                Talk to Vaultman House about sourcing, supply planning, export
                opportunities, and long-term commodity partnerships.
              </p>
            </div>

            <Link
              href="/#contact-us"
              className="font-ui inline-flex items-center gap-2 self-start rounded-full bg-[#F3E287] px-8 py-3 text-sm text-[#2D2926] transition-colors hover:bg-[#E5D474]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
