"use client";
import React from "react";

import clsx from "clsx";
import Image from "@/components/ui/Image";
import { Input } from "./ui";
import { useTranslations } from "next-intl";
import { pages } from "./Header";

export type FooterProps = {
  logo?: React.ReactNode;
  locale?: string;
  className?: string;
};

export default function Footer({ logo, className, locale }: FooterProps) {
  const t = useTranslations("");

  return (
    <footer
      className={clsx(
        "w-full bg-slate-800 text-white flex items-center justify-center  px-3 lg:px-16  2xl:px-24 pt-4 lg:pt-12",
        className
      )}
    >
      <div className="max-w-360 w-full">
        <div className="flex flex-col lg:flex-row gap-28 justify-between items-start ">
          <div className="flex flex-col max-w-lg  w-full items-start">
            <div className="flex flex-col w-full items-start lg:items-start gap-4 text-start text-zinc-300 text-sm lg:text-md  leading-relaxed">
              <Image
                src="/images/footer/footer-logo.png"
                alt="alt"
                width={147}
                height={63}
              />
              {t("footer.description")}
            </div>
            <div className="text-start flex flex-col items-start mt-14">
              {logo && <div className="mb-4">{logo}</div>}
              <div className="text-sm lg:text-lg font-medium mb-4">
                {t("footer.subscribeText")}
              </div>
              <Input
                placeholder="footer.email"
                isFull
                component={
                  <button className="bg-primary rtl:rounded-l-lg max-h-full h-full text-nowrap  ltr:rounded-r-lg px-4 py-2 text-white text-sm font-bold">
                    {t("footer.subscribeNow")}
                  </button>
                }
                className="bg-white/40 rounded-xl inline-flex items-center gap-3 pr-3 max-w-lg w-full justify-between"
              ></Input>
            </div>
          </div>
          <div className=" flex flex-col items-start w-full lg:flex-row gap-6 ">
            <div className="  w-full">
              <h3 className="text-xl font-bold mb-4">
                {t("footer.contact-info")}
              </h3>

              {/* Headquarters */}
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h4 className="  text-white  mb-1">
                    {t("footer.headquarters")}
                  </h4>
                  <p className="text-white ">{t("footer.location")}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h4 className=" text-white  mb-1">{t("footer.phone")}</h4>
                  <div className="space-y-1">
                    <a
                      href={`tel:+966544766650`}
                      className="block text-white  hover:text-primary-500 transition-colors"
                    >
                      966544766650+
                    </a>
                    <a
                      href={`tel:+966546298555`}
                      className="block text-white  hover:text-primary-500 transition-colors"
                    >
                      966546298555+
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <div>
                  <h4 className=" text-white  mb-1">{t("footer.support")}</h4>
                  <div className="space-y-1">
                    <a
                      href={`mailto:info@livegold.com`}
                      className="block text-white  hover:text-primary-500 transition-colors"
                    >
                      info@livegold.com
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Column 2 — Pages */}
            <div className="text-start w-full">
              <h3 className="text-xl font-bold mb-4">{t("footer.pages")}</h3>
              <ul className="space-y-3">
                {pages.map((page) => (
                  <li key={page.name}>
                    <a href="/" className="hover:text-white">
                      {t(page.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>{" "}
            {/* Column 1 — Important Links */}
            <div className="text-start  w-full ">
              <h3 className="text-xl font-bold mb-4">
                {t("footer.importantLinks")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/faq" className="hover:text-white">
                    {t("footer.faq")}
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white">
                    {t("footer.privacy")}
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white">
                    {t("footer.terms")}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    {t("footer.contact")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-start w-full">
              <h3 className="text-xl font-bold mb-4">
                {t("footer.work-hours")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="hover:text-white">
                    {t("footer.work-hours-val")}
                  </a>
                </li>
              </ul>
              <div className="mt-5 w-full flex justify-start   ">
                <div className="p-2 bg-white rounded-lg">
                  <Image
                    src={
                      locale == "en"
                        ? "/images/tech-sa-en.jpg"
                        : "/images/tech-sa-ar.jpg"
                    }
                    alt="tech-sa"
                    width={70}
                    height={110}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 w-full border-t border-white/20" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-4 py-5">
          <div className="text-sm text-white/70">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
          <div className="border-t border-white/20" />
          <div>
            <div className=" bg-white rounded-lg overflow-hidden">
              <Image
                src={"/images/footer-logo.png"}
                alt="tech-sa"
                width={240}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
