import React from 'react';
import Image from 'next/image';

const FEATURES = [
  { image: '/images/soybeans.webp', name: 'Commodity Trading' },
  { image: '/images/homehero.webp', name: 'Exportation' },
  { image: '/images/img01.webp', name: 'Processing' },
  { image: '/images/img02.webp', name: '4,000MT+ Soybeans' },
];

export default function FeaturesStrip() {
  return (
    <div className="flex overflow-x-auto scrollbar-hide py-10 px-6 md:px-16 gap-4 bg-[#F9F7F2] pb-16">
      {FEATURES.map((item, i) => (
        <React.Fragment key={i}>
          <div className="min-w-55 h-15 rounded-full relative overflow-hidden shadow-sm shrink-0 group">
            <Image
              src={item.image}
              fill
              alt={item.name}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#59644D]/35" />
          </div>
          <div className="min-w-55 h-15 rounded-full bg-[#F3E287] flex items-center justify-center px-5 text-center font-medium text-lg shrink-0 text-[#2D2926] shadow-sm cursor-pointer hover:bg-[#E5D474] transition-colors">
            {item.name}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
