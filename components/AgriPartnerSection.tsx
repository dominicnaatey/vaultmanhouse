import React from 'react';
import { Leaf, Sprout, Tractor, Droplets, MapPin, BarChart3 } from 'lucide-react';

const SERVICES = [
  { icon: <Leaf />, title: 'Nutrient\nManagement' },
  { icon: <Sprout />, title: 'Crop Planning\nSolutions' },
  { icon: <Tractor />, title: 'Farm\nMechanization' },
  { icon: <Droplets />, title: 'Irrigation & Water\nManagement' },
  { icon: <MapPin />, title: 'Post-Harvest &\nMarket Access' },
  { icon: <BarChart3 />, title: 'Agri-Tech &\nPrecision Farming' },
];

export default function AgriPartnerSection() {
  return (
    <section className="py-32 px-6 md:px-16 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-gray-300 rounded-full px-4 py-1.5 mb-8 inline-block">
            Agricultural Support
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#2D2926] leading-[1.1] sticky top-32">
            Your<br />Agriculture<br />Partner
          </h2>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mt-8 lg:mt-0">
          {SERVICES.map((item, i) => (
            <div key={i} className="flex flex-col gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#FDF3C8] flex items-center justify-center text-[#2D2926] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-2xl font-serif text-[#2D2926] whitespace-pre-line leading-tight group-hover:text-[#8F9A80] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                From organic pest control to advanced fertilizers and micronutrients, our solutions protect crops and optimize soil health
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
