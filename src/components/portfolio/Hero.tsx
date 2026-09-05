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
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10rem] h-[42rem] w-[70rem] max-w-[160vw] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 16%, transparent), transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-xl">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for AI &amp; Data Engineering roles
          </p>

          <h1 className="mt-7 text-balance-tight text-metallic text-5xl font-semibold sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-snug text-muted-foreground sm:text-2xl">
            I architect intelligent data systems and production AI agents.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-foreground/25"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <img
              src={profilePhoto.url}
              alt="Portrait of Yelisetty Yaswanth Sai"
              className="h-14 w-14 rounded-2xl object-cover object-[center_28%] ring-1 ring-white/10 grayscale transition-all duration-500 hover:grayscale-0"
            />
            <p className="text-sm text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
          </div>
        </div>

        <div className="glass relative rounded-3xl p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              System pipeline
            </p>
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-primary/70" />
            </span>
          </div>

          <ol className="mt-8 space-y-3">
            {pipeline.map((node, i) => (
              <li key={node.label}>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 transition-colors duration-500 hover:border-white/20">
                  <p className="text-sm font-medium tracking-tight">{node.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{node.detail}</p>
                </div>
                {i < pipeline.length - 1 ? (
                  <div className="mx-auto h-6 w-px bg-gradient-to-b from-primary/60 to-transparent" />
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
