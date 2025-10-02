import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getFaqs } from "@/services/faq";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Breadcrumb from "@/components/ui/BreadCamp";
import { MdQuestionAnswer, MdQuestionMark } from "react-icons/md";
import { ManageLocale } from "@/utils/helpers";

interface PageProps {
  params: {
    locale: "ar" | "en";
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "Faq" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    // keywords: data.seoKeywords?.[locale],
    openGraph: {
      title: t("title"),
      description: t("meta.description"),
      images: [],
    },
  };
}

export default async function FaqsPage({ params }: PageProps) {
  const { locale } = params;
  const data = (await getFaqs()).results;

  const translations = await getTranslations({ locale, namespace: "Faq" });
  console.log("translations", translations);
  const breadcrumbItems = [
    { label: translations("breadcrumb.home"), href: "/" },
    { label: translations("title"), href: "/faq" },
  ];
  return (
    <>
      <div className="min-h-screen bg-primary-bg pt-10 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 font-tajawal">
              {translations("title")}
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              {translations("hero.subtitle")}
            </p>
            <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6"></div>
          </div>

          {/* Faqs */}
          <Accordion
            type="multiple"
            className="rounded-2xl border border-neutral-200 bg-[#fffdf9] p-2 md:p-3"
          >
            {data.map((faq) => {
              const value = String(faq.id); // unique value
              return (
                <AccordionItem
                  key={faq.id}
                  value={value}
                  className="
          group/acc mb-4
          rounded-xl border border-neutral-200
          bg-white shadow-sm
          transition-all duration-300
          hover:shadow-md
        "
                >
                  <AccordionTrigger
                    className="group flex items-center w-full rounded-xl
            px-5 py-4 md:px-6 md:py-5
            text-left text-neutral-900 font-semibold
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2
            hover:bg-secondary border border-primary-200/10"
                  >
                    {/* Accent circle */}
                    <div className="flex items-center gap-5">
                      <span
                        className="
              inline-flex h-6 w-6 shrink-0 items-center justify-center
              rounded-full bg-primary/10 text-primary text-xs font-bold
              ring-1 ring-primary/20 duration-300
              group-aria-expanded/acc:rotate-180
              group-hover:bg-primary group-hover:text-white transition-all
            "
                      >
                        <MdQuestionMark />
                      </span>

                      <span className="flex-1 leading-snug">
                        {ManageLocale.getLocalizedData(faq.question, locale)}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-secondary-dark">
                    <span>
                      <MdQuestionAnswer className="text-primary" />
                    </span>

                    <span>
                      {ManageLocale.getLocalizedData(faq.answer, locale)}
                    </span>

                    {/* Soft divider */}
                    {/* <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" /> */}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </>
  );
}
