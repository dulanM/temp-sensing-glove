import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/loader.js',
  },
};

export default nextConfig;
