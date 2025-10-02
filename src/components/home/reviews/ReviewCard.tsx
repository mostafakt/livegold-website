import Image from "@/components/ui/Image";
import {  ManageLocale } from "@/utils/helpers";
import { MdPerson2 } from "react-icons/md";

const ReviewCard = ({
  review,
}: {
  review: {
    id: string;
    logo: string;
    name: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
    company: {
      ar: string;
      en: string;
    };
    position: {
      ar: string;
      en: string;
    };
    createdAt: unknown;
    updatedAt: unknown;
  };
}) => {
  return (
    <div className="max-w-lg w-full   relative flex flex-col  bg-orange-50 gap-3 px-7 py-7 rounded-3xl min-h-full">
      <div className="w-48 h-full left-0 top-0 absolute bg-gradient-to-l from-orange-50/0 to-orange-400/25 rounded-3xl" />
      <div className="w-48 h-full right-0 top-0 absolute bg-gradient-to-r from-orange-50/0 to-orange-400/25 rounded-3xl" />

      <div className="flex gap-3 lg:gap-4 items-center">
        <div className=" bg-white z-50 rounded-full overflow-hidden h-20 max-w-20 w-full flex items-center justify-center">
          {review.logo ? (
            <Image src={review.logo} alt="alt" className="rounded-full" width={54} height={54} />
          ) : (
            <MdPerson2 className=" text-primary" />
          )}
        </div>
        <div className="text-start  justify-start text-neutral-800 text-lg lg:text-xl font-bold  ">
          {ManageLocale.getLocalizedData(review.name)}{" "}
        </div>
      </div>
      <div
        className=" w-full text-start justify-start text-neutral-800 text-xl font-medium   leading-7"
        dangerouslySetInnerHTML={{
          __html: ManageLocale.getLocalizedData(review.description),
        }}
      />
    </div>
  );
};

export default ReviewCard;
