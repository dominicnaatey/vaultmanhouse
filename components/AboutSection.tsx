import Image from 'next/image';
import Button from './ui/Button';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-gray-300 rounded-full px-4 py-1.5 w-max mb-4">
            About Company
          </span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full">
            <h2 className="font-serif text-4xl md:text-6xl text-[#2D2926] max-w-2xl leading-tight">
              Modern Solutions for Traditional Challenges
            </h2>
            <Button className="mb-2">Read More</Button>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[500px] rounded-4xl overflow-hidden relative mb-16 shadow-xl shadow-black/5 group">
          <Image
            src="/images/img02.webp"
            alt="Harvester overview"
            fill
            className="object-cover transition-transform duration-650 group-hover:scale-101"
          />
          <div className="absolute inset-0 bg-[#59644D]/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <p className="text-2xl lg:text-3xl text-[#2D2926] font-medium leading-normal">
            We don&apos;t just grow crops &mdash; we grow trust, opportunity, and a better future. We are dedicated to supporting farmers, enhancing food security, and promoting sustainable agriculture.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            With years of experience and a deep understanding of local and global challenges, we provide high-quality seeds, modern farming solutions, expert field support, and agri-tech innovations that empower growers to increase productivity and protect natural resources. Our mission is rooted in more than just farming &mdash; it&apos;s about building partnerships, preserving the land, and helping communities thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
