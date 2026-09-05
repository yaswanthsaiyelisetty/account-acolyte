import profilePhoto from "@/assets/profile.png.asset.json";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center px-6 py-24 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
        {/* Profile picture */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/40 via-wave-violet/30 to-transparent blur-2xl" />
            <img
              src={profilePhoto.url}
              alt={`Portrait of ${profile.name}`}
              className="relative h-64 w-64 rounded-full border-2 border-border object-cover object-center shadow-2xl shadow-black/20 grayscale transition-all duration-500 hover:grayscale-0 sm:h-72 sm:w-72"
            />
          </div>
        </div>

        {/* Text column */}
        <div className="text-center lg:text-left">
          <h1 className="text-display text-balance-tight text-4xl sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mx-auto mt-5 max-w-xl font-serif text-xl leading-snug text-muted-foreground sm:text-2xl lg:mx-0">
            I architect intelligent data systems and production AI agents.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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

          <p className="mt-6 text-sm font-medium text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
