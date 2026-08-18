import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PrivateBeta } from "@/components/PrivateBeta";
import { AddressBand } from "@/components/AddressBand";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Catalogue } from "@/components/Catalogue";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrivateBeta />
        <Features />
        <HowItWorks />
        <Catalogue />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
