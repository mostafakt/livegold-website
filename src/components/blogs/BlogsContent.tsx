import { IBlogsRes } from "@/services/blogs";
import BlogCard from "./BlogCard";

const BlogsContent = async ({ blogs }: { blogs: IBlogsRes }) => {
  return (
    <div className="grid grid-cols-1 center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5   items-center justify-center w-full gap-6  max-w-360 ">
      {blogs?.results.map((blog) => (
        <div
          key={blog.id}
          className="col-span-1 flex items-center justify-center h-full"
        >
          <BlogCard
            animate
            content={blog.content}
            title={blog.title}
            image={blog.image ?? "/images/homepage/hero/10.webp"}
            id={blog.id}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogsContent;
