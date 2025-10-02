"use client";

import { IPrivacyPolicy } from "@/types/privacy-policy";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/ui/BreadCamp";
import { useTranslations } from "next-intl";
import styles from "./privacy.module.css";

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
      <div className="min-h-screen  bg-primary-bg pt-24 pb-16">
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
    <div className="min-h-screen bg-primary-bg flex flex-col items-center w-full py-10 lg:py-24 ">
      <div className="w-full   px-3 lg:px-16  2xl:px-24 ">
        {/* Breadcrumb */}
        <div className="mb-8 w-full">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900   ">
            {data.title?.[locale] || t("title")}
          </h1>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl text-black shadow-drop p-8 md:p-12">
            <div
              className={` ${styles.wrapper}  `}
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
                <h3 className="text-lg font-bold text-neutral-900 mb-2 ">
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