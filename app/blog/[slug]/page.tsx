import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { format } from "date-fns";
import { blogPosts } from "@/config/blog-posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date.toISOString(),
      authors: [post.author],
      tags: [post.category],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(post.date, "MMMM d, yyyy");

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Header */}
      <header className="mb-12">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex items-center text-sm text-muted-foreground">
          <time dateTime={post.date.toISOString()}>{formattedDate}</time>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <div className="whitespace-pre-line text-base leading-8 text-muted-foreground">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-border pt-8">
        <a
          href="/blog"
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </a>
      </footer>
    </article>
  );
}


