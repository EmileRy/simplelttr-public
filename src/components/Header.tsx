import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="/" aria-label={site.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.9rem] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.links.web}
          className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-[0.85rem] font-semibold tracking-display text-white transition-transform hover:scale-[1.03]"
        >
          Ouvrir l'app
        </a>
      </Container>
    </header>
  );
}
