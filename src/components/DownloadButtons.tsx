import { site } from "@/lib/site";
import { IconApple, IconAndroid, IconGlobe } from "./icons";

type Variant = "dark" | "light";

function storeClasses(variant: Variant) {
  return variant === "dark"
    ? "bg-white text-ink hover:bg-white/90 border-transparent"
    : "bg-ink text-white hover:bg-ink/90 border-transparent";
}

function StoreButton({
  href,
  icon,
  top,
  bottom,
  variant,
}: {
  href: string;
  icon: React.ReactNode;
  top: string;
  bottom: string;
  variant: Variant;
}) {
  const baseClasses =
    "group inline-flex items-center gap-3 rounded-xl border px-5 py-3";

  const content = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-none text-left">
        <span className="text-[0.65rem] font-medium opacity-70">{top}</span>
        <span className="text-[0.95rem] font-semibold tracking-display">
          {bottom}
        </span>
      </span>
    </>
  );

  return (
    <a
      href={href}
      className={`${baseClasses} transition-colors ${storeClasses(variant)}`}
    >
      {content}
    </a>
  );
}

export function DownloadButtons({
  variant = "light",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-4 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-3">
        <StoreButton
          href={site.links.ios}
          icon={<IconApple width={22} height={22} />}
          top="Télécharger sur"
          bottom="l'App Store"
          variant={variant}
        />
        <StoreButton
          href={site.links.android}
          icon={<IconAndroid width={22} height={22} />}
          top="Disponible sur"
          bottom="Google Play"
          variant={variant}
        />
        <StoreButton
          href={site.links.web}
          icon={<IconGlobe width={22} height={22} />}
          top="Ouvrir sur"
          bottom="le Web"
          variant={variant}
        />
      </div>

      {site.privateBeta && (
        <a
          href="/#beta"
          className={`inline-flex items-center text-[0.85rem] font-medium underline decoration-dotted underline-offset-4 transition-colors ${
            variant === "dark"
              ? "text-white/70 hover:text-white"
              : "text-ink-soft hover:text-ink"
          }`}
        >
          Beta privée — accès sur invitation ou liste d'attente
        </a>
      )}
    </div>
  );
}
