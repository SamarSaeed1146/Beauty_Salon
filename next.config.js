/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
