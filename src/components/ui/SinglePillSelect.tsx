"use client";
import { useTranslations } from "next-intl";
import Button from "./Button";
export type Option = { value: string; label: string };

export default function SinglePillSelect({
  options,
  selected,
  onChange,
  className = "",
  label = "",
}: {
  options: Option[];
  selected: string;
  onChange?: (v: string) => void;
  label?: string;
  className?: string;
  rtl?: boolean;
}) {
  const t = useTranslations();
  return (
    <div className={`flex flex-col flex-wrap items-start gap-2 ${className}`}>
      {label && (
        <label
          htmlFor=""
          className="text-secondary-dark  text-center  text-2xl font-bold leading-normal"
        >
          {t(label)}
        </label>
      )}
      <div className={`flex flex-wrap items-center gap-1 ${className}`}>
        {options.map((opt) => {
          const isSel = opt.value === selected;
          return (
            <Button
              key={opt.value}
              type="button"
              onClick={() => onChange?.(opt.value)}
              variant={isSel ? "primary" : "gray-outline"}
              aria-pressed={isSel}
            >
              {opt.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
