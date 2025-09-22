import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // wajib untuk static export
  trailingSlash: true, // tambahkan trailing slash untuk kompatibilitas
  skipTrailingSlashRedirect: true, // skip redirect trailing slash
  distDir: 'out', // folder output
  /* config options here */
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true, // jika menggunakan Tailwind
  },
  // Asset prefix jika diperlukan untuk subdirectory
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-subdirectory' : '',
};

export default nextConfig;
