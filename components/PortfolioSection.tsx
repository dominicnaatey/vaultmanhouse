import Image from 'next/image';
import Button from './ui/Button';

const CARDS = [
  { img: 'Harvester+Gold', title: 'Harvesting Success', tags: ['Farming', 'Organic'] },
  { img: 'Green+Shoot', title: 'Seeds of Change', tags: ['Crop', 'Farming'] },
  { img: 'Hands+Seeds', title: 'Farming the Future', tags: ['Agriculture', 'Harvesting'] },
];

export default function PortfolioSection() {
  return (
    <section className="py-32 px-6 md:px-16 bg-[#8F9A80]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-20 relative">
          <h2 className="font-hero text-5xl sm:text-6xl md:text-8xl text-white leading-[1.1] tracking-tight">
            From Seed<br /><span className="text-[#F3E287]">to Harvest</span>
          </h2>
          <div className="lg:absolute lg:right-0 lg:top-8 max-w-sm">
            <p className="text-white/90 text-base md:text-lg lg:text-right font-medium leading-relaxed">
              We are committed to growing more than crops &mdash; we&apos;re growing a better future for people.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {CARDS.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-[480px] rounded-4xl overflow-hidden mb-8 shadow-xl">
                <Image
                  src={`https://placehold.co/600x800/41533B/F9F7F2.webp?text=${item.img}`}
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/50 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-hero text-3xl text-white group-hover:text-[#F3E287] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button>View All Cases</Button>
        </div>
      </div>
    </section>
  );
}
