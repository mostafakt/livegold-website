/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState } from "react";

export type Column<T> = {
  key: keyof T | string;
  title: React.ReactNode;
  className?: string;
  headerClassName?: string;
  render?: (row: T, index: number) => React.ReactNode; // custom cell renderer
  sortable?: boolean;
  sortFn?: (a: T, b: T, dir: "asc" | "desc") => number; // optional custom sort
};

export type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  className?: string;
  dir?: "ltr" | "rtl";
  caption?: string;
};

function isNumberish(value: unknown) {
  if (value === null || value === undefined) return false;
  return !Number.isNaN(Number(String(value).replace(/[^0-9.-]+/g, "")));
}

export default function Table<T extends Record<string, any>>({
  data,
  columns,
  className = "",
  dir = "ltr",
  caption,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sorted = useMemo(() => {
    if (!sortKey) return data;

    const col = columns.find((c) => String(c.key) === sortKey);
    const sortedCopy = [...data];

    sortedCopy.sort((a, b) => {
      if (col?.sortFn) return col.sortFn(a, b, sortDir);

      const av = a[sortKey as keyof T];
      const bv = b[sortKey as keyof T];

      // numeric-ish comparator
      if (isNumberish(av) && isNumberish(bv)) {
        const na = Number(String(av).replace(/[^0-9.-]+/g, ""));
        const nb = Number(String(bv).replace(/[^0-9.-]+/g, ""));
        return sortDir === "asc" ? na - nb : nb - na;
      }

      // fallback to localeCompare (handles Arabic nicely)
      const sa = av == null ? "" : String(av);
      const sb = bv == null ? "" : String(bv);
      return sortDir === "asc" ? sa.localeCompare(sb) : sb.localeCompare(sa);
    });

    return sortedCopy;
  }, [data, sortKey, sortDir, columns]);

  function toggleSort(key: string, sortable?: boolean) {
    if (!sortable) return;
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
      return;
    }
    setSortDir((d) => (d === "asc" ? "desc" : "asc"));
  }

  return (
    <div
      dir={dir}
      className={`w-full overflow-x-auto ${className}`}
      aria-label={caption ?? "data table"}
    >
      <div className="min-w-160 rounded-2xl overflow-x-auto shadow-sm bg-table">
        <table
          className="w-full table-fixed text-sm text-slate-700"
          role="table"
        >
          {caption ? <caption className="sr-only">{caption}</caption> : null}

          <thead className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-tl-2xl rounded-tr-2xl">
            <tr className="divide-x divide-amber-100">
              {columns.map((col, idx) => {
                const key = String(col.key);
                const active = sortKey === key;
                return (
                  <th
                    key={key + idx}
                    scope="col"
                    className={`text-left align-middle font-semibold p-3 text-primary last:pr-6 ${col.headerClassName ?? ""} `}
                  >
                    {col.sortable ? (
                      <button
                        type="button"
                        onClick={() => toggleSort(key, col.sortable)}
                        className="inline-flex gap-2 w-full items-center"
                        aria-sort={
                          active
                            ? sortDir === "asc"
                              ? "ascending"
                              : "descending"
                            : "none"
                        }
                      >
                        <span className="h-6 text-start justify-start text-primary text-xl font-semibold ">
                          {col.title}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-4 h-4 transition-transform ${active && sortDir === "desc" ? "rotate-180" : ""}`}
                          aria-hidden
                        >
                          <path d="M5 8l5-5 5 5H5zM5 12l5 5 5-5H5z" />
                        </svg>
                      </button>
                    ) : (
                      <div className="p-0">{col.title}</div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="bg-table divide-x divide-y divide-neutral-300 ">
            {sorted.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-primary-300">
                {columns.map((col, colIndex) => (
                  <td
                    key={String(col.key) + colIndex}
                    className={`flex-1 align-start p-3 h-6 justify-start text-neutral-800 text-lg font-medium  ${col.className ?? ""} text-start`}
                    role="cell"
                  >
                    {col.render
                      ? col.render(row, rowIndex)
                      : String(row[col.key as keyof T] ?? "")}
                  </td>
                ))}
              </tr>
            ))}

            {sorted.length === 0 && (
              <tr>
                <td
                  className="p-3 text-center text-slate-400"
                  colSpan={columns.length}
                >
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
