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
    <div className=" flex flex-col w-full min-h-screen bg-primary-bg pt-10 lg:pt-24 pb-16   px-3 lg:px-16  2xl:px-24 ">
      <div className="">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* title */}

      <div className="  mt-8    text-start flex flex-col text-4xl font-bold text-neutral-900  w-full items-center justify-center ">
        {t("blog")}
        <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6"></div>
      </div>

      <BlogsContent blogs={blogs} />
    </div>
  );
};

export default Page;
