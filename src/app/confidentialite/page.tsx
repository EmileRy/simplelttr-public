import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment SimpleLttr collecte, utilise et protège vos données personnelles, conformément au RGPD.",
};

const LAST_UPDATE = "23 juillet 2026";
const CONTACT = "contact@simplelttr.app";

function Section({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 scroll-mt-24">
      <h2 className="text-[1.35rem] font-bold tracking-display text-ink">
        <span className="text-ink-faint">{n}.</span> {title}
      </h2>
      <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ink-faint"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const dataRows: [string, string, string][] = [
  [
    "Données de compte",
    "Adresse e-mail, nom, photo de profil (via connexion Google)",
    "Créer et sécuriser votre compte",
  ],
  [
    "Adresse de transfert",
    "Adresse unique générée pour votre compte (ex. forest-marble@…)",
    "Router les newsletters vers votre boîte de réception",
  ],
  [
    "Contenu des newsletters",
    "E-mails transférés par vous ou par des tiers vers votre adresse de transfert",
    "Afficher, indexer et organiser vos lectures",
  ],
  [
    "Données de lecture",
    "Statut lu/non lu, temps de lecture estimé, progression de défilement",
    "Marquer automatiquement les articles comme lus, calculer le temps de lecture",
  ],
  [
    "Données techniques",
    "Jetons d'authentification (JWT), cookies de session, adresse IP, journaux serveur",
    "Sécuriser les connexions et maintenir la session active",
  ],
];

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main>
        <Container className="max-w-3xl py-16 sm:py-20">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            {site.name}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-display text-ink sm:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-[0.9rem] text-ink-faint">
            Dernière mise à jour : {LAST_UPDATE}
          </p>

          <div className="mt-8 space-y-4 text-[0.98rem] leading-relaxed text-ink-soft">
            <p>
              La présente politique de confidentialité décrit comment{" "}
              {site.name} (« nous », « l'application ») collecte, utilise et
              protège les données personnelles des utilisateurs (« vous »). Elle
              s'applique à l'utilisation du service web et, le cas échéant, des
              applications mobiles associées.
            </p>
            <p>
              Nous nous engageons à ne collecter que les données strictement
              nécessaires au fonctionnement du service, conformément au
              Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <Section n={1} title="Responsable du traitement">
            <p>
              Éditeur : <strong className="text-ink">Studio Lamarck</strong>
              <br />
              Contact :{" "}
              <a
                href={`mailto:${CONTACT}`}
                className="text-ink underline underline-offset-2 hover:text-ink-soft"
              >
                {CONTACT}
              </a>
            </p>
          </Section>

          <Section n={2} title="Données que nous collectons">
            <p>Nous collectons les catégories de données suivantes :</p>
            <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[560px] border-collapse text-left text-[0.9rem]">
                <thead>
                  <tr className="border-b border-line">
                    <th className="py-3 pr-4 font-semibold text-ink">
                      Catégorie de données
                    </th>
                    <th className="py-3 pr-4 font-semibold text-ink">
                      Exemples
                    </th>
                    <th className="py-3 font-semibold text-ink">Finalité</th>
                  </tr>
                </thead>
                <tbody>
                  {dataRows.map(([cat, ex, fin]) => (
                    <tr key={cat} className="border-b border-line align-top">
                      <td className="py-3 pr-4 font-medium text-ink">{cat}</td>
                      <td className="py-3 pr-4 text-ink-soft">{ex}</td>
                      <td className="py-3 text-ink-soft">{fin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Nous ne demandons ni ne stockons de mot de passe :
              l'authentification se fait exclusivement via Google (Connexion avec
              Google).
            </p>
          </Section>

          <Section n={3} title="Finalités du traitement">
            <p>Vos données sont utilisées pour :</p>
            <Bullets
              items={[
                "Fournir et faire fonctionner le service (réception, affichage et classement de vos newsletters) ;",
                "Authentifier votre compte de façon sécurisée ;",
                "Améliorer la fiabilité et la performance du service ;",
                "Assurer la sécurité de la plateforme (détection d'abus, prévention de la fraude) ;",
                "Communiquer avec vous en cas d'incident affectant votre compte.",
              ]}
            />
            <p>
              Nous n'utilisons pas vos données à des fins publicitaires et ne les
              vendons à aucun tiers.
            </p>
          </Section>

          <Section n={4} title="Base légale du traitement">
            <p>Le traitement de vos données repose sur :</p>
            <Bullets
              items={[
                "L'exécution du contrat qui nous lie (fourniture du service que vous avez demandé) ;",
                "Notre intérêt légitime à assurer la sécurité et le bon fonctionnement du service ;",
                "Votre consentement, lorsque celui-ci est requis (par exemple pour certains cookies non essentiels).",
              ]}
            />
          </Section>

          <Section n={5} title="Destinataires et sous-traitants">
            <p>
              Certaines données peuvent être transmises à des prestataires
              techniques, dans la stricte limite nécessaire à la fourniture du
              service :
            </p>
            <Bullets
              items={[
                "Google (authentification OAuth) — traitement des informations de connexion ;",
                "Notre hébergeur (infrastructure serveur et base de données) ;",
                "Notre serveur d'envoi/réception d'e-mails (auto-hébergé), utilisé pour l'ingestion des newsletters.",
              ]}
            />
            <p>
              Ces prestataires n'ont accès qu'aux données strictement nécessaires
              à l'exécution de leur mission et sont tenus à des obligations de
              confidentialité et de sécurité.
            </p>
          </Section>

          <Section n={6} title="Transferts de données hors Union européenne">
            <p>
              Certains de nos prestataires (notamment Google) peuvent traiter des
              données en dehors de l'Union européenne. Dans ce cas, ces
              transferts s'appuient sur des garanties appropriées (clauses
              contractuelles types de la Commission européenne ou décision
              d'adéquation).
            </p>
          </Section>

          <Section n={7} title="Durée de conservation">
            <Bullets
              items={[
                "Données de compte : conservées tant que votre compte est actif ;",
                "Contenu des newsletters : conservé tant que vous ne le supprimez pas, ou pendant 12 mois après votre dernière connexion ;",
                "Journaux techniques : conservés de 30 à 90 jours à des fins de sécurité ;",
                "En cas de suppression du compte, l'ensemble de vos données (abonnements, newsletters, adresse de transfert) est supprimé de manière définitive, sous réserve d'obligations légales de conservation.",
              ]}
            />
          </Section>

          <Section n={8} title="Sécurité de vos données">
            <p>
              Nous mettons en œuvre des mesures techniques pour protéger vos
              données, notamment :
            </p>
            <Bullets
              items={[
                "Authentification par jetons (JWT) avec rotation des jetons de rafraîchissement ;",
                "Cookies de session configurés en httpOnly, Secure et SameSite=Strict ;",
                "Chiffrement des communications entre votre navigateur et nos serveurs (HTTPS) ;",
                "Accès restreint aux données par le personnel technique, limité à ce qui est nécessaire à la maintenance du service.",
              ]}
            />
          </Section>

          <Section n={9} title="Vos droits">
            <p>
              Conformément au RGPD, vous disposez des droits suivants concernant
              vos données :
            </p>
            <Bullets
              items={[
                "Droit d'accès à vos données ;",
                "Droit de rectification des données inexactes ;",
                "Droit à l'effacement (« droit à l'oubli »), notamment via la suppression de compte disponible directement dans l'application ;",
                "Droit à la portabilité de vos données ;",
                "Droit d'opposition et de limitation du traitement ;",
                "Droit de retirer votre consentement à tout moment, lorsque le traitement en dépend.",
              ]}
            />
            <p>
              Pour exercer ces droits, contactez-nous à l'adresse suivante :{" "}
              <a
                href={`mailto:${CONTACT}`}
                className="text-ink underline underline-offset-2 hover:text-ink-soft"
              >
                {CONTACT}
              </a>
              .
            </p>
            <p>
              Vous disposez également du droit d'introduire une réclamation auprès
              de la Commission Nationale de l'Informatique et des Libertés (CNIL)
              ou de l'autorité de protection des données compétente dans votre
              pays de résidence.
            </p>
          </Section>

          <Section n={10} title="Cookies">
            <p>
              Nous utilisons uniquement des cookies strictement nécessaires au
              fonctionnement du service (gestion de la session et de
              l'authentification). Aucun cookie publicitaire ou de traçage tiers
              n'est utilisé.
            </p>
          </Section>

          <Section n={11} title="Mineurs">
            <p>
              Le service n'est pas destiné aux personnes de moins de 16 ans. Nous
              ne collectons pas sciemment de données concernant des mineurs.
            </p>
          </Section>

          <Section n={12} title="Modifications de cette politique">
            <p>
              Cette politique de confidentialité peut être mise à jour
              périodiquement. Toute modification substantielle vous sera notifiée
              par e-mail ou via une notification dans l'application. La date de
              dernière mise à jour figure en haut de ce document.
            </p>
          </Section>

          <Section n={13} title="Contact">
            <p>
              Pour toute question relative à cette politique de confidentialité ou
              au traitement de vos données, vous pouvez nous contacter à :{" "}
              <a
                href={`mailto:${CONTACT}`}
                className="text-ink underline underline-offset-2 hover:text-ink-soft"
              >
                {CONTACT}
              </a>
              .
            </p>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
