import { useTranslations } from "next-intl";
import toast from "react-hot-toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getLocalizedData = (data?: { ar: string; en: string }) => {
  if (data) {
    const locale =
      typeof window !== "undefined" &&
      window?.location?.pathname?.startsWith("/en")
        ? "en"
        : "ar";

    return data[locale];
  }
  return "";
};
export const getLocalizedListData = (data?: { ar: [string]; en: [string] }) => {
  if (data) {
    const locale =
      typeof window !== "undefined" &&
      window?.location?.pathname?.startsWith("/ar")
        ? "ar"
        : "en";
    return data[locale];
  }
};

export const toastError = (error: any) => {
  return toast.error(error?.data.message);
};
