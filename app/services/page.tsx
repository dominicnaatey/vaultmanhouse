import type { Metadata } from 'next';
import ServicesHero from '@/components/Services/ServicesHero';
import ServicesList from '@/components/Services/ServicesList';

export const metadata: Metadata = {
  title: 'Services | Vaultman House',
  description:
    'Explore Vaultman House services across commodity trading, exportation, and processing.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto max-w-6xl px-6 py-18 md:px-16 md:py-36">
        <ServicesHero />
        <ServicesList />
      </div>
    </div>
  );
}
