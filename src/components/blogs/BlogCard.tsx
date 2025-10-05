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
    <Link className="h-full block" href={`/blogs/${id}`}>
      <div
        className={`flex flex-col transition-transform duration-300 ease-in-out w-full h-full rounded-xl shadow-md overflow-hidden ${
          animate ? "hover:scale-105" : ""
        } ${isSelected ? "border border-primary" : ""}`}
      >
        <Image
          src={image ?? "/images/brand/brand.png"}
          alt="alt"
          className="w-full aspect-video object-cover" // Better responsive image
          width={384}
          height={246}
        />
        <div className="flex flex-col gap-2 mt-4 px-4 pb-4 flex-grow">
          <div className="text-start text-primary text-xs md:text-base font-bold line-clamp-2">
            {ManageLocale.getLocalizedData(title)}
          </div>
          <div
            className="text-start text-neutral-800  text-xs md:text-sm font-normal line-clamp-3"
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