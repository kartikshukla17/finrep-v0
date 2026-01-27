import HashScroll from "@/components/HashScroll";
import SmoothScroll from "@/components/SmoothScroll";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Using Inter as fallback for Articulat CF (commercial font)
// If you have Articulat CF font files, replace this with localFont import
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${dmSans.variable} ${robotoSlab.variable} ${inter.variable} antialiased flex-1 min-h-screen overflow-x-hidden`}
      >
        <SmoothScroll>
          <HashScroll />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
