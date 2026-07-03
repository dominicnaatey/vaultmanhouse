import type { Metadata } from 'next';

import ContactHero from '@/components/Contact/ContactHero';
import ContactSection from '@/components/Contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Vaultman House',
  description:
    'Contact Vaultman House for commodity trading, exportation, processing, and agribusiness partnership enquiries.',
};

export default function ContactPage() {
  return (
    <div id="contact-us" className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-16 md:py-28">
        <ContactHero />
        <ContactSection />
      </div>
    </div>
  );
}
