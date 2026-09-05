import { Section } from "./Section";
import { skills, certifications } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Expertise"
      title="Technology stack"
      intro="A toolkit spanning AI, cloud infrastructure and modern data platforms."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="card rounded-2xl p-8">
            <h3 className="text-display text-xl">{s.group}</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full bg-chip px-3 py-1.5 text-xs tracking-[0.01em] text-chip-foreground transition-colors duration-300 hover:bg-accent"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Credentials
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {certifications.map((c) => (
            <div
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
                <p className="text-display text-lg">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                {c.tier ? (
                  <a
                    href="https://learn.microsoft.com/en-us/credentials/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs font-medium text-heading underline-offset-4 hover:underline"
                  >
                    Verify credential ↗
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
