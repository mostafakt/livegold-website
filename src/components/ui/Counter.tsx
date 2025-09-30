"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type CounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

export default function Counter({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
}: CounterProps) {
  const [value] = useState(initialValue);
  const t = useTranslations("Counter"); 

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      // setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      // setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className="flex items-center justify-center gap-6 rounded-xl max-w-36 w-full  bg-white p-2 shadow">
      <button
        type="button"
        onClick={handleDecrement}
        className=" !h-7 !w-7 rounded-lg bg-primary-600 text-white hover:bg-primary-500"
        aria-label={t("decrement")}
      >
        –
      </button>

      <span className="text-xl font-medium text-gray-700">{value}</span>

      <button
        type="button"
        onClick={handleIncrement}
        className="!h-7 w-7 rounded-lg bg-primary-600 text-white hover:bg-primary-500"
        aria-label={t("increment")}
      >
        +
      </button>
    </div>
  );
}
