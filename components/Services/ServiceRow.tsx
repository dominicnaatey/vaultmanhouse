import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { ServiceItem } from './services-data';

type ServiceRowProps = {
  service: ServiceItem;
  isTextFirst: boolean;
};

export default function ServiceRow({
  service,
  isTextFirst,
}: ServiceRowProps) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className={isTextFirst ? 'order-1' : 'order-2'}>
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

      <div className={isTextFirst ? 'order-2' : 'order-1'}>
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
}
