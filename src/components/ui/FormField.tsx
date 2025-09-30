import React from "react";

export default function FormField({
  label,
  hint,
  children,
}: {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {label && (
        <div className="mb-2 font-medium text-base-content">{label}</div>
      )}

      <div className="space-y-1">{children}</div>

      {hint && (
        <div className="mt-1.5 text-sm text-base-content/60">{hint}</div>
      )}
    </div>
  );
}
