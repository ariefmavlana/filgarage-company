import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  experimental: {
    optimizeCss: true, // jika menggunakan Tailwind
  },
};

export default nextConfig;
