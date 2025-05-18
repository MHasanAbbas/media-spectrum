import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      resolveAlias: {
        'next/link.js': 'next/link',
        'next/navigation.js': 'next/navigation',
      },
    },
  },
};

export default nextConfig;
