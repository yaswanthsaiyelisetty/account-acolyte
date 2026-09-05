import profilePhoto from "@/assets/profile.png.asset.json";
import { profile } from "@/data/portfolio";

const pipeline = [
  { label: "Fabric Lakehouse", detail: "Bronze → Silver → Gold" },
  { label: "PySpark Pipeline", detail: "Validated incremental loads" },
  { label: "Gemini Vector RAG", detail: "pgvector semantic retrieval" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <h1 className="text-balance-tight text-display text-5xl sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl font-serif text-xl leading-snug text-muted-foreground sm:text-2xl">
            I architect intelligent data systems and production AI agents.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-input bg-transparent px-6 py-3 text-sm font-medium text-heading transition-all duration-300 hover:scale-[1.02] hover:border-heading/30"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <img
              src={profilePhoto.url}
              alt="Portrait of Yelisetty Yaswanth Sai"
              className="h-14 w-14 rounded-2xl border border-border object-cover object-[center_28%] grayscale transition-all duration-500 hover:grayscale-0"
            />
            <p className="text-sm text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
          </div>
        </div>

        <div className="card relative rounded-2xl p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              System pipeline
            </p>
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-foreground/15" />
              <span className="h-2 w-2 rounded-full bg-foreground/15" />
              <span className="h-2 w-2 rounded-full bg-ink/70" />
            </span>
          </div>

          <ol className="mt-8 space-y-3">
            {pipeline.map((node, i) => (
              <li key={node.label}>
                <div className="rounded-xl border border-border bg-secondary/60 px-5 py-4 transition-colors duration-500 hover:border-input">
                  <p className="text-sm font-medium tracking-tight text-heading">{node.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{node.detail}</p>
                </div>
                {i < pipeline.length - 1 ? (
                  <div className="mx-auto h-6 w-px bg-gradient-to-b from-input to-transparent" />
                ) : null}
              </li>
            ))}
          </ol>

          <p className="mt-8 text-xs text-muted-foreground">
            Certified on Microsoft Fabric · shipping agentic AI in production
          </p>
        </div>
      </div>
    </section>
  );
}
