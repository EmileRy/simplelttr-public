import { IconGlobe } from "./icons";

/* ------------------------------------------------------------------ */
/*  Inbox — recréation fidèle de l'écran principal de l'application     */
/* ------------------------------------------------------------------ */

type Mail = {
  title: string;
  sender: string;
  time: string;
  unread?: boolean;
  glyph?: "globe" | "alert" | "clover" | null;
};

type Group = { label: string; mails: Mail[] };

const inboxData: Group[] = [
  {
    label: "Aujourd'hui",
    mails: [
      { title: "C'est la faute aux écolos !", sender: "Bon Pote", time: "08:56", unread: true },
      {
        title: "Victime d'inceste, elle sauve des enfants abusés",
        sender: "Le Média Positif",
        time: "08:34",
        unread: true,
        glyph: "clover",
      },
      {
        title: "C'est quoi le problème avec Netflix ?",
        sender: "Aktionnaire",
        time: "06:30",
        unread: true,
        glyph: "globe",
      },
    ],
  },
  {
    label: "Hier",
    mails: [
      {
        title: "L'économie chinoise ralentit ?",
        sender: "HugoDécrypte",
        time: "18:40",
        unread: true,
        glyph: "alert",
      },
      {
        title: "V. Bolloré s'intéresse à Lionsgate",
        sender: "Aktionnaire",
        time: "06:30",
        glyph: "globe",
      },
    ],
  },
  {
    label: "Mercredi 15 juillet",
    mails: [
      {
        title: "Le président de la FIFA sous pression",
        sender: "HugoDécrypte",
        time: "18:04",
        glyph: "alert",
      },
      {
        title: "Christopher Nolan part à la conquête",
        sender: "Aktionnaire",
        time: "06:30",
        glyph: "globe",
      },
    ],
  },
];

function Glyph({ kind }: { kind: Mail["glyph"] }) {
  if (!kind) return null;
  if (kind === "globe")
    return <IconGlobe width={15} height={15} className="text-[#5b8def] shrink-0" />;
  if (kind === "alert")
    return <span className="text-[13px] leading-none shrink-0">🚨</span>;
  if (kind === "clover")
    return <span className="text-[13px] leading-none shrink-0">🍀</span>;
  return null;
}

function MailRow({ mail, compact }: { mail: Mail; compact?: boolean }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <span
        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
          mail.unread ? "bg-ink" : "bg-transparent"
        }`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <Glyph kind={mail.glyph} />
          <p
            className={`truncate ${
              compact ? "text-[13px]" : "text-[15px]"
            } font-semibold tracking-display text-ink`}
          >
            {mail.title}
          </p>
        </div>
        <p className="mt-0.5 text-[12px] text-ink-faint">{mail.sender}</p>
      </div>
      <span className="mt-0.5 shrink-0 text-[11px] tabular-nums text-ink-faint">
        {mail.time}
      </span>
    </div>
  );
}

function Tabs({ active }: { active: "web" | "mobile" }) {
  const items = ["Inbox", "Catalogue", "Moi"];
  return (
    <div className="flex items-baseline gap-4">
      {items.map((item, i) => (
        <span
          key={item}
          className={`${
            active === "web" && i === 0
              ? "text-ink"
              : active === "mobile" && i === 0
                ? "text-ink"
                : "text-ink-faint"
          } text-[1.35rem] font-bold tracking-display`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function FilterPills() {
  return (
    <div className="flex items-center gap-1 text-[12px] font-medium">
      <span className="rounded-full bg-surface-soft px-3 py-1 text-ink">Tout</span>
      <span className="px-3 py-1 text-ink-faint">Non lus</span>
      <span className="px-3 py-1 text-ink-faint">Enregistrés</span>
    </div>
  );
}

export function InboxScreen({
  variant = "web",
}: {
  variant?: "web" | "mobile";
}) {
  const compact = variant === "mobile";
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header */}
      <div className="px-5 pt-5">
        <div className="flex items-start justify-between">
          <Tabs active={variant} />
          {!compact && (
            <div className="hidden sm:block">
              <FilterPills />
            </div>
          )}
        </div>
        <p className="mt-1 text-[12px] text-ink-faint">5 non lus · 9 au total</p>
        {compact && (
          <div className="mt-3">
            <FilterPills />
          </div>
        )}
      </div>

      <div className="mt-2 h-px w-full bg-line" />

      {/* List */}
      <div className="min-h-0 flex-1 overflow-hidden px-5">
        {inboxData.map((group) => (
          <div key={group.label}>
            <p className="pt-4 pb-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              {group.label}
            </p>
            <div className="divide-y divide-line">
              {group.mails.map((mail) => (
                <MailRow key={mail.title} mail={mail} compact={compact} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cadre navigateur (macOS)                                           */
/* ------------------------------------------------------------------ */

export function BrowserFrame({
  url = "web.simplelttr.app",
  children,
  className = "",
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-white shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="flex items-center gap-4 border-b border-line bg-surface-soft/70 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-full max-w-xs items-center justify-center rounded-md bg-white/80 px-3 py-1 text-[12px] text-ink-soft ring-1 ring-line">
          {url}
        </div>
        <div className="w-12" />
      </div>
      <div className="aspect-[16/10] w-full">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cadre téléphone (iOS)                                              */
/* ------------------------------------------------------------------ */

export function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[2.6rem] border-[6px] border-ink bg-ink p-0 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.1rem] bg-white">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
        {children}
      </div>
    </div>
  );
}

export function PhoneInbox({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <div className="h-full pt-6">
        <InboxScreen variant="mobile" />
        {/* Barre d'onglets */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-3">
          <div className="flex items-center gap-6 rounded-full bg-white/90 px-6 py-2.5 text-[10px] font-medium text-ink-faint shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] ring-1 ring-line backdrop-blur">
            <span className="flex flex-col items-center gap-0.5 text-ink">
              <span className="text-[15px]">▤</span>Inbox
            </span>
            <span className="flex flex-col items-center gap-0.5">
              <span className="text-[15px]">▦</span>Catalogue
            </span>
            <span className="flex flex-col items-center gap-0.5">
              <span className="text-[15px]">◔</span>Moi
            </span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
