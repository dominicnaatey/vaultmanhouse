import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesStrip from '@/components/FeaturesStrip';
import ServicesSection from '@/components/ServicesSection';
import AccordionSection from '@/components/AccordionSection';
import AgriPartnerSection from '@/components/AgriPartnerSection';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesStrip />
      <ServicesSection />
      <AccordionSection />
      <AgriPartnerSection />
      <PortfolioSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
