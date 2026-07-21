import { NextRequest, NextResponse } from "next/server";
import { KM_ADMIN_BASE_PATH, KM_COOKIE_NAME } from "@/lib/karenmoraes/config";
import { verifySessionToken } from "@/lib/karenmoraes/auth";

const KM_PUBLIC_PATHS = [
  `${KM_ADMIN_BASE_PATH}/login`,
  "/api/karenmoraes/admin/login",
  "/api/karenmoraes/admin/logout",
];

export const config = {
  matcher: [
    "/proposta-comercial/karenmoraes/admin/:path*",
    "/proposta-comercial/karenmoraes/preview/:path*",
    "/api/karenmoraes/admin/:path*",
    "/api/karenmoraes/blog/:path*",
  ],
};

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const loginPagePath = `${KM_ADMIN_BASE_PATH}/login`;
  const isAuthenticated = await verifySessionToken(request.cookies.get(KM_COOKIE_NAME)?.value);

  // Já logado e tentando abrir a tela de login (ex.: link "Área restrita")?
  // Pula direto pro painel em vez de pedir a senha de novo.
  if (pathname === loginPagePath) {
    if (isAuthenticated) return NextResponse.redirect(new URL(KM_ADMIN_BASE_PATH, request.url));
    return NextResponse.next();
  }

  if (KM_PUBLIC_PATHS.some((p) => pathname === p)) return NextResponse.next();

  if (isAuthenticated) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const loginUrl = new URL(loginPagePath, request.url);
  return NextResponse.redirect(loginUrl);
}
