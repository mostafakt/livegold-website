/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Button from "./Button";
import { MdArrowBack } from "react-icons/md";

export type Step = {
  id: string;
  label: string;
  subtitle?: string;
  icon?: ReactNode;
  disabled?: boolean;
  /** optional per-step continue handler - return false to prevent advancing */
  onContinue?: (
    currentStepIndex: number
  ) => void | boolean | Promise<void | boolean>;
  onContinueConditional?: (
    moveToTheNextStep: () => void,
    currentStepIndex: number
  ) => void | Promise<void | boolean>;
};

export interface StepperProps {
  steps: Step[];
  /** 0-based index */
  initialStep?: number;
  /** fallback global continue handler called when current step has no onContinue */
  onContinue?: (currentStepIndex: number) => void | Promise<void | boolean>;
  onContinueConditional?: (
    moveToTheNextStep: () => void,
    currentStepIndex: number
  ) => void | Promise<void | boolean>;
  /** called when pressing the final step's submit */
  onSubmit?: () => void | Promise<void>;
  /** called whenever the active step changes */
  onStepChange?: (newIndex: number) => void;
  /** children can be a single ReactNode or an array where each child corresponds to a step */
  children?: ReactNode | ReactNode[];
  className?: string;
}

export default function Stepper({
  steps,
  initialStep = 0,
  onContinue: globalContinue,
  onSubmit,
  onStepChange,
  onContinueConditional,
  children,
  className = "",
}: StepperProps) {
  const [active, setActive] = useState<number>(
    Math.max(0, Math.min(initialStep, steps.length - 1))
  );
  const [loading, setLoading] = useState(false);
  const t = useTranslations();
  useEffect(() => {
    onStepChange?.(active);
  }, [active, onStepChange]);

  const childrenArray = React.Children.toArray(children);

  const isLast = active === steps.length - 1;

  async function callHandler(handler?: (i: number) => any) {
    if (!handler) return true;
    try {
      const res = handler(active);
      if (res instanceof Promise) {
        const awaited = await res;
        return awaited === false ? false : true;
      }
      return res === false ? false : true;
    } catch (err) {
      // swallow and treat as failure to advance
      console.error("step handler threw", err);
      return false;
    }
  }

  async function handlePrimary() {
    if (loading) return;
    try {
      setLoading(true);
      if (!isLast) {
        // prefer per-step onContinue, fallback to globalContinue
        const step = steps[active];
        const ok = await callHandler(step.onContinue ?? globalContinue);
        if (step.onContinueConditional) {
          step.onContinueConditional?.(() => {
            setActive((s) => Math.min(steps.length - 1, s + 1));
          }, active);
        } else {
          onContinueConditional?.(() => {
            setActive((s) => Math.min(steps.length - 1, s + 1));
          }, active);
        }
        if (ok) {
          // setActive((s) => Math.min(steps.length - 1, s + 1));
        } else {
          // handler signalled to not advance
        }
      } else {
        await onSubmit?.();
      }
    } finally {
      setLoading(false);
    }
  }

  function goTo(index: number) {
    if (index < 0 || index >= steps.length) return;
    if (steps[index].disabled) return;
    setActive(index);
  }

  return (
    <div>
      <div className={`relative flex flex-col gap-8 md:flex-row  ${className}`}>
        {/* Main content (left) - render the active child if provided */}

        {/* Stepper column (right) */}
        <aside className="w-64 h-full flex flex-col justify-between place-content-between content-between ml-8">
          <div className="bg-gray-100 rounded-xl shadow-md p-4">
            <ol className="">
              {steps.map((step, idx) => {
                const activeStep = idx === active;
                const completed = idx < active;

                return (
                  <li key={step.id} className="flex items-center gap-3 ">
                    <button
                      type="button"
                      onClick={() => goTo(idx)}
                      aria-current={activeStep ? "step" : undefined}
                      className="flex items-start gap-3 text-start w-full"
                    >
                      <div className="flex flex-col items-start">
                        {/* circle with number or icon */}
                        <div
                          className={`flex ${idx == 0 ? " items-start " : idx == steps.length - 1 ? "items-end " : " items-center "}  `}
                        >
                          <div className=" flex flex-col items-center">
                            {idx !== 0 && (
                              <div className="w-px h-6 bg-dashed border-l border-dashed border-zinc-300 mt-1" />
                            )}
                            <div
                              className={
                                `flex items-center justify-center w-8 h-8 rounded-full ring-1 ring-inset "` +
                                " " +
                                (activeStep
                                  ? " text-white bg-zinc-300 ring-primary"
                                  : completed
                                    ? "bg-primary text-white ring-orange-100"
                                    : " bg-zinc-300 text-white ring-gray-200")
                              }
                            >
                              {/* vertical connector line */}

                              {step.icon ?? (
                                <span className="text-sm">{idx + 1}</span>
                              )}
                            </div>
                            {idx !== steps.length - 1 && (
                              <div className="w-px h-6 bg-dashed border-l border-dashed border-zinc-300 mt-1" />
                            )}
                          </div>
                          <div className="flex-1 pr-2">
                            <div
                              className={`text-sm ${activeStep ? "font-semibold text-gray-800" : "text-gray-500"}`}
                            >
                              {t(step.label)}
                            </div>
                            {step.subtitle && (
                              <div className="text-xs text-gray-400">
                                {step.subtitle}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>
        <div className="flex-1 !h-max flex flex-col ">
          {childrenArray.length > 0 ? (
            // show the child that matches the active index (graceful fallback)
            <div>{childrenArray[active] ?? null}</div>
          ) : (
            <div className="p-6 rounded-lg border border-dashed border-gray-200 h-64">
              {/* empty placeholder - replace with your form for each step */}
            </div>
          )}
          {/* action button shown below steps (mimics image: bottom-start rounded pill) */}
        </div>
      </div>
      <div className=" mt-2 flex justify-end w-full ">
        <Button className="gap-3" onClick={handlePrimary} disabled={loading}>
          {" "}
          <span>{isLast ? t("submit") : t("continue")}</span>
          <MdArrowBack />
        </Button>
      </div>
    </div>
  );
}
