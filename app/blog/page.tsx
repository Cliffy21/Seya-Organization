import type { Metadata } from "next";
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest news and articles from SEYA Youth Organization about youth empowerment, mental health, community service, and more.",
  alternates: {
    types: {
      "application/rss+xml": "/api/feed",
    },
  },
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <BlogSection />
    </div>
  );
}


