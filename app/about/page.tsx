import type { Metadata } from "next";
import AboutMission from "@/components/sections/AboutMission";
import Values from "@/components/sections/Values";
import AboutObjectives from "@/components/sections/AboutObjectives";
import VolunteerCTA from "@/components/sections/VolunteerCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SEYA Youth Organization - a youth-led Community-Based Organization empowering youth economically through sports, art, and film in Mombasa County, Kenya.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutMission />
      <Values />
      <AboutObjectives />
      <VolunteerCTA />
    </div>
  );
}

