import { Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Journey" title="Education">
      <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface">
        {education.map((e) => (
          <div
            key={e.title}
            className="grid gap-4 p-7 sm:grid-cols-[160px_1fr] sm:gap-10 sm:p-9"
          >
            <div className="text-sm text-muted-foreground">{e.period}</div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">{e.title}</h3>
                <span className="text-sm font-medium text-primary">{e.score}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {e.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
