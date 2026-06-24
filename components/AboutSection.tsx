import Image from 'next/image';
import Button from './ui/Button';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          {/* <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-gray-300 rounded-full px-4 py-1.5 w-max mb-4">
            About Company
          </span> */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full">
            <h2 className="font-serif text-4xl md:text-6xl text-[#2D2926] max-w-4xl leading-tight">
              Building Value Across Africa&apos;s Agribusiness Supply Chain
            </h2>
            <Button className="mb-2">About Us</Button>
          </div>
        </div>

        <div className="w-full h-75 md:h-125 rounded-4xl overflow-hidden relative mb-16 shadow-xl shadow-black/5 group">
          <Image
            src="/images/img02.webp"
            alt="Harvester overview"
            fill
            className="object-cover transition-transform duration-650 group-hover:scale-101"
          />
          <div className="absolute inset-0 bg-[#59644D]/60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <p className="text-2xl lg:text-26px text-[#2D2926] font-medium leading-normal">
            Vaultman House Agro Commodities was founded in 2020 to build a diversified conglomerate across key African sectors, starting with large-scale agro-commodity trade in Ghana, Burkina Faso, and Mali.
          </p>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
            With a supply capacity of over 4,000MT+ of soybeans, we trade, produce, process, export, and transport agricultural commodities to give our clients maximum value. As we expand into processing and export, our goal is to create a sustainable agribusiness ecosystem driven by innovation, quality, transparency, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
