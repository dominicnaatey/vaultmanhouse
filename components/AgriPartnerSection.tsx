import {
  Factory,
  Globe2,
  Handshake,
  MapPin,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from 'lucide-react';

const STRENGTHS: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Globe2,
    title: 'International\nSupply',
    description:
      'Tried and tested in commodity trade with over 4,000MT+ soybean supply experience and export-focused operations.',
  },
  {
    icon: Handshake,
    title: 'Transparent\nRelations',
    description:
      'We build crystal clear business relationships with client satisfaction and long-term trust at the center.',
  },
  {
    icon: Truck,
    title: 'Reliable\nDelivery',
    description:
      'Fast and dependable supply planning helps clients meet their targets, timelines, and market commitments.',
  },
  {
    icon: MapPin,
    title: 'Regional\nReach',
    description:
      'Our trade network spans Ghana, Burkina Faso, and Mali, supporting strong sourcing across key markets.',
  },
  {
    icon: Factory,
    title: 'Processing &\nExport Growth',
    description:
      'We are expanding into processing and export to create more value from raw agricultural materials.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality\nFocus',
    description:
      'Our commodity sourcing pays close attention to standards, consistency, and readiness for demanding buyers.',
  },
];

export default function AgriPartnerSection() {
  return (
    <section className="py-32 px-6 md:px-16 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-gray-300 rounded-full px-4 py-1.5 mb-8 inline-block">
            Why Choose Us
          </span>
          <h2 className="font-hero text-5xl md:text-6xl text-[#2D2926] leading-[1.1] sticky top-32">
            Trade With<br />A Trusted<br />Partner
          </h2>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mt-8 lg:mt-0">
          {STRENGTHS.map((item, i) => {
            const Icon = item.icon;

            return (
            <div key={i} className="flex flex-col gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#FDF3C8] flex items-center justify-center text-[#2D2926] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-hero text-2xl text-[#2D2926] whitespace-pre-line leading-tight group-hover:text-[#8F9A80] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
