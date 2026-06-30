export type ServiceLinkItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type TradingServiceItem = {
  id: string;
  title: string;
  description: string;
};

export type TradingProductItem = {
  name: string;
  image: string;
};

export const SERVICE_LINKS: ServiceLinkItem[] = [
  { label: 'Commodity Trading', href: '/services/commodity-trading', active: true },
  { label: 'Exportation', href: '/services' },
  { label: 'Processing', href: '/services' },
];

export const TRADING_SERVICES: TradingServiceItem[] = [
  {
    id: '01',
    title: 'Sourcing',
    description:
      'We work closely with farmers and suppliers to source high-quality agro-commodities, ensuring the right products for export and local trade.',
  },
  {
    id: '02',
    title: 'Trading',
    description:
      'We connect buyers and sellers through structured agro-commodity trading, pricing, and market-ready supply channels for dependable transactions.',
  },
  {
    id: '03',
    title: 'Logistics',
    description:
      'We manage transport planning, loading, and coordination so commodities reach their destination in a timely and efficient manner.',
  },
  {
    id: '04',
    title: 'Risk Management',
    description:
      'Our team supports safer trade execution with due diligence, supply oversight, and practical market awareness across each trading cycle.',
  },
];

export const PRODUCTS: TradingProductItem[] = [
  { name: 'Corn', image: '/images/corn.png' },
  { name: 'Soybeans', image: '/images/soybeans.jpg' },
  { name: 'Cashew', image: '/images/cashew.jpg' },
  { name: 'Shea Nuts', image: '/images/sheanuts.jpg' },
  { name: 'Sesame Seeds', image: '/images/sesame%20seeds.png' },
  { name: 'Peanuts', image: '/images/peanuts.webp' },
];
