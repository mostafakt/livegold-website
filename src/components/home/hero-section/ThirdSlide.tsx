"use client";
import EmblaCarousel from "@/components/ui/Carousel";
/* eslint-disable jsx-a11y/alt-text */

import Image from "@/components/ui/Image";

const ThirdSlide = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      {/* Small screens: Carousel */}
      <div className="block md:hidden w-full ">
        <EmblaCarousel
          breakpoints={{ lg: 3, md: 2, base: 1 }}
          slides={Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-5 flex-wrap justify-center"
            >
              <div data-layer="Group 1321315182" className=" relative">
                <Image
                  data-layer="Rectangle 18748"
                  alt="live gold"
                  className="rounded-2xl"
                  src="/images/homepage/Rectangle 18747.png"
                  width={288}
                  height={224}
                />
                <div
                  data-layer="Frame 2610163"
                  className="Frame2610163 w-64 p-2.5 left-[12px] top-[142px] absolute inline-flex justify-end items-center gap-2.5"
                >
                  <div className="w-64 text-start justify-start text-white text-base font-medium ">
                    مؤشرات الأسهم في المملكة المتحدة هبطت عند نهاية جلسة اليوم
                  </div>
                </div>
              </div>
            </div>
          ))}
        />
      </div>
      {/* Large screens: Grid */}
      <div className="hidden md:flex gap-4 flex-wrap items-center justify-center">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            data-layer="Group 1321315182"
            className="Group1321315182 w-72 h-56 relative"
          >
            <Image
              data-layer="Rectangle 18748"
              alt="Rectangle 18748"
              className="w-72 h-56 left-0 top-0 absolute rounded-2xl"
              src="/images/homepage/Rectangle 18747.png"
              width={288}
              height={224}
            />
            <div
              data-layer="Frame 2610163"
              className="Frame2610163   p-2.5 left-[12px] top-[162px] absolute inline-flex justify-end items-center gap-2.5"
            >
              <div
                data-layer="مؤشرات الأسهم في المملكة المتحدة هبطت عند نهاية جلسة اليوم"
                className="text-start justify-start text-white text-base font-medium "
              >
                مؤشرات الأسهم في المملكة المتحدة هبطت عند نهاية جلسة اليوم
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSlide;
