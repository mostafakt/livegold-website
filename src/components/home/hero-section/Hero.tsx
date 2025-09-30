import EmblaCarousel from "../../ui/Carousel";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";


export default function HeroSection() {
  return (
    <div  className="px-4 sm:px-8 md:px-16   pt-10 sm:pt-16 md:pt-16 pb-10 sm:pb-16  ">
      <EmblaCarousel
      slides={[
        <FirstSlide key={1} />,
        <SecondSlide key={2} />,
        <ThirdSlide key={3} />,
      ]}
      />
    </div>
  );
}
