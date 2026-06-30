import Link from 'next/link';

import { SERVICE_LINKS } from './commodity-trading-data';

export default function CommodityTradingSideNav() {
  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-28 flex flex-col gap-4 pt-6">
        {SERVICE_LINKS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
              item.active ? 'text-[#2D2926]' : 'text-[#2D2926]/45 hover:text-[#2D2926]/75'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
