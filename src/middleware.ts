import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["ar", "en"];
const DEFAULT_LOCALE = "ar";
export const COOKIE_NAME = "NEXT_LOCALE";
// 1 year
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname; // e.g. /products or /en/products

  // Skip API, _next, static files, and assets
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") // files like .png, .svg, .ico, etc.
  ) {
    return NextResponse.next();
  }

  // Extract first path segment
  const segments = pathname.split("/");
  // segments[0] === "" because pathname starts with "/"
  const maybeLocale = segments[1];

  // CASE A: Path already contains locale: /ar/... or /en/...
  if (SUPPORTED_LOCALES.includes(maybeLocale)) {
    const cookieLocale = req.cookies.get(COOKIE_NAME)?.value;
    if (cookieLocale !== maybeLocale) {
      // Set cookie to match route locale
      const res = NextResponse.next();
      res.cookies.set({
        name: COOKIE_NAME,
        value: maybeLocale,
        path: "/",
        maxAge: COOKIE_MAX_AGE,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        // httpOnly: false -> allow client JS to read if you need that
      });
      return res;
    }
    return NextResponse.next();
  }

  // CASE B: Missing locale in path -> redirect to the locale from cookie or default
  const cookieLocale = req.cookies.get(COOKIE_NAME)?.value;
  const chosenLocale = SUPPORTED_LOCALES.includes(cookieLocale ?? "ar")
    ? cookieLocale!
    : DEFAULT_LOCALE;

  // Prepend locale to path and preserve search params
  url.pathname = `/${chosenLocale}${pathname}`;
  return NextResponse.redirect(url);
}

/**
 * Apply middleware to all paths except static, api and _next.
 * This matcher prevents middleware from running for assets and APIs.
 */
export const config = {
  matcher: ["/((?!api|_next|static|.*\\..*).*)"],
};
