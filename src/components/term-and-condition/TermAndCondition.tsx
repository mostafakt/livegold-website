import React from "react";
import Image from "@/components/ui/Image";
import Breadcrumb from "../ui/BreadCamp";
import { ITermAndCondition } from "@/types/term-and-condition";
import { ManageLocale } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

interface TermAndConditionServerProps {
  data?: ITermAndCondition;
  locale: "ar" | "en";
}

export default async function TermAndConditionServer({
  data,
  locale,
}: TermAndConditionServerProps) {
  const t = (key: string) => {
    const fallbacks: Record<string, string> = {
      title: "Terms & Conditions",
      subtitle: "",
      "breadcrumb.home": "Home",
      videoNotSupported: "Your browser does not support the video tag.",
      lastUpdated: "Last updated",
      "cta.title": "Get in touch",
      "cta.description": "Contact us for more information",
      "cta.contact": "Contact",
      "cta.learnMore": "Learn more",
    };
    return fallbacks[key] ?? key;
  };
  const translations = await getTranslations({
    locale,
    namespace: "",
  });

  const title =
    ManageLocale.getLocalizedData(data?.title, locale) || t("title");
  const content = ManageLocale.getLocalizedData(data?.content, locale) || "";

  const lastUpdated = new Date().toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const breadcrumbItems = [
    { label: translations("home"), href: "/" },
    { label: title, href: "/term-and-condition" },
  ];

  return (
    <div className="min-h-screen  px-3 lg:px-16  2xl:px-24 ">
      {/* Header Section */}
      <section className="text-white/90 pt-4 lg:pt-8 flex flex-col items-center">
        <div className="w-full  max-w-360">
          <div className="mb-10">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="text-center mb-16 ">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4 ">
              {title}
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              {translations("TermAndCondition.subtitle")}
            </p>
            <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {data?.imageUrl && (
              <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={data.imageUrl}
                  alt={title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}

            {data?.videoUrl && (
              <div className="mb-12 rounded-2xl overflow-hidden shadow-lg bg-black">
                <video
                  controls
                  className="w-full h-64 md:h-80 object-cover"
                  poster={data.imageUrl}
                >
                  <source src={data.videoUrl} type="video/mp4" />
                  {t("videoNotSupported")}
                </video>
              </div>
            )}

            <div className="bg-white text-black rounded-2xl shadow-drop p-8 md:p-12">
              {/* Article: lang + dir for AR/EN and Tailwind prose classes */}
              <article
                lang={locale}
                dir={locale === "ar" ? "rtl" : "ltr"}
                className={` w-full !max-w-full *:w-full 
 prose prose-sm md:prose-base lg:prose-lg xl:prose-xl 
    text-secondary-dark font-normal leading-5
    prose-p:text-secondary-dark prose-p:leading-[1.5] prose-p:mb-4  prose-p:text-base 
    prose-strong:!text-red-50 prose-strong:font-extrabold prose-strong:block prose-strong:mb-1.5 prose-strong:text-[0.875em] md:prose-strong:text-[0.925em] lg:prose-strong:text-base lg:prose-strong:text-neutral-900 lg:prose-strong:mb-1 xl:prose-strong:mb-1
      prose-br:!hidden      prose-br:!h-1
    lg:prose-h2:text-primary prose-h2:text-primary lg:prose-h2:font-bold lg:prose-h2:mt-4  prose-h2:text-lg prose-h2:!mb-2 lg:prose-h2:text-xl
     lg:prose-h1:font-bold lg:prose-h1:mt-3 lg:prose-h1:mb-1.5 lg:prose-h1:text-[1.4rem]
     lg:prose-p:leading-[1.5]  lg:prose-p:mb-1
    lg:prose-hr:mt-2 lg:prose-hr:border-neutral-200
    lg:prose-ul:list-disc lg:prose-ul:pl-6 lg:prose-ul:mb-1
     lg:prose-li:mb-0.5
    xl:prose-p:leading-[1.6]
`}
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* Last Updated */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <p className="text-neutral-600 text-sm">
                  {t("lastUpdated")}: {lastUpdated}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="bg-card-bg-gradient rounded-2xl p-8 border border-primary-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {translations("TermAndCondition.cta.title")}
                </h3>
                <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                  {translations("TermAndCondition.cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    {translations("TermAndCondition.cta.contact")}
                  </button>
                  <button className="border border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    {translations("TermAndCondition.cta.learnMore")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
