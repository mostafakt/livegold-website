import { Metadata } from "next";
import { getContactUsData } from "@/services/contact-us";
import { getTranslations } from "next-intl/server";
import ContactUsClient from "@/components/contact-us/ContactUsContenet";

interface PageProps {
  params: {
    locale: "ar" | "en";
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = params;
  const data = await getContactUsData(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: data.title?.[locale] || t("title"),
    description: data.seoDescription?.[locale],
    keywords: data.seoKeywords?.[locale],
    openGraph: {
      title: data.title?.[locale] || t("title"),
      description: data.seoDescription?.[locale],
      images: data.seoImageUrl ? [data.seoImageUrl] : [],
    },
  };
}

export default async function ContactUsPage({ params }: PageProps) {
  const { locale } = params;
  const data = await getContactUsData(locale);

  return (
    <div className="flex justify-center w-full  px-3 lg:px-16  2xl:px-24 ">
      <ContactUsClient data={data} locale={locale} />;
    </div>
  );
}
