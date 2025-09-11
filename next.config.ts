import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true, // jika menggunakan Tailwind
  },
};

export default nextConfig;
