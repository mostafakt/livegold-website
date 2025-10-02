/* eslint-disable @typescript-eslint/ban-ts-comment */
import { User } from "@/types/user";
import Cookies from "js-cookie";

export const TOKEN_COOKIE = "auth_token";
export const USER = "user";
export const IS_GUEST_COOKIE = "is_guest";
export const TOKEN_EXPIRES_COOKIE = "auth_expires";

/**
 * Save token with expiry date from API.
 */
export function setAuthTokenClient(
  token: string,
  isGuest: boolean,
  tokenExpiresAt: string,
  user: User | null
) {
  const expires = new Date(tokenExpiresAt);

  Cookies.set(TOKEN_COOKIE, token, {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });

  Cookies.set(IS_GUEST_COOKIE, isGuest ? "1" : "0", {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });

  Cookies.set(TOKEN_EXPIRES_COOKIE, tokenExpiresAt, {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });
  Cookies.set(USER, JSON.stringify(user), {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });
}

/**
 * Get token, guest flag, and expiry.
 */
export function getAuthTokenClient(): {
  token: string | null;
  isGuest: boolean;
  expiresAt: string | null;
  user: User | null;
} {
  const token = Cookies.get(TOKEN_COOKIE) ?? null;
  const isGuest = Cookies.get(IS_GUEST_COOKIE) === "1";
  const expiresAt = Cookies.get(TOKEN_EXPIRES_COOKIE) ?? null;
  //@ts-ignore
  const userString = Cookies.get(USER) ?? null;
  const user = userString ? (JSON.parse(userString) as User) : null;

  return { token, isGuest, expiresAt, user };
}
/**
 * Get language.
 */
export function getLanguage(): string {
  const local = Cookies.get("NEXT_LOCALE") ?? null;

  return local ?? "ar";
}

/**
 * Clear token, flag, and expiry.
 */
export function clearAuthTokenClient() {
  Cookies.remove(TOKEN_COOKIE, { path: "/" });
  Cookies.remove(IS_GUEST_COOKIE, { path: "/" });
  Cookies.remove(TOKEN_EXPIRES_COOKIE, { path: "/" });
  Cookies.remove(USER, { path: "/" });
}
