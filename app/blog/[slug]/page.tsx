import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPostBySlug } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "找不到文章｜台灣好果" };
  }
  return {
    title: `${post.title}｜台灣好果`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col">
      <article className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
        <Link
          href="/blog"
          className="text-xs tracking-wide text-muted hover:text-foreground"
        >
          ← 回到水果專欄
        </Link>

        <p className="mt-8 text-xs tracking-[0.4em] text-muted">
          {post.date}
        </p>
        <h1 className="mt-4 font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
          {post.title}
        </h1>

        <div className="relative mt-8 h-64 w-full overflow-hidden sm:h-80 md:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-sm leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted">
            想品嚐 {post.fruit} 的滋味嗎？
          </p>
          <Link
            href="/#fruits"
            className="mt-4 inline-block border border-foreground px-8 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            立即選購
          </Link>
        </div>
      </article>
    </main>
  );
}
