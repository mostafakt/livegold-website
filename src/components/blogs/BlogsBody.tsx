/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IBlogsRes } from "@/services/blogs";
import { getLocalizedData } from "@/utils/helpers";
import React, { useEffect, useRef, useState } from "react";
import ExpandableText from "../ExpandableText";
import EmblaCarousel from "../ui/Carousel";
import Image from "../ui/Image";
import { useTranslations } from "next-intl";
import { FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import IconButton from "../ui/IconButton";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const BlogsBody = ({ blogs }: { blogs: IBlogsRes }) => {
  const [selectedBlog, setSelectedBlog] = useState(0);

  const t = useTranslations();
  const thumbsSwiperRef = useRef<any>(null);
  useEffect(() => {
    const s = thumbsSwiperRef.current;
    if (!s) return;
    s.slideTo(selectedBlog, 300);
  }, [selectedBlog]);
  return (
    <div className=" flex flex-col w-full mt-3 ">
      <div className="  flex  flex-col   gap-4 text-start justify-between w-full">
        <div className="  flex items-start md:items-center  text-primary text-lg   font-bold w-full  ">
          {getLocalizedData(blogs.results[selectedBlog].title)}
        </div>{" "}
        <div className=" w-full  ">
          <ExpandableText
            text={
              <div
                className="w-full   text-secondary-dark text-start justify-start text-Color-2 text-md font-normal"
                dangerouslySetInnerHTML={{
                  __html: getLocalizedData(blogs.results[selectedBlog].content),
                }}
              />
            }
            lines={2}
          />
        </div>
      </div>
      <div className="mt-4 w-full items-center justify-center">
        <EmblaCarousel
          slides={blogs.results.map((t, idx) => (
            <div key={idx} className="w-full flex items-center justify-center">
              <Image
                src={"/images/brand/brand.png"}
                alt="alt"
                width={900}
                height={402}
              />
            </div>
          ))}
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
          onSwiper={(swiper) => {
            thumbsSwiperRef.current = swiper;
            swiper.slideTo(selectedBlog, 0);
          }}
        >
          {blogs.results.map((t, idx) => (
            <SwiperSlide
              key={idx}
              className=" max-w-full sm:w-96 sm:max-w-96 h-full  py-2 cursor-pointer "
            >
              <div
                onClick={() => {
                  setSelectedBlog(idx);
                }}
                className={`flex flex-col  w-full max-w-full sm:max-w-96   h-full rounded-xl shadow-md ${idx == selectedBlog ? " border border-primary " : ""} `}
              >
                <Image
                  src={"/images/brand/brand.png"}
                  alt="alt"
                  className="w-full"
                  width={384}
                  height={246}
                />
                <div className="flex flex-col  mb-7  gap-2 mt-4 px-4">
                  <div className="text-start justify-center text-primary text-base font-bold ">
                    {getLocalizedData(t.title)}
                  </div>
                  <div
                    className=" text-start h-10 overflow-hidden justify-start text-neutral-800 text-sm font-normal  "
                    dangerouslySetInnerHTML={{
                      __html: getLocalizedData(t.content),
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" w-full  flex items-center justify-start mt-6 gap-6 ">
        <IconButton
          icon={
            <div className="flex items-center justify-center  bg-primary-300  p-2 rounded-full w-10 h-10  ">
              <MdArrowForwardIos className="w-6 h-6 text-white bg-none" />
            </div>
          }
          ariaLabel="Previous image"
          variant="ghost"
          size="md"
          onClick={() => {
            setSelectedBlog((prev) => Math.max(0, prev - 1));
          }}
        />
        <IconButton
          icon={
            <div className="flex items-center justify-center text-primary p-2 rounded-full bg-primary-300 w-10 h-10  ">
              <MdArrowBackIosNew className="w-6 h-6 text-white   " />
            </div>
          }
          ariaLabel="Next image"
          variant="ghost"
          size="md"
          onClick={() => {
            setSelectedBlog((prev) =>
              Math.min(blogs.results.length - 1, prev + 1)
            );
          }}
        />
      </div>
    </div>
  );
};

export default BlogsBody;
