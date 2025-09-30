import React from "react";
import { useTranslations } from "next-intl";

type Variant =
  | "primary"
  | "secondary"
  | "solid"
  | "outline"
  | "ghost"
  | "gray-outline";
type Size = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  labelKey?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  children?: React.ReactNode;
};

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center  whitespace-nowrap select-none";

const sizeMap: Record<Size, string> = {
  sm: "text-sm px-3 py-2 rounded-md",
  md: "text-base max-h-11 !h-11  item-center  px-3 py-2  rounded-lg font-medium",
  lg: "text-xl  px-3 py-2 rounded-lg font-bold",
};

const variantMap: Record<Variant, (disabled: boolean) => string> = {
  primary: (disabled) =>
    cn(
      "bg-primary text-white shadow-drop",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
      disabled ? "opacity-60 pointer-events-none" : "hover:brightness-95"
    ),
  secondary: (disabled) =>
    cn(
      "bg-secondary-dark text-white shadow-drop",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
      disabled ? "opacity-60 pointer-events-none" : "hover:bg-sky-950"
    ),
  solid: (disabled) =>
    cn(
      "bg-primary text-white",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
      disabled ? "opacity-60 pointer-events-none" : "hover:bg-primary-dark"
    ),
  outline: (disabled) =>
    cn(
      "border border-primary text-primary bg-transparent",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
      disabled ? "opacity-60 pointer-events-none" : "hover:bg-neutral-600/10"
    ),
  "gray-outline": (disabled) =>
    cn(
      "border border-neutral-500 text-neutral-700 bg-transparent",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
      disabled ? "opacity-60 pointer-events-none" : "hover:bg-neutral-200"
    ),
  ghost: (disabled) =>
    cn(
      "*:text-gray-text bg-neutral-400 ",
      " focus:outline-none *:text-center justify-center  *:text-lg *:font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
      disabled ? "opacity-60 pointer-events-none" : "hover:bg-neutral-300"
    ),
};

export default function Button({
  label,
  labelKey,
  variant = "primary",
  size = "md",
  className,
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  onClick,
  children,
  ariaLabel,
  ...rest
}: ButtonProps) {
  const content = label ?? (labelKey ? labelKey : "");
  const t = useTranslations("");

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "  ",
        base,
        sizeMap[size],
        variantMap[variant](disabled),
        fullWidth ? "w-full" : "inline-block",
        className
      )}
      aria-label={
        ariaLabel ?? (typeof content === "string" ? content : undefined)
      }
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <svg
          role="status"
          className="animate-spin h-5 w-5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : null}

      {!loading && leftIcon ? (
        <span className="flex items-center">{leftIcon}</span>
      ) : null}

      {typeof children === "string" ? (
        <span className={cn("text-center flex items-center justify-center leading-none  ", sizeMap[size])}>
          {t(children)}
        </span>
      ) : (
        children
      )}

      {!loading && rightIcon ? (
        <span className="flex items-center">{rightIcon}</span>
      ) : null}
    </button>
  );
}
