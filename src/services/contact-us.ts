/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { apiFetch } from "@/lib/api-client";
import { IContactUs } from "@/types/contact-us";

export const getContactUsData = async (
  locale: string = "ar"
): Promise<IContactUs> => {
  return {
    id: "contact-us-1",
    title: {
      en: "Contact Us",
      ar: "اتصل بنا",
    },
    content: {
      en: "We recognize the importance of staying updated with rapid changes in financial markets, and therefore we work hard to provide instant updates and comprehensive analysis that helps you make informed investment decisions.",
      ar: "نحن ندرك أهمية البقاء على اطلاع دائم بالتغيرات السريعة في الأسواق المالية، ولذلك نعمل جاهدين على توفير تحديثات فورية وتحليلات شاملة تساعدك في اتخاذ قرارات استثمارية مستنيرة.",
    },
    phone: "+966544766650",
    whatsapp: "+966546298555",
    email: "info@livegold.com",
    seoDescription: {
      en: "Contact Live Gold for gold price updates and investment assistance",
      ar: "اتصل بـ لايف جولد للحصول على تحديثات أسعار الذهب والمساعدة في الاستثمار",
    },
    seoKeywords: {
      en: ["contact", "support", "gold prices", "Live Gold"],
      ar: ["اتصال", "دعم", "أسعار الذهب", "لايف جولد"],
    },
  };
};
export async function sendMessage(body: {
  email: string;
  message: string;
}): Promise<any> {
  let res;
  try {
    res = await apiFetch(`public/v1/support/send`, "", {
      body: JSON.stringify(body),
      method: "POST",
      auth: false,
    });
  } catch {}
  return res;
}
export async function SubscribeToNewsLetter(body: {
  email: string;
}): Promise<any> {
  let res;
  try {
    res = await apiFetch(`/v1/news-letters`, "", {
      body: JSON.stringify(body),
      method: "POST",
      auth: false,
    });
  } catch {}
  return res;
}
