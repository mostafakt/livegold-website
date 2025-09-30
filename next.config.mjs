// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [],
//   },
// };

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ Allow all external domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // matches any domain
      },
      {
        protocol: "http",
        hostname: "**", // also allow http if needed
      },
    ],
  },
};

export default withNextIntl(nextConfig);
