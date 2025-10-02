/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Input } from "./ui";
import Image from "@/components/ui/Image";
import { useTranslations } from "next-intl";
import HeaderSlide from "./ui/HeaderSlide";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { MdOutlineSearch } from "react-icons/md";
import LocaleButton from "./ui/LocaleButton";
// Icons for the mobile drawer
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f0a647"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const pages = [
  { name: "main", href: "/" },
  { name: "blog", href: "/blogs" },
  { name: "about-us", href: "/about-us" },
  { name: "term-and-condition", href: "/term-and-condition" },
  { name: "contact-us", href: "/contact-us" },
  // { name: "faq", href: "/faq" },
  { name: "privacy-policy", href: "/privacy-policy" },
];
export default function Header() {
  const t = useTranslations("");
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-bg-gradient text-base-content">
        {/* Top Section */}

        <div className="flex flex-col w-full gap-3 px-3 xl:px-16  mt-2 ">
          {/* Header Slides Section */}
          <div className="w-full ">
            <Swiper
              modules={[FreeMode]}
              spaceBetween={16}
              slidesPerView="auto"
              freeMode={true}
              grabCursor={true}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <SwiperSlide key={i} className=" w-56 max-w-fit ">
                  {i % 2 === 0 ? (
                    <HeaderSlide
                      imageSrc="/images/header/selver.png"
                      label="فضة"
                      price={"215"}
                      isUp
                    />
                  ) : (
                    <HeaderSlide
                      imageSrc="/images/header/gold.png"
                      label="ذهب"
                      price={"215"}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Navigation */}
          <nav className="w-full  h-14 flex items-start justify-between  ">
            <div className=" flex items-center gap-4 ">
              <Link href="/" className=" pb-3" aria-label="Go to homepage">
                <Image
                  src="/images/Livegold logo-09.svg"
                  alt="Livegold Logo"
                  width={147}
                  height={38}
                  priority
                  className=" !h-12 "
                />
              </Link>
              {/* Desktop Navigation */}
              <div className="hidden xl:flex h-full gap-2">
                {pages.map((page) => {
                  const isActive =
                    page.href === "/"
                      ? pathname === `/ar` || pathname === `/en`
                      : pathname.startsWith(`/ar${page.href}`) ||
                        pathname.startsWith(`/en${page.href}`);
                  return (
                    <Link
                      href={page.href}
                      key={page.name}
                      className={`h-14 flex justify-center items-center gap-2.5 ${isActive ? " bg-primary-bg " : "bg-none"} p-2.5 transition-colors duration-200`}
                    >
                      <span
                        className={`${isActive ? " text-primary font-bold" : " text-neutral-700 font-normal hover:text-neutral-800  "} text-5 text-nowrap`}
                      >
                        {t(page.name)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="xl:hidden   w-fit">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-white p-2"
                aria-label="Open navigation menu"
              >
                <MenuIcon className="h-7 w-7" />
              </button>
            </div>
            <div className="hidden xl:flex">
              <HeaderActions primary />
            </div>
          </nav>
          <div className="hidden gap-3 w-full sm:w-auto items-center flex-wrap justify-center md:flex-nowrap">
            <Input placeholder="search" className="w-full sm:w-auto" />
            <Button
              size="lg"
              variant="outline"
              className="flex-grow sm:flex-grow-0"
            >
              {"signup"}
            </Button>
            <Button size="lg" className="flex-grow sm:flex-grow-0">
              {"login"}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {/* Overlay */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity xl:hidden ${
          isDrawerOpen
            ? " opacity-100 block "
            : " opacity-0 pointer-events-none hidden "
        }`}
      />
      {/* Drawer Panel */}
      <div
        className={`fixed top-0 rtl:right-0 ltr:left-0 h-full w-64 bg-primary-300 z-50 transform transition-transform duration-300 ease-in-out xl:hidden ${
          isDrawerOpen ? "translate-x-0 block " : "translate-x-full hidden "
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-primary p-2"
            aria-label="Close navigation menu"
          >
            <XIcon className="h-7 w-7" />
          </button>
        </div>
        <div className="flex flex-col  ">
          <div className="flex w-full items-center justify-center !mb-6 px-4">
            <HeaderActions />
          </div>
          {pages.map((page) => {
            const isActive =
              page.href === "/"
                ? pathname === `/ar` || pathname === `/en`
                : pathname.startsWith(`/ar${page.href}`) ||
                  pathname.startsWith(`/en${page.href}`);
            return (
              <Link
                href={page.href}
                key={page.name}
                onClick={() => setIsDrawerOpen(false)} // Close drawer on link click
                className={`py-3 px-2 rounded-md ${isActive ? "bg-white/10" : ""}`}
              >
                <span
                  className={`${isActive ? "text-primary-500 font-bold" : "text-secondary-dark font-normal"} text-xl`}
                >
                  {t(page.name)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
const HeaderActions = ({}: { primary?: boolean }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-1 items-start">
      <div className=" flex flex-col xl:flex-row gap-3 sm:w-auto items-start xl:items-center flex-wrap justify-center md:flex-nowrap">
        <Input
          placeholder="search"
          className="xl:!min-w-60 !w-full !max-w-96 "
          icon={<MdOutlineSearch className=" cursor-pointer text-primary" />}
        />
        <div className="flex gap-2 justify-between w-full">
          <div>
            <Button
              size="md"
              variant="primary"
              className=" hidden xl:flex flex-grow sm:flex-grow-0"
            >
              {"start-now"}
            </Button>{" "}
            <Button
              size="md"
              variant="primary"
              className=" flex xl:hidden flex-grow sm:flex-grow-0"
            >
              {"start-now"}
            </Button>
          </div>
          <div className="block lg:hidden">
            <LocaleButton />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <LocaleButton />
      </div>
    </div>
  );
};
