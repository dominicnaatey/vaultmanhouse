import type { ReactNode } from 'react';

import ServicesDetailLayout from '@/components/Services/ServicesDetailLayout';

type ServicesLayoutProps = {
  children: ReactNode;
};

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return <ServicesDetailLayout>{children}</ServicesDetailLayout>;
}
