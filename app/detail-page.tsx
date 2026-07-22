"use client";

import type { AnchorHTMLAttributes } from "react";
import { detailPages, pageLabels, type Action, type PageKey } from "./content";
import { useSite } from "./site-context";
import CommercePricing from "./commerce-pricing";

function Link({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a href={href} {...props} />;
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActionLink({ action, secondary = false }: { action: Action; secondary?: boolean }) {
  const className = secondary ? "button button-secondary" : "button button-primary";
  if (action.external || !action.href.startsWith("/")) {
    const opensWindow = action.href.startsWith("http");
    return (
      <a className={className} href={action.href} target={opensWindow ? "_blank" : undefined} rel={opensWindow ? "noreferrer" : undefined}>
        {action.label} <ArrowIcon />
      </a>
    );
  }
  return (
    <Link className={className} href={action.href}>
      {action.label} <ArrowIcon />
    </Link>
  );
}

export default function DetailPage({ page }: { page: PageKey }) {
  const { locale } = useSite();
  const copy = detailPages[locale][page];
  const labels = pageLabels[locale];

  return (
    <main className={`detail-page page-${page}`}>
      <section className="detail-hero">
        <div className="detail-hero-glow" />
        <div className="container detail-hero-grid">
          <div className="detail-hero-copy">
            <div className="breadcrumbs" aria-label={locale === "zh" ? "面包屑导航" : "Breadcrumbs"}>
              <Link href="/">{locale === "zh" ? "首页" : "Home"}</Link>
              <span>/</span>
              <span>{labels[page]}</span>
            </div>
            <span className="section-kicker">{copy.group}</span>
            <h1>{copy.title}</h1>
            <p>{copy.lead}</p>
            <div className="detail-hero-actions">
              <ActionLink action={copy.primary} />
              {copy.secondary && <ActionLink action={copy.secondary} secondary />}
            </div>
          </div>

          <div className="detail-hero-media">
            <div className="detail-media-frame">
              <img src={copy.heroImage} alt={copy.heroAlt} width="1200" height="900" />
            </div>
            <div className="detail-media-note">
              <span className="status-dot" />
              <span>
                <small>{locale === "zh" ? "产品指南" : "Product guide"}</small>
                <strong>{labels[page]}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-overview">
        <div className="container detail-highlight-grid">
          {copy.highlights.map((item) => (
            <div className="detail-highlight" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {page === "pricing" && (
        <section className="section commerce-pricing-section" aria-label={locale === "zh" ? "Waffo 实时会员方案" : "Live Waffo membership plans"}>
          <div className="container">
            <CommercePricing locale={locale} />
          </div>
        </section>
      )}

      <section className="detail-body section">
        <div className="container detail-body-grid">
          <aside className="detail-toc">
            <span>{locale === "zh" ? "本页内容" : "On this page"}</span>
            {copy.sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}>
                <em>{String(index + 1).padStart(2, "0")}</em>
                {section.title}
              </a>
            ))}
          </aside>

          <div className="detail-sections">
            {copy.sections.map((section, index) => (
              <article className={`detail-section-card ${section.image ? "has-image" : ""}`} id={section.id} key={section.id}>
                <div className="detail-section-copy">
                  <span className="detail-section-index">{String(index + 1).padStart(2, "0")}</span>
                  {section.eyebrow && <span className="section-kicker">{section.eyebrow}</span>}
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.bullets && (
                    <ul className="detail-check-list">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}><i aria-hidden="true">✓</i>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.actions && (
                    <div className="detail-inline-actions">
                      {section.actions.map((action) =>
                        action.external || !action.href.startsWith("/") ? (
                          <a href={action.href} key={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel={action.href.startsWith("http") ? "noreferrer" : undefined}>
                            {action.label} <ArrowIcon />
                          </a>
                        ) : (
                          <Link href={action.href} key={action.href}>{action.label} <ArrowIcon /></Link>
                        ),
                      )}
                    </div>
                  )}
                </div>
                {section.image && (
                  <div className="detail-section-image">
                    <img src={section.image} alt={section.imageAlt || ""} width="1000" height="760" loading="lazy" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="related-section section">
        <div className="container">
          <div className="related-heading">
            <div>
              <span className="section-kicker">{locale === "zh" ? "继续了解" : "Explore next"}</span>
              <h2>{locale === "zh" ? "从一个入口，继续深入产品" : "Go deeper from here"}</h2>
            </div>
            <Link href="/">{locale === "zh" ? "返回首页" : "Back to home"} <ArrowIcon /></Link>
          </div>
          <div className="related-grid">
            {copy.related.map((key, index) => {
              const related = detailPages[locale][key];
              return (
                <Link className="related-card" href={`/${key}`} key={key}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{labels[key]}</h3>
                  <p>{related.lead}</p>
                  <em>{locale === "zh" ? "查看详情" : "View details"} <ArrowIcon /></em>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="detail-final-cta">
        <div className="container detail-final-inner">
          <div>
            <span>{locale === "zh" ? "从下一句开始" : "Start with the next sentence"}</span>
            <h2>{locale === "zh" ? "让灵感先留下来，再慢慢长成结果" : "Capture the thought first. Let it grow into an outcome."}</h2>
          </div>
          <Link className="button button-primary" href="/download">
            {locale === "zh" ? "下载闪念" : "Download IdeaSnap"} <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
