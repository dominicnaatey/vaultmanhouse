import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import { CONTACT_DETAILS, CONTACT_SOCIALS } from './contact-data';

const DETAIL_ICONS = {
  Email: Mail,
  Phone: Phone,
  Office: MapPin,
} as const;

export default function ContactDetails() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#2D2926] p-8 text-white shadow-[0_20px_60px_rgba(45,41,38,0.16)] md:p-10">
      <div className="absolute inset-0">
        <Image
          src="/images/field.webp"
          alt="Agricultural landscape"
          fill
          className="object-cover opacity-20"
          sizes="(max-width: 1024px) 100vw, 520px"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,41,38,0.2),rgba(45,41,38,0.92))]" />
      </div>

      <div className="relative z-10">
        <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F3E287]">
          Get In Touch
        </span>

        <h2 className="mt-6 max-w-sm font-hero text-3xl leading-tight md:text-[2.35rem]">
          We are ready to discuss your next agribusiness opportunity.
        </h2>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/78 md:text-base">
          Connect with our team for trade consultations, supply partnerships, export
          planning, and operational support tailored to your goals.
        </p>

        <div className="mt-10 space-y-4">
          {CONTACT_DETAILS.map((detail) => {
            const Icon = DETAIL_ICONS[detail.label];

            return (
              <div
                key={detail.label}
                className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-[#F3E287]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                      {detail.label}
                    </p>

                    {detail.href ? (
                      <Link
                        href={detail.href}
                        className="mt-2 inline-flex items-center gap-2 text-sm leading-relaxed text-white transition-colors hover:text-[#F3E287] md:text-base"
                      >
                        <span>{detail.value}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/88 md:text-base">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {CONTACT_SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/18 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-[#F3E287]/60 hover:text-[#F3E287]"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
