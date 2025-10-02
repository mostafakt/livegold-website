import toast from "react-hot-toast";

export class ManageLocale {
  static local: "ar" | "en" = "ar";
  static setLocal = (l: "ar" | "en") => {
    this.local = l;
  };
  static getLocalizedData = (
    data?: { ar: string; en: string },
    pageLocale?: "ar" | "en"
  ): string => {
    if (data) {
      if (pageLocale) {
        this.local = pageLocale;
        return data[pageLocale];
      }

      return data[this.local];
    }
    return "";
  };
  static getLanguage = (): "ar" | "en" => {
    return this.local;
  };
  static getLocalizedListData = (
    data?: { ar: [string]; en: [string] },
    pageLocale?: "ar" | "en"
  ) => {
    if (data) {
      if (pageLocale) {
        this.local = pageLocale;
        return data[pageLocale];
      }

      return data[this.local];
    }
  };
}
/* eslint-disable @typescript-eslint/no-explicit-any */

export const toastError = (error: any) => {
  return toast.error(error?.data.message);
};
