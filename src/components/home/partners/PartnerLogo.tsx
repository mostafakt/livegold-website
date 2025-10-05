"use client";

import Image from "@/components/ui/Image";

const PartnerLogo = ({ image, url }: { image: string; url: string }) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="flex flex-wrap my-3  items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out  hover:z-10"
    >
      <div className=" w-32 h-32  md:w-52 md:h-52 bg-white rounded-2xl flex items-center justify-center shadow-[0px_2px_16px_0px_rgba(0,0,0,0.10)]">
        <Image src={image} alt="alt" className=" !max-w-full !mwx-h-full  w-20 " width={130} height={152} />
      </div>
    </div>
  );
};

export default PartnerLogo;
