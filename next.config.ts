import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output configuration for Vercel static optimization
  output: "standalone",

  // Enable experimental features for performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ["lucide-react", "@radix-ui/react-accordion"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unavatar.io",
        pathname: "/twitter/**",
      },
    ],
    // Optimize images
    formats: ["image/avif", "image/webp"],
    // Cache avatar images for 30 days
    minimumCacheTTL: 2592000, // 30 days in seconds
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable compression
  compress: true,

  // PoweredBy header removal for security
  poweredByHeader: false,
};

export default nextConfig;
