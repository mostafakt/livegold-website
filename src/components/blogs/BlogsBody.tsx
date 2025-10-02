/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IBlogRes, IBlogsRes } from "@/services/blogs";
import { ManageLocale } from "@/utils/helpers";
import EmblaCarousel from "../ui/Carousel";
import Image from "../ui/Image";
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
    <div className=" flex flex-col w-full pb-10">
      {/* cover image or video */}
      <div className="flex w-full h-full items-center justify-center    lg:!max-h-[65vh]   3xl:!max-h-[45vh]  overflow-hidden  ">
        <Image
          src={blog.image ?? "/images/homepage/hero/2.webp"}
          alt="alt"
          className="  !max-h-200   w-full   !h-full "
          width={1920}
          height={800}
          priority
        />
      </div>
      <div className=" flex flex-col w-full   p-3 xl:px-16 2xl:px-24  mt-4  items-start ">
        {/* body */}
        <div className="  flex  flex-col   gap-4 text-center justify-between w-full">
          {/* title */}
          <div className="  flex  items-center  text-primary text-2xl  justify-center  font-bold w-full  ">
            {ManageLocale.getLocalizedData(blog.title,locale)}
          </div>{" "}
          <div className=" w-full mt-6  ">
            {/* description */}
            <div
              className="w-full   text-secondary-dark text-start justify-start text-Color-2 text-md font-normal"
              dangerouslySetInnerHTML={{
                __html: ManageLocale.getLocalizedData(blog.content,locale),
              }}
            />
          </div>
        </div>
        {/* blog images */}
        <div className="mt-10 w-full items-center justify-center ">
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
        </div>
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
              router.push("blogs/" + blogs.results[Math.max(0, index - 1)].id);
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
                  blogs.results[Math.min(blogs?.results.length - 1, index + 1)]
                    .id
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsBody;
