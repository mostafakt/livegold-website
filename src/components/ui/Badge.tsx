import clsx from "clsx";
import React from "react";

type BadgeProps = {
  children?: React.ReactNode;
  light?: boolean;
  className?: string;
  title?: string;
};

export default  function Badge({
  children,
  className,
  light = false,
}: BadgeProps) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center gap-2.5 bg-gradient-to-bl px-4 py-2",
        light
          ? "from-primary via-primary-200 to-primary-300"
          : "!bg-secondary-dark",
        "rounded-xl font-medium text-6 leading-6 text-center text-white",
        className
      )}
    >
      {children}
    </div>
  );
}
