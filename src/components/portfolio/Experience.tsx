import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Internship" title="Experience">
      <div className="grid gap-6">
        {experience.map((e) => (
          <div key={e.role} className="card rounded-2xl p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {e.period}
            </p>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="text-display text-2xl sm:text-3xl">{e.role}</h3>
              <span className="rounded-full bg-chip px-3 py-1 text-xs text-chip-foreground">
                {e.type}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{e.company}</p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {e.description}
            </p>
            {e.certificateId ? (
              <p className="mt-5 text-xs text-muted-foreground">
                Certificate ID: <span className="font-medium text-foreground">{e.certificateId}</span>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
