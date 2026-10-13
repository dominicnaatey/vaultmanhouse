'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HeroSection3() {
  return (
    <section className="relative min-h-[92vh] bg-white overflow-hidden">
      {/* Full-bleed image on the right, fading into white on the left */}
      <div className="absolute inset-0">
        <Image
          src="/images/soybeans.webp"
          alt="Soybean harvest and processing"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Fade gradient: white on left, transparent on right */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 via-25% to-transparent" />
      </div>

      {/* Text content — left-aligned, sitting above the image */}
      <div className="relative z-10 flex items-center min-h-[92vh] px-6 md:px-12 lg:px-20">
        <div className="max-w-lg">
          <h1 className="font-sans text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
            We Trade, Produce, Process, and Export to give you maximum value.
          </h1>

          <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-600">
            The future rests on agribusiness and its supply chain network
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d1d1d]"
            >
              <span>Explore Service</span>
              <ChevronRight className="h-4 w-4 stroke-3 transition-transform duration-200 group-hover:translate-x-0.5" />
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
  );
}
