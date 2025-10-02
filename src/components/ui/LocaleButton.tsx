"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
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

  // Use next-intl's useLocale hook to get current locale from URL
  const currentLocale = useLocale();

  function switchTo(newLocale: string) {
    // Update cookie BEFORE navigation
    setLocaleCookie(newLocale);

    // Replace first segment with newLocale
    const segments = pathname.split("/");
    segments[1] = newLocale; // Replace locale segment
    const newPath = segments.join("/");

    const url = search ? `${newPath}?${search}` : newPath;

    // Use router.push to navigate
    router.push(url);
    router.refresh(); // Force refresh to re-render with new locale
  }

  return (
    <div
      onClick={() => switchTo(currentLocale === "ar" ? "en" : "ar")}
      className="flex p-1  h-full max-h-11 hover:bg-[#f9f0df] items-center justify-center cursor-pointer  border-2 border-primary  rounded-lg"
    >
      <div className="h-10 w-10 text-secondary-dark lg:text-primary rounded-full flex items-center justify-center">
        {currentLocale.toUpperCase()}
      </div>
    </div>
  );
};

export default LocaleButton;
