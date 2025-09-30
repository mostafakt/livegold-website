"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import IconButton from "./IconButton";
import Cookies from "js-cookie";
export function setLocaleCookie(locale: string) {
  Cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    expires: 365,
    sameSite: "Lax",
    secure: process.env.NODE_ENV === "production",
  });
}

const LocaleButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams()?.toString() ?? "";

  function switchTo(newLocale: string) {
    // update cookie immediately
    // setLocaleCookie(newLocale);

    // replace/insert first segment with newLocale
    const newPath = pathname.replace(/^\/[^\/]+/, `/${newLocale}`);
    const url = search ? `${newPath}?${search}` : newPath;
    router.push(url);
  }
  const currentLocal = Cookies.get("NEXT_LOCALE") || "ar";
  return (
    <IconButton
      icon={
        <div className="h-10 w-10 text-secondary-dark   lg:text-primary rounded-full flex items-center justify-center">
          {currentLocal.toUpperCase()}
        </div>
      }
      ariaLabel="locale"
      variant="ghost"
      size="md"
      onClick={() => switchTo(currentLocal == "ar" ? "en" : "ar")}
    />
  );
};

export default LocaleButton;
