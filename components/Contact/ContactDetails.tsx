import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import { CONTACT_DETAILS, CONTACT_SOCIALS } from './contact-data';

const DETAIL_ICONS = {
  Email: Mail,
  Phone: Phone,
  Office: MapPin,
} as const;

export default function ContactDetails() {
  return (
    <div className="max-w-xl pt-4">
      {/* <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#59644D]">
        / Get In Touch /
      </p> */}

      <h1 className="mt-6 max-w-md font-hero text-4xl md:text-4xl leading-[1.2] text-[#2D2926]">
        We are always ready to help you and answer your questions
      </h1>

      <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#2D2926]/62 md:text-base">
        Reach out to Vaultman House for commodity sourcing, export coordination,
        processing enquiries, and agribusiness partnerships across Ghana and the
        region.
      </p>

      <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
        {CONTACT_DETAILS.map((detail) => {
          const Icon = DETAIL_ICONS[detail.label];

          return (
            <div key={detail.label}>
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-[#59644D]" />
                <p className="text-sm font-semibold text-[#2D2926]">{detail.label}</p>
              </div>

              {'href' in detail && detail.href ? (
                <Link
                  href={detail.href}
                  className="mt-3 inline-flex items-start gap-2 text-sm leading-relaxed text-[#2D2926]/72 transition-colors hover:text-[#59644D] md:text-[15px]"
                >
                  <span>{detail.value}</span>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                </Link>
              ) : (
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-[#2D2926]/72 md:text-[15px]">
                  {detail.value}
                </p>
              )}
            </div>
          );
        })}

        <div>
          <p className="text-sm font-semibold text-[#2D2926]">Social network</p>
          <div className="mt-4 flex items-center gap-4">
            {CONTACT_SOCIALS.map((social) => {
              const Icon =
                social.label === 'Instagram'
                  ? Instagram
                  : social.label === 'Facebook'
                    ? Facebook
                    : Linkedin;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2D2926]/10 text-[#2D2926]/78 transition-colors hover:border-[#59644D]/30 hover:text-[#59644D]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
