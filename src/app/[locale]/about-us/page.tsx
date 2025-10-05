// src/app/[locale]/about-us/page.tsx
import AboutUsClient from "@/components/about-us/AboutUContent";
import { Metadata } from "next";

// Static data using your provided content
const aboutUsData = {
  id: "1",
  title: {
    ar: "من نحن",
    en: "About Us",
  },
  content: {
    ar: `
      <p>نحن منصة رائدة في تقديم أحدث المعلومات حول أسعار الذهب، ملتزمون بتزويد عملائنا بأدوات وخيارات متقدمة لمتابعة الأسواق المحلية والعالمية. نسعى دائمًا لتقديم معلومات دقيقة ومحدثة لدعم قراراتك الاستثمارية.</p>
      <p>موقع لايف جولد المنصة السعودية الرائدة لمتابعة أحدث أسعار الذهب المحدثة لحظيًا محليًا وعالميًا</p>
      <p>يعتبر لايڤ جولد الأداة الأمثل لتقديم معلومات دقيقة ومباشرة حول سعر الذهب بالريال السعودي، لتسهيل متابعة السوق المحلي على التجار والمستثمرين في السعودية وسعر الذهب بالدولار لمتابعة السوق العالمي أيضًا. عبر لايڤ جولد، نضمن لك متابعة لحظية لأسعار الذهب مدعومة بتقنيات عالية لمواكبة تقلبات السوق صعودا وهبوطا. كما نتيح لك إمكانية الاطلاع على أسعار الذهب مباشرة من خلال تطبيق لايڤ جولد المعتمد، لنكون خيارك الأمثل للوصول إلى المعلومات بشكل دقيق وفوري.</p>
      <p>التطبيق الأول في السعودية لمتابعة أسعار الذهب على مدار الساعة، نقدم لك تحديثات دقيقة وفورية لأسعار الذهب في السوق المحلّي والعالمي، مما يساعد أصحاب المتاجر والمستثمرين على اتخاذ قرارات دقيقة وصائبة في وقت قياسي.</p>
    `,
    en: `
      <p>We are a leading platform in providing the latest information on gold prices, committed to providing our customers with advanced tools and options to follow local and global markets. We always strive to provide accurate and updated information to support your investment decisions.</p>
      <p>Live Gold is the leading Saudi platform for following the latest updated gold prices locally and globally in real-time.</p>
      <p>Live Gold is the ideal tool for providing accurate and direct information about the gold price in Saudi Riyal, to facilitate following the local market for traders and investors in Saudi Arabia, and the gold price in dollars to follow the global market as well. Through Live Gold, we guarantee you real-time tracking of gold prices supported by high technologies to keep up with market fluctuations, both up and down. We also enable you to view gold prices directly through the official Live Gold application, to be your ideal choice for accessing information accurately and instantly.</p>
      <p>The first application in Saudi Arabia to track gold prices around the clock, we provide you with accurate and instant updates on gold prices in the local and global market, helping shop owners and investors make accurate and sound decisions in record time.</p>
    `,
  },
  stats: [
    {
      number: "1,000,000",
      prefix: "+",
      label: {
        ar: "عملية تحديث يومية للأسعار",
        en: "Daily price updates",
      },
    },
    {
      number: "50,000",
      prefix: "+",
      label: {
        ar: "منتج يتم تحديثه",
        en: "Products updated",
      },
    },
    {
      number: "300",
      prefix: "+",
      label: {
        ar: "متجر ذهب",
        en: "Gold shops",
      },
    },
  ],
  seoDescription: {
    ar: "منصة لايف جولد الرائدة لمتابعة أسعار الذهب محلياً وعالمياً",
    en: "Live Gold leading platform for tracking gold prices locally and globally",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: aboutUsData.title[locale as keyof typeof aboutUsData.title],
    description:
      aboutUsData.seoDescription[
        locale as keyof typeof aboutUsData.seoDescription
      ],
  };
}

export default function AboutUsPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return <AboutUsClient data={aboutUsData} locale={locale} />;
}
