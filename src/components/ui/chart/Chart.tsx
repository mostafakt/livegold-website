/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useMemo } from "react";
//@ts-ignore
import "./chart.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import {
  ChartSkeleton,
  NoDataState,
} from "@/components/home/hero-section/FirstSlideLoading";
import { currencyIcons } from "@/components/home/hero-section/FirstSlide";

type Point = { time: string; price: number };

export default function PriceAreaChart({
  history,
  isLoading,
  currency,
}: {
  history?: {
    price: {
      "14": number;
      "18": number;
      "21": number;
      "22": number;
      "24": number;
      once: number;
    };
    timestamp: string;
  }[];
  currency: string;

  isLoading: boolean;
}) {
  const t = useTranslations();
  const chartData: Point[] = useMemo(() => {
    if (!history) return [];
    return history.map((entry) => ({
      time: entry.timestamp,
      price: entry.price.once,
    }));
  }, [history]);

  if (isLoading) {
    return <ChartSkeleton />;
  }
  if (chartData.length === 0) {
    return <NoDataState message={t("no-data") || "No data available"} />;
  }
  return (
    <div className="w-full  h-full   bg-white  shadow-drop rounded-2xl  p-3 sm:p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fecf85" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#fecf85" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* <defs>
            <linearGradient id="chartGradient" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#172436" stopOpacity={0.95} />{" "}
              <stop offset="50%" stopColor="#172436" stopOpacity={0.45} />{" "}
              <stop offset="100%" stopColor="#172436" stopOpacity={0.95} />{" "}
            </linearGradient>{" "}
          </defs> */}
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#F3F4F6"
            opacity={0.7}
          />
          {/* X Axis (date) */}
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(t) => format(new Date(t), "MMM d")}
            tick={{
              fill: "#737373",
              fontSize: 12,
              fontWeight: 500,
            }}
            minTickGap={20}
          />
          {/* Y Axis (price) */}
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v.toFixed(0)}`}
            tick={{
              fill: "#737373",
              fontSize: 12,
              fontWeight: 500,
            }}
            domain={["auto", "dataMax + 100"]}
            width={5}
            dx={5}
            className="ltr:block rtl:hidden"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v.toFixed(0)}`}
            tick={{
              fill: "#737373",
              fontSize: 12,
              fontWeight: 500,
            }}
            domain={["auto", "dataMax + 100"]}
            width={20}
            dx={-29}
            className=" rtl:block ltr:!hidden"
          />
          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#FFF8EC",
              borderRadius: "0.75rem",
              border: "1px solid #FFD99D",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              padding: "8px 12px",
            }}
            labelStyle={{
              color: "#737373",
              fontSize: "12px",
              marginBottom: "4px",
            }}
            cursor={false}
            itemStyle={{
              color: "#e69832",
              fontWeight: 600,
              fontSize: "14px",
            }}
            formatter={(value: number) => [
              //@ts-ignore

              <div key={value} className="flex items-center">
                {`${value.toFixed(2)}`}
                <div>
                  {
                    //@ts-ignore
                    currencyIcons[currency]
                  }
                </div>
              </div>,
              "Once",
            ]}
            labelFormatter={(label) => format(new Date(label), "MMM d, yyyy")}
          />
          {/* Area */}
          <Area
            type="monotone"
            dataKey="price"
            stroke="#fecf85"
            strokeWidth={0.75}
            fill="url(#chartGradient)"
            dot={false}
            activeDot={{
              r: 5,
              strokeWidth: 0,
              fill: "#e69832",
            }}
            animationDuration={1000}
          />
          {/* <Area
            type="linear"
            dataKey="price"
            stroke="url(#chartGradient)"
            strokeWidth={2}
            fill="url(#chartGradient)"
            dot={false}
            activeDot={{ r: 4 }}
            strokeLinecap="round"
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
