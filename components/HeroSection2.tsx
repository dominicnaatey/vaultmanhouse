'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HeroSection2() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16 lg:pt-52">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="">
          <h1 className="max-w-lg font-sans text-4xl md:text-[40px] font-extrabold leading-tighti text-black">
            We Trade, Produce, Process, and Export to give you maximum value.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-blak md:text-base">
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

        <div className="relative overflow-hidden rounded-4xl shadow-[0_24px_48px_rgba(45,41,38,0.08)]">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/soybeans.webp"
              alt="Soybean harvest and processing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
