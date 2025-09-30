/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Controller, Control } from "react-hook-form";

export type Option = { value: string; label: string };

type BaseProps = {
  options: Option[];
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  className?: string;
  isFull?: boolean;
  disabled?: boolean;
  label?: string;
};

// extra props for RHF
type WithFormHook = {
  control: Control;
  name: string;
} & BaseProps;

// standalone props
type Standalone = BaseProps & {
  control?: undefined;
  name?: undefined;
};

export type SingleSelectProps = WithFormHook | Standalone;

function InnerSelect({
  options,
  value: controlledValue,
  onChange,
  placeholder = "",
  className = "",
  label,
  disabled = false,
  isFull,
}: BaseProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>(controlledValue);
  const [highlighted, setHighlighted] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setValue(controlledValue);
  }, [controlledValue]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function toggleOpen() {
    setOpen((s) => !s);
  }

  function handleSelect(option: Option) {
    if (!controlledValue) setValue(option.value);
    onChange?.(option.value);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      setHighlighted(0);
      return;
    }

    if (e.key === "Escape") return setOpen(false);

    if (e.key === "ArrowDown") {
      setHighlighted((h) => Math.min(h + 1, options.length - 1));
    }
    if (e.key === "ArrowUp") {
      setHighlighted((h) => Math.max(h - 1, 0));
    }
    if (e.key === "Enter" && highlighted >= 0) {
      handleSelect(options[highlighted]);
    }
  }

  const selectedLabel = options.find((o) => o.value === value)?.label;
  const t = useTranslations();

  return (
    <div
      ref={rootRef}
      className={`flex flex-col items-start gap-1 ${isFull ? "w-full" : ""}`}
    >
      {label && (
        <label className="text-neutral-700 text-center text-md leading-normal">
          {t(label)}
        </label>
      )}
      <div className={`relative inline-block text-start w-full ${className}`}>
        <Button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={toggleOpen}
          onKeyDown={onKeyDown}
          size="md"
          disabled={disabled}
          variant="gray-outline"
          className="shrink-0 text-neutral-800 text-start font-medium leading-normal w-full flex-row-reverse justify-between !gap-2 "
        >
          <svg
            className="  h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
          {t(selectedLabel ?? placeholder ?? ".")}
        </Button>

        {open && (
          <ul
            role="listbox"
            tabIndex={-1}
            className="absolute z-50 mt-2 w-56 max-h-52 overflow-auto rounded-md border border-gray-100 bg-white py-1 shadow-lg"
          >
            {options.map((opt, idx) => {
              const active = highlighted === idx;
              const selected = opt.value === value;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={selected}
                  onClick={() => handleSelect(opt)}
                  onMouseEnter={() => setHighlighted(idx)}
                  className={`cursor-pointer px-3 py-2 text-sm ${
                    selected ? "font-medium text-amber-700" : "text-gray-700"
                  } ${active ? "bg-gray-50" : ""}`}
                >
                  {opt.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function SingleSelect(props: SingleSelectProps) {
  const t = useTranslations();

  if ("control" in props && props.control && props.name) {
    const { control, name, ...rest } = props;

    return (
      <Controller
        control={control}
        name={name as any}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <InnerSelect
              {...rest}
              value={field.value}
              onChange={field.onChange}
            />
            {fieldState.error && (
              <p className="mt-1 text-sm text-red-500">
                {t(fieldState.error.message ?? "")}
              </p>
            )}
          </div>
        )}
      />
    );
  }

  return <InnerSelect {...props} />;
}
