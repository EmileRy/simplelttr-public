import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const CONTACT = "contact@simplelttr.app";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question, une suggestion ou une demande ? Écrivez-nous à contact@simplelttr.app.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="max-w-3xl py-16 sm:py-20">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            {site.name}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-display text-ink sm:text-5xl">
            Contact
          </h1>

          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              Une question, une suggestion ou tout autre type de demande ? Nous
              sommes à votre écoute. Écrivez-nous par e-mail, nous vous
              répondrons dès que possible.
            </p>
          </div>

          <a
            href={`mailto:${CONTACT}`}
            className="mt-8 inline-flex items-center rounded-xl bg-ink px-6 py-4 text-[1rem] font-semibold tracking-display text-white transition-colors hover:bg-ink/90"
          >
            {CONTACT}
          </a>
        </Container>
      </main>
      <Footer />
    </>
  );
}
