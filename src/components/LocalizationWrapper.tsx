/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { NextIntlClientProvider } from "next-intl";
import React, { ReactNode } from "react";

const LocalizationWrapper = ({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: any;
}) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      onError={() => {
        return;
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
};

export default LocalizationWrapper;
