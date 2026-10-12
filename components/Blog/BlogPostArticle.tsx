import Link from 'next/link';

import type { BlogPost } from './blog-data';

type BlogPostArticleProps = {
  post: BlogPost;
};

export default function BlogPostArticle({ post }: BlogPostArticleProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center rounded-full border border-[#2D2926]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2D2926]/68 transition-colors hover:border-[#59644D]/30 hover:text-[#59644D]"
      >
        Back to Blog
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#2D2926]/55">
        <span className="rounded-full bg-[#F3E287] px-4 py-2 text-[#2D2926]">{post.tag}</span>
        <span>{post.date}</span>
        <span>{post.readingTime}</span>
        <span>{post.author}</span>
      </div>

      <h1 className="mt-6 font-extrabold text-4xl leading-tight text-[#2D2926] md:text-5xl">
        {post.title}
      </h1>

      <p className="mt-6 text-base leading-relaxed text-[#2D2926]/75 md:text-lg">
        {post.excerpt}
      </p>

      <div className="mt-12 space-y-12">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-bold text-2xl leading-tight text-[#2D2926] md:text-3xl">
              {section.heading}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#2D2926]/80 md:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] bg-[#FEF4CC] px-6 py-8 md:px-8">
        <h3 className="font-bold text-2xl leading-tight text-[#2D2926]">
          Continue the conversation
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#2D2926]/78 md:text-base">
          Explore the related Vaultman House service behind this article or get in
          touch with the team for a tailored conversation.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={post.ctaHref}
            className="inline-flex items-center rounded-full bg-[#2D2926] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1f1d1b]"
          >
            {post.ctaLabel}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-[#2D2926]/12 bg-white px-6 py-3 text-sm font-medium text-[#2D2926] transition-colors hover:border-[#59644D]/35 hover:text-[#59644D]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}
