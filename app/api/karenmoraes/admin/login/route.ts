import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createSessionToken } from "@/lib/karenmoraes/auth";
import { KM_ADMIN_PASSWORD_HASH, KM_COOKIE_NAME } from "@/lib/karenmoraes/config";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (!KM_ADMIN_PASSWORD_HASH) {
    return NextResponse.json({ error: "Login não configurado (KARENMORAES_ADMIN_PASSWORD_HASH ausente)" }, { status: 500 });
  }
  if (!password || !(await bcrypt.compare(password, KM_ADMIN_PASSWORD_HASH))) {
    return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(KM_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
