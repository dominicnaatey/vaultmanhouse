import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import BlogPostArticle from '@/components/Blog/BlogPostArticle';
import { BLOG_POSTS, getBlogPost } from '@/components/Blog/blog-data';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog | Vaultman House',
    };
  }

  return {
    title: `${post.title} | Vaultman House`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#F9F7F2] text-[#2D2926]">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-16 md:py-24">
        <section className="relative overflow-hidden rounded-[2.5rem]">
          <div className="relative h-80 md:h-[34rem]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/35 via-transparent to-transparent" />
          </div>
        </section>

        <div className="mt-16">
          <BlogPostArticle post={post} />
        </div>
      </div>
    </div>
  );
}
