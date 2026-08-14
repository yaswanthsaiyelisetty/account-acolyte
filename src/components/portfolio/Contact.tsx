import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-border/60 px-5 py-24 text-center sm:py-32"
    >
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Get in touch
        </p>
        <h2 className="mt-3 text-balance-tight text-3xl font-semibold sm:text-5xl">
          Let's build dependable systems.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Open to AI, cloud and full-stack opportunities.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block text-lg font-medium text-primary underline-offset-4 hover:underline"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2 text-sm transition-colors hover:bg-secondary"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2 text-sm transition-colors hover:bg-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
      <footer className="mx-auto mt-24 max-w-5xl border-t border-border/60 pt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}
