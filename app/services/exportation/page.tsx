import type { Metadata } from 'next';

import Closing from '@/components/Services/Exportation/Closing';
import FeatureImage from '@/components/Services/Exportation/FeatureImage';
import Hero from '@/components/Services/Exportation/Hero';
import MarketsSection from '@/components/Services/Exportation/MarketsSection';
import StrategySection from '@/components/Services/Exportation/StrategySection';

export const metadata: Metadata = {
  title: 'Exportation | Vaultman House',
  description:
    'Explore Vaultman House exportation strategy, regional market ambitions, and logistics approach.',
};

export default function ExportationPage() {
  return (
    <>
      <Hero />
      <FeatureImage />
      <StrategySection />
      <MarketsSection />
      <Closing />
    </>
  );
}
