/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/next",
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx"],
  // i18n: {
  //   locales: ["en", "ru"],
  //   defaultLocale: "en",
  // },
};

module.exports = nextConfig;
