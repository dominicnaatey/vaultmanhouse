import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function AboutCtaSection() {
  return (
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
  );
}
