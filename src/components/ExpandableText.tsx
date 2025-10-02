"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

interface ExpandableTextProps {
  text: string | React.ReactElement;
  lines?: number;
  id?: string;
  className?: string;
}

export default function ExpandableText({
  text,
  lines = 2,
  id = "expandable-text",
  className = "",
}: ExpandableTextProps) {
  const t = useTranslations("");
  const [expanded, setExpanded] = useState(false);
  const [needsExpand, setNeedsExpand] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      const lineHeight = parseInt(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * lines;
      const isOverflowing = element.scrollHeight > maxHeight + 2; // +2 for buffer

      setNeedsExpand(isOverflowing);

      // Set initial height
      if (!expanded) {
        element.style.maxHeight = `${maxHeight}px`;
      }
    }
  }, [text, lines, expanded]);

  const toggleExpand = () => {
    if (textRef.current) {
      const element = textRef.current;

      if (expanded) {
        // Collapse
        const lineHeight = parseInt(getComputedStyle(element).lineHeight);
        element.style.maxHeight = `${lineHeight * lines}px`;
      } else {
        // Expand
        element.style.maxHeight = `${element.scrollHeight}px`;
      }

      setExpanded(!expanded);
    }
  };

  const contentStyles = `
    overflow-hidden
    transition-all
    duration-300
    ease-in-out
    text-base
    leading-7
  `;

  return (
    <div className={`relative ${className}`} >
      <div ref={textRef} id={id} className={contentStyles} aria-live="polite">
        {text}
      </div>

      {needsExpand && (
        <div
          onClick={toggleExpand}
          aria-controls={id}
          aria-expanded={expanded}
          className="mt-3 cursor-pointer text-sm font-medium text-primary underline hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          {expanded ? t("show-less") : t("show-more")}
        </div>
      )}
    </div>
  );
}
