import Image from "@/components/ui/Image";
import EmblaCarousel from "../../ui/Carousel";
import { getTranslations } from "next-intl/server";

const HERO_IMAGES = [
  `/images/homepage/hero/18.webp`,

  `/images/homepage/hero/11.webp`,

  `/images/homepage/hero/17.webp`,
  `/images/homepage/hero/10.webp`,
  `/images/homepage/hero/7.webp`,
  `/images/homepage/hero/3.webp`,
  `/images/homepage/hero/13.webp`,
];

const HERO_CONTENT = {
  title: "hero.title",
  description: "hero.description",
};

const HeroSlide = ({ src }: { src: string }) => (
  <div className="flex w-full items-center justify-center h-[calc(100vh-116px)] 3xl:h-[60vh] 4xl:h-[40vh]  5xl:h-[20vh] ">
    <Image
      src={src}
      alt="Live Gold Hero Image"
      className="object-cover w-full !h-full"
      width={1920}
      height={800}
      priority
    />
  </div>
);

const HeroOverlay = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-secondary-dark bg-opacity-40">
      <div className="text-center max-w-4xl mx-auto px-4 lg:px-8 xl:px-12 2xl:max-w-6xl flex flex-col items-start justify-start ">
        <h1
          style={{ animationDelay: "720ms" }}
          className="text-primary-500 text-lg w-full lg:w-3/4 text-center md:text-start lg:text-xl xl:text-2xl 2xl:text-3xl font-medium lg:font-semibold xl:font-bold mb-4  animate-fade-up lg:mb-6 !leading-8 lg:!leading-[60px] tracking-widest"
        >
          {title}
        </h1>
        <p
          style={{ animationDelay: "900ms" }}
          className="text-white text-center md:text-start mt-6 lg:mt-12 text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal !leading-5 lg:!leading-10 opacity-95 animate-fadeUp"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const generateSlides = () =>
  HERO_IMAGES.map((imageSrc) => <HeroSlide key={imageSrc} src={imageSrc} />);

export default async function HeroSection() {
  const slides = generateSlides();
  const t = await getTranslations();

  return (
    <section
      className="relative w-full mb-10"
      role="banner"
      aria-label="Hero section"
    >
      <HeroOverlay
        title={t(HERO_CONTENT.title)}
        description={t(HERO_CONTENT.description)}
      />
      <EmblaCarousel fullWidth hideDots slides={[...slides]} />
    </section>
  );
}
