import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial = stored === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    window.localStorage.setItem("theme", next);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-12 max-w-3xl items-center justify-between gap-4 rounded-full border border-border bg-card/80 px-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:px-5">
        <a href="#top" className="shrink-0 font-serif text-lg text-heading">
          YSY<span className="text-muted-foreground">.</span>
        </a>
        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.01em] text-muted-foreground transition-colors duration-300 hover:text-heading"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-input hover:text-heading"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-ink-foreground transition-opacity duration-300 hover:opacity-85"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
