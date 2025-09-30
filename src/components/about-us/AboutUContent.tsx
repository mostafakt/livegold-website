import { IAboutUs } from "@/types/about-us";
import Image from "@/components/ui/Image";
import { getTranslations } from "next-intl/server";
import Breadcrumb from "../ui/BreadCamp";
import { getDefaultContent } from "@/services/about-us";

interface AboutUsContentProps {
  data?: IAboutUs;
  locale: string;
}

export default async function AboutUsContent({
  data,
  locale,
}: AboutUsContentProps) {
  const t = await getTranslations("AboutUs");

  const title = data?.title?.[locale as keyof typeof data.title] || t("title");
  const content =
    data?.content?.[locale as keyof typeof data.content] ||
    getDefaultContent(locale);

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: title, href: "/about-us" },
  ];

  const stats = [
    { number: "99.9%", label: t("stats.accuracy") },
    { number: "24/7", label: t("stats.availability") },
    { number: "50K+", label: t("stats.users") },
    { number: "5s", label: t("stats.updateSpeed") },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-neutral-200 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-secondary-dark">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-tajawal leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                {t("hero.subtitle")}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center w-full">
                        <Image
                          src="/images/homepage/download-app/mobile1.png"
                          alt="alt"
                          height={110}
                          width={90}
                          className="ltr:transform ltr:-scale-x-100"
                        />
                      </div>
                      <div className="text-xl font-bold">
                        {t("hero.appPreview")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
                {t("content.title")}
              </h2>
              <div
                className="text-neutral-700 leading-relaxed space-y-6 text-lg"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            {/* Image/Video Section */}
            <div className="relative">
              {data?.videoUrl ? (
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <video
                    controls
                    className="w-full h-auto"
                    poster={data.imageUrl}
                  >
                    <source src={data.videoUrl} type="video/mp4" />
                    {t("videoNotSupported")}
                  </video>
                </div>
              ) : data?.imageUrl ? (
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={data.imageUrl}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="bg-card-bg-gradient rounded-3xl p-12 text-center shadow-2xl">
                  <div className=" w-full flex items-center justify-center ">
                    <Image
                      src="/images/homepage/banner3.png"
                      alt="banner-live-gold"
                      width={320}
                      height={280}
                      // flip horizontal
                      className="ltr:transform ltr:-scale-x-100"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {t("content.placeholder.title")}
                  </h3>
                  <p className="text-neutral-700">
                    {t("content.placeholder.description")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 shadow-lg">
                {t("cta.getStarted")}
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200">
                {t("cta.learnMore")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
