import { Container } from "./Container";
import {
  IconAt,
  IconInbox,
  IconPause,
  IconGrid,
  IconBell,
  IconOffline,
} from "./icons";

const features = [
  {
    icon: IconAt,
    title: "Adresse de transfert unique",
    body: "Chaque compte reçoit son adresse @simplelttr.app dédiée. Transférez-y vos abonnements, ils atterrissent au bon endroit.",
  },
  {
    icon: IconInbox,
    title: "Inbox & lecture épurée",
    body: "Une liste claire de vos newsletters et une vue de lecture minimaliste, avec aperçus des contenus. Rien qui ne distrait.",
  },
  {
    icon: IconPause,
    title: "Gestion des abonnements",
    body: "Retrouvez tous vos expéditeurs d'un coup d'œil et mettez en pause ceux que vous ne voulez plus voir, sans vous désabonner.",
  },
  {
    icon: IconGrid,
    title: "Catalogue de découverte",
    body: "Un espace éditorial — sélections « à la une », « on aime » — pour trouver de nouvelles newsletters et vous abonner en un geste.",
  },
  {
    icon: IconBell,
    title: "Notifications push",
    body: "Sur mobile, choisissez d'être prévenu immédiatement à chaque arrivée, ou une fois par jour avec un résumé.",
  },
  {
    icon: IconOffline,
    title: "Mode hors ligne",
    body: "Vos newsletters sont disponibles même sans connexion sur mobile. Lisez dans le métro, en avion, partout.",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Fonctionnalités
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-display text-ink sm:text-4xl">
            Tout ce qu'il faut pour lire au calme
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-soft">
            SimpleLttr rassemble vos newsletters loin du bruit de la boîte mail,
            dans une expérience pensée pour la lecture.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-white p-7 transition-colors hover:bg-surface-soft/60"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                  <Icon width={22} height={22} />
                </span>
                <h3 className="mt-5 text-[1.15rem] font-semibold tracking-display text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
