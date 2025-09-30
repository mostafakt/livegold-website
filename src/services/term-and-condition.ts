import { ITermAndCondition } from "@/types/term-and-condition";

const staticTermAndConditionData: ITermAndCondition = {
  id: "1",
  title: {
    ar: "شروط وأحكام استخدام لايف جولد",
    en: "Live Gold Terms and Conditions",
  },
  content: {
    ar: `<h2>1. قبول الشروط والأحكام</h2>
    <p>عند إنشاء حساب في "لايف جولد" أو استخدام خدماتنا، فإنك تقر وتوافق بشكل خطي على جميع الشروط والأحكام المنصوص عليها في هذه الوثيقة. إذا كنت لا توافق على أي من هذه الشروط يرجى الامتناع عن استخدام خدماتنا.</p>
    
    <h2>2. إخلاء المسؤولية عن دقة الأسعار</h2>
    <p>نحن في "لايف جولد" نبذل قصارى جهدنا لضمان تحديث الأسعار المعروضة على موقعك الإلكتروني بناءً على بيانات السوق المالية للذهب والفضة. ومع ذلك، فإننا لا نتحمل أي مسؤولية عن أي أخطاء أو تأخيرات في تحديث هذه الأسعار.</p>
    
    <h2>3. إخلاء المسؤولية عن أعطال الطرف الثالث</h2>
    <p>تعتمد "لايف جولد" على منصات تابعة لأطراف ثالثة لتحديث الأسعار بشكل لحظي. نحن لا نتحمل أي مسؤولية عن أي أعطال أو مشاكل تقنية قد تنشأ من هذه الأطراف الثالثة.</p>`,

    en: `<h2>1. Acceptance of Terms</h2>
    <p>When creating an account in "Live Gold" or using our services, you acknowledge and agree in writing to all the terms and conditions set forth in this document. If you do not agree to any of these terms, please refrain from using our services.</p>
    
    <h2>2. Price Accuracy Disclaimer</h2>
    <p>At "Live Gold", we make every effort to ensure that the prices displayed on your website are updated based on gold and silver market data. However, we are not responsible for any errors or delays in updating these prices.</p>
    
    <h2>3. Third-Party Malfunction Disclaimer</h2>
    <p>"Live Gold" relies on third-party platforms for real-time price updates. We are not responsible for any malfunctions or technical problems that may arise from these third parties.</p>`,
  },
  seoDescription: {
    ar: "شروط وأحكام استخدام منصة لايف جولد للذهب والفضة",
    en: "Terms and conditions for using Live Gold platform for gold and silver",
  },
  seoKeywords: {
    ar: ["شروط الاستخدام", "لايف جولد", "ذهب", "فضة", "منصة"],
    en: ["terms of use", "live gold", "gold", "silver", "platform"],
  },
};

export async function getTermAndConditionData(): Promise<ITermAndCondition> {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/term-and-condition');
  // return response.json();

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return staticTermAndConditionData;
}
