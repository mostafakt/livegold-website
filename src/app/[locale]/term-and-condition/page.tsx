import TermAndConditionClient from "@/components/term-and-condition/TermAndCondition";
import { getTermAndConditionData } from "@/services/term-and-condition";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// Generate metadata
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "TermAndCondition" });
  const data = await getTermAndConditionData();

  return {
    title: data?.title?.[locale as keyof typeof data.title] || t("meta.title"),
    description:
      data?.seoDescription?.[locale as keyof typeof data.seoDescription] ||
      t("meta.description"),
    keywords:
      data?.seoKeywords?.[locale as keyof typeof data.seoKeywords]?.join(", "),
    openGraph: {
      title:
        data?.title?.[locale as keyof typeof data.title] || t("meta.title"),
      description:
        data?.seoDescription?.[locale as keyof typeof data.seoDescription] ||
        t("meta.description"),
      images: data?.seoImageUrl ? [data.seoImageUrl] : [],
    },
  };
}

export default async function TermAndConditionPage({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}) {
  const data = await getTermAndConditionData();

  return <TermAndConditionClient data={data} locale={locale} />;
}
