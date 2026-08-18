import { Container } from "./Container";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { IconStudioLamarck } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-[0.9rem] text-ink-soft">
            Vos newsletters, sans le bruit.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 text-[0.82rem] text-ink-faint sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <p>
              © {new Date().getFullYear()} {site.name}. Tous droits réservés.
            </p>
            {/* Flux de texte inline (et non inline-flex) : la phrase se coupe
                naturellement en fin de ligne au lieu d'écarteler ses morceaux
                quand la place manque. */}
            <p>
              Créé par{" "}
              <a
                href="https://github.com/EmileRy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Émile
              </a>{" "}
              avec le soutien de{" "}
              <IconStudioLamarck
                width={13}
                height={13}
                className="inline align-[-0.1em] text-ink"
                aria-hidden
              />{" "}
              <a
                href="https://studiolamarck.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium whitespace-nowrap text-ink-soft transition-colors hover:text-ink"
              >
                Studio Lamarck
              </a>
            </p>
          </div>
          {/* flex-wrap + whitespace-nowrap : sur mobile la rangée passe à la
              ligne entre les liens au lieu de couper « Politique de
              confidentialité » en deux et de désaligner ses voisins. */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href="/contact"
              className="whitespace-nowrap transition-colors hover:text-ink"
            >
              Contact
            </a>
            <a
              href="/confidentialite"
              className="whitespace-nowrap transition-colors hover:text-ink"
            >
              Politique de confidentialité
            </a>
            <span className="whitespace-nowrap">{site.domain}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
