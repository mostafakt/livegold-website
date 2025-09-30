import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { ITermAndCondition } from "@/types/term-and-condition";
import Image from "@/components/ui/Image";
import Breadcrumb from "../ui/BreadCamp";
import { Skeleton } from "../ui/Skeleton";

interface TermAndConditionClientProps {
  data?: ITermAndCondition;
  locale: string;
}

export default function TermAndConditionClient({
  data,
  locale,
}: TermAndConditionClientProps) {
  const t = useTranslations("TermAndCondition");

  const title = data?.title?.[locale as keyof typeof data.title] || t("title");
  const content =
    data?.content?.[locale as keyof typeof data.content] || t("content");

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: title, href: "/term-and-condition" },
  ];

  return (
    <Suspense fallback={<TermAndConditionSkeleton />}>
      <div className="min-h-screen ">
        {/* Header Section */}
        <section className="text-white/90 py-12">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />
            <div className="text-center mt-6">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4  ">
                {title}
              </h1>
              <p className="text-neutral-850 text-lg max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Hero Image */}
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

              {/* Video Section */}
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

              {/* Content */}
              <div className="bg-white  text-black rounded-2xl shadow-drop p-8 md:p-12">
                <div
                  className="prose prose-lg max-w-none 
                  prose-headings:text-neutral-900 
                  prose-headings:font-bold 
                  prose-p:text-neutral-700 
                  prose-p:leading-relaxed
                  prose-ul:text-neutral-700
                  prose-ol:text-neutral-700
                  prose-li:my-2
                  prose-strong:text-primary-600
                  prose-a:text-primary-500
                  prose-a:no-underline
                  hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* Last Updated */}
                <div className="mt-12 pt-8 border-t border-neutral-200">
                  <p className="text-neutral-600 text-sm">
                    {t("lastUpdated")}:{" "}
                    {new Date().toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* CTA Section */}
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
    </Suspense>
  );
}

// Skeleton loader component
function TermAndConditionSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <section className="bg-primary-gradient py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-4 w-48 mb-4" />
          <div className="text-center mt-6">
            <Skeleton className="h-12 w-96 max-w-full mx-auto mb-4" />
            <Skeleton className="h-6 w-64 max-w-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="w-full h-80 rounded-2xl mb-8" />

            <div className="bg-white rounded-2xl shadow-drop p-8 md:p-12">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="mb-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
