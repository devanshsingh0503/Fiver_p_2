import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Procreate Dreams",
  description: "Everything you need to create rich 2D animations, expressive videos, and breathtaking stories on iPad.",
  openGraph: {
    title: "Procreate Dreams",
    description: "Everything you need to create rich 2D animations, expressive videos, and breathtaking stories on iPad.",
    images: "https://procreate-assets-cdn.procreate.com/_nuxt/meta_cn.Ca-4Y__M.jpg",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://procreate-assets-cdn.procreate.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://procreate-assets-cdn.procreate.com" />
        <link
          rel="preload"
          as="image"
          href="https://procreate-assets-cdn.procreate.com/_nuxt/hero.C3IhNT7Q.jpg"
          // @ts-expect-error fetchpriority attribute
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://procreate-assets-cdn.procreate.com/_nuxt/ipad-pro-m4-frame.DBZ1OTO3.png"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
