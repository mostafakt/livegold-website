// app/components/TermAndConditionServer.tsx
// Server Component — do NOT include "use client"
import React from "react";
import Image from "@/components/ui/Image";
import Breadcrumb from "../ui/BreadCamp";
import { ITermAndCondition } from "@/types/term-and-condition";
import { ManageLocale } from "@/utils/helpers";
import styles from "./term.module.css";

interface TermAndConditionServerProps {
  data?: ITermAndCondition;
  locale: "ar" | "en";
}

export default function TermAndConditionServer({
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

  const title =
    ManageLocale.getLocalizedData(data?.title, locale) || t("title");
  const content = ManageLocale.getLocalizedData(data?.content, locale) || "";

  // server-side deterministic date (no hydration mismatch)
  const lastUpdated = new Date().toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: title, href: "/term-and-condition" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="text-white/90 pt-10 lg:pt-24">
        <div className="w-full px-3 lg:px-16 2xl:px-24">
          <div>
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="text-center mt-8 w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              {title}
            </h1>
            <p className="text-neutral-850 text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
            <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
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
                className={
                  `  ${styles.wrapper} ` +
                  "prose prose-lg max-w-none " +
                  "prose-headings:!text-red-900 prose-h2:text-red-900 prose-headings:font-bold " +
                  "prose-p:text-neutral-700 prose-p:leading-relaxed " +
                  "prose-ul:text-neutral-700 prose-ol:text-neutral-700 prose-li:my-2 " +
                  "prose-strong:text-primary-600 prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline"
                }
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
                  {t("cta.title")}
                </h3>
                <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    {t("cta.contact")}
                  </button>
                  <button className="border border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    {t("cta.learnMore")}
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
