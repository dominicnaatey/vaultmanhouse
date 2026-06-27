import type { Metadata } from 'next';
import AboutCtaSection from '@/components/About/AboutCtaSection';
import GrowthSection from '@/components/About/GrowthSection';
import AboutHero from '@/components/About/AboutHero';
import AboutImpactSection from '@/components/About/AboutImpactSection';
import OverviewSection from '@/components/About/OverviewSection';
import AboutStatsSection from '@/components/About/AboutStatsSection';

export const metadata: Metadata = {
  title: 'About Us | Vaultman House',
  description:
    'Learn how Vaultman House was built as a self-sustaining business ecosystem, starting with agribusiness and regional commodity trade.',
};

export default function AboutPage() {
  return (
    <div id="about-us" className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto flex max-w-7xl flex-col py-8">
        <AboutHero />
        <OverviewSection />
        <GrowthSection />
        <AboutImpactSection />
        <AboutStatsSection />
        <AboutCtaSection />
      </div>
    </div>
  );
}
