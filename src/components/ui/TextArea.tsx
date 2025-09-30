/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ui/Input.tsx
"use client";
import React, {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Controller, Control, RegisterOptions } from "react-hook-form";

export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelKey?: string;
  icon?: React.ReactNode;
  component?: React.ReactNode;
  containerClassName?: string;
  haveBorder?: boolean;
  isFull?: boolean;
  textArea?: boolean; // switch to textarea
}

/**
 * Raw presentational input/textarea (unchanged behaviour)
 */
export const Input = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  TextInputProps
>(
  (
    {
      label,
      textArea,
      labelKey,
      haveBorder = false,
      icon,
      component,
      isFull,
      className,
      containerClassName,
      placeholder,
      id,
      ...rest
    },
    ref
  ) => {
    const t = useTranslations();
    const inputId =
      id ?? `text-input-${Math.random().toString(36).slice(2, 9)}`;

    const labelText = label ?? (labelKey && t(labelKey));

    return (
      <div
        className={clsx("flex flex-col items-start gap-1", isFull && "w-full")}
      >
        {labelText && (
          <label
            htmlFor={inputId}
            className="text-base font-medium text-neutral-600 text-start"
          >
            {t(labelText)}
          </label>
        )}

        <div
          className={clsx(
            "flex items-center relative justify-between gap-2.5 bg-white rounded-lg w-full px-4 py-4",
            haveBorder && "border border-neutral-600",
            containerClassName,
            textArea && "items-start" // textarea grows vertically
          )}
        >
          {textArea ? (
            <textarea
              id={inputId}
              ref={ref as any}
              placeholder={placeholder ? t(placeholder) : undefined}
              className={clsx(
                "appearance-none resize-none w-full min-h-[6rem] bg-transparent outline-none text-24 font-med text-neutral-600 text-start",
                className
              )}
              {...rest}
            />
          ) : (
            <input
              id={inputId}
              ref={ref as any}
              placeholder={placeholder ? t(placeholder) : undefined}
              className={clsx(
                "appearance-none max-h-6 w-full bg-transparent outline-none text-24 font-med text-neutral-600 text-start",
                className
              )}
              {...rest}
            />
          )}

          {icon && !textArea && (
            <div className="w-7 h-7 flex items-center justify-center">
              {icon ?? <SearchIcon className="w-5 h-5" aria-hidden />}
            </div>
          )}

          {component && (
            <div
              className={clsx(
                "absolute top-0 h-full",
                "rtl:left-0 ltr:right-0"
              )}
            >
              {component}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

function SearchIcon({
  className,
  ...rest
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      role="img"
      className={clsx("inline-block", className)}
      {...rest}
    >
      <path
        d="M21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="11"
        cy="11"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type FormInputProps = Omit<TextInputProps, "defaultValue"> & {
  name: string;
  control?: Control<any>;
  rules?: RegisterOptions;
  defaultValue?: any;
  showError?: boolean;
};

/**
 * FormInput with RHF Controller support
 */
export const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  rules,
  defaultValue = "",
  showError = true,
  ...inputProps
}) => {
  const t = useTranslations();

  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Input
              {...(inputProps as TextInputProps)}
              value={field.value ?? ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref as any}
              id={inputProps.id ?? name}
            />
            {showError && fieldState.error?.message && (
              <p className="text-xs text-red-600 mt-2" role="alert">
                {t(String(fieldState.error.message))}
              </p>
            )}
          </div>
        )}
      />
    );
  }

  return (
    <Input {...(inputProps as TextInputProps)} id={inputProps.id ?? name} />
  );
};

export default Input;
