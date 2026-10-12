import Image from 'next/image';
import Link from 'next/link';

import type { BlogPost } from './blog-data';

type BlogPostsGridProps = {
  posts: BlogPost[];
};

export default function BlogPostsGrid({ posts }: BlogPostsGridProps) {
  return (
    <section className="mt-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="inline-flex w-max items-center rounded-full border-2 border-[#8F9A80]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8F9A80]/80">
            Blog Archive
          </span>
          <h2 className="mt-6 font-extrabold text-4xl leading-tight text-[#2D2926] md:text-[40px]">
            Recent Articles
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[#2D2926]/72 md:text-base">
          Short reads and practical perspectives from the Vaultman House team on
          agribusiness execution, trade operations, and market growth.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col rounded-[2rem] bg-white p-5 shadow-[0_14px_38px_rgba(45,41,38,0.06)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <span className="absolute left-5 top-5 rounded-full bg-[#F3E287] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#2D2926]">
                {post.tag}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#2D2926]/55">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>

            <h3 className="mt-4 font-hero text-2xl leading-tight text-[#2D2926] transition-colors group-hover:text-[#8F9A80]">
              {post.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#2D2926]/72">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#2D2926] transition-colors group-hover:text-[#8F9A80]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8F9A80]" />
              Read More
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
