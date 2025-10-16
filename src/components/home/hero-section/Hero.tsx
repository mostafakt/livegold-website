import { fetchMetalHistoryServer } from "@/services/metal-price";
import EmblaCarousel from "../../ui/Carousel";
import FirstSlide from "./FirstSlide";
// import SecondSlide from "./SecondSlide";
// import ThirdSlide from "./ThirdSlide";

export default async function HeroSection() {
  const data = await fetchMetalHistoryServer({});

  return (
    <div className="px-4 sm:px-8 md:px-16 w-full  flex items-center justify-center  pt-10 sm:pt-16 md:pt-16 pb-10 sm:pb-16  ">
      <div className="w-full max-w-360">
        <EmblaCarousel
          hideDots
          slides={[
            <FirstSlide key={1} preFetchedData={data ?? undefined} />,
            // <SecondSlide key={2} />,
            // <ThirdSlide key={3} />,
          ]}
        />
      </div>
    </div>
  );
}
