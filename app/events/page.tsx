import type { Metadata } from "next";
import EventsSection from "@/components/sections/EventsSection";

export const metadata: Metadata = {
  title: "Events",
  description:
    "View upcoming events and activities organized by SEYA Youth Organization in Mombasa County, Kenya.",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      <EventsSection />
    </div>
  );
}

