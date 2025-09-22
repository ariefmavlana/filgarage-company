import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // wajib untuk static export
  /* config options here */
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true, // jika menggunakan Tailwind
  },
};

export default nextConfig;
