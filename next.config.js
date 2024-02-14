/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // ** allows for all hostnames
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
