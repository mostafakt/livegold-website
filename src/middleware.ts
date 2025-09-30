import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["ar", "en"];
const DEFAULT_LOCALE = "ar";
export const COOKIE_NAME = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function getLocaleFromAcceptLanguage(header?: string | null) {
  if (!header) return null;
  const parts = header.split(",").map(p => p.split(";")[0].trim());
  for (const part of parts) {
    const code = part.split("-")[0]; // e.g. 'en-US' -> 'en'
    if (SUPPORTED_LOCALES.includes(code)) return code;
  }
  return null;
}

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
  const maybeLocale = segments[1]; // segments[0] === ""

  // CASE A: already contains supported locale -> ensure cookie matches
  if (SUPPORTED_LOCALES.includes(maybeLocale)) {
    const cookieLocale = req.cookies.get(COOKIE_NAME)?.value;
    if (cookieLocale !== maybeLocale) {
      const res = NextResponse.next();
      res.cookies.set({
        name: COOKIE_NAME,
        value: maybeLocale,
        path: "/",
        maxAge: COOKIE_MAX_AGE,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      return res;
    }
    return NextResponse.next();
  }

  const cookieLocale = req.cookies.get(COOKIE_NAME)?.value;
  const cookieIsValid = cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale);

  const acceptLangHeader = req.headers.get("accept-language");
  const acceptLocale = getLocaleFromAcceptLanguage(acceptLangHeader);
  const chosenLocale = cookieIsValid
    ? cookieLocale!
    : acceptLocale ?? DEFAULT_LOCALE;

  url.pathname = `/${chosenLocale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set({
    name: COOKIE_NAME,
    value: chosenLocale,
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}

export const config = {
  matcher: ["/((?!api|_next|static|.*\\..*).*)"],
};
