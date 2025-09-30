/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { useCallback, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type UpdateOptions = { replace?: boolean };

/** Hook to read and update URL query params simply */
export function useQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const raw = useSearchParams();

  // current params as a simple object
  const params = useMemo(() => {
    const out: Record<string, string> = {};
    if (!raw) return out;
    //@ts-ignore
    for (const [k, v] of raw.entries()) out[k] = v;
    return out;
  }, [raw]);

  const setParams = useCallback(
    (
      updates: Record<string, string | null | undefined>,
      opts: UpdateOptions = {}
    ) => {
      const next = new URLSearchParams();
      // start with existing
      for (const [k, v] of Object.entries(params)) {
        next.set(k, v);
      }
      // apply updates: null -> delete, undefined -> ignore
      for (const [k, v] of Object.entries(updates)) {
        if (v === null) next.delete(k);
        else if (v === undefined) continue;
        else next.set(k, v);
      }
      const q = next.toString();
      const url = q ? `${pathname}?${q}` : pathname;
      if (opts.replace) router.replace(url);
      else router.push(url);
    },
    [params, pathname, router]
  );

  return { params, setParams };
}
