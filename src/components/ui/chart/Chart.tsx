/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React from "react";
//@ts-ignore
import "./chart.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { format } from "date-fns";

type Point = { time: string; price: number };

interface Props {
  data: Point[];
  height?: number;
  baseline?: number;
  strokeColor?: string;
}

const PriceAreaChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full rounded-md p-1 h-full ">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 8, right: 18, left: 18, bottom: 26 }}
        >
          {/* Gradient: to left (right -> left) */}
          <defs>
            <linearGradient id="chartGradient" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#172436" stopOpacity={0.95} />
              <stop offset="50%" stopColor="#172436" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#172436" stopOpacity={0.95} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="#E6E6E6"
            strokeDasharray="1 12"
            opacity={0.9}
          />

          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tickFormatter={(t) => format(new Date(t), "d/M/yyyy")}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            interval="preserveStartEnd"
            dy={8}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v}`}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            domain={[0, "dataMax + 200"]}
            width={20}
            dx={-25}
            className=" block ltr:hidden"
          />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v}`}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            domain={[0, "dataMax + 200"]}
            width={20}
            dx={-25}
            className="ltr:hidden"
          />

          {/* <Tooltip
            contentStyle={{ borderRadius: 8, border: "none" }}
            labelFormatter={(l) => format(new Date(l), "PPpp")}
            formatter={(value: number) => [`$${value}`, "Price"]}
          /> */}

          <Area
            type="linear"
            dataKey="price"
            stroke="url(#chartGradient)"
            strokeWidth={2}
            fill="url(#chartGradient)"
            dot={false}
            activeDot={{ r: 4 }}
            strokeLinecap="round"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceAreaChart;
