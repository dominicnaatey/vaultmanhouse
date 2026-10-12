import type { Metadata } from 'next';

import BlogCta from '@/components/Blog/BlogCta';
import BlogHero from '@/components/Blog/BlogHero';
import BlogPostsGrid from '@/components/Blog/BlogPostsGrid';
import FeaturedPost from '@/components/Blog/FeaturedPost';
import { BLOG_POSTS } from '@/components/Blog/blog-data';

export const metadata: Metadata = {
  title: 'Blog | Vaultman House',
  description:
    'Read insights from Vaultman House on commodity trading, processing, export operations, and agribusiness growth across Ghana and the region.',
};

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = BLOG_POSTS;

  return (
    <div className="bg-[#F9F7F2] text-[#2D2926]">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-16 md:py-24">
        <BlogHero />
        <FeaturedPost post={featuredPost} />
        <BlogPostsGrid posts={otherPosts} />
        <BlogCta />
      </div>
    </div>
  );
}
