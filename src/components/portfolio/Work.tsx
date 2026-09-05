import { useState } from "react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

const filters = ["All", "Agentic AI", "Data Engineering & BI"] as const;
const featured = ["CloudScale-RL", "Gmail Support Agent"];

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
      <div className="mb-10 inline-flex flex-wrap gap-1 rounded-full border border-border bg-card p-1 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.01em] transition-all duration-300 ${
              active === f
                ? "bg-ink text-ink-foreground"
                : "text-muted-foreground hover:text-heading"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((p) => {
          const wide = featured.includes(p.name);
          const mint = p.name === "CloudScale-RL";
          return (
            <article
              key={p.name}
              className={`card group relative flex flex-col overflow-hidden rounded-2xl p-8 transition-transform duration-500 hover:scale-[1.01] sm:p-10 ${
                wide ? "md:col-span-2" : ""
              }`}
            >
              {mint ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(167, 229, 211, 0.55), transparent)",
                  }}
                />
              ) : null}

              {p.award ? (
                <p className="relative mb-4 inline-block w-fit rounded-full border border-input bg-secondary px-3 py-1 text-[11px] font-medium text-heading">
                  {p.award}
                </p>
              ) : null}

              <div className="relative flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3
                  className={`text-display ${
                    wide ? "text-3xl sm:text-4xl" : "text-2xl"
                  }`}
                >
                  {p.name}
                </h3>
                <span className="rounded-full bg-chip px-2.5 py-0.5 text-[11px] text-chip-foreground">
                  {p.status}
                </span>
              </div>

              <p className="relative mt-2 text-base text-muted-foreground">{p.subtitle}</p>
              <p className="relative mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
                {p.meta}
              </p>

              <p className="relative mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground">
                {p.summary}
              </p>

              <ul className="relative mt-7 flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <li
                    key={m.label}
                    className="rounded-full bg-chip px-3.5 py-1.5 text-xs tracking-[0.01em] text-chip-foreground"
                  >
                    <span className="font-medium">{m.value}</span> {m.label}
                  </li>
                ))}
              </ul>

              <ul className="relative mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                {p.stack.map((s) => (
                  <li key={s} className="text-[11px] text-muted-foreground/80">
                    {s}
                  </li>
                ))}
              </ul>

              {p.link || p.live ? (
                <div className="relative mt-8 flex flex-wrap gap-3">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-ink-foreground transition-opacity duration-300 hover:opacity-85"
                    >
                      Live system ↗
                    </a>
                  ) : null}
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-input bg-transparent px-4 py-2 text-xs font-medium text-heading transition-colors duration-300 hover:border-heading/30"
                    >
                      Explore code ↗
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
