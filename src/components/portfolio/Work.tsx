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
      <div className="mb-10 inline-flex flex-wrap gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-xl">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
              active === f
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((p) => {
          const wide = featured.includes(p.name);
          return (
            <article
              key={p.name}
              className={`glass group flex flex-col rounded-3xl p-8 transition-transform duration-500 hover:scale-[1.01] sm:p-10 ${
                wide ? "md:col-span-2" : ""
              }`}
            >
              {p.award ? (
                <p className="mb-4 inline-block w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                  {p.award}
                </p>
              ) : null}

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3
                  className={`text-metallic font-semibold tracking-tight ${
                    wide ? "text-3xl sm:text-4xl" : "text-2xl"
                  }`}
                >
                  {p.name}
                </h3>
                <span className="rounded-full border border-white/[0.08] px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  {p.status}
                </span>
              </div>

              <p className="mt-2 text-base text-muted-foreground">{p.subtitle}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground/60">
                {p.meta}
              </p>

              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground/85">
                {p.summary}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <li
                    key={m.label}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">{m.value}</span>{" "}
                    {m.label}
                  </li>
                ))}
              </ul>

              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                {p.stack.map((s) => (
                  <li key={s} className="text-[11px] text-muted-foreground/70">
                    {s}
                  </li>
                ))}
              </ul>

              {p.link || p.live ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity duration-300 hover:opacity-85"
                    >
                      Live system ↗
                    </a>
                  ) : null}
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/[0.1] px-4 py-2 text-xs font-medium text-foreground transition-colors duration-300 hover:border-white/25"
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
