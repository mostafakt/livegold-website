import BlogsContent from "@/components/blogs/BlogsContent";
import Breadcrumb from "@/components/ui/BreadCamp";
import { getBlogs } from "@/services/blogs";
import { ManageLocale } from "@/utils/helpers";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("blogs") + " - " + t("live-gold"),
    description: "live gold blog",
    openGraph: {
      title: t("blogs") + " - " + t("live-gold"),
      description: "live gold blog",
      type: "website",
    },
  };
}
const Page = async ({ params }: { params: { locale: "ar" | "en" } }) => {
  const locale = params.locale;
  ManageLocale.setLocal(locale);
  const t = await getTranslations({ locale, namespace: "" });
  const blogs = await getBlogs();
  const breadcrumbItems = [
    { label: t("home"), href: "/" },
    { label: t("blog"), href: "/blog" },
  ];

  return (
    <div className=" flex flex-col w-full min-h-screen bg-primary-bg pt-4 lg:pt-8 pb-16 items-center  px-3 lg:px-16  2xl:px-24 ">
      <div className="  mb-10  max-w-360 w-full">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* title */}

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4 ">
          {t("blog")}
        </h1>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          {t("blogs-subtitle")}
        </p>
        <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6"></div>
      </div>
      <div className="w-full flex items-center justify-center">
        <BlogsContent blogs={blogs} />
      </div>
    </div>
  );
};

export default Page;
