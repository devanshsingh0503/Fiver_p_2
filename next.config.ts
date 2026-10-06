import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "procreate-assets-cdn.procreate.com",
        pathname: "/_nuxt/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["gsap", "@gsap/react", "lenis"],
  },
};

export default nextConfig;
