import Image from "next/image";
import { Container } from "./Container";
import { IconCheck } from "./icons";

type Tile = {
  name: string;
  cadence: string;
  cover: string;
  subscribed?: boolean;
};

const tiles: Tile[] = [
  {
    name: "Quotidien Matin",
    cadence: "Chaque jour en semaine",
    cover: "/newsletters/quotidien_matin.webp",
  },
  {
    name: "La Newsletter d'Hugo Clément",
    cadence: "Chaque semaine",
    cover: "/newsletters/hugoclement.jpg",
    subscribed: true,
  },
  {
    name: "L'alerte Bon Pote",
    cadence: "Variable",
    cover: "/newsletters/bonpote.png",
    subscribed: true,
  },
  {
    name: "Les Actus du jour",
    cadence: "Chaque jour en semaine",
    cover: "/newsletters/hugodecrypte_actusdujour.jpg",
    subscribed: true,
  },
  {
    name: "Tout n'est pas foutu !",
    cadence: "Chaque semaine",
    cover: "/newsletters/mediapositif_toutnestpasfoutu.jpg",
  },
];

function CatalogueTile({ tile }: { tile: Tile }) {
  return (
    <div className="w-40 shrink-0">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface-soft">
        <Image
          src={tile.cover}
          alt={`Pochette de la newsletter ${tile.name}`}
          fill
          sizes="160px"
          className="object-cover"
        />
        {tile.subscribed && (
          <span className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white ring-2 ring-white/70">
            <IconCheck width={14} height={14} />
          </span>
        )}
      </div>
      <p className="mt-2.5 truncate text-[0.9rem] font-semibold tracking-display text-ink">
        {tile.name}
      </p>
      <p className="truncate text-[0.8rem] text-ink-faint">{tile.cadence}</p>
    </div>
  );
}

export function Catalogue() {
  return (
    <section id="catalogue" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Catalogue
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-display text-ink sm:text-4xl">
            Découvrez de nouvelles newsletters
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-soft">
            Un espace éditorial avec nos sélections — « à la une », « on aime, on
            recommande ». Un badge indique celles auxquelles vous êtes déjà
            abonné, et l'abonnement se fait en un geste.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-line bg-white p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)] sm:p-8">
          <p className="text-[1.05rem] font-bold tracking-display text-ink">
            On aime, on recommande
          </p>
          <p className="text-[0.9rem] text-ink-faint">Notre sélection coups de cœur</p>

          <div className="-mx-6 mt-6 flex gap-5 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tiles.map((tile) => (
              <CatalogueTile key={tile.name} tile={tile} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
