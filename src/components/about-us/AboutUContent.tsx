"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Breadcrumb from "../ui/BreadCamp";

interface AboutUsClientProps {
  data: {
    title: {
      ar: string;
      en: string;
    };
    content: {
      ar: string;
      en: string;
    };
    stats: Array<{
      number: string;
      prefix: string;
      label: {
        ar: string;
        en: string;
      };
    }>;
  };
  locale: string;
}

export default function AboutUsClient({ data, locale }: AboutUsClientProps) {
  const isRTL = locale === "ar";
  const t = useTranslations("AboutUs");
  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("title"), href: "/blog" },
  ];
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col items-center justify-start   ">
      {/* Hero Section */}
      <section className="bg-white mt-4  lg:mt-8 pb-8  flex flex-col items-center w-full  px-3 lg:px-16  2xl:px-24 ">
        <div className=" max-w-360 w-full">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="max-w-360 mx-auto px-4 w-full mt-10">
          <div
            className={`   w-full  flex justify-center  flex-col items-center `}
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-neutral-900 mb-4 ">
                {data.title[locale as keyof typeof data.title]}
              </h1>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6"></div>
            </div>
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed font-sans text-justify">
              <div
                className="space-y-4"
                dangerouslySetInnerHTML={{
                  __html: data.content[locale as keyof typeof data.content],
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-primary-400  w-full  px-3 lg:px-16  2xl:px-24 ">
        <div className="max-w-360 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-drop hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 ">
                  <span className="text-primary-500">{stat.prefix}</span>
                  {stat.number}
                </div>
                <p className="text-neutral-600 font-sans text-sm lg:text-base">
                  {stat.label[locale as keyof typeof stat.label]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white w-full  px-3 lg:px-16  2xl:px-24 ">
        <div className="max-w-360 mx-auto px-4">
          <div className={`text-center mb-12  text-start `}>
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-dark mb-4 ">
              {locale === "ar"
                ? "لماذا تختار لايف جولد؟"
                : "Why Choose Live Gold?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div
              className={`flex items-start space-x-4 ${isRTL ? "space-x-reverse" : ""}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className={isRTL ? "text-start" : "text-start"}>
                <h3 className="text-lg font-bold text-secondary-dark mb-2 ">
                  {locale === "ar" ? "تحديثات فورية" : "Real-time Updates"}
                </h3>
                <p className="text-neutral-600 font-sans">
                  {locale === "ar"
                    ? "أسعار ذهب محدثة لحظياً من الأسواق المحلية والعالمية"
                    : "Real-time updated gold prices from local and global markets"}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className={`flex items-start space-x-4 ${isRTL ? "space-x-reverse" : ""}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className={isRTL ? "text-start" : "text-start"}>
                <h3 className="text-lg font-bold text-secondary-dark mb-2 ">
                  {locale === "ar" ? "معلومات موثوقة" : "Reliable Information"}
                </h3>
                <p className="text-neutral-600 font-sans">
                  {locale === "ar"
                    ? "بيانات دقيقة ومؤكدة من مصادر موثوقة"
                    : "Accurate and verified data from trusted sources"}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className={`flex items-start space-x-4 ${isRTL ? "space-x-reverse" : ""}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <div className={isRTL ? "text-start" : "text-start"}>
                <h3 className="text-lg font-bold text-secondary-dark mb-2 ">
                  {locale === "ar" ? "تغطية شاملة" : "Comprehensive Coverage"}
                </h3>
                <p className="text-neutral-600 font-sans">
                  {locale === "ar"
                    ? "جميع أسعار الذهب المحلية والعالمية في منصة واحدة"
                    : "All local and global gold prices in one platform"}
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div
              className={`flex items-start space-x-4 ${isRTL ? "space-x-reverse" : ""}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className={isRTL ? "text-start" : "text-start"}>
                <h3 className="text-lg font-bold text-secondary-dark mb-2 ">
                  {locale === "ar" ? "سهولة الاستخدام" : "Easy to Use"}
                </h3>
                <p className="text-neutral-600 font-sans">
                  {locale === "ar"
                    ? "واجهة بسيطة وبديهية للوصول السريع للمعلومات"
                    : "Simple and intuitive interface for quick access to information"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
