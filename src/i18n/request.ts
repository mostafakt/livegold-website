/* eslint-disable @typescript-eslint/no-explicit-any */
// src/i18n/request.ts

import { getRequestConfig } from "next-intl/server";

const SUPPORTED_LOCALES = ["ar", "en"];
const DEFAULT_LOCALE = "ar";

export default getRequestConfig(async ({ requestLocale }: any) => {
  // requestLocale can be undefined or an unexpected string (eg. "sw.js")
  let locale = await requestLocale;

  // Validate: only accept supported locales
  if (!locale || !SUPPORTED_LOCALES.includes(locale)) {
    locale = DEFAULT_LOCALE;
  }

  // Try to load messages for locale, but guard against missing files.
  let messages = {};
  try {
    // relative import path is correct relative to this file
    messages = (await import(`../utils/locales/${locale}/translate.json`))
      .default;
  } catch (err) {
    // fallback if something weird happens (missing file, etc.)
    console.error("[i18n] failed to load messages for locale:", locale, err);
    // Try default locale messages as a last resort
    try {
      messages = (
        await import(`../utils/locales/${DEFAULT_LOCALE}/translate.json`)
      ).default;
      locale = DEFAULT_LOCALE;
    } catch (err2) {
      console.error("[i18n] failed to load default messages:", err2);
      messages = {};
    }
  }

  return {
    locale,
    messages,
  };
});
