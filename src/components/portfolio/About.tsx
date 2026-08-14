import { Section } from "./Section";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am" intro={profile.about}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="text-lg leading-relaxed text-foreground">"{profile.quote}"</p>
          <p className="mt-6 text-sm text-muted-foreground">
            {profile.name} · {profile.role}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {profile.specializations.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-6 py-8">
              <dt className="text-3xl font-semibold tracking-tight">{s.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
