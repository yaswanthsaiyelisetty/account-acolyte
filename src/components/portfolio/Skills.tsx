import {
  BarChart3,
  Bot,
  Braces,
  CloudCog,
  Database,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Section } from "./Section";
import { skills, certifications } from "@/data/portfolio";

const skillDetails: Record<
  string,
  { description: string; icon: LucideIcon }
> = {
  "Data Engineering": {
    description:
      "Designing reliable data pipelines, lakehouse layers and validation workflows for analytics-ready data.",
    icon: Workflow,
  },
  "Business Intelligence": {
    description:
      "Turning operational data into clear reporting, automated analysis and decision-ready dashboards.",
    icon: BarChart3,
  },
  "Artificial Intelligence": {
    description:
      "Building retrieval, language and agent systems that move from prototype to dependable product.",
    icon: Bot,
  },
  Databases: {
    description:
      "Working across relational, vector and document stores for transactional and AI workloads.",
    icon: Database,
  },
  Programming: {
    description:
      "Developing data services, APIs and production applications with a practical full-stack toolkit.",
    icon: Braces,
  },
  "Cloud & Tooling": {
    description:
      "Shipping containerized systems with modern cloud, deployment and infrastructure tooling.",
    icon: CloudCog,
  },
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Expertise"
      title="Technology stack"
      intro="A toolkit spanning AI, cloud infrastructure and modern data platforms."
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-border shadow-2xl shadow-background/40">
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const detail = skillDetails[skill.group];
            const Icon = detail?.icon ?? Braces;

            return (
              <article
                key={skill.group}
                className="group min-h-80 bg-card p-7 backdrop-blur-xl transition-colors duration-300 hover:bg-surface-2 sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-editorial text-3xl font-normal leading-tight text-heading">
                    {skill.group}
                  </h3>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_24px_var(--skill-glow)]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                </div>

                <p className="mt-5 min-h-20 font-work text-sm leading-relaxed text-muted-foreground">
                  {detail?.description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-chip px-3 py-1.5 font-work text-xs text-chip-foreground transition-colors duration-300 hover:border-primary/50 hover:bg-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Credentials
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {certifications.map((c) => (
            <article
              key={c.name}
              className={`card flex items-start gap-5 rounded-2xl p-8 ${
                c.tier ? "border-input" : ""
              }`}
            >
              <span
                className={`mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-serif text-sm ${
                  c.tier
                    ? "bg-ink text-ink-foreground"
                    : "bg-chip text-chip-foreground"
                }`}
              >
                {c.code ?? "★"}
              </span>
              <div className="min-w-0">
                <p className="font-editorial text-xl text-heading">{c.name}</p>
                <p className="mt-1 font-work text-xs text-muted-foreground">{c.issuer}</p>
                {c.verifyUrl ? (
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs font-medium text-heading underline-offset-4 hover:underline"
                  >
                    Verify credential ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
