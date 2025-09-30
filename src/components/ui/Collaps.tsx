"use client";

import React from "react";

type CollapsibleProps = {
  header: React.ReactNode; // text or element in the summary
  children: React.ReactNode; //  or any content
  className?: string;
};

export default function Collapsible({
  header,
  children,
  className,
}: CollapsibleProps) {
  return (
    <div className={className}>
      {/* Mobile collapsible */}
      <div className="block rounded-md lg:hidden">
        <details className="mb-2">
          <summary className="cursor-pointer py-2 px-4 bg-secondary-dark rounded font-medium">
            {header}
          </summary>
          <div className="flex flex-col gap-4 mt-2">{children}</div>
        </details>
      </div>

      {/* Desktop inline */}
      <div className="hidden lg:flex flex-row w-full gap-16 justify-between">
        {children}
      </div>
    </div>
  );
}
