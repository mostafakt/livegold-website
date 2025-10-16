/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Input from "./Input";

export type Option = { label: string; value: string; [k: string]: any };

type Props = {
  options: Option[];
  value?: Option | null; // controlled: pass the selected option object
  onChange?: (opt: Option | null) => void;
  placeholder?: string;
  isSearchable?: boolean; // default true
  disabled?: boolean; // default true
  loading?: boolean; // default true
  className?: string;
  maxResults?: number;
  // optional render override:
  renderOption?: (opt: Option, isHighlighted: boolean) => React.ReactNode;
};

export default function SearchableSelect({
  options,
  value = null,
  onChange,
  placeholder = "Search...",
  isSearchable = true,
  disabled = false,
  loading = false,
  className,
  maxResults = 8,
  renderOption,
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [internal, setInternal] = useState<Option | null>(value ?? null);
  const [highlight, setHighlight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // keep internal in sync with controlled value
  useEffect(() => {
    setInternal(value ?? null);
    setQuery(value?.label ?? "");
  }, [value]);

  // filter options
  const filtered = (
    query.trim() === ""
      ? options
      : options.filter((o) =>
          String(o.label).toLowerCase().includes(query.toLowerCase())
        )
  ).slice(0, maxResults);

  // outside click -> close
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setHighlight(0);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      e.preventDefault();
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setHighlight((h) => Math.max(h - 1, 0));
      e.preventDefault();
    } else if (e.key === "Enter") {
      const opt = filtered[highlight];
      if (opt) selectOption(opt);
      e.preventDefault();
    } else if (e.key === "Escape") {
      setOpen(false);
      e.preventDefault();
    }
  }

  function selectOption(opt: Option) {
    setInternal(opt);
    onChange?.(opt);
    setQuery(opt.label);
    setOpen(false);
  }

  function clearSelection() {
    setInternal(null);
    onChange?.(null);
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div id="searchable-select" ref={wrapperRef} className={clsx("relative", className,'w-full')}>
      <Input
        placeholder={placeholder}
        //@ts-ignore
        value={isSearchable ? query : (internal?.label ?? "")}
        onChange={(e) => {
          //@ts-ignore
          const v = (e.target as HTMLInputElement).value;
          setQuery(v);
          setOpen(true);
          setHighlight(0);
          // if uncontrolled selection exists, clear when typing
          if (internal && v !== internal.label) {
            setInternal(null);
            onChange?.(null);
          }
        }}
        disabled={disabled || loading}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        //@ts-ignore
        ref={(el) => {
          // keep local ref for focusing & usage
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          inputRef.current = el;
        }}
        icon={
          internal ? (
            <button
              aria-label="Clear selection"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                clearSelection();
              }}
              className="text-neutral-500"
            >
              ✕
            </button>
          ) : undefined
        }
        className="!pr-1 w-full"
        isFull
        readOnly={!isSearchable}
      />

      {/* dropdown */}
      {open && filtered.length > 0 && (
        <ul
          role="listbox"
          aria-activedescendant={
            filtered[highlight] ? `opt-${highlight}` : undefined
          }
          className="absolute z-50 mt-2 w-full max-h-60 overflow-auto rounded-lg border bg-white shadow-lg"
        >
          {filtered.map((opt, idx) => {
            const isHighlighted = idx === highlight;
            return (
              <li
                id={`opt-${idx}`}
                key={String(opt.value) + idx}
                role="option"
                aria-selected={isHighlighted}
                onMouseEnter={() => setHighlight(idx)}
                onMouseDown={(e) => {
                  // prevent blur before click
                  e.preventDefault();
                  selectOption(opt);
                }}
                className={clsx(
                  "px-3 py-2 cursor-pointer truncate",
                  isHighlighted ? "bg-neutral-100" : "hover:bg-neutral-50"
                )}
              >
                {renderOption ? renderOption(opt, isHighlighted) : opt.label}
              </li>
            );
          })}
        </ul>
      )}

      {/* empty / no results */}
      {open && filtered.length === 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border bg-white py-2 px-3 text-sm text-neutral-500">
          No results
        </div>
      )}
    </div>
  );
}
