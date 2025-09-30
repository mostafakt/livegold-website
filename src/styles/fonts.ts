import { Noto_Sans_Arabic, Almarai, Tajawal, Exo } from "next/font/google";
import localFont from "next/font/local";
export const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"], // available weights
  variable: "--font-tajawal",
  display: "swap",
});

export const expoArabic = Exo({
  subsets: ["latin"], // example; replace if you use a real Arabic font
  variable: "--font-expo-arabic",
  weight: ["400", "700"],
  display: "swap",
});
// export const cairo = Cairo({
//   subsets: ["arabic", "latin"],
//   variable: "--font-cairo",
//   weight: ["300", "400", "500", "600", "700"],
//   display: "swap",
// });

export const cairo = localFont({
  src: [
    {
      path: "../../public/fonts/cairo/Cairo-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/cairo/Cairo-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/cairo/Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cairo/Cairo-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/cairo/Cairo-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/cairo/Cairo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/cairo/Cairo-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/cairo/Cairo-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-cairo",
});

export const almarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  weight: ["300", "400", "700"],
  display: "swap",
});
