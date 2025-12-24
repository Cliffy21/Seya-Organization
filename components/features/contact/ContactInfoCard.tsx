"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
  index: number;
}

export default function ContactInfoCard({
  icon,
  title,
  content,
  href,
  index,
}: ContactInfoCardProps) {
  const contentElement = href ? (
    <Link
      href={href}
      className="block transition-colors hover:text-primary"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {content}
    </Link>
  ) : (
    <span>{content}</span>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 p-8 ring-1 ring-border transition-all duration-300 hover:shadow-2xl hover:ring-primary/50 hover:-translate-y-1"
    >
      {/* Vibrant Glow Effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-75" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>

        {/* Content */}
        <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-muted-foreground transition-colors group-hover:text-foreground">
          {contentElement}
        </p>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary/50 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]" />
    </motion.div>
  );
}

