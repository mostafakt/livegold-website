import Image from "@/components/ui/Image";
import EmblaCarousel from "../ui/Carousel";
import { getTranslations } from "next-intl/server";
import { getPartners } from "@/services/partners";

const Partners = async () => {
  const partners = await getPartners();
  const t = await getTranslations();
  return (
    <div className=" flex flex-col items-center justify-center gap-10 p-3 lg:px-16">
      <div className="text-center justify-start text-primary text-4xl font-bold">
        {t("partners")}
      </div>

      {/* Show carousel on small screens, grid on md+ */}
      <div className="block xl:hidden w-full">
        <EmblaCarousel
          breakpoints={{ md: 3, base: 1 }}
          slides={Array.from({ length: 15 }).map((_, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 flex-wrap justify-center p-1"
            >
              <div className="w-52 h-52 bg-white rounded-2xl flex items-center justify-center shadow-[0px_2px_16px_0px_rgba(0,0,0,0.10)]">
                <Image
                  src="/images/homepage/partners/partners.png"
                  alt="alt"
                  width={130}
                  height={152}
                />
              </div>
            </div>
          ))}
        />
      </div>
      <div className="hidden xl:flex flex-wrap gap-8 items-center justify-center">
        {partners?.results?.map((p, idx) => (
          <div
            key={idx}
            className="flex flex-wrap cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10"
          >
            <div className="w-52 h-52 bg-white rounded-2xl flex items-center justify-center shadow-[0px_2px_16px_0px_rgba(0,0,0,0.10)]">
              <Image src={p.url} alt="alt" width={130} height={152} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
