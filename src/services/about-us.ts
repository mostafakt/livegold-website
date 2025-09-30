import { IAboutUs } from "@/types/about-us";

const staticAboutUsData: IAboutUs = {
  id: "1",
  title: {
    ar: "منصة لايف جولد",
    en: "Live Gold Platform",
  },
  content: {
    ar: `
      <p><strong>لايف جولد</strong> هي المنصة السعودية الرائدة لمتابعة أحدث أسعار الذهب المحدثة لحظيًا محليًا وعالميًا. نعتبر الأداة الأمثل لتقديم معلومات دقيقة ومباشرة حول سعر الذهب بالريال السعودي، لتسهيل متابعة السوق المحلي على التجار والمستثمرين في السعودية وسعر الذهب بالدولار لمتابعة السوق العالمي أيضًا.</p>
      
      <p>عبر لايف جولد، نضمن لك متابعة لحظية لأسعار الذهب مدعومة بتقنيات عالية لمواكبة تقلبات السوق صعودًا وهبوطًا. كما نتيح لك إمكانية الاطلاع على أسعار الذهب مباشرة من خلال تطبيق لايف جولد المعتمد، لنكون خيارك الأمثل للوصول إلى المعلومات بشكل دقيق وفوري.</p>
      
      <p>نحن ملتزمون بتزويد عملائنا بأدوات وخيارات متقدمة لمتابعة الأسواق المحلية والعالمية. نسعى دائمًا لتقديم معلومات دقيقة ومحدثة لدعم قراراتك الاستثمارية.</p>
    `,
    en: `
      <p><strong>Live Gold</strong> is the leading Saudi platform for tracking the latest gold prices updated instantly locally and globally. We are the ideal tool for providing accurate and direct information about the gold price in Saudi Riyal, facilitating local market monitoring for traders and investors in Saudi Arabia, and the gold price in dollars for global market tracking as well.</p>
      
      <p>Through Live Gold, we guarantee real-time tracking of gold prices supported by advanced technologies to keep up with market fluctuations, both upward and downward. We also enable you to view gold prices directly through the official Live Gold application, making us your ideal choice for accessing information accurately and instantly.</p>
      
      <p>We are committed to providing our customers with advanced tools and options for monitoring local and global markets. We always strive to provide accurate and updated information to support your investment decisions.</p>
    `,
  },
  seoDescription: {
    ar: "منصة لايف جولد - المنصة السعودية الرائدة لمتابعة أسعار الذهب لحظيًا محليًا وعالميًا",
    en: "Live Gold Platform - The leading Saudi platform for real-time gold price tracking locally and globally",
  },
  seoKeywords: {
    ar: ["أسعار الذهب", "لايف جولد", "منصة سعودية", "ذهب", "استثمار"],
    en: ["gold prices", "live gold", "saudi platform", "gold", "investment"],
  },
};

export function getDefaultContent(locale: string): string {
  if (locale === "ar") {
    return `
      <p><strong>لايف جولد</strong> هي المنصة السعودية الرائدة لمتابعة أحدث أسعار الذهب المحدثة لحظيًا محليًا وعالميًا. نعتبر الأداة الأمثل لتقديم معلومات دقيقة ومباشرة حول سعر الذهب بالريال السعودي، لتسهيل متابعة السوق المحلي على التجار والمستثمرين في السعودية وسعر الذهب بالدولار لمتابعة السوق العالمي أيضًا.</p>
      
      <p>عبر لايف جولد، نضمن لك متابعة لحظية لأسعار الذهب مدعومة بتقنيات عالية لمواكبة تقلبات السوق صعودًا وهبوطًا. كما نتيح لك إمكانية الاطلاع على أسعار الذهب مباشرة من خلال تطبيق لايف جولد المعتمد، لنكون خيارك الأمثل للوصول إلى المعلومات بشكل دقيق وفوري.</p>
      
      <p>نحن ملتزمون بتزويد عملائنا بأدوات وخيارات متقدمة لمتابعة الأسواق المحلية والعالمية. نسعى دائمًا لتقديم معلومات دقيقة ومحدثة لدعم قراراتك الاستثمارية.</p>
    `;
  }

  return `
    <p><strong>Live Gold</strong> is the leading Saudi platform for tracking the latest gold prices updated instantly locally and globally. We are the ideal tool for providing accurate and direct information about the gold price in Saudi Riyal, facilitating local market monitoring for traders and investors in Saudi Arabia, and the gold price in dollars for global market tracking as well.</p>
    
    <p>Through Live Gold, we guarantee real-time tracking of gold prices supported by advanced technologies to keep up with market fluctuations, both upward and downward. We also enable you to view gold prices directly through the official Live Gold application, making us your ideal choice for accessing information accurately and instantly.</p>
    
    <p>We are committed to providing our customers with advanced tools and options for monitoring local and global markets. We always strive to provide accurate and updated information to support your investment decisions.</p>
  `;
}

export async function getAboutUsData(): Promise<IAboutUs> {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/about-us');
  // return response.json();

  return staticAboutUsData;
}
