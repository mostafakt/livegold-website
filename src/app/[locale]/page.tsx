
import HeroSection from "@/components/home/hero-section/Hero";
import WhyLiveGold from "@/components/home/why-us/WhyLiveGold";
import Divider from "@/components/ui/Divider";
import Partners from "@/components/home/Partners";
import Reviews from "@/components/home/reviews/Reviews";

export default async function Home() {
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
      <Partners />
      <div className="h-5" />
      <Reviews />
    </div>
  );
}
