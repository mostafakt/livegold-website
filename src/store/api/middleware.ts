/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// services/baseQuery.ts
import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import toast from "react-hot-toast";
import { getLanguage } from "@/utils/auth-helpers/client";
import { METAL_PRICE_APIS, METAL_PRICE_KEY } from "@/lib/constants";

export const base = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE || "",
  prepareHeaders: (headers) => {
    // const { token } = getAuthTokenClient();
    // if (token) headers.set("Authorization", `Bearer ${token}`);
    const locale = getLanguage();
    headers.set("Accept-Language", locale);
    return headers;
  },
});
export const baseMetalPrice = fetchBaseQuery({
  baseUrl: METAL_PRICE_APIS || "",
  prepareHeaders: (headers) => {
    headers.set("x-api-key", METAL_PRICE_KEY);
    const locale = getLanguage();
    headers.set("Accept-Language", locale);
    return headers;
  },
});

export const baseQueryHandler: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await base(args, api, extraOptions);

  if (result.error) {
    const status = result.error.status;
    const message =
      (result.error.data as any)?.message ||
      //@ts-ignore
      (typeof result.error.error === "string"
        ? //@ts-ignore
          result.error.error
        : "Something went wrong");

    // 🔥 Show error toast
    toast.error(` ${message} `);

    if (status === 401) {
      // Example: logout or redirect
      // api.dispatch(logout());
    }
  }

  return result;
};
export const baseMetalPriceQueryHandler: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseMetalPrice(args, api, extraOptions);

  if (result.error) {
    const status = result.error.status;
    const message =
      (result.error.data as any)?.message ||
      //@ts-ignore
      (typeof result.error.error === "string"
        ? //@ts-ignore
          result.error.error
        : "Something went wrong");

    // 🔥 Show error toast
    toast.error(` ${message} `);

    if (status === 401) {
      // Example: logout or redirect
      // api.dispatch(logout());
    }
  }

  return result;
};

// If you want retries + toast:
export const baseQueryWithRetry = retry(baseQueryHandler, { maxRetries: 3 });
