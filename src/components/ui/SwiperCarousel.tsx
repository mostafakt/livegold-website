/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

// IMPORTANT: ensure these CSS imports are present once in your app (e.g. in globals.css or a top-level client component)

type BreakpointKey = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
export type Breakpoints = Partial<Record<BreakpointKey, number>>;

type Props = {
  slides: React.ReactNode[];
  /** Example: { lg: 2, md: 1 } */
  breakpoints?: Breakpoints;
  isAnimated?: boolean;
  /** If true, carousel auto-advances and loops */
  autoScroll?: boolean;
  hideDots?: boolean;
  fullWidth?: boolean;
  /** Interval in ms for auto scroll */
  autoScrollInterval?: number;
};

const TAILWIND_BREAKPOINTS: Record<BreakpointKey, number> = {
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
  base: 0,
};

/**
 * Convert our Breakpoints ({ lg: 2, md: 1 }) into Swiper breakpoints object:
 * { 1024: { slidesPerView: 2, centeredSlides: false }, 768: { slidesPerView: 1, centeredSlides: true }, ... }
 *
 * Swiper expects keys as min-width in px.
 */
function convertToSwiperBreakpoints(bps: Breakpoints) {
  const orderedKeys: BreakpointKey[] = ["base", "sm", "md", "lg", "xl", "2xl"];
  const out: Record<number, Partial<SwiperOptions>> = {};

  for (const key of orderedKeys) {
    const val = bps[key];
    if (typeof val === "number") {
      const minPx = TAILWIND_BREAKPOINTS[key];
      // for Swiper, use slidesPerView and set centeredSlides when 1
      out[minPx] = {
        slidesPerView: val,
        centeredSlides: val === 1,
        // spaceBetween left to css (we'll manage via slide padding), but you can set it here if you want
      };
    }
  }

  // ensure there's at least a default
  if (Object.keys(out).length === 0) {
    out[TAILWIND_BREAKPOINTS.base] = { slidesPerView: 1, centeredSlides: true };
  }

  return out;
}

export default function SwiperCarousel({
  slides,
  breakpoints = { base: 1 },
  isAnimated = false,
  autoScroll = false,
  hideDots = false,
  fullWidth = false,
  autoScrollInterval = 3000,
}: Props) {
  const swiperBreakpoints = useMemo(
    () => convertToSwiperBreakpoints(breakpoints),
    [breakpoints]
  );

  // build modules and swiper options
  const modules = useMemo(() => {
    const arr = [Pagination];
    if (autoScroll) arr.push(Autoplay);
    return arr;
  }, [autoScroll]);

  const autoplayOpt = autoScroll
    ? {
        delay: autoScrollInterval,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }
    : false;

  const swiperProps: SwiperOptions = {
    modules,
    loop: !!autoScroll, // follow original: loop enabled only when autoScroll true
    autoplay: autoplayOpt as any,
    pagination: hideDots
      ? false
      : {
          clickable: true,
        },
    // default fallback for when no breakpoint matches
    slidesPerView: breakpoints.base ?? 1,
    centeredSlides: (breakpoints.base ?? 1) === 1,
    // allow touch dragging
    grabCursor: true,
    // don't set spaceBetween here; we'll use inner padding to avoid affecting slide widths
    // responsive breakpoints:
    breakpoints: swiperBreakpoints,
  };

  return (
    <div className="w-full max-w-full">
      <Swiper {...swiperProps} className="w-full">
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className={`min-w-0 box-border cursor-pointer transition-transform duration-300 ${
              isAnimated ? "hover:scale-95" : ""
            } hover:z-10`}
          >
            <div className={`${fullWidth ? "" : "px-1"} h-full`}>{slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* If you want custom dot styling or to hide on mobile/desktop like original,
          you can add custom pagination CSS that targets .swiper-pagination-bullet
          or render a custom pagination component by using Swiper's API (ref + events). */}
    </div>
  );
}
