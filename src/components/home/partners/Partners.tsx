import { getTranslations } from "next-intl/server";
import { getPartners } from "@/services/partners";
import PartnerLogo from "./PartnerLogo";
import SwiperCarousel from "@/components/ui/SwiperCarousel";

const Partners = async ({ locale }: { locale: "ar" | "en" }) => {
  const partners = await getPartners();
  const t = await getTranslations({ locale });
  return (
    <div className=" flex flex-col items-center justify-center gap-10  w-full max-w-360 p-3 lg:px-16  2xl:px-24">
      <div className="text-center justify-start text-primary text-4xl font-bold">
        {t("partners")}
      </div>

      {/* Show carousel on small screens, grid on md+ */}
      <div className="block xl:hidden w-full">
        <SwiperCarousel
          hideDots
          autoScroll
          autoScrollInterval={2000}
          breakpoints={{ md: 4, sm: 3, base: 2 }}
          slides={partners?.results?.map((p, idx) => (
            <PartnerLogo key={idx} image={p.logo} url={p.url} />
          ))}
        />
      </div>
      <div className="hidden xl:flex flex-wrap gap-8 items-center justify-center">
        {partners?.results?.map((p, idx) => (
          <PartnerLogo key={idx} image={p.logo} url={p.url} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
