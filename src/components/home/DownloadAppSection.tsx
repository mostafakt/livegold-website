import Image from "@/components/ui/Image";
import Link from "next/link";

const DownloadAppSection = () => {
  return (
    <div className="bg-[url('/images/homepage/download-app/bg.svg')]  py-4 lg:p-1 rounded-3xl bg-cover bg-center flex flex-col gap-9  xl:flex-row !px-5   overflow-hidden items-center justify-between m-3 lg:mx-16">
      <div className=" lg:w-1/3 ">
        <div className="flex flex-col items-center  gap-6  lg:items-start p-5 lg:p-0   ">
          <div className="max-w-72 text-start justify-start text-secondary-dark text-2xl lg:text-4xl font-bold  ">
            حمّل تطبيق لايف جولد الآن!
          </div>
          <div className=" flex gap-2 flex-col md:flex-row justify-center ">
            <Link href={"#apple"}>
              <Image
                src="/images/homepage/download-app/apple-play-button.svg"
                alt="alt"
                width={162}
                height={54}
              />
            </Link>
            <Link href={"#google"}>
              <Image
                src="/images/homepage/download-app/google-play-button.svg"
                alt="alt"
                width={162}
                height={54}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 flex items-center justify-center">
        <Image
        //i want to center this image inside the section
          src="/images/homepage/download-app/qr-code-svgrepo-com (4) 1.png"
          alt="alt"
          width={162}
          height={54}
        />
      </div>

      <div className=" w-full lg:w-1/3 flex  justify-center lg:justify-end">
        <div className=" flex gap-4 lg:gap-2 flex-col md:flex-row items-center  py-2 ">
          <div className=" w-full max-w-xs lg:max-w-56 text-start justify-start text-neutral-800 text-xl font-medium  ">
            تابع أسعار الذهب لحظة بلحظة، وابدأ البيع والشراء أو شارك في المزادات
            بسهولة من جوالك
          </div>
          <Image
            src="/images/homepage/download-app/mobile1.png"
            alt="alt"
            height={210}
            width={190}
            className="ltr:transform ltr:-scale-x-100"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
