import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile images
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // GitHub profile images
      },
      {
        protocol: "https",
        hostname: "media.licdn.com", // LinkedIn profile images
      },
    ],
  },
};

export default nextConfig;
