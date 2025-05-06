import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://flagcdn.com/**',), new URL('https://upload.wikimedia.org/wikipedia/commons/**')],

  },
}

export default nextConfig;
