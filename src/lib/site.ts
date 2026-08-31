// Central configuration for the SimpleLttr landing site.

export const site = {
  name: "SimpleLttr",
  domain: "simplelttr.app",
  tagline: "Vos newsletters, sans le bruit.",
  description:
    "SimpleLttr est un lecteur de newsletters minimaliste. Une seule adresse pour tout recevoir, un seul endroit pour tout lire.",
  // Passe à false quand l'app sortira de la beta privée : les mentions
  // « beta » et la section dédiée de l'accueil disparaissent alors du site.
  privateBeta: true,
  links: {
    web: "https://web.simplelttr.app",
    ios: "https://apps.apple.com/us/app/simplelttr/id6791232107",
    android: "https://play.google.com/store/apps/details?id=app.simplelttr",
  },
  // Exemple d'adresse, purement décoratif.
  sampleAddress: "vous@me.simplelttr.app",
} as const;

export const nav: readonly { label: string; href: string }[] = [
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Comment ça marche", href: "/#comment" },
  // L'entrée disparaît d'elle-même à la sortie de la beta privée.
  ...(site.privateBeta ? [{ label: "Beta privée", href: "/#beta" }] : []),
  { label: "Catalogue", href: "/#catalogue" },
  { label: "Télécharger", href: "/#telecharger" },
];
