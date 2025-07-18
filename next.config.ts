import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'picsum.photos', pathname: '/**' },
    ]
  }
};

export default nextConfig;
