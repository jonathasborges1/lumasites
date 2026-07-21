import { SignJWT, jwtVerify } from "jose";
import { KM_SESSION_SECRET } from "./config";

const SESSION_DURATION = "7d";

function secretKey() {
  if (!KM_SESSION_SECRET) {
    throw new Error("KARENMORAES_SESSION_SECRET não configurada");
  }
  return new TextEncoder().encode(KM_SESSION_SECRET);
}

export async function createSessionToken() {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(SESSION_DURATION)
    .sign(secretKey());
}

export async function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return payload.role === "admin";
  } catch {
    return false;
  }
}
