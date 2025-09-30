import BlogsBody from "@/components/blogs/BlogsBody";
import Breadcrumb from "@/components/ui/BreadCamp";
import { getBlogs } from "@/services/blogs";
import { getTranslations } from "next-intl/server";

const Page = async () => {
  const t = await getTranslations();
  const blogs = await getBlogs();
  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("blog"), href: "/blog" },
  ];
  return (
    <div className=" flex flex-col w-full  px-3 lg:px-16 ">
      <Breadcrumb items={breadcrumbItems} />
      {/* title */}
     
      {/* blogs body */}
      <BlogsBody blogs={blogs} />
    </div>
  );
};

export default Page;
