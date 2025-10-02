/* eslint-disable @typescript-eslint/no-explicit-any */

import { IContactUs } from "@/types/contact-us";
import { ManageLocale } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

interface ContactInfoProps {
  data: IContactUs;
}

export default async function ContactInfo({ data }: ContactInfoProps) {
  const locale = ManageLocale.getLanguage();
  const translations = await getTranslations({ locale, namespace: "contact" });

  const socialLinks = [
    {
      name: "Facebook",

      url: "https://www.facebook.com/livegold.ksa",
      color: "bg-blue-600",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.25 14C26.25 10.7511 24.9594 7.63527 22.662 5.33795C20.3647 3.04063 17.2489 1.75001 14 1.75001C10.9153 1.74716 7.94316 2.90814 5.67715 5.00105C3.41114 7.09395 2.01812 9.96471 1.77635 13.0399C1.53459 16.115 2.46186 19.1682 4.37296 21.5895C6.28406 24.0108 9.03829 25.622 12.0855 26.1013V17.5403H8.97748V14H12.0872V11.3015C12.0872 8.232 13.916 6.53451 16.7142 6.53451C18.0547 6.53451 19.4565 6.77426 19.4565 6.77426V9.7895H17.9112C16.3887 9.7895 15.9162 10.7345 15.9162 11.7023V14H19.313L18.7705 17.5403H15.9145V26.1013C18.7959 25.645 21.4199 24.1755 23.3145 21.9572C25.2091 19.7389 26.25 16.9173 26.25 14Z" />
          <path
            d="M18.7688 17.5407L19.3113 14.0005H15.9145V11.7027C15.9145 10.735 16.387 9.78995 17.9095 9.78995H19.4548V6.77295C19.4548 6.77295 18.053 6.5332 16.7125 6.5332C13.9125 6.5332 12.0855 8.2307 12.0855 11.3002V14.0005H8.97754V17.5407H12.0873V26.1017C13.3558 26.3013 14.6478 26.3013 15.9163 26.1017V17.5407H18.7688Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27Z" />
          <path
            d="M13.8335 8.0943C15.7026 8.0943 15.924 8.10141 16.6621 8.13507C17.3446 8.16622 17.7152 8.28026 17.9619 8.37611C18.2886 8.5031 18.5218 8.65477 18.7667 8.89971C19.0117 9.14471 19.1634 9.37787 19.2904 9.7046C19.3862 9.95129 19.5003 10.3219 19.5314 11.0044C19.5651 11.7425 19.5722 11.9639 19.5722 13.833C19.5722 15.7021 19.5651 15.9235 19.5314 16.6616C19.5003 17.3441 19.3862 17.7147 19.2904 17.9614C19.1634 18.2881 19.0117 18.5214 18.7668 18.7663C18.5218 19.0113 18.2886 19.1629 17.9619 19.2899C17.7152 19.3858 17.3446 19.4998 16.6621 19.5309C15.9241 19.5646 15.7027 19.5718 13.8335 19.5718C11.9643 19.5718 11.7429 19.5646 11.0049 19.5309C10.3224 19.4998 9.95176 19.3858 9.70507 19.2899C9.37835 19.1629 9.14519 19.0113 8.90025 18.7663C8.6553 18.5214 8.50358 18.2881 8.37659 17.9614C8.28075 17.7147 8.1667 17.3441 8.13555 16.6616C8.1019 15.9235 8.09478 15.7021 8.09478 13.833C8.09478 11.9639 8.1019 11.7425 8.13555 11.0044C8.1667 10.3219 8.28075 9.95129 8.37659 9.7046C8.50358 9.37787 8.65525 9.14471 8.90025 8.89977C9.14519 8.65477 9.37835 8.5031 9.70507 8.37611C9.95176 8.28026 10.3224 8.16622 11.0049 8.13507C11.743 8.10141 11.9644 8.0943 13.8335 8.0943ZM13.8335 6.83301C11.9324 6.83301 11.694 6.84106 10.9474 6.87512C10.2024 6.90913 9.69346 7.02743 9.2482 7.20051C8.7879 7.37936 8.39753 7.6187 8.00839 8.0079C7.61919 8.39705 7.37985 8.78742 7.201 9.24773C7.02792 9.69299 6.90962 10.2018 6.87561 10.9469C6.84155 11.6935 6.8335 11.9319 6.8335 13.833C6.8335 15.7341 6.84155 15.9725 6.87561 16.7191C6.90962 17.4642 7.02792 17.973 7.201 18.4183C7.37985 18.8786 7.61919 19.269 8.00839 19.6582C8.39753 20.0473 8.7879 20.2867 9.2482 20.4655C9.69346 20.6386 10.2024 20.7569 10.9474 20.7909C11.694 20.825 11.9324 20.833 13.8335 20.833C15.7346 20.833 15.973 20.825 16.7196 20.7909C17.4646 20.7569 17.9735 20.6386 18.4188 20.4655C18.8791 20.2867 19.2695 20.0473 19.6586 19.6582C20.0477 19.269 20.2871 18.8786 20.466 18.4183C20.6391 17.973 20.7574 17.4642 20.7914 16.7191C20.8254 15.9725 20.8335 15.7341 20.8335 13.833C20.8335 11.9319 20.8254 11.6935 20.7914 10.9469C20.7574 10.2018 20.6391 9.69299 20.466 9.24773C20.2871 8.78742 20.0477 8.39705 19.6586 8.0079C19.2695 7.6187 18.8791 7.37936 18.4188 7.20051C17.9735 7.02743 17.4646 6.90913 16.7196 6.87512C15.973 6.84106 15.7346 6.83301 13.8335 6.83301Z"
            fill="white"
          />
          <path
            d="M13.8335 9.83301C11.6243 9.83301 9.8335 11.6238 9.8335 13.833C9.8335 16.0422 11.6243 17.833 13.8335 17.833C16.0426 17.833 17.8335 16.0422 17.8335 13.833C17.8335 11.6238 16.0426 9.83301 13.8335 9.83301ZM13.8335 16.4295C12.3995 16.4295 11.237 15.267 11.237 13.833C11.237 12.399 12.3995 11.2365 13.8335 11.2365C15.2675 11.2365 16.43 12.399 16.43 13.833C16.43 15.267 15.2675 16.4295 13.8335 16.4295Z"
            fill="white"
          />
          <path
            d="M18.8335 9.83304C18.8335 10.3852 18.3858 10.833 17.8335 10.833C17.2812 10.833 16.8335 10.3852 16.8335 9.83304C16.8335 9.28077 17.2812 8.83301 17.8335 8.83301C18.3858 8.83301 18.8335 9.28077 18.8335 9.83304Z"
            fill="white"
          />
        </svg>
      ),
      url: "https://www.instagram.com/livegold.ksa/",
      color: "bg-pink-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-drop p-8 h-fit sticky top-8">
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 ">
        {translations("connect")}
      </h3>
      <p className="text-neutral-700 mb-8">{translations("help")}</p>

      {/* Headquarters */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-neutral-900 mb-1">
            {translations("headquarters")}
          </h4>
          <p className="text-neutral-700">{translations("location")}</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-neutral-900 mb-1">
            {translations("phone")}
          </h4>
          <div className="space-y-1">
            <a
              href={`tel:${data.phone}`}
              className="block text-neutral-700 hover:text-primary-500 transition-colors"
            >
              {data.phone}
            </a>
            <a
              href={`tel:${data.whatsapp}`}
              className="block text-neutral-700 hover:text-primary-500 transition-colors"
            >
              {data.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-neutral-900 mb-1">
            {translations("support")}
          </h4>
          <div className="space-y-1">
            <a
              href={`mailto:${data.email}`}
              className="block text-neutral-700 hover:text-primary-500 transition-colors"
            >
              {data.email}
            </a>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="font-bold text-neutral-900 mb-4">
          {translations("follow")}
        </h4>
        <div className="flex gap-3 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
