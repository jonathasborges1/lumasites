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

  async redirects() {
    return [
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
