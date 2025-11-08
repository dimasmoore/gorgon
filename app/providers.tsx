"use client";

import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare global {
  interface Window {
    Telegram: any;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateHash = async () => {
      const initData = window.Telegram?.WebApp?.initData;

      if (initData) {
        try {
          const res = await fetch("/api/validate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ hash: initData }),
          });

          if (res.ok) {
            setValidated(true);
          } else {
            setValidated(false);
          }
        } catch (error) {
          console.error("Validation request failed", error);
          setValidated(false);
        }
      } else {
        // Handle case where Telegram Web App data is not available
        // For development, you might want to bypass this
        setValidated(false); // Or true for dev purposes
      }
      setLoading(false);
    };

    validateHash();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!validated) {
    return <div>Validation Failed</div>;
  }

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
