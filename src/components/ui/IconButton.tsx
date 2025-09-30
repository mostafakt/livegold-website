"use client";
import { useTranslations } from "next-intl";
import React from "react";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  ariaLabel: string;
  tooltip?: string; // text for tooltip
};

const sizeClasses = {
  sm: "w-8 h-8 text-base",
  md: "w-10 h-10 text-lg",
  lg: "w-12 h-12 text-xl",
};

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = "md",
  variant = "primary",
  ariaLabel,
  tooltip,
  className = "",
  ...props
}) => {
  const t = useTranslations();
  return (
    <div className="relative group inline-flex">
      <button
        type="button"
        aria-label={ariaLabel}
        className={`
        inline-flex items-center justify-center rounded-full
        transition-colors duration-150 focus:outline-none focus:ring-2
        ${sizeClasses[size]} ${variantClasses[variant]} ${className}
      `}
        {...props}
      >
        {icon}
      </button>

      {tooltip && (
        <span
          role="tooltip"
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-[9999]
                   px-2 py-1 text-xs rounded-md shadow-md whitespace-nowrap
                   bg-primary-500 text-white opacity-0 group-hover:opacity-100
                   transition-opacity duration-200 pointer-events-none"
        >
          {t(tooltip)}
        </span>
      )}
    </div>
  );
};

export default IconButton;
