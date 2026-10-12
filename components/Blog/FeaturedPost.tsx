import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { BlogPost } from './blog-data';

type FeaturedPostProps = {
  post: BlogPost;
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="mt-16">
      <div className="grid items-center gap-10 rounded-[2rem] bg-[#FEF4CC] p-6 md:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
              priority
            />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#2D2926]/65">
            <span className="rounded-full bg-white px-4 py-2 text-[#2D2926]">
              {post.tag}
            </span>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>

          <h2 className="mt-6 max-w-xl font-extrabold text-3xl leading-tight text-[#2D2926] md:text-[2.5rem]">
            {post.title}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#2D2926]/78 md:text-base">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/blog/${post.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[#2D2926] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1f1d1b]"
            >
              <span>Read Article</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href={post.ctaHref}
              className="inline-flex items-center rounded-full border border-[#2D2926]/15 bg-white px-6 py-3 text-sm font-medium text-[#2D2926] transition-colors hover:border-[#59644D]/35 hover:text-[#59644D]"
            >
              {post.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
