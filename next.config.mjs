/** @type {import('next').NextConfig} */
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
      // HTTP → HTTPS (defense-in-depth; Vercel also handles this at edge)
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://lumasites.com.br/:path*",
        permanent: true,
      },
      // www → non-www (homepage — avoids trailing slash on destination)
      {
        source: "/",
        has: [{ type: "host", value: "www.lumasites.com.br" }],
        destination: "https://lumasites.com.br",
        permanent: true,
      },
      // www → non-www (all other paths)
      {
        source: "/:path+",
        has: [{ type: "host", value: "www.lumasites.com.br" }],
        destination: "https://lumasites.com.br/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
