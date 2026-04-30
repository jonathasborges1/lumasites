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
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lumasites.com.br" }],
        destination: "https://lumasites.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
