"use client";

import { useState } from "react";
import {
  guideActionScheme,
  playbookCopy,
  type PlaybookCategory,
  type PlaybookScenario,
} from "./playbook-content";
import { useSite } from "./site-context";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScenarioCard({
  scenario,
  active,
  embed,
  labels,
  onToggle,
}: {
  scenario: PlaybookScenario;
  active: boolean;
  embed: boolean;
  labels: { steps: string; features: string; tip: string; expand: string; collapse: string };
  onToggle: () => void;
}) {
  return (
    <article className={`playbook-card ${active ? "is-active" : ""}`}>
      <button
        type="button"
        className="playbook-card-head"
        aria-expanded={active}
        aria-controls={`playbook-body-${scenario.id}`}
        onClick={onToggle}
      >
        <span className="playbook-card-icon" aria-hidden="true">{scenario.icon}</span>
        <span className="playbook-card-text">
          <strong>{scenario.title}</strong>
          <small>{scenario.tagline}</small>
        </span>
        <em className="playbook-card-toggle">
          <span>{active ? labels.collapse : labels.expand}</span>
          <ChevronIcon />
        </em>
      </button>

      {/* 内容始终渲染进静态 HTML（利于 SEO），未展开时通过 hidden 隐藏 */}
      <div className="playbook-card-body" id={`playbook-body-${scenario.id}`} hidden={!active}>
        <p className="playbook-card-intro">{scenario.intro}</p>

        <span className="playbook-card-label">{labels.steps}</span>
        <ol className="playbook-steps">
          {scenario.steps.map((step, index) => (
            <li key={step}>
              <i aria-hidden="true">{index + 1}</i>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        {scenario.tip && (
          <p className="playbook-tip">
            <strong>{labels.tip}</strong>
            {scenario.tip}
          </p>
        )}

        <div className="playbook-card-foot">
          <div className="playbook-features" aria-label={labels.features}>
            {scenario.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          {embed && scenario.action && (
            <a className="playbook-try" href={`${guideActionScheme}${scenario.action.id}`}>
              {scenario.action.label}
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PlaybookPage() {
  const { locale, embed } = useSite();
  const copy = playbookCopy[locale];
  const [category, setCategory] = useState<PlaybookCategory>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const visibleScenarios = copy.scenarios.filter(
    (scenario) => category === "all" || scenario.category === category,
  );

  return (
    <main className="playbook-page">
      <section className="playbook-hero">
        <div className="playbook-hero-glow" aria-hidden="true" />
        <div className="container playbook-hero-inner">
          <div className="playbook-brand">
            <img
              src="/assets/icons/Appicon.png"
              alt=""
              width="120"
              height="120"
            />
            <span>
              <strong>{copy.brandName}</strong>
              <small>{copy.brandTagline}</small>
            </span>
            <em>{copy.kicker}</em>
          </div>
          <h1>{copy.title}</h1>
          <p>{copy.lead}</p>
          <div className="playbook-hero-stats">
            {copy.heroStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="playbook-stages section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">{copy.stageKicker}</span>
            <h2>{copy.stageTitle}</h2>
            <p>{copy.stageLead}</p>
          </div>
          <div className="playbook-stage-grid">
            {copy.stages.map((stage, index) => (
              <article className="playbook-stage" key={stage.title}>
                <div className="playbook-stage-top">
                  <span className="playbook-stage-index">{String(index + 1).padStart(2, "0")}</span>
                  {index < copy.stages.length - 1 && <span className="playbook-stage-line" aria-hidden="true" />}
                </div>
                <h3>{stage.title}</h3>
                <em>{stage.subtitle}</em>
                <p>{stage.body}</p>
                <ul className="playbook-check-list">
                  {stage.bullets.map((bullet) => (
                    <li key={bullet}>
                      <i aria-hidden="true">✓</i>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="playbook-scenarios section" id="playbook">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">{copy.scenarioKicker}</span>
            <h2>{copy.scenarioTitle}</h2>
            <p>{copy.scenarioLead}</p>
          </div>

          <div className="playbook-filter" role="tablist" aria-label={copy.scenarioKicker}>
            {copy.categories.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={category === item.id}
                className={category === item.id ? "is-active" : ""}
                onClick={() => setCategory(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="playbook-grid">
            {visibleScenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                scenario={scenario}
                active={activeId === scenario.id}
                embed={embed}
                labels={copy.labels}
                onToggle={() => setActiveId(activeId === scenario.id ? null : scenario.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="playbook-reference section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">{copy.referenceKicker}</span>
            <h2>{copy.referenceTitle}</h2>
            <p>{copy.referenceLead}</p>
          </div>
          <div className="playbook-reference-grid">
            {copy.referenceGroups.map((group) => (
              <article className="playbook-reference-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(([name, desc]) => (
                    <li key={name}>
                      <strong>{name}</strong>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {!embed && (
        <section className="detail-final-cta">
          <div className="container detail-final-inner">
            <div>
              <span>{copy.finalKicker}</span>
              <h2>{copy.finalTitle}</h2>
            </div>
            <a className="button button-primary" href="/download">
              {copy.finalAction}
              <ArrowIcon />
            </a>
          </div>
        </section>
      )}
    </main>
  );
}
