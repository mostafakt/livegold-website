/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseMetalPriceQueryHandler } from "./middleware";
import { DEFAULT_CURRENCY, DEFAULT_METAL } from "@/lib/constants";
import { IErrorRes } from "@/types/error";
import { ICurrency, IMetal, IMetalPrice, IMetalPriceHistory } from "@/types/metal-price";
import { toQueryString } from "@/utils/toQueryString";

export type FetchArgs = {
  filters?: Record<string, any>;
  page?: number;
  pageSize?: number;
  sort?: string;
  [extra: string]: any;
};

export const metalPrice = createApi({
  reducerPath: "metal-price",
  baseQuery: baseMetalPriceQueryHandler,
  endpoints: (builder) => ({
    fetchMetalPrice: builder.query<IMetalPrice, any, IErrorRes>({
      query: () => {
        return { url: `/v1/metals?currencies=${DEFAULT_CURRENCY}` };
      },
    }),
    fetchMetal: builder.query<IMetal, any, IErrorRes>({
      query: () => {
        return { url: `/v1/metals/names` };
      },
    }),
    fetchCurrencies: builder.query<ICurrency, any, IErrorRes>({
      query: () => {
        return { url: `/v1/metals/currencies` };
      },
    }),

    fetchMetalHistory: builder.query<IMetalPriceHistory, any, IErrorRes>({
      query: (args: any = {}) => {
        const {
          metal = DEFAULT_METAL,
          currencies = DEFAULT_CURRENCY,
          dateFrom,
          dateTo,
          ...rest
        } = args;
        const q = {
          metal,
          currencies,
          dateFrom,
          dateTo,
          ...rest,
        };
        const qs = toQueryString(q);
        return { url: `/v1/metals/history${qs ? `?${qs}` : ""}` };
      },
    }),
  }),
});

export const {
  useFetchMetalPriceQuery,
  useFetchMetalHistoryQuery,
  useLazyFetchMetalHistoryQuery,
  useFetchMetalQuery,
  useFetchCurrenciesQuery,
} = metalPrice;
