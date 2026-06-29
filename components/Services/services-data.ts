export type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: 'Commodity Trading',
    description:
      'Our commodity trading service focuses on exporting premium agricultural products including soybeans, corn, sesame seeds, and groundnuts, with strict compliance to international standards and growing demand for raw outputs.',
    image: '/images/field.webp',
  },
  {
    title: 'Exportation',
    description:
      'We move agricultural materials into value-added export channels that support food, pharmaceutical, and animal feed industries.',
    image: '/images/export.webp',
  },
  {
    title: 'Processing',
    description:
      "Vaultman House transforms raw agricultural materials into food, drugs, and animal feed, boosting Ghana's GDP while producing semi-finished and finished goods like cooking oil and flour.",
    image: '/images/processing02.webp',
  },
];
