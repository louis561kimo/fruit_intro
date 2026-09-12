import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "水果專欄｜台灣好果",
  description: "認識台灣當令水果的產地故事、挑選訣竅與品種身世。",
};

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-24 text-center sm:pt-32">
        <p className="mb-4 text-xs tracking-[0.4em] text-muted">
          FRUIT JOURNAL
        </p>
        <h1 className="font-serif text-3xl leading-relaxed text-foreground sm:text-4xl">
          水果專欄
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted sm:text-base">
          從產地故事到挑選訣竅，帶您更認識每一顆台灣水果背後的滋味與用心。
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-surface transition-colors hover:bg-background"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 py-8">
                <p className="text-[11px] tracking-wide text-muted">
                  {post.date}
                </p>
                <h2 className="mt-3 font-serif text-base text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-xs leading-6 text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-5 text-xs tracking-wide text-accent">
                  閱讀更多 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
