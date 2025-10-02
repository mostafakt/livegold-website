/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Cookies from "js-cookie";

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
  hideDots = false,
  slides,
  breakpoints = { base: 1 },
  autoScroll = false,
  fullWidth = false,
  autoScrollInterval = 3000,
}: Props) {
  const local = Cookies.get("NEXT_LOCALE");
  const direction = local === "ar" ? "rtl" : "ltr";

  // number of slides to show according to breakpoints
  const [slidesToShow, setSlidesToShow] = useState<number>(
    breakpoints?.base ?? 1
  );

  // selected snap index for dots
  const [selected, setSelected] = useState(0);

  const resolveSlidesToShow = (width: number, bps: Breakpoints) => {
    const keys: BreakpointKey[] = ["2xl", "xl", "lg", "md", "sm", "base"];
    for (const key of keys) {
      const min = TAILWIND_BREAKPOINTS[key];
      if (width >= min && typeof bps[key] === "number")
        return bps[key] as number;
    }
    return bps.base ?? 1;
  };

  // update slidesToShow on resize
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

  // compute align: center when single slide, start otherwise
  const align = useMemo(
    () => (slidesToShow === 1 ? "center" : "start"),
    [slidesToShow]
  );

  // enable looping only when autoScroll is true (so autoScroll implies loop)
  const loop = autoScroll ? true : false;

  // initialize embla with dynamic align/direction/loop
  const [emblaRefCallback, emblaApi] = useEmblaCarousel({
    loop,
    direction,
    align,
    skipSnaps: false,
  });

  // keep a ref to the viewport DOM node so we can attach hover listeners
  const viewportRef = useRef<HTMLDivElement | null>(null);

  // Combine emblaRef callback with local ref setter
  const setViewportRef = (node: HTMLDivElement | null) => {
    // embla callback ref
    emblaRefCallback(node);
    // keep local reference
    viewportRef.current = node;
  };

  // re-init embla whenever slidesToShow or direction/align/loop changes so alignment & loop take effect
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({
      loop,
      direction,
      align,
      skipSnaps: false,
    });
  }, [emblaApi, slidesToShow, direction, align, loop]);

  // update selected on embla select
  //@ts-ignore
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // autoplay logic (fixed to avoid bad end->start animation)
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;

    // clear any previous timer
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }

    if (!autoScroll) return;

    const play = () => {
      if (autoplayTimer.current) return; // already running
      autoplayTimer.current = setInterval(() => {
        if (!emblaApi) return;
        try {
          // If loop enabled, let embla handle wrapping smoothly by always calling scrollNext.
          if (loop) {
            emblaApi.scrollNext();
          } else {
            // If no loop, advance if possible, otherwise jump instantly to 0 to avoid weird backwards animation.
            if (emblaApi.canScrollNext()) emblaApi.scrollNext();
            else emblaApi.scrollTo(0, true); // jump = true => instant
          }
        } catch {
          /* ignore */
        }
      }, autoScrollInterval);
    };

    const pause = () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
        autoplayTimer.current = null;
      }
    };

    // start autoplay
    play();

    // pause on pointer/touch interactions and resume afterwards
    const handlePointerDown = () => {
      isPaused.current = true;
      pause();
    };
    const handlePointerUp = () => {
      if (isPaused.current) {
        isPaused.current = false;
        play();
      }
    };

    const vp = viewportRef.current;
    vp?.addEventListener("pointerdown", handlePointerDown);
    document?.addEventListener("pointerup", handlePointerUp);
    vp?.addEventListener("mouseenter", pause);
    vp?.addEventListener("mouseleave", play);

    return () => {
      pause();
      vp?.removeEventListener("pointerdown", handlePointerDown);
      document?.removeEventListener("pointerup", handlePointerUp);
      vp?.removeEventListener("mouseenter", pause);
      vp?.removeEventListener("mouseleave", play);
    };
  }, [emblaApi, autoScroll, autoScrollInterval, loop]);

  // width percentage for each slide — force 100% when showing 1 slide
  const itemWidthPct =
    slidesToShow === 1 ? 100 : 100 / Math.max(1, slidesToShow);

  // snaps (fallback to groups if embla not ready)
  const snaps = emblaApi
    ? emblaApi.scrollSnapList()
    : new Array(
        Math.max(1, Math.ceil(slides.length / Math.max(1, slidesToShow)))
      ).fill(0);

  return (
    <div className="w-full max-w-full">
      {/* Viewport */}
      <div className="overflow-hidden w-full" ref={setViewportRef}>
        {/* Track */}
        <div className="flex w-full">
          {slides.map((slide, i) => (
            // Outer element must exactly match the viewport width in single-slide mode.
            <div
              key={i}
              style={{
                flex: `0 0 ${itemWidthPct}%`,
                minWidth: `${itemWidthPct}%`,
              }}
              className={`min-w-0 w-full flex-shrink-0 box-border cursor-pointer transition-transform duration-300 ${
                isAnimated ? " hover:scale-95 " : ""
              } hover:z-10`}
            >
              {/* Move padding inside so it doesn't affect outer width */}
              <div className={`  ${fullWidth ? "" : "px-1"} h-full`}>
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots (based on embla snap list) */}
      {!hideDots && (
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
      )}
    </div>
  );
}
