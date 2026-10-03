import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "procreate-assets-cdn.procreate.com",
        pathname: "/_nuxt/**",
      },
    ],
  },
};

export default nextConfig;
