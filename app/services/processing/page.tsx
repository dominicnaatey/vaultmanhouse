import type { Metadata } from 'next';

import Closing from '@/components/Services/Processing/Closing';
import FacilitySection from '@/components/Services/Processing/FacilitySection';
import FeatureImage from '@/components/Services/Processing/FeatureImage';
import Hero from '@/components/Services/Processing/Hero';
import MealSection from '@/components/Services/Processing/MealSection';
import OilProductionSection from '@/components/Services/Processing/OilProductionSection';
import SecondaryImage from '@/components/Services/Processing/SecondaryImage';

export const metadata: Metadata = {
  title: 'Processing | Vaultman House',
  description:
    'Explore Vaultman House soybean processing capabilities across oil production, meal production, and facility operations.',
};

export default function ProcessingPage() {
  return (
    <>
      <Hero />
      <FeatureImage />
      <OilProductionSection />
      <MealSection />
      <SecondaryImage />
      <FacilitySection />
      <Closing />
    </>
  );
}
