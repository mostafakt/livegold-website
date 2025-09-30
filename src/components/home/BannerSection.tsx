"use client";

import Image from "@/components/ui/Image";
import { Button } from "../ui";

const BannerSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row flex-wrap overflow-hidden items justify-center lg:justify-between  relative min-h-24 items-center    bg-orange-50  rtl:px-4 ltr:pl-4 lg:rtl:px-20  lg:ltr:pl-20 py-8    md:py-10">
      {/* Text content */}
      <div className="flex flex-col items-start justify-center gap-5 min-h-full max-w-xl">
        <h1 className="w-80 text-start text-primary text-4xl md:text-5xl font-bold leading-tight text-nowrap">
          متجر لايف جولد
        </h1>
        <p className="max-w-2xl text-start text-neutral-600 text-sm md:text-2xl font-medium leading-relaxed">
          متجرك الذهبي الأول لشراء وبيع الذهب والمعادن النفيسة لحظة بلحظة – بكل
          أمان وسهولة.
        </p>
        <Button className="w-fit">تسوق الآن</Button>
      </div>

      {/* Foreground image */}
      <div className=" ">
        <Image
          src="/images/homepage/banner3.png"
          alt="banner-live-gold"
          width={520}
          height={480}
          // flip horizontal
          className="ltr:transform ltr:-scale-x-100"
        />
      </div>
    </section>
  );
};

export default BannerSection;
