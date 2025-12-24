import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SEYA Youth Organization. Contact us via phone, email, or visit us at our location in Mombasa, Kenya.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactSection />
    </div>
  );
}

