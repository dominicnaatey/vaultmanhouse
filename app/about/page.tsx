import type { Metadata } from 'next';
import AboutCtaSection from '@/components/About/AboutCtaSection';
import AboutGrowthSection from '@/components/About/AboutGrowthSection';
import AboutHero from '@/components/About/AboutHero';
import AboutImpactSection from '@/components/About/AboutImpactSection';
import AboutOverviewSection from '@/components/About/AboutOverviewSection';
import AboutStatsSection from '@/components/About/AboutStatsSection';

export const metadata: Metadata = {
  title: 'About Us | Vaultman House',
  description:
    'Learn how Vaultman House was built as a self-sustaining business ecosystem, starting with agribusiness and regional commodity trade.',
};

export default function AboutPage() {
  return (
    <div id="about-us" className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:px-16 md:py-10">
        <AboutHero />
        <AboutOverviewSection />
        <AboutGrowthSection />
        <AboutImpactSection />
        <AboutStatsSection />
        <AboutCtaSection />
      </div>
    </div>
  );
}
