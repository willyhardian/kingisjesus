import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discover Jesus | Trending Christian Videos & Daily Inspiration",
  description: "Fuel your daily walk with Jesus. Watch curated, modern Christian videos, powerful testimonies, and real talk on faith designed for the next generation of believers.",
  keywords: [
    "Christian Videos",
    "Youth Ministry",
    "Modern Faith",
    "Daily Devotional Video",
    "Christian Testimonies",
    "Gen Z Christianity",
    "Worship Culture"
  ],
  openGraph: {
    title: "Discover Jesus | Curated Christian Videos",
    description: "Fuel your daily walk with Jesus. Watch curated videos and real talk on faith.",
    type: 'website',
    siteName: "Jesus is King Center",
    locale: 'en_US',
    images: '/logo.png',
    // images: [
    //   {
    //     url: 'https://www.your-website.com/og-social-share.jpg', // Make sure this image is vibrant/modern
    //     width: 1200,
    //     height: 630,
    //     alt: 'Discover Jesus Video Library',
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-cream-50`}
      >
        {/* <Header /> */}
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
