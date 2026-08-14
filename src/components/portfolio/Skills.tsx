import { Section } from "./Section";
import { skills } from "@/data/portfolio";

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
    </Section>
  );
}
