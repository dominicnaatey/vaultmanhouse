export type OilProcessStep = {
  id: string;
  title: string;
  description: string;
};

export type FacilityFeature = {
  title: string;
  description: string;
};

export const OIL_PROCESS_STEPS: OilProcessStep[] = [
  {
    id: '01',
    title: 'Cleaning And Preparation',
    description:
      'Soybeans are cleaned and prepared carefully to remove impurities and debris before processing begins.',
  },
  {
    id: '02',
    title: 'Crushing',
    description:
      'The beans are crushed using mechanical and solvent-based methods to begin extracting usable oil.',
  },
  {
    id: '03',
    title: 'Extraction',
    description:
      'Oil is separated from the crushed soybeans through an extraction stage using an approved solvent process.',
  },
  {
    id: '04',
    title: 'Refining',
    description:
      'The extracted oil is refined to improve color, texture, flavor, and overall product purity.',
  },
  {
    id: '05',
    title: 'Bottling And Packaging',
    description:
      'The refined soybean oil is bottled and packaged for distribution to local and foreign markets.',
  },
];

export const FACILITY_FEATURES: FacilityFeature[] = [
  {
    title: 'Modern Equipment',
    description:
      'Our processing facility uses modern systems designed for efficient soybean oil and meal production.',
  },
  {
    title: 'Quality Control',
    description:
      'Every stage of production is guided by quality checks that support consistency and international standards.',
  },
  {
    title: 'Trained Personnel',
    description:
      'Experienced team members oversee operations to keep production safe, efficient, and reliable.',
  },
  {
    title: 'Sustainability',
    description:
      'Our approach aims to unlock more value from soybeans while supporting long-term agricultural growth.',
  },
];
