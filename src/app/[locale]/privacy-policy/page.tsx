import { Metadata } from "next";
import { getPrivacyPolicyData } from "@/services/privacy-policy";
import PrivacyPolicyClient from "@/components/privacy-policy/PrivacyPolicyClient";

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: lang } = params;
  const data = await getPrivacyPolicyData();

  const locale = lang == "ar" ? "ar" : "en";
  return {
    title: data.title?.[locale] || "Privacy Policy",
    description: data.seoDescription?.[locale],
    keywords: data.seoKeywords?.[locale],
    openGraph: {
      title: data.title?.[locale] || "Privacy Policy",
      description: data.seoDescription?.[locale],
      images: data.seoImageUrl ? [data.seoImageUrl] : [],
    },
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = params;
  const data = await getPrivacyPolicyData();

  return <PrivacyPolicyClient data={data} locale={locale as "en" | "ar"} />;
}
