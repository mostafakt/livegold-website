import { IPrivacyPolicy } from '@/types/privacy-policy';

export const getPrivacyPolicyData = async (): Promise<IPrivacyPolicy> => {
  // This will be replaced with actual API call later
  return {
    id: 'privacy-policy-1',
    title: {
      en: 'Privacy Policy',
      ar: 'سياسة الخصوصية في لايف جولد'
    },
    content: {
      en: `
        <h2>1. Data Collection</h2>
        <p>At "Live Gold", we collect some personal information necessary to activate performance and provide the service, including but not limited to, electronic contact data and account contact data. This information is used exclusively for service delivery purposes and is not shared with any third party except within the framework agreed upon in the provisions of this policy. "Live Gold" is committed to protecting this data in accordance with relevant laws in the Kingdom of Saudi Arabia including the "Personal Data Protection System".</p>

        <h2>2. Data Sharing with Third Parties</h2>
        <p>"Live Gold" may share some data with third parties such as gold price service providers and electronic platforms that the "Live Gold" tool relies on. We ensure that these parties comply with data protection policies, but we are not responsible for any damage arising from these parties. Data is shared in accordance with data protection laws applicable in the Kingdom of Saudi Arabia.</p>

        <h2>3. Data Protection</h2>
        <p>At "Live Gold", we are committed to taking all necessary security measures to protect your personal data from unauthorized access or misuse. However, we do not guarantee complete data security and are not responsible for any security breach that occurs due to cyber attacks or technical failures. We comply with all security and privacy regulations applicable in the Kingdom of Saudi Arabia.</p>

        <h2>4. Changes to Privacy Policy</h2>
        <p>"Live Gold" reserves the right to modify this privacy policy at any time. Users will be notified of any substantial changes by posting an update on the platform. By using the electronic tool, you agree to this policy under the system in force in the Kingdom of Saudi Arabia.</p>

        <hr>

        <h1>General Terms</h1>

        <h2>1. Applicable Law</h2>
        <p>These terms of use and privacy policy are subject to and interpreted in accordance with the regulations and laws in force in the Kingdom of Saudi Arabia.</p>

        <h2>2. Dispute Resolution Procedures</h2>
        <p>In the event of any dispute relating to the terms of use or privacy policy of "Live Gold", the dispute shall be resolved through arbitration in accordance with the rules of the "Saudi Center for Commercial Arbitration" in the Kingdom of Saudi Arabia. Arbitration decisions are final and binding on all parties.</p>
      `,
      ar: `
        <h2>1. جمع البيانات</h2>
        <p>نقر في "لايف جولد" بجمع بعض المعلومات الشخصية الضرورية لتفعيل الأداء وتقديم الخدمة، بما في ذلك، على سبيل المثال لا الحصر، بيانات الاتصال الإلكتروني وبيانات حسابات الاتصال. يتم استخدام هذه المعلومات حصرياً لأغراض تقديم الخدمة، ولا يتم مشاركتها مع أي طرف ثالث إلا في إطار آخر يتفق مع أحكام هذه السياسة. تلتزم "لايف جولد" بحماية هذه البيانات بما يتماشى مع القوانين ذات الصلة في المملكة العربية السعودية بما في ذلك "نظام حماية البيانات الشخصية".</p>

        <h2>2. مشاركة البيانات مع أطراف ثالثة</h2>
        <p>قد تقوم في "لايف جولد" بمشاركة بعض البيانات مع الأطراف الثالثة مثل مزودي خدمات أسعار الذهب والمنصات الإلكترونية التي تعتمد عليها أداة "لايف جولد". نحن نحرص على أن تلتزم هذه الأطراف بإصدار سياسات حماية البيانات، إلا أننا لا نتحمل أي مسؤولية عن أي ضرر ينشأ عن هذه الأطراف. يتم مشاركة البيانات بما يتفق مع قوانين حماية البيانات المعمول بها في المملكة العربية السعودية.</p>

        <h2>3. حماية البيانات</h2>
        <p>تلتزم في "لايف جولد" باتخاذ جميع الإجراءات الأمنية اللازمة لحماية بياناتك الشخصية من الوصول غير المصرح به أو الاستخدام غير المشروع. ومع ذلك، فإننا لا نضمن أمان البيانات بشكل كامل ولا نتحمل أي مسؤولية عن أي خرق أمني يحدث بسبب هجمات سيبرانية أو أعطال تقنية. نحن نلتزم بجميع اللوائح الأمنية والخصوصية المعمول بها في المملكة العربية السعودية.</p>

        <h2>4. التغييرات على سياسة الخصوصية</h2>
        <p>نحتفظ في "لايف جولد" بالحق في تعديل سياسة الخصوصية هذه في أي وقت. سيتم إشعار المستخدمين بأي تغييرات جوهرية من خلال نشر تحديث على المنصة. عن طريق استخدامك للأداة الإلكتروني، توافق بموجب هذا السياسة بالنظام المعمول به في المملكة العربية السعودية.</p>

        <hr>

        <h1>البنود العامة</h1>

        <h2>1. القانون الواجب التطبيق</h2>
        <p>تخضع شروط الاستخدام وسياسة الخصوصية هذه وتفسر وفقًا للأنظمة والقوانين السارية في المملكة العربية السعودية.</p>

        <h2>2. إجراءات حل النزاعات</h2>
        <p>في حالة نشوء أي نزاع يتعلق بشروط الاستخدام أو سياسة الخصوصية الخاصة بـ "لايف جولد"، يتم حل النزاع من خلال التحكيم وفقًا لقواعد "الهيئة السعودية للتحكيم التجاري" في المملكة العربية السعودية. تكون قرارات التحكيم نهائية وملزمة لجميع الأطراف.</p>
      `
    },
    seoDescription: {
      en: 'Privacy Policy for Live Gold - Learn how we protect and handle your personal data',
      ar: 'سياسة الخصوصية في لايف جولد - تعرف على كيفية حماية ومعالجة بياناتك الشخصية'
    },
    seoKeywords: {
      en: ['privacy', 'policy', 'data protection', 'Live Gold'],
      ar: ['خصوصية', 'سياسة', 'حماية البيانات', 'لايف جولد']
    }
  };
};