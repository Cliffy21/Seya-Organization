"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { GalleryImage } from "@/config/gallery-images";

interface ImageCardProps {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}

export default function ImageCard({ image, index, onClick }: ImageCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-muted shadow-lg ring-1 ring-border transition-all duration-300 hover:shadow-2xl hover:ring-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Shimmer Loading Effect */}
        {isLoading && (
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-muted via-primary/10 to-muted bg-[length:200%_100%]" />
        )}

        {/* Image */}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover transition-all duration-500 ${
            isHovered ? "scale-110 brightness-110" : "scale-100 brightness-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setIsLoading(false)}
          priority={index < 6}
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-60"
          }`}
        />

        {/* Image Info Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          {image.title && (
            <h3 className="text-lg font-semibold">{image.title}</h3>
          )}
          {image.category && (
            <p className="mt-1 text-sm text-white/80">{image.category}</p>
          )}
        </div>

        {/* Hover Icon */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 p-4 backdrop-blur-sm transition-all duration-300 ${
            isHovered
              ? "scale-100 opacity-100"
              : "scale-75 opacity-0"
          }`}
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </div>

      {/* Vibrant Accent Border with Gradient */}
      <div
        className={`absolute inset-0 rounded-xl ring-2 ring-transparent transition-all duration-300 ${
          isHovered
            ? "ring-primary/50 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            : ""
        }`}
      />

      {/* Vibrant Glow Effect on Hover */}
      {isHovered && (
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-75 blur-xl transition-opacity duration-300" />
      )}
    </motion.div>
  );
}

