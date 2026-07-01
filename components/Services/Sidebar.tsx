'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DETAIL_LINKS = [
  { label: 'Commodity Trading', href: '/services/commodity-trading' },
  { label: 'Exportation', href: '/services/exportation' },
  { label: 'Processing', href: '/services' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block lg:w-42">
      <nav className="sticky top-28 flex flex-col gap-6 pt-6">
        {DETAIL_LINKS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`text-xs font-normal uppercase tracking-wider transition-colors ${
                isActive ? 'text-[#2D2926]' : 'text-[#2D2926]/45 hover:text-[#2D2926]/75'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
