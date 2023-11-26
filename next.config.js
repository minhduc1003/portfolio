/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hatrabbits.com",
        port: "",
        pathname: "/wp-content/uploads/2017/01/**",
      },
    ],
  },
};

module.exports = nextConfig;
