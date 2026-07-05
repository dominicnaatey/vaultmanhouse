import HeroSection2 from '@/components/HeroSection2';
import AboutSection from '@/components/AboutSection';
// import FeaturesStrip from '@/components/FeaturesStrip';
import ServicesSection from '@/components/ServicesSection';
import AccordionSection from '@/components/AccordionSection';
// import AgriPartnerSection from '@/components/AgriPartnerSection';
import CommoditiesSection from '@/components/Commodities';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  return (
    <>
      <HeroSection2 />
      <AboutSection />
      {/* <FeaturesStrip /> */}
      <ServicesSection />
      <CommoditiesSection />
      <AccordionSection />
      {/* <AgriPartnerSection /> */}
      <BlogSection />
    </>
  );
}
