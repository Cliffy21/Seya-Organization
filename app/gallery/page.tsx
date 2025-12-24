import type { Metadata } from "next";
import GallerySection from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our gallery of memorable moments from SEYA Youth Organization events, activities, and community engagements in Mombasa County, Kenya.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <GallerySection />
    </div>
  );
}

