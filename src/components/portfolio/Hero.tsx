import profilePhoto from "@/assets/profile.png.asset.json";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--foreground) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 30%, black, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 22%, transparent), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto w-fit rounded-3xl border border-border bg-surface/50 p-1.5 backdrop-blur-md">
          <img
            src={profilePhoto.url}
            alt="Portrait of Yelisetty Yaswanth Sai"
            className="h-28 w-28 rounded-2xl object-cover object-[center_28%] grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>
        <p className="mt-8 text-sm font-medium text-primary">{profile.role}</p>
        <h1 className="mt-3 text-balance-tight text-4xl font-semibold sm:text-6xl">
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
        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Available for AI &amp; Data Engineering roles
        </p>
      </div>
    </section>
  );
}
