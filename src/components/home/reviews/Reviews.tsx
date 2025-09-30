import { getTranslations } from "next-intl/server";
import EmblaCarousel from "../../ui/Carousel";
import ReviewCard from "./ReviewCard";
import { getTestimonials } from "@/services/testimonials";

const Reviews = async () => {
  const reviews = await getTestimonials();
  const t = await getTranslations();
  return (
    <div className=" p-3 lg:p-16 flex flex-col items-center gap-10 ">
      <div className="text-center justify-start text-primary text-4xl font-bold  ">
        {t("testimonials")}
      </div>
      <EmblaCarousel
        breakpoints={{ lg: 3, md: 2, base: 1, sm: 2 }}
        slides={reviews?.results?.map((i) => (
          <div
            key={i.id}
            className="flex items-center gap-5  flex-wrap justify-center"
          >
            <ReviewCard review={i} />
          </div>
        ))}
      />
    </div>
  );
};

export default Reviews;
