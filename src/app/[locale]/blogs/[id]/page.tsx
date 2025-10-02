import BlogsBody from "@/components/blogs/BlogsBody";
import { getBlog, getBlogs } from "@/services/blogs";
import { ManageLocale } from "@/utils/helpers";
import { Metadata } from "next";
import React from "react";
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  if (!id) return {};
  const blog = await getBlog(params.id);

  if (!blog) return {};

  return {
    title: ManageLocale.getLocalizedData(blog.title),
    description: ManageLocale.getLocalizedData(blog.content) ?? "",
    openGraph: {
      title: ManageLocale.getLocalizedData(blog.title),
      description: ManageLocale.getLocalizedData(blog.content) ?? "",
      images: blog.image,
    },
  };
}
const Page = async ({
  params,
}: {
  params: { id: string; locale: "ar" | "en" };
}) => {
  const blog = await getBlog(params.id);
  const blogs = await getBlogs();

  return (
    <div className="">
      <BlogsBody blogs={blogs} blog={blog} locale={params.locale} />
    </div>
  );
};

export default Page;
