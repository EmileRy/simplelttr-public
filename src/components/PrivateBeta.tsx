import { Container } from "./Container";
import { site } from "@/lib/site";
import { IconKey, IconHourglass, IconArrowRight } from "./icons";

const paths = [
  {
    icon: IconKey,
    title: "Avec un code d'invitation",
    body: "Un code en poche ? Saisissez-le à l'ouverture de l'app pour créer votre compte et votre adresse de transfert immédiatement.",
  },
  {
    icon: IconHourglass,
    title: "Via la liste d'attente",
    body: "Sans code, inscrivez-vous à la liste d'attente depuis l'app. Nous ouvrons les accès par vagues et vous prévenons dès que votre tour arrive.",
  },
];

export function PrivateBeta() {
  if (!site.privateBeta) return null;

  return (
    <section
      id="beta"
      className="scroll-mt-20 border-y border-line bg-surface-soft/50 py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Beta privée
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-display text-ink sm:text-4xl">
            SimpleLttr s'ouvre progressivement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-ink-soft">
            L'app est en beta privée : elle est complète et utilisable au
            quotidien, mais les inscriptions se font par petits groupes, le
            temps de faire grandir le service au bon rythme. Deux façons
            d'entrer.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {paths.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-white p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                  <Icon width={22} height={22} />
                </span>
                <h3 className="mt-5 text-[1.15rem] font-semibold tracking-display text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={site.links.web}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[0.95rem] font-semibold tracking-display text-white transition-transform hover:scale-[1.03]"
          >
            Accéder à la bêta
            <IconArrowRight
              width={18}
              height={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
