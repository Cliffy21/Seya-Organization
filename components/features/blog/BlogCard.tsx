"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import type { BlogPost } from "@/config/blog-posts";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = format(post.date, "MMM d, yyyy");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-background shadow-lg ring-1 ring-border transition-all duration-300 hover:shadow-2xl hover:ring-primary/50 hover:-translate-y-1"
    >
      {/* Vibrant Glow Effect on Hover */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-75" />

      <div className="relative flex flex-1 flex-col">
        {/* Category Badge */}
        <div className="px-6 pt-6">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <svg
                className="mr-2 h-4 w-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <time dateTime={post.date.toISOString()}>{formattedDate}</time>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Read More
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary/50 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]" />
    </motion.article>
  );
}


