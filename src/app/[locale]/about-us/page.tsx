// src/app/[locale]/about-us/page.tsx
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutUsContent from "@/components/about-us/AboutUContent";
import { getAboutUsData } from "@/services/about-us";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AboutUs" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
    },
  };
}

export default async function AboutUsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = await getAboutUsData();

  return <AboutUsContent data={data} locale={locale} />;
}
