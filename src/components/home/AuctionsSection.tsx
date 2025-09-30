import { useTranslations } from "next-intl";
import { Button } from "../ui";
import Image from "@/components/ui/Image";

const AuctionsSection = () => {
  const t = useTranslations();
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between min-h-[350px] gap-6 p-4 lg:p-16 bg-white">
      <div className="flex flex-col items-start justify-center gap-6 flex-1">
        <h2 className="text-primary text-3xl lg:text-4xl font-bold text-start w-full">
          المزادات
        </h2>
        <p className="max-w-2xl w-full text-neutral-900 text-sm lg:text-lg font-medium leading-relaxed text-start">
          {`
        يقدم "لايف جولد" تجربة فريدة لعشّاق الذهب من خلال قسم المزادات، حيث
        يمكن للمستخدمين المشاركة في مزادات مباشرة على الذهب والمجوهرات
        والمعادن النفيسة، بكل شفافية وسهولة.  يتيح هذا القسم إمكانية عرض القطع
        الذهبية من قِبل الأفراد أو التجّار، والمزايدة عليها ضمن وقت محدد، مع
        تحديثات لحظية وسجلات موثقة لكل عملية، مما يمنح المستخدم تجربة تسوّق
        ديناميكية وآمنة تشبه أسواق الذهب الحقيقية.
        `}
        </p>
        <Button className="w-fit">{t("view-more")}</Button>
      </div>
      <Image
        src="/images/homepage/Auctions.png"
        alt="مزادات لايف جولد"
        width={408}
        height={266}
        className="  "
        priority
      />
    </section>
  );
};

export default AuctionsSection;
