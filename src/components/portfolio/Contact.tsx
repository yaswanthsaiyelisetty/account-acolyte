import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-28 text-center sm:py-36">
      <div className="card mx-auto max-w-3xl rounded-2xl px-8 py-16 sm:px-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Get in touch
        </p>
        <h2 className="mt-4 text-balance-tight text-display text-4xl sm:text-6xl">
          Let's build dependable systems.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Open to AI, data engineering and cloud opportunities.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block font-serif text-xl text-heading underline-offset-4 hover:underline"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-input bg-transparent px-5 py-2 text-sm text-heading transition-colors duration-300 hover:border-heading/30"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-input bg-transparent px-5 py-2 text-sm text-heading transition-colors duration-300 hover:border-heading/30"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <footer className="mx-auto mt-20 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}
