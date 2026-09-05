import { useState } from "react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

const filters = ["All", "Agentic AI", "Data Engineering & BI"] as const;

export function Work() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Things I've built."
      intro="Agentic AI systems, data pipelines and BI dashboards — shipped, deployed and open on GitHub."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              active === f
                ? "border-primary bg-primary/12 text-primary"
                : "border-border text-muted-foreground hover:bg-secondary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {visible.map((p) => (
          <article
            key={p.name}
            className="overflow-hidden rounded-3xl border border-border bg-surface"
          >
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
              <div className="min-w-0">
                {p.award ? (
                  <p className="mb-4 inline-block rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                    {p.award}
                  </p>
                ) : null}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {p.name}
                  </h3>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground">
                    {p.status}
                  </span>
                </div>
                <p className="mt-1.5 text-base text-muted-foreground">{p.subtitle}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground/70">
                  {p.meta}
                </p>
                <p className="mt-6 text-base leading-relaxed text-foreground/90">
                  {p.summary}
                </p>
                {p.role ? (
                  <p className="mt-4 text-sm text-muted-foreground">{p.role}</p>
                ) : null}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                {p.link || p.live ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-85"
                      >
                        Live site
                      </a>
                    ) : null}
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        View code
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="min-w-0">
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="bg-background px-5 py-6">
                      <dt className="text-xl font-semibold tracking-tight">{m.value}</dt>
                      <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                        {m.label}
                      </dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-6 space-y-3">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
