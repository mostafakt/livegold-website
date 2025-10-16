/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Card, Select, SinglePillSelect } from "@/components/ui";
import Badge from "@/components/ui/Badge";
import PriceAreaChart from "@/components/ui/chart/Chart";
import Collapsible from "@/components/ui/Collaps";
import {
  useFetchCurrenciesQuery,
  useFetchMetalQuery,
  useLazyFetchMetalHistoryQuery,
} from "@/store/api/metal-price";
import { useTranslations } from "next-intl";
import PriceChartSkeleton, { PriceStatsSkeleton } from "./FirstSlideLoading";
import { IHistoryContent, IMetalPriceHistory } from "@/types/metal-price";
import Image from "@/components/ui/Image";

const periodOptions = [
  { value: "live", label: "مباشر" },
  { value: "today", label: "اليوم" },
  { value: "1m", label: "شهر" },
  { value: "3m", label: "3 أشهر" },
  { value: "6m", label: "6 أشهر" },
  { value: "1y", label: "سنة" },
];
export const currencyIcons = {
  USD: "$",
  SAR: (
    <Image src="/icons/real.svg" alt="real live gold" width={15} height={15} />
  ),
  EUR: "€",
} as const;

type Props = {
  preFetchedData?: IMetalPriceHistory;
};

