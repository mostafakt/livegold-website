import HeroSection from "@/components/home/hero-section/Hero";
import WhyLiveGold from "@/components/home/why-us/WhyLiveGold";
import Divider from "@/components/ui/Divider";
import Partners from "@/components/home/partners/Partners";
import Reviews from "@/components/home/reviews/Reviews";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("home") + " - " + t("live-gold"),
    description: "live gold home",
    openGraph: {
      title: t("home") + " - " + t("live-gold"),
      description: "live gold home",
      type: "website",
    },
  };
}
export default async function Home({
  params,
}: {
  params: { locale: "ar" | "en" };
}) {
  const locale = params.locale;

  return (
    <div className="bg-base-100 text-base-content bg-primary-bg ">
      <HeroSection />
      <WhyLiveGold />
      {/* <BannerSection />
      <AuctionsSection />
      <DownloadHero /> */}
      <div className="my-24 w-full flex items-center justify-center">
        <Divider />
      </div>
      <Partners locale={locale} />
      <div className="h-5" />
      <Reviews locale={locale} />
    </div>
  );
}
