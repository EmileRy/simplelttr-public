import { Container } from "./Container";
import { site } from "@/lib/site";
import { IconCopy } from "./icons";

export function AddressBand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-surface-soft/60 p-8 text-center sm:p-12">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Votre adresse unique
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-display text-ink sm:text-3xl">
            Une adresse dédiée à vos newsletters
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-ink-soft">
            Abonnez-vous avec cette adresse — tout ce qui y est envoyé arrive
            directement dans votre Inbox SimpleLttr, à l'écart de votre boîte
            mail principale.
          </p>

          <div className="mx-auto mt-7 flex max-w-md items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3">
            <code className="truncate font-sans text-[0.95rem] font-medium text-ink">
              {site.sampleAddress}
            </code>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-[0.8rem] font-semibold text-white">
              <IconCopy width={15} height={15} />
              Copier
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
