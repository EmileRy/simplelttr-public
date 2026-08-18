/**
 * Emplacement pour une image / capture d'écran.
 * Remplace-le par un <Image ... /> quand tu as le visuel.
 */
export function ImagePlaceholder({
  label = "Capture d'écran",
  ratio = "aspect-[16/10]",
  className = "",
}: {
  label?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex ${ratio} w-full items-center justify-center rounded-2xl border border-dashed border-line bg-surface-soft/70 ${className}`}
    >
      <div className="flex flex-col items-center gap-2 text-ink-faint">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9" r="1.5" />
          <path d="m21 16-5-5L5 20" />
        </svg>
        <span className="text-[0.8rem] font-medium">{label}</span>
      </div>
    </div>
  );
}
