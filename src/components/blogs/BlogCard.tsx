import { ManageLocale } from "@/utils/helpers";
import React from "react";
import Image from "../ui/Image";
import Link from "next/link";

const BlogCard = ({
  content,
  title,
  image,
  animate,
  isSelected,
  id,
}: {
  title: {
    ar: string;
    en: string;
  };
  image: string;
  content: {
    ar: string;
    en: string;
  };
  id: string;
  animate?: boolean;
  isSelected?: boolean;
}) => {
  return (
    <Link className=" h-full " href={`/blogs/${id}`}>
      <div
        className={`flex flex-col  transition-transform duration-300 ease-in-out   w-full max-w-full sm:max-w-96  ${animate ? "hover:scale-105" : ""}  h-full rounded-xl shadow-md overflow-hidden ${isSelected ? " border border-primary " : ""} `}
      >
        <Image
          src={image ?? "/images/brand/brand.png"}
          alt="alt"
          className="w-full !max-h-[246px] !h-[246px]"
          width={384}
          height={246}
        />
        <div className="flex flex-col  mb-7  gap-2 mt-4 px-4">
          <div className="text-start justify-center text-primary text-base font-bold ">
            {ManageLocale.getLocalizedData(title)}
          </div>
          <div
            className=" text-start h-10 overflow-hidden justify-start text-neutral-800 text-sm font-normal  "
            dangerouslySetInnerHTML={{
              __html: ManageLocale.getLocalizedData(content),
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
