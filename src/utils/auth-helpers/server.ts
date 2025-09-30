"use server";

import { cookies } from "next/headers";
import { IS_GUEST_COOKIE, TOKEN_COOKIE, TOKEN_EXPIRES_COOKIE } from "./client";

/**
 * Save token with given expiry from API.
 */
export async function setAuthToken(
  token: string,
  isGuest: boolean,
  tokenExpiresAt: string
) {
  const cookieStore = cookies();
  const expires = new Date(tokenExpiresAt);

  cookieStore.set(TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });

  cookieStore.set(IS_GUEST_COOKIE, isGuest ? "1" : "0", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });

  cookieStore.set(TOKEN_EXPIRES_COOKIE, tokenExpiresAt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });
}

export async function getAuthToken(): Promise<{
  token: string | null;
  isGuest: boolean;
  expiresAt: string | null;
}> {
  const cookieStore = cookies();

  return {
    token: cookieStore.get(TOKEN_COOKIE)?.value ?? null,
    isGuest: cookieStore.get(IS_GUEST_COOKIE)?.value === "1",
    expiresAt: cookieStore.get(TOKEN_EXPIRES_COOKIE)?.value ?? null,
  };
}

export async function clearAuthToken() {
  const cookieStore = cookies();
  cookieStore.delete(TOKEN_COOKIE);
  cookieStore.delete(IS_GUEST_COOKIE);
  cookieStore.delete(TOKEN_EXPIRES_COOKIE);
}
