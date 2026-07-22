"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "zh" | "en";
export type Theme = "light" | "dark";

type SiteContextValue = {
  locale: Locale;
  theme: Theme;
  toggleLocale: () => void;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("ideasnap-locale");
    const storedTheme = window.localStorage.getItem("ideasnap-theme");
    const nextLocale: Locale = storedLocale === "en" ? "en" : "zh";
    const nextTheme: Theme =
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";

    document.documentElement.lang = nextLocale === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.theme = nextTheme;
    window.queueMicrotask(() => {
      setLocale(nextLocale);
      setTheme(nextTheme);
    });
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      theme,
      toggleLocale: () => {
        const next = locale === "zh" ? "en" : "zh";
        setLocale(next);
        window.localStorage.setItem("ideasnap-locale", next);
        document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
      },
      toggleTheme: () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        window.localStorage.setItem("ideasnap-theme", next);
        document.documentElement.dataset.theme = next;
      },
    }),
    [locale, theme],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used inside SiteProvider");
  return context;
}
