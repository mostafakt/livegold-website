import clsx from "clsx";
import Image from "@/components/ui/Image";

export type HeaderSlideProps = {
  label?: string;

  labelKey?: string;

  price?: string;

  imageSrc?: string;
  imageAlt?: string;

  className?: string;
  percentage?: string;
  isUp?: boolean;
};

export default function HeaderSlide({
  label,
  price,
  imageSrc,
  percentage,
  imageAlt = "thumb",
  className,
  isUp = false,
}: HeaderSlideProps) {
  const resolvedLabel = label;

  return (
    <div
      className={clsx(
        "flex relative flex-row-reverse  items-center justify-center gap-2 rounded-xl ",
        " ",
        className
      )}
      role="group"
      aria-label={resolvedLabel || "header slide"}
    >
      {/* left thumb area */}
      <div className="flex items-center justify-center ">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {
              <div className="flex items-center ">
                {percentage && (
                  <>
                    <div
                      className={` shrink-0 ${isUp ? "text-green" : "text-red"} text-start  text-sm lg:text-md font-medium leading-normal`}
                    >
                      {percentage}
                    </div>

                    <div
                      className={` shrink-0 ${isUp ? "text-green" : "text-red"} text-start  text-sm lg:text-md font-medium leading-normal`}
                    >
                      {!isUp ? "-" : "+"}
                    </div>
                  </>
                )}
                <Arrow color={isUp ? "fill-green" : "fill-red"} isUp={isUp} />
              </div>
            }
          </div>
        </div>
      </div>

      {/* main label (localized) */}
      <span className="  shrink-0 text-neutral-700 text-start flex items-center justify-center gap-1   text-sm lg:text-sm font-bold leading-normal">
        {resolvedLabel}:
        <span className="shrink-0 text-neutral-800 text-start text-sm lg:text-md font-bold leading-normal">
          ${price}
        </span>
      </span>

      {imageSrc ? (
        <Image
          width={40}
          height={40}
          src={imageSrc}
          alt={imageAlt}
          className="!w-10 !h-10 !max-h-10 object-cover rounded-full"
          loading="lazy"
        />
      ) : (
        <div className="w-10 h-10 bg-neutral-300 rounded-full" aria-hidden />
      )}
    </div>
  );
}

const Arrow = ({ color, isUp }: { color: string; isUp?: boolean }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isUp ? "rotate-180" : ""} f`}
    >
      <path
        opacity="0.5"
        d="M10 3.20833C10.3452 3.20833 10.625 3.48816 10.625 3.83333V11.5417H9.375V3.83333C9.375 3.48816 9.65483 3.20833 10 3.20833Z"
        className={` ${color} `}
      />
      <path
        d="M5.00002 11.5417C4.74723 11.5417 4.51933 11.6939 4.42259 11.9275C4.32586 12.161 4.37932 12.4298 4.55807 12.6086L9.55808 17.6086C9.67525 17.7258 9.83425 17.7917 10 17.7917C10.1657 17.7917 10.3247 17.7258 10.442 17.6086L15.442 12.6086C15.6207 12.4298 15.6742 12.161 15.5774 11.9275C15.4807 11.6939 15.2528 11.5417 15 11.5417H5.00002Z"
        className={` ${color} `}
      />
    </svg>
  );
};
