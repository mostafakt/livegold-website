import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { verifyJwt } from "./jwt";
import { JWT_COOKIE_NAME } from "./constants";
import type { JWTPayload } from "jose";
import { NextResponse } from "next/server";

export function getTokenFromServerCookies(): string | null {
  const cookie = cookies().get(JWT_COOKIE_NAME);
  return cookie?.value ?? null;
}

export async function getUserFromServerCookie(): Promise<null | {
  id: string;
  email?: string;
  name?: string;
  raw?: JWTPayload;
}> {
  const token = getTokenFromServerCookies();
  if (!token) return null;
  try {
    const payload = await verifyJwt(token);
    return {
      id: String(payload.sub),
      email: typeof payload.email === "string" ? payload.email : undefined,
      name: typeof payload.name === "string" ? payload.name : undefined,
      raw: payload,
    };
  } catch {
    return null;
  }
}

export async function getUserFromNextRequest(req: NextRequest): Promise<null | {
  id: string;
  email?: string;
  name?: string;
  raw?: JWTPayload;
}> {
  const cookie = req.cookies.get(JWT_COOKIE_NAME)?.value ?? null;
  if (!cookie) return null;
  try {
    const payload = await verifyJwt(cookie);
    return {
      id: String(payload.sub),
      email: typeof payload.email === "string" ? payload.email : undefined,
      name: typeof payload.name === "string" ? payload.name : undefined,
      raw: payload,
    };
  } catch {
    return null;
  }
}

export function unauthorizedResponse() {
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}
