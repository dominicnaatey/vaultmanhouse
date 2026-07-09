import type { Metadata } from 'next';

import ContactSection from '@/components/Contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Vaultman House',
  description:
    'Contact Vaultman House for commodity trading, exportation, processing, and agribusiness partnership enquiries.',
};

export default function ContactPage() {
  return (
    <div id="contact-us" className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-16 md:py-24">
        <ContactSection />
      </div>
    </div>
  );
}
