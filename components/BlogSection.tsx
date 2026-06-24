import Image from 'next/image';
import Button from './ui/Button';

const POSTS = [
  { tag: 'Harvest', date: 'AUGUST 18, 2025', title: 'Latest Updates in Global Agriculture' },
  { tag: 'Agriculture', date: 'AUGUST 18, 2025', title: 'How Technology Is Changing Agriculture' },
  { tag: 'Agri-Tech', date: 'AUGUST 18, 2025', title: 'Organic vs. Conventional Farming' },
];

export default function BlogSection() {
  return (
    <section className="py-32 px-6 md:px-16 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-gray-300 rounded-full px-4 py-1.5 mb-8 w-max">
            Latest News
          </span>
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
            <h2 className="font-hero text-5xl md:text-6xl text-[#2D2926] max-w-xl leading-[1.1]">
              Explore Our Latest News &amp; Tips
            </h2>
            <Button variant="dark" className="mb-2">Read More</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {POSTS.map((item, i) => (
            <div key={i} className="group cursor-pointer flex flex-col gap-5">
              <div className="relative h-[280px] rounded-4xl overflow-hidden shadow-md">
                <Image
                  src={`https://placehold.co/600x400/EAE7DE/8F9A80.webp?text=News+${i + 1}`}
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-[#F3E287] text-[#2D2926] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                  {item.tag}
                </div>
              </div>
              <p className="text-xs font-mono font-medium tracking-wide text-gray-500 mt-2">{item.date}</p>
              <h3 className="font-hero text-2xl text-[#2D2926] leading-tight group-hover:text-[#8F9A80] transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#2D2926] font-bold tracking-wide uppercase mt-2 group-hover:text-[#8F9A80] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F9A80]" /> Read More
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
