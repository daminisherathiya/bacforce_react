/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "prod";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/landing" : undefined,
};

module.exports = nextConfig;
