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
  // As rotas de API do blog (karenmoraes) fazem fs.readdirSync/readFileSync com
  // um caminho montado em runtime (path.join(process.cwd(), ...)) para a
  // retaguarda em disco. Como o rastreador de arquivos do Next não consegue
  // resolver esse caminho estaticamente, ele varre o projeto inteiro por
  // segurança — incluindo o histórico do .git (200MB+ por arquivo), o que
  // estourava o limite de 100MB por arquivo da Vercel. Excluir explicitamente
  // o que nenhuma função serverless deveria carregar.
  outputFileTracingExcludes: {
    "*": [".git/**", "public/**", "scripts/**"],
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
