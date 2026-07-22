"use client";

import type { AnchorHTMLAttributes } from "react";
import { commonCopy } from "./content";
import { useSite } from "./site-context";
import { AccountButton, CommerceLayer } from "./commerce-ui";

function Link({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a href={href} {...props} />;
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const { locale, theme, toggleLocale, toggleTheme } = useSite();
  const copy = commonCopy[locale];

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label={locale === "zh" ? "闪念首页" : "IdeaSnap home"}>
            <img
              src="https://ideasnap.xyz/assets/icons/Appicon.png"
              alt=""
              width="48"
              height="48"
            />
            <span>
              <strong>{copy.brand}</strong>
              <small>{copy.tagline}</small>
            </span>
          </Link>

          <nav aria-label={locale === "zh" ? "主导航" : "Main navigation"}>
            {copy.nav.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>

          <div className="header-utilities">
            <button
              className="utility-button theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? copy.themeLight : copy.themeDark}
              title={theme === "dark" ? copy.themeLight : copy.themeDark}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀︎" : "☾"}</span>
            </button>
            <button
              className="utility-button language-toggle"
              type="button"
              onClick={toggleLocale}
              aria-label={copy.language}
              title={copy.language}
            >
              {locale === "zh" ? "EN" : "中"}
            </button>
          </div>

          <AccountButton locale={locale} />

          <Link className="header-cta" href="/download">
            {copy.download}
          </Link>
        </div>
      </header>

      {children}

      <footer className="site-footer" id="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-block">
            <Link className="brand footer-logo" href="/">
              <img src="https://ideasnap.xyz/assets/icons/Appicon.png" alt="" width="48" height="48" loading="lazy" />
              <span>
                <strong>{copy.brand}</strong>
                <small>{copy.tagline}</small>
              </span>
            </Link>
            <p>{copy.footerNote}</p>
            <div className="footer-preferences">
              <button type="button" onClick={toggleTheme}>
                <span aria-hidden="true">{theme === "dark" ? "☀︎" : "☾"}</span>
                {theme === "dark" ? copy.themeLight : copy.themeDark}
              </button>
              <button type="button" onClick={toggleLocale}>
                <span aria-hidden="true">文</span>
                {copy.language}
              </button>
            </div>
          </div>

          <div className="footer-directory">
            {copy.groups.map((group) => (
              <div className="footer-group" key={group.title}>
                <h4>{group.title}</h4>
                {group.links.map(([label, href]) =>
                  href.startsWith("/") ? (
                    <Link href={href} key={href}>{label}</Link>
                  ) : (
                    <a href={href} key={href} target="_blank" rel="noreferrer">{label}</a>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="container footer-bottom">
          <small>{copy.copyright}</small>
          <span>{locale === "zh" ? "由独立开发者北城打造" : "Built by indie developer Beicheng"}</span>
        </div>
      </footer>
      <CommerceLayer locale={locale} />
    </>
  );
}
