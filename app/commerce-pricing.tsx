"use client";

import type { Locale } from "./site-context";

const pricing = {
  zh: {
    plans: [
      ["灵活体验", "月度订阅", "monthly", "/月", "适合先体验完整工作流"],
      ["推荐方案", "年度订阅", "yearly", "/年", "适合长期记录与整理"],
      ["限时早鸟", "终身买断", "lifetime_early_bird", "一次性", "一次购买，长期使用"],
    ],
    loading: "正在加载 Waffo 正式环境价格…",
    action: "安全购买",
    benefits: ["语音记录与 AI 整理", "待办自动提取", "全平台会员同步"],
  },
  en: {
    plans: [
      ["Flexible", "Monthly", "monthly", "/ month", "Try the complete workflow"],
      ["Recommended", "Yearly", "yearly", "/ year", "Built for a long-term note habit"],
      ["Early bird", "Lifetime", "lifetime_early_bird", "one time", "Purchase once for long-term use"],
    ],
    loading: "Loading live prices from Waffo…",
    action: "Buy securely",
    benefits: ["Voice capture and AI organization", "Automatic task extraction", "Membership on every platform"],
  },
} satisfies Record<Locale, { plans: string[][]; loading: string; action: string; benefits: string[] }>;

function CheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="m5 10 3.1 3L15 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function CommercePricing({ locale }: { locale: Locale }) {
  const copy = pricing[locale];
  return (
    <div id="pricing-plans">
      <div className="pricing-grid">
        {copy.plans.map(([label, title, planId, unit, note], index) => (
          <article className={`price-card ${index === 1 ? "featured-price" : ""}`} key={planId}>
            {index === 1 && <span className="popular-label">{locale === "zh" ? "推荐" : "Popular"}</span>}
            <span className="plan-label">{label}</span>
            <h3>{title}</h3>
            <div className="price pricing-amount" data-price-plan={planId}>
              <strong className="loading" data-price>{locale === "zh" ? "加载价格…" : "Loading…"}</strong>
              <span data-period>{unit}</span>
            </div>
            <p className="plan-note">{note}</p>
            <ul>{copy.benefits.map((benefit) => <li key={benefit}><CheckIcon />{benefit}</li>)}</ul>
            <button className="commerce-buy-button" type="button" data-plan-id={planId}>{copy.action}</button>
          </article>
        ))}
      </div>
      <p className="pricing-live-note" id="pricing-live-note">{copy.loading}</p>
    </div>
  );
}
