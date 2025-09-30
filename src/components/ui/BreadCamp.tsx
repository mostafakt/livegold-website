import Link from "next/link";
import React from "react";
import { type ReactNode } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  ariaLabel?: string;
  // allow passing a custom node for label if caller wants markup (but prefer plain strings for i18n)
  node?: ReactNode;
};

type Props = {
  /**
   * Items in order from left → right for LTR (home first).
   * For RTL locales we automatically reverse visual order.
   */
  items?: BreadcrumbItem[];
  /**
   * ISO locale code (e.g. 'en', 'ar'). If omitted, component tries to load default translations.
   */
  locale?: string;
  /**
   * If true, renders non-clickable last item as current page (aria-current="page").
   */
  hideLastLink?: boolean;
};

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M1 1L5 5L1 9"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default  function Breadcrumb({
  items,
  hideLastLink = false,
}: Props) {

  const defaultItems: BreadcrumbItem[] = [{ label: "home", href: "/" }];

  const finalItems = (items && items.length > 0 ? items : defaultItems).map(
    (it) => ({
      ...it,
      label: (it.label) ?? it.node,
    })
  );

  return (
    <nav /*aria-label={t("breadcrumbLabel")} */ className="text-sm flex items-start">
      <ol
        role="list"
        className={
          // reverse visual order for RTL so breadcrumb reads correctly
          "flex items-center gap-2 whitespace-nowrap "
        }
      >
        {finalItems.map((item, idx) => {
          const isLast = idx === finalItems.length - 1;
          const content = item.node ?? <span>{item.label}</span>;

          return (
            <li key={idx} className="flex items-center">
              {item.href && !(isLast && hideLastLink) ? (
                <Link
                  href={item.href}
                  aria-label={item.ariaLabel ?? undefined}
                  className={
                    "text-neutral-700 hover:underline font-reg text-sm rtl:pl-2 ltr:pr-2"
                  }
                >
                  {content}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="text-neutral-800 font-med text-sm"
                >
                  {content}
                </span>
              )}

              {/* separator: do not show after last item */}
              {!isLast && (
                <span
                  className={
                    // separator color uses neutral tokens; SVG inherits currentColor
                    "mx-1 text-neutral-500 flex items-center"
                  }
                  aria-hidden
                >
                  {/* Flip chevron for RTL visually by rotate-180 */}
                  <Chevron className={"rtl:rotate-180"} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
