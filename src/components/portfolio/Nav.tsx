const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex h-12 max-w-3xl items-center justify-between gap-4 rounded-full px-4 sm:px-5">
        <a href="#top" className="shrink-0 text-sm font-semibold tracking-tight">
          YSY<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="shrink-0 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-opacity duration-300 hover:opacity-85"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
