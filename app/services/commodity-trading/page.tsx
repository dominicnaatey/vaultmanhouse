import type { Metadata } from 'next';
import CommodityTradingClosing from '@/components/Services/CommodityTrading/CommodityTradingClosing';
import CommodityTradingFeatureImage from '@/components/Services/CommodityTrading/CommodityTradingFeatureImage';
import CommodityTradingHero from '@/components/Services/CommodityTrading/CommodityTradingHero';
import CommodityTradingProductsSection from '@/components/Services/CommodityTrading/CommodityTradingProductsSection';
import CommodityTradingServicesSection from '@/components/Services/CommodityTrading/CommodityTradingServicesSection';
import CommodityTradingSideNav from '@/components/Services/CommodityTrading/CommodityTradingSideNav';

export const metadata: Metadata = {
  title: 'Commodity Trading | Vaultman House',
  description:
    'Explore Vaultman House commodity trading services, capabilities, and traded agro-commodities.',
};

export default function CommodityTradingPage() {
  return (
    <div className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-16">
          <CommodityTradingSideNav />

          <main className="mx-auto w-full max-w-4xl">
            <CommodityTradingHero />
            <CommodityTradingFeatureImage />
            <CommodityTradingServicesSection />
            <CommodityTradingProductsSection />
            <CommodityTradingClosing />
          </main>
        </div>
      </div>
    </div>
  );
}
