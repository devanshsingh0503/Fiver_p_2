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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
