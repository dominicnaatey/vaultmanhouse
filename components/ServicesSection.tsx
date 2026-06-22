import React from 'react';
import Image from 'next/image';
import { ArrowRight, Leaf, Sprout, Users, Droplets } from 'lucide-react';
import Button from './ui/Button';

const SERVICES = [
  { id: '01', title: 'Planting Material' },
  { id: '02', title: 'Soil Solutions' },
  { id: '03', title: 'Crop Protection' },
  { id: '04', title: 'Innovation Services' },
];

const LOGOS = [
  { icon: <Leaf />, text: 'SmartSeed' },
  { icon: <Sprout />, text: 'HARVEST' },
  { icon: <Leaf />, text: 'simpleaf' },
  { icon: <Users />, text: 'THE ORGANIC FARM' },
  { icon: <Droplets />, text: 'farmburst' },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#8F9A80]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between lg:items-end gap-8 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white border border-white/30 rounded-full px-4 py-1.5 mb-6 inline-block">
              Farm Solutions
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white max-w-2xl leading-tight">
              What Our Agricultural Company Offers
            </h2>
          </div>
          <Button className="mb-2">Read More</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((item, i) => (
            <div key={i} className="group relative h-[420px] rounded-4xl overflow-hidden cursor-pointer shadow-lg">
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
              <Image
                src={`https://placehold.co/400x600/313c28/F9F7F2.webp?text=${item.title.replace(' ', '+')}`}
                fill
                alt={item.title}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-3">
                <span className="text-[#F3E287] text-sm font-mono tracking-widest">{item.id}</span>
                <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                <div className="w-10 h-10 rounded-full bg-[#F3E287] flex items-center justify-center mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-[#2D2926]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-8 mt-24 opacity-70 px-4">
          {LOGOS.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white font-serif text-xl tracking-wide hover:opacity-100 transition-opacity cursor-pointer">
              {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 text-[#F3E287]' })}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
