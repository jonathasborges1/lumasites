import { NextResponse } from "next/server";
import { KM_COOKIE_NAME } from "@/lib/karenmoraes/config";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(KM_COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return response;
}
