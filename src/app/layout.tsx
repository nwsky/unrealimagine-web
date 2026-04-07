import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "./scroll-reveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UnrealImagine | Cinematic Short-Form Stories",
  description:
    "UnrealImagine is a U.S.-based micro-drama production company focused on premium short-form storytelling, visual execution, and collaboration-ready development.",
  openGraph: {
    title: "UnrealImagine | Cinematic Short-Form Stories",
    description:
      "Premium micro-drama production. Short-form stories with cinematic impact.",
    url: "https://unrealimagine.com",
    siteName: "UnrealImagine",
    type: "website",
    images: [
      {
        url: "https://unrealimagine.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "UnrealImagine — Cinematic Short-Form Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UnrealImagine | Cinematic Short-Form Stories",
    description: "Premium micro-drama production. Short-form stories with cinematic impact.",
    images: ["https://unrealimagine.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
