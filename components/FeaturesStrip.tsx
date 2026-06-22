import React from 'react';
import Image from 'next/image';

const FEATURES = [
  { img: 'Crop', name: 'Crop Planning' },
  { img: 'Soil', name: 'Soil Testing' },
  { img: 'Machinery', name: 'Farm Machinery' },
  { img: 'Equipment', name: 'Equipment Services' },
];

export default function FeaturesStrip() {
  return (
    <div className="flex py-10 px-6 md:px-16 gap-4 bg-[#F9F7F2] overflow-x-auto pb-16">
      {FEATURES.map((item, i) => (
        <React.Fragment key={i}>
          <div className="min-w-[180px] h-14 rounded-full relative overflow-hidden shadow-sm shrink-0 group">
            <Image
              src={`https://placehold.co/300x100/A3B18A/F9F7F2.webp?text=${item.img}`}
              fill
              alt={item.name}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="min-w-[180px] h-14 rounded-full bg-[#F3E287] flex items-center justify-center font-medium text-sm shrink-0 text-[#2D2926] shadow-sm cursor-pointer hover:bg-[#E5D474] transition-colors">
            {item.name}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
