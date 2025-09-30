import { getTranslations } from "next-intl/server";

const Page = async () => {
  const t = await getTranslations();
  return (
    <div className=" flex flex-col w-full  px-3 lg:px-16 ">
      {/* title */}
      <div className="  text-start justify-start text-Secondary-2 text-4xl font-bold  ">
        {t("blog")}
      </div>
      
    </div>
  );
};

export default Page;
