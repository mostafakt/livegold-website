/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css/free-mode";

//@ts-ignore
import "./globals.css";
import type { ReactNode } from "react";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMessages, setRequestLocale } from "next-intl/server";
import { cairo } from "@/styles/fonts";
import { notFound } from "next/navigation";
import LocalizationWrapper from "@/components/LocalizationWrapper";
import { ManageLocale } from "@/utils/helpers";
import { fetchMetalPriceServer } from "@/services/metal-price";
export const metadata = {
  title: "Live gold",
  description: "best gold e-commerce",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locale) return notFound();

  setRequestLocale(locale);
  ManageLocale.setLocal(locale as "en" | "ar");

  const messages = await getMessages();
  const headerData = await fetchMetalPriceServer();
  return (
    <html
      dir={locale == "ar" ? "rtl" : "ltr"}
      className={`h-full ${cairo.className}  `}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-base-300 text-base-content transition-colors duration-300  ">
        <div id="ss">
          <Providers>
            {/* <NextIntlClientProvider key={locale} messages={messages}> */}
            <LocalizationWrapper
              key={locale}
              messages={messages}
              locale={locale}
            >
              <Header data={headerData ?? undefined} />
              <main className="flex-1  bg-primary-bg  ">{children}</main>
              <Footer locale={locale} />
            </LocalizationWrapper>
            {/* </NextIntlClientProvider> */}
          </Providers>
        </div>
      </body>
    </html>
  );
}
