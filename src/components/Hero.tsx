import Image from "next/image";
import { Container } from "./Container";
import { DownloadButtons } from "./DownloadButtons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Halo doux en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,0,0,0.05),transparent_70%)]"
      />

      <Container className="relative pt-20 pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">

          <h1 className="animate-float-in mt-6 text-balance text-[2.6rem] font-bold leading-[1.05] tracking-display text-ink sm:text-6xl">
            Vos newsletters,
            <br className="hidden sm:block" /> sans le bruit.
          </h1>

          <p className="animate-float-in mx-auto mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-ink-soft sm:text-[1.15rem]">
            SimpleLttr est un lecteur de newsletters minimaliste.
            Une seule adresse pour tout recevoir, un seul endroit pour tout lire.
          </p>

          <div className="animate-float-in mt-9 flex justify-center">
            <DownloadButtons variant="light" className="justify-center" />
          </div>
        </div>

        {/* Capture : version web sur desktop, version mobile sur petit écran */}
        <div className="animate-float-in mt-14 sm:mt-16">
          {/* Web — masquée sur mobile */}
          <Image
            src="/screenshots/web-inbox.png"
            alt="L'inbox de SimpleLttr sur le web : une liste de newsletters épurée, groupée par date."
            width={2606}
            height={1756}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="mx-auto hidden h-auto w-full max-w-5xl sm:block"
          />

          {/* Mobile — visible uniquement sur petit écran */}
          <Image
            src="/screenshots/mobile-inbox.png"
            alt="L'inbox de SimpleLttr sur iPhone : une liste de newsletters épurée, groupée par date."
            width={1419}
            height={2796}
            priority
            sizes="(max-width: 640px) 75vw, 280px"
            className="mx-auto block h-auto w-full max-w-[280px] sm:hidden"
          />
        </div>
      </Container>
    </section>
  );
}
