import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesStrip from '@/components/FeaturesStrip';
import ServicesSection from '@/components/ServicesSection';
import AccordionSection from '@/components/AccordionSection';
import AgriPartnerSection from '@/components/AgriPartnerSection';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <FeaturesStrip /> */}
      <ServicesSection />
      <AccordionSection />
      {/* <AgriPartnerSection /> */}
      <PortfolioSection />
      <BlogSection />
    </>
  );
}
