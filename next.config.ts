import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    devIndicators: {
      appIsrStatus: false,
    },
  },
};

export default nextConfig;
