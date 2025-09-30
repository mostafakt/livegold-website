"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Cookies from "js-cookie";

type BreakpointKey = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
export type Breakpoints = Partial<Record<BreakpointKey, number>>;

type Props = {
  slides: React.ReactNode[];
  /** Example: { lg: 2, md: 1 } */
  breakpoints?: Breakpoints;
  isAnimated?: boolean;
};

// Tailwind-like breakpoint minimum widths
const TAILWIND_BREAKPOINTS: Record<BreakpointKey, number> = {
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
  base: 0,
};

export default function EmblaCarousel({
  isAnimated,
  slides,
  breakpoints = { base: 1 },
}: Props) {
  const local = Cookies.get("NEXT_LOCALE");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    direction: local == "ar" ? "rtl" : "ltr",
    align: "start",
    skipSnaps: false,
  });

  const [selected, setSelected] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(
    breakpoints?.base ?? 1
  );

  const resolveSlidesToShow = (width: number, bps: Breakpoints) => {
    const keys: BreakpointKey[] = ["2xl", "xl", "lg", "md", "sm", "base"];
    for (const key of keys) {
      const min = TAILWIND_BREAKPOINTS[key];
      if (width >= min && typeof bps[key] === "number")
        return bps[key] as number;
    }
    return bps.base ?? 1;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      const width = window.innerWidth;
      const newShow = resolveSlidesToShow(width, breakpoints);
      setSlidesToShow(newShow);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoints]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, slidesToShow]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const itemWidthPct = 100 / Math.max(1, slidesToShow);

  const snaps = emblaApi
    ? emblaApi.scrollSnapList()
    : new Array(Math.max(1, slides.length)).fill(0);

  return (
    <div className="w-full max-w-full">
      {/* Viewport */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        {/* Track */}
        <div className="flex w-full ">
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{
                flex: `0 0 ${itemWidthPct}%`,
                minWidth: `${itemWidthPct}%`,
              }}
              className={` px-1 min-w-0 w-full flex-shrink-0 box-border cursor-pointer transition-transform duration-300 ${isAnimated ? " hover:scale-95 " : ""} hover:z-10`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Dots (based on embla snap list) */}
      <div className="flex items-center justify-center gap-3 mt-5">
        {snaps.map((_, i) => {
          const isActive = selected === i;
          return (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide group ${i + 1}`}
              className={`transition-all duration-200 focus:outline-none ${
                isActive
                  ? "w-4 h-2 lg:w-8 lg:h-4 rounded-full bg-secondary"
                  : "w-2 h-1 lg:w-3 lg:h-3 rounded-full bg-[#D9D9D9]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
