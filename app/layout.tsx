import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SEYA - Empowered Youth for a Healthy Society",
    template: "%s | SEYA",
  },
  description:
    "SEYA Youth Organization is a youth-led Community-Based Organization empowering youth economically through sports, art, and film in Mombasa County, Kenya.",
  keywords: [
    "youth empowerment",
    "Kenya",
    "Mombasa",
    "community organization",
    "youth development",
  ],
  authors: [{ name: "SEYA Youth Organization" }],
  creator: "SEYA Youth Organization",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oracomgroup.co.ke/seya/",
    siteName: "SEYA",
    title: "SEYA - Empowered Youth for a Healthy Society",
    description:
      "Empowering youth economically through sports, art, and film in Mombasa County, Kenya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
