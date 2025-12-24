import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/layout/SplashScreen";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import WhatsAppButton from "@/components/features/WhatsAppButton";

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
    images: [
      {
        url: "https://oracomgroup.co.ke/seya/logo1.png",
        width: 1200,
        height: 630,
        alt: "SEYA Youth Organization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEYA - Empowered Youth for a Healthy Society",
    description:
      "Empowering youth economically through sports, art, and film in Mombasa County, Kenya.",
    images: ["https://oracomgroup.co.ke/seya/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    types: {
      "application/rss+xml": "/api/feed",
    },
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
        <ErrorBoundary>
          <SplashScreen />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ErrorBoundary>
      </body>
    </html>
  );
}
