"use client";

import { IPrivacyPolicy } from "@/types/privacy-policy";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/ui/BreadCamp";
import { useTranslations } from "next-intl";

interface PrivacyPolicyClientProps {
  data: IPrivacyPolicy;
  locale: "en" | "ar";
}

export default function PrivacyPolicyClient({
  data,
  locale,
}: PrivacyPolicyClientProps) {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("privacy_policy");
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-primary-bg pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: data.title?.[locale] || t("breadcrumb.privacy-policy"), href: "#" },
  ];

  return (
    <div className="min-h-screen bg-primary-bg pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4 font-tajawal">
            {data.title?.[locale] || t("title")}
          </h1>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl text-black shadow-drop p-8 md:p-12">
            <div
              className="prose prose-lg max-w-none 
                        prose-h2:text-2xl prose-h2:font-bold prose-h2:text-neutral-900 prose-h2:mt-8 prose-h2:mb-4
                        prose-h1:text-3xl prose-h1:font-bold prose-h1:text-neutral-900 prose-h1:mt-12 prose-h1:mb-6
                        prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-4
                        prose-hr:my-8 prose-hr:border-neutral-200
                        prose-strong:text-neutral-900 prose-strong:font-bold
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                        prose-li:text-neutral-700 prose-li:mb-2"
              dangerouslySetInnerHTML={{
                __html: data.content?.[locale] || "<p>No content available</p>",
              }}
            />
          </div>

          {/* Additional Info Card */}
          <div className="mt-8 bg-card-bg-gradient rounded-2xl p-6 border border-primary-400">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 font-tajawal">
                  {t("additional-info.title")}
                </h3>
                <p className="text-neutral-700">
                  {t("additional-info.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}