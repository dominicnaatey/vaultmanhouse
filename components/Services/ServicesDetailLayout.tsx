'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import ServiceDetailSidebar from './ServiceDetailSidebar';

type ServicesDetailLayoutProps = {
  children: React.ReactNode;
};

export default function ServicesDetailLayout({
  children,
}: ServicesDetailLayoutProps) {
  const pathname = usePathname();
  const isDetailPage = pathname !== '/services';

  if (!isDetailPage) {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#F5F3EE] text-[#2D2926]">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-16">
          <ServiceDetailSidebar />
          <main className="mx-auto w-full max-w-4xl">{children}</main>
        </div>
      </div>
    </div>
  );
}
