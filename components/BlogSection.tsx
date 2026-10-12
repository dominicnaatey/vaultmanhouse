import Image from 'next/image';
import Link from 'next/link';

import { BLOG_POSTS } from './Blog/blog-data';

export default function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-32 px-6 md:px-16 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8F9A80]/80 border border-[#8F9A80]/70 rounded-full px-4 py-1.5 mb-8 w-max">
            Latest News
          </span>
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
            <h2 className="font-extrabold text-4xl md:text-[40px] text-[#2D2926] max-w-xl leading-tight">
              Explore Our Latest News &amp; Tips
            </h2>
            <Link
              href="/blog"
              className="mb-2 inline-flex w-max items-center justify-center rounded-full bg-[#8F9A80] px-8 py-3 text-sm text-white transition-all duration-300 hover:bg-[#7a856a]"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {posts.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex flex-col gap-5">
              <div className="relative h-70 rounded-4xl overflow-hidden shadow-md">
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-6 left-6 bg-[#F3E287] text-[#2D2926] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                  {item.tag}
                </div>
              </div>
              <p className="text-xs font-mono font-medium tracking-wide text-gray-500 mt-2">{item.date}</p>
              <h3 className="font-hero text-2xl text-[#2D2926] leading-tight group-hover:text-[#8F9A80] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#2D2926]/70">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm text-[#2D2926] font-bold tracking-wide uppercase mt-2 group-hover:text-[#8F9A80] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F9A80]" /> Read More
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
