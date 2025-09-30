import clsx from "clsx";

export default function Card({
  children,
  className,
  title,
}: {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-lg p-3 pt-3", // rounded-lg = 8px, p-3 = 12px, pt-3 = 12px
        "border border-secondary",
        "flex flex-col gap-3 items-start justify-start",
        className
      )}
    >
      {title && (
        <div className="font-medium text-base text-center text-neutral-100">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
