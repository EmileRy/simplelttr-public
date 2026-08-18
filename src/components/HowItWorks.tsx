import Image from "next/image";
import { Container } from "./Container";

const steps = [
  {
    n: "01",
    title: "Récupérez votre adresse unique",
    body: "À l'inscription, SimpleLttr vous attribue une adresse @me.simplelttr.app rien qu'à vous.",
  },
  {
    n: "02",
    title: "Transférez vos abonnements",
    body: "Abonnez-vous avec cette adresse, ou redirigez vos newsletters existantes. Elles arrivent dans votre Inbox.",
  },
  {
    n: "03",
    title: "Lisez au calme",
    body: "Ouvrez SimpleLttr sur le web ou mobile et parcourez vos newsletters dans une interface sans distraction.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="comment"
      className="scroll-mt-20 border-y border-line bg-surface-soft/50 py-14 sm:py-20"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              Comment ça marche
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-display text-ink sm:text-4xl">
              Trois étapes, et c'est réglé
            </h2>

            <ol className="mt-10 space-y-8">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="shrink-0 text-[1.4rem] font-bold tabular-nums tracking-display text-ink-faint">
                    {s.n}
                  </span>
                  <div className="border-l border-line pl-5">
                    <h3 className="text-[1.15rem] font-semibold tracking-display text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Capture : abonnement guidé depuis le catalogue */}
          <div className="lg:pl-6">
            <Image
              src="/screenshots/mobile-subscribe.png"
              alt="L'abonnement guidé dans SimpleLttr : copier son adresse de transfert, puis la coller sur le site de la newsletter."
              width={1419}
              height={2796}
              sizes="(max-width: 1024px) 70vw, 360px"
              className="mx-auto w-full max-w-[300px] drop-shadow-[0_16px_24px_rgba(0,0,0,0.10)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
