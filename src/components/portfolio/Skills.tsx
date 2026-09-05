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
          <div key={s.group} className="glass rounded-3xl p-8">
            <h3 className="text-sm font-semibold tracking-tight">{s.group}</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-white/20 hover:text-foreground"
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
              className={`glass flex items-start gap-5 rounded-3xl p-8 ${
                c.tier ? "border-white/[0.14]" : ""
              }`}
            >
              <span
                className={`mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[11px] font-semibold ${
                  c.tier
                    ? "bg-gradient-to-b from-white/25 to-white/5 text-foreground"
                    : "bg-white/[0.05] text-muted-foreground"
                }`}
              >
                {c.code ?? "★"}
              </span>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold tracking-tight">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                {c.tier ? (
                  <a
                    href="https://learn.microsoft.com/en-us/credentials/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs text-primary underline-offset-4 hover:underline"
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
