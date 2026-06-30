import type { Metadata } from 'next';
import Closing from '@/components/Services/CommodityTrading/Closing';
import FeatureImage from '@/components/Services/CommodityTrading/FeatureImage';
import Hero from '@/components/Services/CommodityTrading/Hero';
import ProductsSection from '@/components/Services/CommodityTrading/ProductsSection';
import ServicesSection from '@/components/Services/CommodityTrading/ServicesSection';

export const metadata: Metadata = {
  title: 'Commodity Trading | Vaultman House',
  description:
    'Explore Vaultman House commodity trading services, capabilities, and traded agro-commodities.',
};

export default function CommodityTradingPage() {
  return (
    <>
      <Hero />
      <FeatureImage />
      <ServicesSection />
      <ProductsSection />
      <Closing />
    </>
  );
}
