import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Vaultman House',
  description:
    'Explore Vaultman House services across commodity trading, exportation, and processing.',
};

const SERVICES = [
  {
    title: 'Commodity Trading',
    description:
      'Our commodity trading service focuses on exporting premium agricultural products including soybeans, corn, sesame seeds, and groundnuts, with strict compliance to international standards and growing demand for raw outputs.',
    image: '/images/field.webp',
  },
  {
    title: 'Exportation',
    description:
      'We move agricultural materials into value-added export channels that support food, pharmaceutical, and animal feed industries.',
    image: '/images/export.webp',
  },
  {
    title: 'Processing',
    description:
      "Vaultman House transforms raw agricultural materials into food, drugs, and animal feed, boosting Ghana's GDP while producing semi-finished and finished goods like cooking oil and flour.",
    image: '/images/processing02.webp',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto max-w-6xl px-6 py-18 md:px-16 md:py-24">
        <section className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex items-center rounded-full border border-[#8F9A80]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8F9A80]">
            Our Services
          </span>
          <h1 className="font-hero text-4xl leading-tight md:text-6xl">
            We are producing in large quantities and excellent quality to fuel our
            processing wings and trades
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#2D2926]/75">
            We trade, process, and export to give you maximum value.
          </p>
        </section>

        <section className="mt-20 space-y-18 md:mt-24 md:space-y-24">
          {SERVICES.map((service, index) => {
            const isTextFirst = index % 2 === 0;

            return (
              <article
                key={service.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div className={isTextFirst ? 'order-1' : 'order-2 lg:order-1'}>
                  <div className="max-w-md">
                    <h2 className="font-hero text-3xl leading-tight md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-sm leading-relaxed text-[#2D2926]/75 md:text-base">
                      {service.description}
                    </p>
                    <Link
                      href="/#contact-us"
                      className="font-ui mt-6 inline-flex items-center gap-2 rounded-full bg-[#F3E287] px-5 py-2.5 text-xs text-[#2D2926] transition-colors hover:bg-[#E5D474]"
                    >
                      Explore Service
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div className={isTextFirst ? 'order-2' : 'order-1 lg:order-2'}>
                  <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_16px_40px_rgba(45,41,38,0.08)]">
                    <div className="relative aspect-[1.35/1]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
