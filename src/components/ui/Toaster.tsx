"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Default options for all toasts
        duration: 4000,
        style: {
          // keep visual style minimal — Tailwind will control most styling
          padding: "8px 12px",
          borderRadius: 12,
          boxShadow: "0 6px 18px rgba(20,20,20,0.08)",
        },
        success: {
          // override success styling if you want
        },
        error: {
          duration: 6000,
        },
      }}
    />
  );
}
