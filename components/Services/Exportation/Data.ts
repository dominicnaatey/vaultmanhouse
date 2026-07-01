export type ExportStrategyItem = {
  id: string;
  title: string;
  description: string;
};

export type ExportMarketItem = {
  name: string;
  description: string;
};

export const EXPORT_STRATEGIES: ExportStrategyItem[] = [
  {
    id: '01',
    title: 'Market Research',
    description:
      'We identify demand for our agro commodities across target regions so export decisions are grounded in real market opportunity.',
  },
  {
    id: '02',
    title: 'Product Development',
    description:
      'We shape competitive, appealing export-ready offerings that can perform well in regional and overseas markets.',
  },
  {
    id: '03',
    title: 'Logistics And Transportation',
    description:
      'We are building a dependable delivery system that keeps shipments safe, timely, and well-coordinated from origin to destination.',
  },
  {
    id: '04',
    title: 'Regulatory Compliance',
    description:
      'We focus on food safety, quality assurance, and trade requirements so our export process stays aligned with international standards.',
  },
];

export const EXPORT_MARKETS: ExportMarketItem[] = [
  {
    name: 'West Africa',
    description:
      'A strong regional starting point for scale, customer growth, and deeper trade relationships across neighboring markets.',
  },
  {
    name: 'East Africa',
    description:
      'An important expansion corridor where reliable supply and competitive delivery can open new commercial opportunities.',
  },
  {
    name: 'Europe',
    description:
      'A high-standard destination that aligns with our push toward quality, compliance, and stronger international positioning.',
  },
  {
    name: 'Asia',
    description:
      'A strategic global market for diversification, broader demand access, and long-term export competitiveness.',
  },
];
