import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://simplelttr.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SimpleLttr — Vos newsletters, sans le bruit.",
    template: "%s · SimpleLttr",
  },
  description:
    "SimpleLttr est un lecteur de newsletters épuré. Chaque compte reçoit une adresse email unique vers laquelle transférer ses abonnements, pour les lire à l'écart de la boîte mail principale.",
  keywords: [
    "newsletters",
    "lecteur de newsletters",
    "email",
    "inbox",
    "SimpleLttr",
    "lecture sans distraction",
  ],
  openGraph: {
    title: "SimpleLttr — Vos newsletters, enfin au calme",
    description:
      "Un lecteur de newsletters épuré. Une adresse unique, une inbox sans distraction, un catalogue pour découvrir.",
    url: siteUrl,
    siteName: "SimpleLttr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpleLttr — Vos newsletters, enfin au calme",
    description:
      "Un lecteur de newsletters épuré. Une adresse unique, une inbox sans distraction.",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
