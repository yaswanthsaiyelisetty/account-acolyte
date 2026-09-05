import { Section } from "./Section";
import { skills, certifications } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Expertise"
      title="Technology stack"
      intro="A toolkit spanning AI, cloud infrastructure and modern web development."
    >
      <div className="grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="bg-surface p-7">
            <h3 className="text-sm font-semibold tracking-tight">{s.group}</h3>
            <ul className="mt-5 space-y-2.5">
              {s.items.map((i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Certifications
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-md"
            >
              <span
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[11px] font-semibold ${
                  c.tier
                    ? "bg-primary/15 text-primary"
                    : "bg-surface-2 text-muted-foreground"
                }`}
              >
                {c.code ?? "★"}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
