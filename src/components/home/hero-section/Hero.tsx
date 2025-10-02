import Image from "@/components/ui/Image";
import EmblaCarousel from "../../ui/Carousel";
const images = [
  `/images/homepage/hero/2.webp`,
  `/images/homepage/hero/17.webp`,
  `/images/homepage/hero/10.webp`,
  `/images/homepage/hero/7.webp`,
  `/images/homepage/hero/3.webp`,
  `/images/homepage/hero/11.webp`,
  `/images/homepage/hero/13.webp`,
  `/images/homepage/hero/15.webp`,
  `/images/homepage/hero/16.webp`,
].map((i) => (
  <div
    key={i}
    className="flex w-full h-full items-center justify-center    lg:!max-h-[75vh]   3xl:!max-h-[45vh]    "
  >
    <Image
      src={i}
      alt="alt"
      className="  !max-h-200   w-full   !h-full "
      width={1920}
      height={800}
    />
  </div>
));
export default function HeroSection() {
  return (
    <div className=" w-full mb-10">
      <EmblaCarousel
        fullWidth
        autoScroll
        autoScrollInterval={10000}
        slides={[...images, ...images]}
      />
    </div>
  );
}

// import Image from "@/components/ui/Image";
// import EmblaCarousel from "../../ui/Carousel";
// const images = [
//   <div
//     key={1}
//     className="flex w-full h-full items-center justify-center !max-h-112 rounded-lg overflow-hidden "
//   >
//     <Image
//       src="/images/homepage/hero/1.webp"
//       alt="alt"
//       className="  !max-h-200 w-full  rounded-lg "
//       width={1920}
//       height={800}
//     />
//   </div>,

//   <div
//     key={3}
//     className="flex w-full h-full items-center justify-center !max-h-112 rounded-lg overflow-hidden "
//   >
//     <Image
//       src="/images/homepage/hero/3.webp"
//       alt="alt"
//       width={1920}
//       className="  !max-h-200 w-full  rounded-lg "
//       height={1080}
//     />
//   </div>,
//   <div
//     key={2}
//     className="flex w-full h-full items-center justify-center !max-h-112 rounded-lg overflow-hidden "
//   >
//     <Image
//       src="/images/homepage/hero/2.webp"
//       alt="alt"
//       width={1920}
//       className="  !max-h-200 w-full  rounded-lg "
//       height={1080}
//     />
//   </div>,
// ];
// export default function HeroSection() {
//   return (
//     <div className="px-4 sm:px-8 md:px-16   pt-10 sm:pt-16 md:pt-16 pb-10 sm:pb-16   !overflow-hidden">
//       <EmblaCarousel
//         autoScroll
//         autoScrollInterval={1000}
//         slides={[...images]}
//       />
//     </div>
//   );
// }
{
  /* <div className="px-4 sm:px-8 md:px-16   pt-10 sm:pt-16 md:pt-16 pb-10 sm:pb-16   !overflow-hidden">
      <EmblaCarousel
        slides={[
          <FirstSlide key={1} />,
          <SecondSlide key={2} />,
          // <ThirdSlide key={3} />,
        ]}
      />
    </div> */
}
