/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IBlogRes, IBlogsRes } from "@/services/blogs";
import { ManageLocale } from "@/utils/helpers";
import { useTranslations } from "next-intl";
import { FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import IconButton from "../ui/IconButton";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import BlogCard from "./BlogCard";

const BlogsBody = ({
  blogs,
  blog,
  locale,
}: {
  blogs: IBlogsRes;
  blog: IBlogRes;
  locale: "ar" | "en";
}) => {
  const index = blogs.results.findIndex((obj) => obj.id === blog.id);
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className=" flex flex-col  items-center justify-center w-full pb-10">
      {/* cover image or video */}
      <div
        style={{
          backgroundImage: `url(${blog.image ?? "/images/homepage/hero/2.webp"})`,
        }}
        className={`  flex w-full  h-75  items-center justify-center !max-h-75   bg-cover   bg-no-repeat   lg:!max-h-96 3xl:!max-h-96  overflow-hidden  `}
      >
        <div className="  w-full h-full flex justify-center items-center bg-secondary-dark bg-opacity-45 ">
          {/* title */}
          <div className="  z-[999]  text-center   flex  items-center  text-[#f8bf74] text-lg md:text-2xl  justify-center  font-bold w-full  ">
            {ManageLocale.getLocalizedData(blog.title, locale)}
          </div>{" "}
        </div>
      </div>
      <div className=" px-3 xl:px-16 2xl:px-24 flex flex-col items-center justify-center w-full">
        <div className=" flex flex-col w-full max-w-360  py-3   mt-4  items-start ">
          {/* body */}
          <div className="  flex  flex-col   gap-4 text-center justify-between w-full">
            <div className=" w-full mt-6  ">
              {/* description */}
              <div
                className="w-full   text-secondary-dark text-start wrapper justify-start  text-xs  md:text-md lg:text-lg xl:text-xl font-normal"
                dangerouslySetInnerHTML={{
                  __html: ManageLocale.getLocalizedData(blog.content, locale),
                }}
              />
            </div>
          </div>
          {/* blog images */}
          {/* <div className="mt-10 w-full items-center justify-center ">
          <EmblaCarousel
            slides={[
              <div key={12} className="w-full flex items-center justify-center">
                <Image
                  src={blog.image ?? "/images/homepage/hero/3.webp"}
                  alt="alt"
                  className=" max-h-96  rounded-lg"
                  width={900}
                  height={402}
                />
              </div>,
            ]}
          />
        </div> */}
          <div className=" text-secondary-dark mt-14  text-start justify-start text-Secondary-2 text-xl md:text-3xl font-bold  ">
            {t("public-blogs")}
          </div>
          <div className="w-full mt-4 ">
            <Swiper
              modules={[FreeMode]}
              spaceBetween={16}
              slidesPerView="auto"
              freeMode={true}
              grabCursor={true}
            >
              {blogs?.results.map((t, idx) => (
                <SwiperSlide
                  key={idx}
                  className=" max-w-full sm:w-96 sm:max-w-96 h-full  py-2 cursor-pointer "
                >
                  <BlogCard
                    content={t.content}
                    title={t.title}
                    image={t.image ?? "/images/homepage/hero/10.webp"}
                    id={t.id}
                    isSelected={t.id == blog.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className=" w-full  flex items-center justify-start mt-6 gap-6 ">
            <IconButton
              icon={
                <div className="flex items-center justify-center  bg-primary-300  p-2 rounded-full w-10 h-10  ">
                  <MdArrowForwardIos className="w-6 h-6 text-white bg-none ltr:rotate-180" />
                </div>
              }
              ariaLabel="Previous image"
              variant="ghost"
              size="md"
              onClick={() => {
                router.push(
                  "blogs/" + blogs.results[Math.max(0, index - 1)].id
                );
              }}
            />
            <IconButton
              icon={
                <div className="flex items-center justify-center text-primary p-2 rounded-full bg-primary-300 w-10 h-10  ">
                  <MdArrowBackIosNew className="w-6 h-6 text-white ltr:rotate-180  " />
                </div>
              }
              ariaLabel="Next image"
              variant="ghost"
              size="md"
              onClick={() => {
                router.push(
                  "/blogs/" +
                    blogs.results[
                      Math.min(blogs?.results.length - 1, index + 1)
                    ].id
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsBody;
