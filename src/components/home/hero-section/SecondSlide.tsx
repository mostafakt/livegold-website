"use client";
import { Select } from "@/components/ui";
import Table, { Column } from "@/components/ui/Table";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Row = { purity: string; buy: string; sell: string };

const rows: Row[] = [
  { purity: "ذهب عيار 24", buy: "ع/ق 452.48", sell: "ع/ق 452.48" },
  { purity: "ذهب عيار 22", buy: "ع/ق 452.48", sell: "ع/ق 452.48" },
  { purity: "ذهب عيار 22", buy: "ع/ق 452.48", sell: "ع/ق 452.48" },
  { purity: "ذهب عيار 22", buy: "ع/ق 452.48", sell: "ع/ق 452.48" },
  { purity: "ذهب عيار 21", buy: "ع/ق 452.48", sell: "ع/ق 452.48" },
  { purity: "ذهب عيار 18", buy: "ع/ق 452.48", sell: "ع/ق 452.48" },
];

const columns: Column<Row>[] = [
  {
    key: "purity",
    title: "العيار",
    className: "pl-6",
    headerClassName: "text-start",
    sortable: true,
  },
  {
    key: "buy",
    title: "الشراء",
    sortable: true,
    render: (r: any) => (
      <div className="flex items-center justify-start gap-2">
        <span className="text-start justify-start  text-neutral-500 text-lg font-medium  ">
          /ع
        </span>
        <span className="text-start justify-start  text-neutral-800 text-lg font-medium">
          {r.buy.split(" ")[1]}
        </span>
      </div>
    ),
  },
  {
    key: "sell",
    title: "البيع",
    sortable: true,
    render: (r: any) => (
      <div className="flex items-center justify-start gap-2">
        <span className="text-start justify-start  text-neutral-500 text-lg font-medium  ">
          /ع
        </span>
        <span className="text-start justify-start  text-neutral-800 text-lg font-medium ">
          {r.sell.split(" ")[1]}
        </span>
      </div>
    ),
  },
];
const SecondSlide = () => {
  return (
    <div className=" flex flex-col  gap-4 items-center">
      <Select
        placeholder="gold"
        label="metal"
        options={[{ value: "gold", label: "ذهب" }]}
        className="w-fit"
      />

      <Table<Row>
        data={rows}
        columns={columns}
        dir="rtl"
        caption="Gold prices"
      />
    </div>
  );
};

export default SecondSlide;
