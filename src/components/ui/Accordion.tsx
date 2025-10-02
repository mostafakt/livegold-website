"use client";

import * as React from "react";

type AccordionType = "single" | "multiple";

type AccordionContextValue = {
  type: AccordionType;
  openValues: Set<string>;
  toggle: (value: string) => void;
};

const AccordionCtx = React.createContext<AccordionContextValue | null>(null);

type AccordionProps =
  | {
      /** Only one panel open at a time */
      type: "single";
      /** Start opened item */
      defaultValue?: string | null;
      /** Controlled value */
      value?: string | null;
      /** Called when the open item changes */
      onValueChange?: (value: string | null) => void;
      collapsible?: boolean; // allow closing the currently open one
      className?: string;
      children: React.ReactNode;
    }
  | {
      /** Many panels can be open */
      type: "multiple";
      defaultValue?: string[];
      value?: string[];
      onValueChange?: (values: string[]) => void;
      className?: string;
      children: React.ReactNode;
    };

export function Accordion(props: AccordionProps) {
  const { type, className, children } = props;

  // Internal state (uncontrolled)
  const [internalSingle, setInternalSingle] = React.useState<string | null>(
    props.type === "single" ? (props.defaultValue ?? null) : null
  );
  const [internalMulti, setInternalMulti] = React.useState<Set<string>>(
    new Set(props.type === "multiple" ? (props.defaultValue ?? []) : [])
  );

  // Derive controlled vs uncontrolled
  const openValues =
    type === "single"
      ? new Set([props.value ?? internalSingle].filter(Boolean) as string[])
      : new Set((props.value ?? Array.from(internalMulti)) as string[]);

  const toggle = (value: string) => {
    if (type === "single") {
      const current = openValues.size ? Array.from(openValues)[0] : null;
      let next: string | null = value;

      const collapsible = props.collapsible ?? true;

      if (current === value) {
        next = collapsible ? null : current;
      }

      if (props.type === "single" && props.value !== undefined) {
        props.onValueChange?.(next);
      } else {
        setInternalSingle(next);
        props.onValueChange?.(next);
      }
    } else {
      const next = new Set(openValues);
      if (next.has(value)) next.delete(value);
      else next.add(value);

      if (props.type === "multiple" && props.value !== undefined) {
        props.onValueChange?.(Array.from(next));
      } else {
        setInternalMulti(next);
        props.onValueChange?.(Array.from(next));
      }
    }
  };

  return (
    <div className={className}>
      <AccordionCtx.Provider
        value={{
          type,
          openValues,
          toggle,
        }}
      >
        {children}
      </AccordionCtx.Provider>
    </div>
  );
}

/* ---------- Item ---------- */

type AccordionItemProps = {
  value: string;
  className?: string;
  children: React.ReactNode;
};

export function AccordionItem({
  value,
  className,
  children,
}: AccordionItemProps) {
  return (
    <div data-acc-item={value} className={`border-b ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Trigger ---------- */

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

export function AccordionTrigger({
  children,
  className,
}: AccordionTriggerProps) {
  const ctx = React.useContext(AccordionCtx);
  if (!ctx)
    throw new Error("AccordionTrigger must be used within <Accordion>.");
  // const itemValue = React.useId(); // fallback if not found (dev guard)

  // Find nearest parent item to read its 'value'
  const ref = React.useRef<HTMLButtonElement | null>(null);
  const [value, setValue] = React.useState<string | null>(null);

  React.useEffect(() => {
    const btn = ref.current;
    if (!btn) return;
    const item = btn.closest("[data-acc-item]");
    const v = item?.getAttribute("data-acc-item") ?? null;
    setValue(v);
  }, []);

  const isOpen = value ? ctx.openValues.has(value) : false;
  const contentId = value ? `acc-content-${value}` : undefined;

  return (
    <button
      ref={ref}
      type="button"
      className={`flex w-full items-center justify-between py-3 text-left font-medium ${className}`}
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={() => value && ctx.toggle(value)}
    >
      <span>{children}</span>
      <svg
        className={`size-6 fill-primary transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
      </svg>
    </button>
  );
}

/* ---------- Content (with height animation) ---------- */

type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const ctx = React.useContext(AccordionCtx);
  if (!ctx)
    throw new Error("AccordionContent must be used within <Accordion>.");

  const ref = React.useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState<string | null>(null);
  const [height, setHeight] = React.useState<number>(0);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const item = node.closest("[data-acc-item]");
    const v = item?.getAttribute("data-acc-item") ?? null;
    setValue(v);
  }, []);

  const isOpen = value ? ctx.openValues.has(value) : false;

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // measure content
    const content = node.firstElementChild as HTMLElement | null;
    const nextHeight = isOpen && content ? content.offsetHeight : 0;
    setHeight(nextHeight);
  }, [isOpen, children]);

  const id = value ? `acc-content-${value}` : undefined;

  return (
    <div
      id={id}
      role="region"
      aria-hidden={!isOpen}
      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${className}`}
      style={{ maxHeight: height }}
      ref={ref}
    >
      <div className="!flex items-center gap-5 p-5 text-sm ">{children}</div>
    </div>
  );
}

/* ----- tiny util if you don't already have cn() ----- */
// export function cn(...classes: (string | undefined | false)[]) {
//   return classes.filter(Boolean).join(" ");
// }
