import profilePhoto from "@/assets/profile.png.asset.json";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 22%, transparent), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <img
          src={profilePhoto.url}
          alt="Portrait of Yelisetty Yaswanth Sai"
          className="mx-auto h-24 w-24 rounded-full object-cover object-[center_28%] ring-1 ring-border"
        />
        <p className="mt-8 text-sm font-medium text-primary">{profile.role}</p>
        <h1 className="mt-3 text-balance-tight text-5xl font-semibold sm:text-7xl">
          {profile.short}
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
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contact me
          </a>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Available for opportunities
        </p>
      </div>
    </section>
  );
}
