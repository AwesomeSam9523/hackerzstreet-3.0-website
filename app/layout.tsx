import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "HackerzStreet 4.0",
  description: "Largest hackathon of IEEE MUJ with a prize pool of 60K+",
  keywords:
    "hackathon, IEEEMUJ, IEEECS, hackerz, hackerzstreet, coding, programming, tech",
  openGraph: {
    title: "HackerzStreet 4.0",
    description: "Largest hackathon of IEEE MUJ with a prize pool of 60K+",
    url: "https://hackerzstreet.ieeemuj.com",
    images:
      "https://images.prismic.io/ieeemuj/Z-XOindAxsiBwAyV_hzsunstopposter.png?auto=format,compress",
    siteName: "HackerzStreet 4.0",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-pattern antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
