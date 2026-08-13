"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "zh" | "en";
export type Theme = "light" | "dark";

type SiteContextValue = {
  locale: Locale;
  theme: Theme;
  embed: boolean;
  toggleLocale: () => void;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [theme, setTheme] = useState<Theme>("light");
  const [embed, setEmbed] = useState(false);

  useEffect(() => {
    // App 内嵌模式：URL 参数优先于 localStorage（不写回，避免影响浏览器端偏好）
    const params = new URLSearchParams(window.location.search);
    const paramEmbed = params.get("embed") === "1";
    const paramLang = params.get("lang");
    const paramTheme = params.get("theme");

    const storedLocale = window.localStorage.getItem("ideasnap-locale");
    const storedTheme = window.localStorage.getItem("ideasnap-theme");
    const nextLocale: Locale =
      paramLang === "en" || paramLang === "zh"
        ? (paramLang as Locale)
        : storedLocale === "en"
          ? "en"
          : "zh";
    const nextTheme: Theme =
      paramTheme === "dark" || paramTheme === "light"
        ? (paramTheme as Theme)
        : storedTheme === "dark" ||
            (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
          ? "dark"
          : "light";

    document.documentElement.lang = nextLocale === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.theme = nextTheme;
    if (paramEmbed) {
      document.documentElement.dataset.embed = "1";
    }
    window.queueMicrotask(() => {
      setLocale(nextLocale);
      setTheme(nextTheme);
      setEmbed(paramEmbed);
    });
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      theme,
      embed,
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
    [locale, theme, embed],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used inside SiteProvider");
  return context;
}
