import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local subdomain testing
  async headers() {
    // Only apply in development for local testing
    if (process.env.NODE_ENV === 'development') {
      return [{
        source: '/:path*',
        headers: [{
          key: 'x-custom-header',
          value: 'local-development',
        }],
      }];
    }
    return [];
  },
  // Ensure images work properly
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
