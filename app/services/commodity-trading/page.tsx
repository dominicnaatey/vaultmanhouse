import type { Metadata } from 'next';
import CommodityTradingClosing from '@/components/Services/CommodityTrading/CommodityTradingClosing';
import CommodityTradingFeatureImage from '@/components/Services/CommodityTrading/CommodityTradingFeatureImage';
import CommodityTradingHero from '@/components/Services/CommodityTrading/CommodityTradingHero';
import CommodityTradingProductsSection from '@/components/Services/CommodityTrading/CommodityTradingProductsSection';
import CommodityTradingServicesSection from '@/components/Services/CommodityTrading/CommodityTradingServicesSection';

export const metadata: Metadata = {
  title: 'Commodity Trading | Vaultman House',
  description:
    'Explore Vaultman House commodity trading services, capabilities, and traded agro-commodities.',
};

export default function CommodityTradingPage() {
  return (
    <>
      <CommodityTradingHero />
      <CommodityTradingFeatureImage />
      <CommodityTradingServicesSection />
      <CommodityTradingProductsSection />
      <CommodityTradingClosing />
    </>
  );
}
