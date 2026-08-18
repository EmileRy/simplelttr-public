import { Container } from "./Container";
import { DownloadButtons } from "./DownloadButtons";
import { site } from "@/lib/site";

export function DownloadCTA() {
  return (
    <section id="telecharger" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_0%,rgba(255,255,255,0.12),transparent_65%)]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight tracking-display text-white sm:text-5xl">
              Reprenez le contrôle de vos newsletters
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-pretty text-[1.05rem] text-white/70">
              {site.privateBeta
                ? "Sur le web, iOS et Android. L'accès se fait par code d'invitation ou liste d'attente, le temps de la beta privée."
                : "Disponible sur le web, iOS et Android. Créez votre adresse unique et commencez à lire au calme."}
            </p>

            <div className="mt-9 flex justify-center">
              <DownloadButtons variant="dark" className="justify-center" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
