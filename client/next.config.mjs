/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.cloud.google.com",
        port: "",
        pathname: "/mugen-fc/**",
      },
    ],
  },
};

export default nextConfig;
