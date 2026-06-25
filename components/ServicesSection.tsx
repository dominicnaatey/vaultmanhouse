import React from 'react';
import Image from 'next/image';
import { ArrowRight, Leaf, Sprout, Users, Droplets } from 'lucide-react';
import Button from './ui/Button';

const SERVICES = [
  {
    id: '01',
    title: 'Commodity Trading',
    description:
      'We export premium agricultural commodities including soybeans, corn, sesame seeds, and groundnuts with strict attention to international standards.',
    image: '/images/soybeans.webp',
  },
  {
    id: '02',
    title: 'Exportation',
    description:
      'We move agricultural materials into value-added export channels that support food, pharmaceutical, and animal feed industries.',
    image: '/images/homehero.webp',
  },
  {
    id: '03',
    title: 'Processing',
    description:
      'We transform raw agricultural materials into semi-finished and finished goods such as cooking oil and flour to create more value locally.',
    image: '/images/img01.webp',
  },
];

const LOGOS = [
  { icon: <Leaf />, text: 'Founded 2020' },
  { icon: <Sprout />, text: '4,000MT+ Supply' },
  { icon: <Users />, text: 'Ghana' },
  { icon: <Users />, text: 'Burkina Faso' },
  { icon: <Droplets />, text: 'Mali' },
];

export default function ServicesSection() {
  return (
    <section className="py-36 px-6 md:px-16 bg-[#8F9A80]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between lg:items-end gap-8 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white/80 border-2 border-white/50 rounded-full px-4 py-1.5 mb-6 inline-block">
              Our Services
            </span>
            <h2 className="font-hero text-4xl md:text-6xl text-white max-w-4xl leading-tight">
              What Vaultman House Offers Across The Supply Chain
            </h2>
          </div>
          <Button className="mb-2">Contact Us</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map((item, i) => (
            <div key={i} className="group relative h-105 rounded-4xl overflow-hidden cursor-pointer shadow-lg">
              <div className="absolute inset-0 z-10 bg-linear-to-t from-[#2B3521] via-[#2B3521]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 h-0 bg-linear-to-t from-[#2B3521] via-[#2B3521]/70 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:h-full group-hover:opacity-100" />
              <Image
                src={item.image}
                fill
                alt={item.title}
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-3">
                <span className="text-[#F3E287] text-sm font-mono tracking-widest">{item.id}</span>
                <h3 className="font-hero text-white text-3xl">{item.title}</h3>
                <p className="max-h-0 overflow-hidden pr-2 text-sm font-normal leading-relaxed text-white/85 opacity-0 translate-y-2 transition-all duration-300 group-hover:max-h-28 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.description}
                </p>
                <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3E287] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-[#2D2926]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-24 opacity-80 px-4">
          {LOGOS.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white font-serif text-xl tracking-wide hover:opacity-100 transition-opacity cursor-default">
              {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 text-[#F3E287]' })}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
