/* eslint-disable @typescript-eslint/no-explicit-any */
export function toQueryString(params: Record<string, any> = {}): string {
  const usp = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value == null) return; // skip null/undefined

    // arrays -> multiple same-key params: key=a&key=b
    if (Array.isArray(value)) {
      value.forEach((v) => usp.append(key, String(v)));
      return;
    }

    // plain object -> JSON string (useful for complex filters)
    if (typeof value === "object") {
      usp.append(key, JSON.stringify(value));
      return;
    }

    // primitives
    usp.append(key, String(value));
  });

  return usp.toString();
}
