/** @type {import('next').NextConfig} */
const CANONICAL_ORIGIN = "https://lumasites.com.br";
const WWW_HOST = "www.lumasites.com.br";

const nextConfig = {
  trailingSlash: false,
  allowedDevOrigins: ["192.168.100.11"],
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    qualities: [75, 90],
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },

  async redirects() {
    return [
      // Consolidate synonymous commercial intents on the homepage pillar.
      {
        source: "/criar-site-em-manaus",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/desenvolvimento-de-sites-manaus",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/site-profissional-manaus",
        destination: "/",
        statusCode: 301,
      },
      // Post reposicionado para intenção de preço (evita canibalização com /criar-site-em-manaus).
      {
        source: "/blog/criacao-de-sites-em-manaus",
        destination: "/blog/quanto-custa-um-site-em-manaus",
        statusCode: 301,
      },
      // HTTP to HTTPS on the canonical non-www origin.
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        statusCode: 301,
      },
      // WWW to non-WWW for the homepage.
      {
        source: "/",
        has: [{ type: "host", value: WWW_HOST }],
        destination: CANONICAL_ORIGIN,
        statusCode: 301,
      },
      // WWW to non-WWW for every other path.
      {
        source: "/:path+",
        has: [{ type: "host", value: WWW_HOST }],
        destination: `${CANONICAL_ORIGIN}/:path+`,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
