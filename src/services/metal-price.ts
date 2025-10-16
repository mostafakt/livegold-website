/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DEFAULT_CURRENCY,
  DEFAULT_METAL,
  METAL_PRICE_KEY,
} from "@/lib/constants";
import { IMetalPrice, IMetalPriceHistory } from "@/types/metal-price";

export async function fetchMetalHistoryServer({
  metal = DEFAULT_METAL,
  currencies = DEFAULT_CURRENCY,
  dateFrom = "2025-09-15T18:12:41.795Z",
  dateTo = "2025-10-15T18:12:41.795Z",
  ...rest
}: {
  metal?: string;
  currencies?: string;
  dateFrom?: string;
  dateTo?: string;
  [key: string]: any;
}): Promise<IMetalPriceHistory | null> {
  try {
    const params = new URLSearchParams({
      metal,
      currencies,
      ...(dateFrom ? { dateFrom } : {}),
      ...(dateTo ? { dateTo } : {}),
      ...rest,
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METAL_PRICE_APIS}/v1/metals/history${
        params.toString() ? `?${params}` : ""
      }`,
      {
        headers: {
          "x-api-key": METAL_PRICE_KEY,
        },
        cache: "no-store", // disable caching to always get fresh data
      }
    );

    if (!res.ok) throw new Error("Failed to fetch metal history");

    const data = (await res.json()) as IMetalPriceHistory; // ✅ only once
    return data;
  } catch (err) {
    console.error("❌ Error fetching metal history:", err);
    return null;
  }
}

export async function fetchMetalPriceServer(): Promise<IMetalPrice | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METAL_PRICE_APIS}/v1/metals?currencies=${DEFAULT_CURRENCY}`,
      {
        headers: {
          "x-api-key": METAL_PRICE_KEY,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch metal price:", res.status, res.statusText);
      return null;
    }

    const data = (await res.json()) as IMetalPrice;
    return data;
  } catch (error) {
    console.error("Error fetching metal price:", error);
    return null;
  }
}
