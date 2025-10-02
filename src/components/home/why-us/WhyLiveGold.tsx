"use client";

import Image from "@/components/ui/Image";
import { useTranslations } from "next-intl";

const WhyLiveGold = () => {
  const t = useTranslations();

  return (
    <div className="w-full mb-24 relative overflow-visible lg:overflow-hidden py-8 px-4">
      <div className="mx-auto h-auto relative flex w-fit items-center justify-center bg-cover bg-center border-4 md:border-8 border-orange-400/40 rounded-3xl md:rounded-3xl">
        <div className="left-1/2 z-10 -translate-x-1/2 hidden md:flex -top-6 absolute text-center justify-start  text-neutral-800 text-lg md:text-2xl  lg:text-4xl font-semibold">
          {t("why.heading")}
        </div>

        <div className="w-3/5 md:w-4/5 h-28 left-1/2 -translate-x-1/2 -top-12 absolute hidden md:block bg-white opacity-100 blur-2xl rounded-full" />
        <div className="lg:bg-[url('/images/homepage/why-us-bg.png')] bg-cover bg-center flex p-6 md:p-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div className="  z-10 flex md:hidden flex-col  w-full items-center justify-center text-center   text-neutral-800 text-xl md:text-2xl  lg:text-4xl font-semibold">
              {t("why.heading")}
              <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6"></div>
            </div>

            {/* Card 1 */}
            <Card
              imageSrc="/images/homepage/WHY-LIVE.png"
              title={t("why.card1.title")}
              desc={t("why.card1.desc")}
              height={153}
              width={266}
            />

            {/* Card 2 */}
            <Card
              imageSrc="/images/homepage/why-live-gold/1.png"
              title={t("why.card2.title")}
              desc={t("why.card2.desc")}
              height={163}
              width={288}
            />

            {/* Card 3 */}
            <Card
              imageSrc="/images/homepage/Auctions.png"
              title={t("why.card3.title")}
              desc={t("why.card3.desc")}
              height={105}
              width={162}
            />

            {/* Card 4 */}
            <Card
              imageSrc="/images/homepage/why-live-gold/3.png"
              title={t("why.card4.title")}
              desc={t("why.card4.desc")}
              height={131}
              width={131}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLiveGold;

/* small Card sub-component */
function Card({
  imageSrc,
  height,
  width,
  title,
  desc,
}: {
  imageSrc: string;
  height?: number;
  width?: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-2 relative inline-flex flex-col justify-center items-center gap-2">
      <div className="w-5/6 h-96 right-0 -top-6 absolute bg-[radial-gradient(ellipse_54%_54%_at_50%_50%,rgba(249,193,122,0.3)_0%,rgba(255,251,244,0)_100%)] rounded-full" />
      <Image
        src={imageSrc}
        alt={title}
        width={width ?? 200}
        height={height ?? 200}
      />
      <div className="text-center text-primary text-lg md:text-2xl font-medium">
        {title}
      </div>
      <div className="w-full max-w-md text-center text-black text-sm md:text-lg font-normal">
        {desc}
      </div>
    </div>
  );
}
