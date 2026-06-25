import Image from 'next/image';
import Button from './ui/Button';

const COMMODITIES = [
  {
    image: '/images/soybeans.jpg',
    title: 'Soybeans',
    tags: ['4,000MT+', 'Export', 'Ghana'],
  },
  {
    image: '/images/corn.png',
    title: 'Corn',
    tags: ['Bulk Supply', 'Trade', 'Regional'],
  },
  {
    image: '/images/sesame%20seeds.png',
    title: 'Sesame Seeds',
    tags: ['Premium Grade', 'Export', 'Supply'],
  },
  {
    image: '/images/cashew.jpg',
    title: 'Cashew',
    tags: ['Quality', 'Processing', 'Export'],
  },
  {
    image: '/images/sheanuts.jpg',
    title: 'Shea Nuts',
    tags: ['Value Added', 'West Africa', 'Trade'],
  },
];

export default function CommoditiesSection() {
  return (
    <section id="commodities" className="py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-20 relative">
          <h2 className="font-hero text-5xl sm:text-6xl md:text-8xl text-[#2D2926] leading-[1.1] tracking-tight">
            Featured<br /><span className="text-[#8F9A80]">Commodities</span>
          </h2>
          <div className="lg:absolute lg:right-0 lg:top-8 max-w-sm">
            <p className="text-[#2D2926] text-base md:text-lg lg:text-right font-medium leading-relaxed">
              Vaultman House trades dependable agricultural commodities across Ghana, Burkina Faso, and Mali with quality-focused sourcing and export readiness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-4">
          {COMMODITIES.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square rounded-4xl overflow-hidden mb-8 shadow-xl">
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent transition-colors duration-300 group-hover:from-black/75 group-hover:via-black/20 group-hover:to-black/10" />
              </div>
              {/* <div className="flex gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/50 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div> */}
              <h3 className="font-hero font-normal text-xl text-[#2D2926] group-hover:text-[#F3E287] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* <div className="mt-20 flex justify-center">
          <Button>Contact Us</Button>
        </div> */}
      </div>
    </section>
  );
}
