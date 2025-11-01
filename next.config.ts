import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export", // Outputs a Single-Page Application (SPA)
  distDir: "dist", // Changes the build output directory to `build`
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
