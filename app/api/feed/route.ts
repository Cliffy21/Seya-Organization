import { NextResponse } from "next/server";
import { sortedBlogPosts } from "@/config/blog-posts";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oracomgroup.co.ke/seya";

  const rssItems = sortedBlogPosts
    .map(
      (post) => `  <item>
    <title><![CDATA[${post.title}]]></title>
    <description><![CDATA[${post.excerpt}]]></description>
    <link>${siteUrl}/blog/${post.slug}</link>
    <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
    <pubDate>${post.date.toUTCString()}</pubDate>
    <category><![CDATA[${post.category}]]></category>
    <author><![CDATA[${post.author}@seyayouth.org (${post.author})]]></author>
  </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[SEYA Youth Organization - Blog]]></title>
    <description><![CDATA[Latest news and articles from SEYA Youth Organization about youth empowerment, mental health, community service, and more.]]></description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/api/feed" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>SEYA Website</generator>
    <webMaster>info@seyayouth.org (SEYA Webmaster)</webMaster>
    <managingEditor>info@seyayouth.org (SEYA Editor)</managingEditor>
    <copyright>Copyright ${new Date().getFullYear()} SEYA Youth Organization. All rights reserved.</copyright>
${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}


