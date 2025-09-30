import BlogsBody from "@/components/blogs/BlogsBody";
import Breadcrumb from "@/components/ui/BreadCamp";
import { getBlogs } from "@/services/blogs";
import { getTranslations } from "next-intl/server";

const Page = async () => {
  const t = await getTranslations();
  const blogs = await getBlogs();
  const breadcrumbItems = [
    { label: t("home"), href: "/" },
    { label: t("blog"), href: "/blog" },
  ];

  return (
    <div className=" flex flex-col w-full min-h-screen bg-primary-bg pt-6 lg:pt-12 pb-16  px-3 lg:px-16 ">
      <div className="">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* title */}

      <div className=" mt-2 text-secondary-dark   text-start justify-start text-Secondary-2 text-xl md:text-3xl font-bold  ">
        {t("blog")}
      </div>

      <BlogsBody blogs={blogs} />
    </div>
  );
};

export default Page;
