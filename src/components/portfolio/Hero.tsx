import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center px-6 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 22%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-primary">{profile.role}</p>

        <h1 className="text-display text-balance-tight mt-3 text-5xl sm:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-balance-tight text-2xl font-medium text-muted-foreground sm:text-3xl">
          {profile.tagline}
        </p>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-85"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-input px-6 py-2.5 text-sm font-medium text-heading transition-colors hover:bg-secondary"
          >
            Contact me
          </a>
        </div>

        <p className="mt-8 text-sm font-medium text-muted-foreground">
          {profile.role} · {profile.location}
        </p>
      </div>
    </section>
  );
}
