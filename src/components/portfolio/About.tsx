import { Section } from "./Section";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am" intro={profile.about}>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card rounded-2xl p-8 sm:p-10 lg:col-span-2">
          <p className="text-balance-tight text-display text-2xl leading-snug sm:text-3xl">
            “{profile.quote}”
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            {profile.name} · {profile.role}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {profile.specializations.map((s) => (
              <li
                key={s}
                className="rounded-full bg-chip px-3.5 py-1.5 text-xs tracking-[0.01em] text-chip-foreground transition-colors duration-300 hover:bg-accent"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
          {stats.slice(0, 3).map((s) => (
            <div key={s.label} className="card rounded-2xl px-8 py-6">
              <dt className="font-serif text-3xl tracking-tight text-heading">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