function FirstSlide({ preFetchedData }: Props) {
  const t = useTranslations();

  // filters
  const [period, setPeriod] = useState("1m");
  const [currency, setCurrency] = useState("USD");
  const [metal, setMetal] = useState("XAU");

  // derive dateFrom/dateTo
  const { dateFrom, dateTo } = useMemo(() => {
    const now = new Date();
    const to = now.toISOString();
    const from = new Date();

    switch (period) {
      case "today":
        from.setDate(now.getDate() - 1);
        break;
      case "1m":
        from.setMonth(now.getMonth() - 1);
        break;
      case "3m":
        from.setMonth(now.getMonth() - 3);
        break;
      case "6m":
        from.setMonth(now.getMonth() - 6);
        break;
      case "1y":
        from.setFullYear(now.getFullYear() - 1);
        break;
      default:
        from.setDate(now.getDate() - 7);
    }

    return { dateFrom: from.toISOString(), dateTo: to };
  }, [period]);

  // local state to store current history
  const [history, setHistory] = useState<IMetalPriceHistory | undefined>(
    preFetchedData
  );

  // RTK Query lazy fetch
  const [triggerFetch, { data: historyApi, isFetching, isLoading }] =
    useLazyFetchMetalHistoryQuery();
  useEffect(() => {
    triggerFetch({
      metal,
      currencies: currency,
      dateFrom,
      dateTo,
    });
  }, [metal, currency, dateFrom, dateTo, triggerFetch]);
  // trigger on filter change

  useEffect(() => {
    if (historyApi) setHistory(historyApi);
  }, [historyApi]);

  const { data: metals } = useFetchMetalQuery({});
  const { data: currencies } = useFetchCurrenciesQuery({});

  const metalOptions = useMemo(
    () =>
      metals?.data?.map((m) => ({
        label: t(m.symbol),
        value: m.symbol,
      })) ?? [],
    [metals, t]
  );

  const currenciesOptions = useMemo(
    () =>
      currencies?.data?.map((c) => ({
        label: t(c.name),
        value: c.symbol,
      })) ?? [],
    [currencies, t]
  );

  const historyData = useMemo(() => {
    // @ts-ignore
    if (!history?.data?.[metal]?.[currency]) return undefined;
    // @ts-ignore
    return history.data[metal][currency] as IHistoryContent;
  }, [history]);

  return (
    <div className="py-2">
      {false ? (
        <PriceChartSkeleton />
      ) : (
        <div className="flex flex-col gap-3 lg:gap-4">
          {/* Filters */}
          <Collapsible header="الفلاتر">
            <SinglePillSelect
              label="period"
              options={periodOptions}
              selected={period}
              onChange={setPeriod}
              className="w-auto"
            />

            <div className="flex flex-row  items-end flex-wrap gap-6">
              <Select
                label="العملة"
                options={currenciesOptions ?? []}
                value={currency}
                onChange={(v) => setCurrency(v as string)}
                className=" !w-56 "
              />
              <Select
                label="المعدن"
                options={metalOptions ?? []}
                value={metal}
                onChange={(v) => setMetal(v as string)}
                className=" !w-56 "
              />
            </div>
          </Collapsible>

          {/* Main content */}
          {false ? (
            <PriceStatsSkeleton />
          ) : (
            <div className="flex flex-row flex-wrap gap-4 lg:gap-6">
              {/* Left stats */}
              <div className="flex flex-col w-full  !h-full xl:max-w-xs gap-3">
                <Card title={t("current-price")}>
                  <span className="font-bold text-2xl lg:text-3xl text-center flex items-center text-neutral-800">
                    {historyData?.currentPrice ? (
                      <>
                        {`${historyData?.currentPrice.toFixed(2)}`}{" "}
                        <div>
                          {
                            //@ts-ignore
                            currencyIcons[currency]
                          }
                        </div>
                      </>
                    ) : (
                      "-"
                    )}
                  </span>
                </Card>

                <div className="flex gap-3">
                  <Card className="w-full" title={t("price-in-week")}>
                    <div className="flex items-end gap-2">
                      <span className="font-medium text-xl lg:text-2xl flex text-center items-center text-neutral-800">
                        {`${historyData?.currentPrice ? historyData?.currentPrice.toFixed(2) : "-"}`}
                        <div>
                          {
                            //@ts-ignore
                            currencyIcons[currency]
                          }
                        </div>{" "}
                      </span>
                      <Badge>
                        <div
                          dir="ltr"
                          className=" flex flex-row   items-center"
                        >
                          <div>
                            {
                              //@ts-ignore
                              currencyIcons[currency]
                            }
                          </div>{" "}
                          {`${historyData?.changePercent ? historyData?.changePercent.toFixed(2) : ""}`}
                        </div>
                      </Badge>
                    </div>
                  </Card>
                </div>

                <Card
                  className="w-full h-40 flex  justify-center "
                  title={t("price-in-week")}
                >
                  <div className="flex flex-col gap-2">
                    {/* High price row */}
                    <div className="flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.13495 12.0308L2.80739 6.4668C2.49324 6.14098 1.9946 6.37174 1.9946 6.83203V9.22315C1.9946 9.79411 1.5099 10.7749 0.959396 10.7749H0.978348C0.426844 10.7749 0 9.79411 0 9.22315V4.05176C0 2.90879 0.81778 2.5 1.91879 2.5H6.90527C7.45578 2.5 7.97836 2.70491 7.97836 3.27588V3.40527C7.97836 3.97624 7.45578 4.56885 6.90527 4.56885H4.46689C4.02209 4.56885 3.7997 4.86754 4.11385 5.19336L8.83904 9.96387C9.22798 10.3683 9.85926 10.3033 10.2492 9.8999L10.6601 9.44043C11.439 8.6326 12.7016 8.61697 13.4814 9.42481L19.7614 15.7407C20.1514 16.1441 19.9459 16.7948 19.9459 17.1992V17.1973C18.9486 17.6017 18.7412 17.6007 18.3512 17.1963L12.8681 11.6045C12.4782 11.2001 11.801 11.2001 11.4111 11.6045L10.9802 12.0283C10.2023 12.8382 8.91483 12.8396 8.13495 12.0308Z"
                          fill="#27B11A"
                          fillOpacity="0.7"
                        />
                      </svg>
                      <span className="text-base lg:text-lg font-medium text-neutral-850">
                        {t("highest-price")}
                      </span>
                      <span className="text-xl lg:text-2xl font-medium text-primary flex items-center">
                        {` ${historyData?.highestPrice ? historyData?.highestPrice.toFixed(2) : ""}`}
                        <div>
                          {
                            //@ts-ignore
                            currencyIcons[currency]
                          }
                        </div>{" "}
                      </span>
                    </div>

                    {/* Low price row */}
                    <div className="flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8651 7.78447L17.1926 13.1639C17.5068 13.4789 18.0054 13.2558 18.0054 12.8108V10.4988C18.0054 9.94681 18.4901 9.4998 19.0406 9.4998H19.0217C19.5732 9.4998 20 9.94681 20 10.4988V15.4988C20 16.6038 19.1822 17.4998 18.0812 17.4998H13.0947C12.5442 17.4998 12.0216 17.3008 12.0216 16.7488V16.8738C12.0216 16.3218 12.5442 15.4998 13.0947 15.4998H15.5331C15.9779 15.4998 16.2003 14.9608 15.8862 14.6458L11.161 9.90752C10.772 9.51752 10.1407 9.51652 9.75079 9.90752L9.3399 10.3196C8.56102 11.1006 7.29844 11.1006 6.51856 10.3196L0.238587 4.20537C-0.151356 3.81536 0.0540774 3.1857 0.0540774 2.7957V2.79375C1.05137 2.40274 1.25882 2.40176 1.64876 2.79277L7.1319 8.19755C7.52184 8.58855 8.199 8.58758 8.58894 8.19658L9.01978 7.78642C9.79767 7.00341 11.0852 7.00246 11.8651 7.78447Z"
                          fill="#E53737"
                          fillOpacity="0.7"
                        />
                      </svg>
                      <span className="text-base lg:text-lg font-medium text-neutral-850">
                        {t("lowest-price")} :
                      </span>
                      <span className="text-xl lg:text-2xl font-medium text-primary flex items-center ">
                        {`${historyData?.lowestPrice ? historyData?.lowestPrice.toFixed(2) : ""}`}
                        <div>
                          {
                            //@ts-ignore
                            currencyIcons[currency]
                          }
                        </div>{" "}
                      </span>
                    </div>
                  </div>
                </Card>

                {/* <Button variant="primary" className="flex gap-2 mt-2">
                إنشاء تنبيه بالسعر
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 17H9C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 19.0609 8.42143 20.0783 9.17157 20.8284C9.92172 21.5786 10.9391 22 12 22C13.0609 22 14.0783 21.5786 14.8284 20.8284C15.5786 20.0783 16 19.0609 16 18C16 17.7348 15.8946 17.4804 15.7071 17.2929C15.5196 17.1054 15.2652 17 15 17Z"
                    fill="#F8EAD3"
                  />
                  <path
                    d="M20.09 13.67L19 12.59V9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2C10.1435 2 8.36299 2.7375 7.05023 4.05025C5.73748 5.36301 4.99998 7.14348 4.99998 9V12.59L3.90998 13.67C3.47695 14.1082 3.18287 14.6645 3.06458 15.2691C2.9463 15.8737 3.00907 16.4998 3.24504 17.0689C3.481 17.638 3.87967 18.1248 4.39108 18.4683C4.9025 18.8118 5.50391 18.9968 6.11998 19H17.88C18.4961 18.9968 19.0975 18.8118 19.6089 18.4683C20.1203 18.1248 20.519 17.638 20.7549 17.0689C20.9909 16.4998 21.0537 15.8737 20.9354 15.2691C20.8171 14.6645 20.523 14.1082 20.09 13.67Z"
                    fill="var(--white, white)"
                  />
                </svg>
              </Button> */}
              </div>

              {/* Chart */}
              <div className="flex-1 w-full min-h-72 lg:min-h-96">
                {
                  <PriceAreaChart
                    history={historyData?.history}
                    isLoading={isFetching || isLoading}
                    currency={currency}
                  />
                }
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FirstSlide;
