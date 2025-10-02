/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/LocalizationWrapper.tsx
"use client";
import React, { ReactNode, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl"; 

type Props = {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
};

export default function LocalizationWrapper({
  children,
  locale,
  messages,
}: Props) {
  useEffect(() => {
    console.log("[LocalizationWrapper] mount", locale);
    return () => console.log("[LocalizationWrapper] unmount", locale);
  }, [locale]);

  return (
    <NextIntlClientProvider
      key={locale}
      locale={locale}
      messages={messages}
      onError={() => {}}
    >
      {children}
    </NextIntlClientProvider>
  );
}
