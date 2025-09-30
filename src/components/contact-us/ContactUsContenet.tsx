/* eslint-disable @typescript-eslint/no-explicit-any */

import { IContactUs } from "@/types/contact-us";
import Breadcrumb from "@/components/ui/BreadCamp";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { getTranslations } from "next-intl/server";

interface ContactUsClientProps {
  data: IContactUs;
  locale: "en" | "ar";
}

export default async function ContactUsClient({
  data,
  locale,
}: ContactUsClientProps) {
  const translations = await getTranslations("contact");
  const breadcrumbItems = [
    { label: locale === "ar" ? "الرئيسية" : "Home", href: "/" },
    { label: data.title?.[locale] || translations("title"), href: "#" },
  ];

  return (
    <div className="min-h-screen bg-primary-bg pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-tajawal">
            {data.title?.[locale] || translations("title")}
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            {translations("subtitle")}
          </p>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-drop p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 font-tajawal">
                {translations("discover")}
              </h2>
              <p className="text-neutral-700 text-lg leading-relaxed">
                {translations("description")}
              </p>
            </div>
            <div className="bg-card-bg-gradient rounded-xl p-8 border border-primary-400">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-tajawal">
                {translations("lets-connect")}
              </h3>
              <p className="text-neutral-700 mb-6">
                {translations("assistance")}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{data.email}</p>
                  <p className="text-sm text-neutral-600">
                    {translations("support")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <ContactInfo
              data={data}
              locale={locale}
            />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
