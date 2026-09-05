import { Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Journey" title="Education">
      <div className="grid gap-6">
        {education.map((e) => (
          <div key={e.title} className="glass rounded-3xl p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {e.period}
            </p>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="text-2xl font-semibold tracking-tight">{e.title}</h3>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-foreground">
                {e.score}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{e.org}</p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {e.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
