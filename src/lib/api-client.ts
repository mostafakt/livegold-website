/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuthToken } from "@/utils/auth-helpers/server";
import { getAuthTokenClient } from "@/utils/auth-helpers/client";
import { API_BASE_URL } from "./constants";

type RequestInitLike = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>;
  auth?: boolean; // if true → attach token
};

export async function apiFetch<T = any>(
  path: string,
  tag?: string,
  init: RequestInitLike = {}
): Promise<T> {
  const { query, auth = true, ...rest } = init;

  // build query string
  let qs = "";
  if (query) {
    const sp = new URLSearchParams();
    Object.entries(query).forEach(([k, v]) => {
      if (v !== undefined && v !== null) sp.set(k, String(v));
    });
    const s = sp.toString();
    qs = s ? `?${s}` : "";
  }

  const url = `${API_BASE_URL}${path}${qs}`;

  // headers
  const headers = new Headers(rest.headers ?? {});
  // set JSON content-type unless already provided or body is FormData
  if (!headers.has("Content-Type") && !(rest.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  // attach token if requested
  if (auth) {
    let token: string | null = null;
    if (typeof window === "undefined") {
      // server-side
      try {
        const { token: serverToken } = await getAuthToken();
        token = serverToken ?? null;
      } catch (e) {
        // swallow - token may simply not exist
        token = null;
      }
    } else {
      // client-side
      try {
        const { token: clientToken } = getAuthTokenClient();
        token = clientToken ?? null;
      } catch (e) {
        token = null;
      }
    }

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  // build fetch options with safe credentials default
  const fetchOptions: RequestInit = {
    ...rest,
    headers,
    // keep Next.js cache/revalidate tags if desired
    next: { revalidate: 300, tags: tag ? [tag] : undefined },
  };

  if (rest.credentials !== undefined) {
    fetchOptions.credentials = rest.credentials;
  } else {
    // default: server include, client same-origin
    fetchOptions.credentials =
      typeof window === "undefined" ? "include" : "same-origin";
  }

  // perform request
  const res = await fetch(url, fetchOptions);

  // parse response safely
  const text = await res.text();
  let body: any = text;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    // non-JSON response — keep raw text
    body = text;
  }

  if (!res.ok) {
    // helpful logging for debugging
    // eslint-disable-next-line no-console
    console.error(`[apiFetch] ${res.status} ${url} ->`, body);
    const message = body?.message ?? res.statusText ?? "Request failed";
    const err: any = new Error(message);
    err.status = res.status;
    err.body = body;
    throw err;
  }

  return body as T;
}
