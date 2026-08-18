import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({
  withWordmark = true,
  size = 28,
  className = "",
}: {
  withWordmark?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.svg"
        alt={`Logo ${site.name}`}
        width={size}
        height={size}
        priority
        className="rounded-[22%]"
      />
      {withWordmark && (
        <span className="text-[1.15rem] font-semibold tracking-display text-ink">
          {site.name}
        </span>
      )}
    </span>
  );
}
