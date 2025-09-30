"use client";

import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function LocalizedNotFound() {
  const t = useTranslations();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => el.classList.add("opacity-100"));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>{t("404.title")} | 404</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-dark to-neutral-900 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-md w-full space-y-6 md:space-y-8 text-center relative z-10">
          <div className="relative">
            <div className="text-7xl sm:text-8xl md:text-10xl lg:text-[12rem] font-bold leading-none flex justify-center">
              <span className="text-primary opacity-0 fade-in transition-opacity duration-1000 inline-block transform hover:scale-110 transition-transform">
                4
              </span>
              <span className="text-primary-200 opacity-0 fade-in transition-opacity duration-1000 delay-300 inline-block transform hover:scale-110 transition-transform mx-1 sm:mx-2">
                0
              </span>
              <span className="text-primary-300 opacity-0 fade-in transition-opacity duration-1000 delay-600 inline-block transform hover:scale-110 transition-transform">
                4
              </span>
            </div>

            <div className="absolute top-0 left-0 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-primary-200 opacity-20 blur-xl"></div>
            <div className="absolute bottom-0 right-0 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-primary-300 opacity-30 blur-xl"></div>
          </div>

          <div className="opacity-0 fade-in transition-opacity duration-700 delay-900 opacity-100 px-2">
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {t("404.title")}
            </h2>
            <p className="mt-3 sm:mt-4 text-neutral-300 text-base sm:text-lg md:text-xl max-w-xs mx-auto">
              {t("404.subtitle")}
            </p>

            <div className="mt-6 md:mt-8 inline-block">
              <div
                className={clsx(
                  "flex justify-center items-center gap-2.5 bg-gradient-to-bl px-4 py-2 sm:px-6 sm:py-3 from-primary via-primary-200 to-primary-300 rounded-xl font-medium text-lg sm:text-xl leading-5 text-center text-white"
                )}
              >
                {t("404.badge")}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12">
              <Link
                href="/"
                className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-base sm:text-lg font-medium rounded-md text-secondary-dark bg-white hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t("404.return")}
              </Link>
            </div>

            <p className="mt-6 sm:mt-8 text-neutral-400 text-sm sm:text-base">
              {t("404.need-help")}{" "}
              <a
                href="#"
                className="font-medium text-primary-200 hover:text-primary underline"
              >
                {t("404.contact")}
              </a>
            </p>
          </div>

          <div className="absolute -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary opacity-10 blur-2xl animate-pulse z-0"></div>
          <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-primary-300 opacity-10 blur-2xl animate-pulse delay-1000 z-0"></div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .text-10xl {
            font-size: 8rem;
          }
        }
        @media (max-width: 480px) {
          .text-10xl {
            font-size: 6rem;
          }
        }
        @media (max-width: 360px) {
          .text-10xl {
            font-size: 5rem;
          }
        }
      `}</style>
    </>
  );
}
