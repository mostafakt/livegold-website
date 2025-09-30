// src/utils/query.ts
export type QueryValue = string | string[] | undefined;
export type QueryRecord = Record<string, QueryValue>;

/** Convert a QueryRecord (server searchParams or partial) to a normal record of strings.
 *  If a value is an array, join with comma (or choose other behaviour if you need).
 */
export function normalizeQuery(q: QueryRecord): Record<string, string> {
  const out: Record<string, string> = {};
  for (const k of Object.keys(q)) {
    const v = q[k];
    if (Array.isArray(v)) out[k] = v.join(",");
    else if (v !== undefined) out[k] = v;
  }
  return out;
}

/** Build a query string from a record of simple strings (skips empty / undefined) */
export function buildQueryString(params: Record<string, string | undefined | null>): string {
  const u = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null || v === "") continue;
    u.set(k, v);
  }
  const s = u.toString();
  return s ? `?${s}` : "";
}

/** Build a full URL (base path + params) */
export function buildUrl(basePath: string, params: Record<string, string | undefined | null>): string {
  return `${basePath}${buildQueryString(params)}`;
}
