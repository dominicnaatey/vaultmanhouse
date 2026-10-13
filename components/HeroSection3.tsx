'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HeroSection3() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          MOBILE LAYOUT  (hidden on md and above)
          White bg · large heading · subtitle · buttons · rounded image below
      ───────────────────────────────────────────────────────────────────── */}
      <section className="md:hidden bg-white px-6 pt-10 pb-16">
        {/* Heading */}
        <h1 className="font-sans text-[2.6rem] font-extrabold leading-tight text-black">
          We Trade, Produce, Process, and Export to give you maximum value.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base leading-relaxed text-gray-600">
          The future rests on agribusiness and its supply chain network
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d1d1d]"
          >
            <span>Explore Service</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#F3E287] px-6 py-3 text-sm font-medium text-[#2D2926] transition-colors hover:bg-[#E5D474]"
          >
            Work With Us
          </Link>
        </div>

        {/* Rounded image below */}
        <div className="mt-10 relative overflow-hidden rounded-3xl shadow-[0_24px_48px_rgba(45,41,38,0.08)]">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/soybeans.webp"
              alt="Soybean harvest and processing"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          DESKTOP LAYOUT  (hidden below md)
          Full-bleed image · white-to-transparent left fade · centred text
      ───────────────────────────────────────────────────────────────────── */}
      <section className="relative hidden md:block min-h-[92vh] bg-white overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/soybeans.webp"
            alt="Soybean harvest and processing"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* White fade from the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-[35%] to-transparent" />
        </div>

        {/* Text — vertically centred, left-aligned */}
        <div className="relative z-10 flex items-center min-h-[92vh] px-12 lg:px-20">
          <div className="max-w-lg">
            <h1 className="font-sans text-4xl lg:text-[56px] font-extrabold leading-tight text-black">
              We Trade, Produce, Process, and Export to give you maximum value.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-600">
              The future rests on agribusiness and its supply chain network
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d1d1d]"
              >
                <span>Explore Service</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#F3E287] px-6 py-3 text-sm font-medium text-[#2D2926] transition-colors hover:bg-[#E5D474]"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
