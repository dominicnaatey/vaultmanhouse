import {
  Globe2,
  Handshake,
  Truck,
  type LucideIcon,
} from 'lucide-react';

export type AboutPrinciple = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type AboutOperation = {
  title: string;
  description: string;
};

export type AboutStat = {
  value: string;
  label: string;
};

export const ABOUT_PRINCIPLES: AboutPrinciple[] = [
  {
    icon: Globe2,
    title: 'International Supply',
    description:
      "We are tried and tested in commodity trade, backed by over 4,000MT+ of soybean supply across Ghana, Burkina Faso, Mali, and Cote d'Ivoire.",
  },
  {
    icon: Handshake,
    title: 'Transparent Relations',
    description:
      'Our business is built on clear communication, dependable partnerships, and a strong focus on client satisfaction.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description:
      'We move with speed and consistency so clients can meet production targets, deadlines, and market demand with confidence.',
  },
];

export const ABOUT_OPERATIONS: AboutOperation[] = [
  {
    title: 'Agribusiness First',
    description:
      'The agribusiness sector was the first branch of the Vaultman House commingling to be identified and developed after careful post-pandemic study.',
  },
  {
    title: 'Trade And Export Focus',
    description:
      'Our operations focus on commodity trading for export, with soybeans, corn, sesame seeds, and groundnuts supplied for export, local processing, or resale.',
  },
  {
    title: 'Expansion Vision',
    description:
      'Vaultman House is designed as a self-serving, self-sustaining ecosystem, with future branches planned to capture other vital sectors of the economy.',
  },
];

export const ABOUT_STATS: AboutStat[] = [
  { value: '2020', label: 'Founded' },
  { value: '4,000MT+', label: 'Soybean Supply' },
  { value: '80', label: 'Approx. Trailers' },
  { value: '4', label: 'Source Countries' },
  { value: '5', label: 'Key Commodities' },
];

export const ABOUT_IMPACT_AREAS = [
  'Foreign exchange growth',
  'Sustained power supply',
  'Access to clean water',
  'Reduced unemployment',
  'Investor confidence',
  'Housing across income levels',
  'Quality consumer goods',
];
