import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconAt(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  );
}

export function IconInbox(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h4l2 3h6l2-3h4" />
      <path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconPause(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="5" width="3.5" height="14" rx="1" />
      <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
    </svg>
  );
}

export function IconGrid(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function IconBell(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
      <path d="M10.5 20a1.8 1.8 0 0 0 3 0" />
    </svg>
  );
}

export function IconOffline(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 18a4 4 0 0 1 .5-7.97A6 6 0 0 1 17 8.5a3.5 3.5 0 0 1 1.5 6.7" />
      <path d="m9 13 3 3 3-3" />
      <path d="M12 9v7" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 6.5" />
    </svg>
  );
}

export function IconKey(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="15" r="4" />
      <path d="m10.8 12.2 8.2-8.2" />
      <path d="m15.5 7.5 2.5 2.5" />
      <path d="m18 5 2.5 2.5" />
    </svg>
  );
}

export function IconHourglass(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h10" />
      <path d="M7 21h10" />
      <path d="M7 3v3.5c0 1 .4 2 1.2 2.6L12 12l-3.8 2.9A3.3 3.3 0 0 0 7 17.5V21" />
      <path d="M17 3v3.5c0 1-.4 2-1.2 2.6L12 12l3.8 2.9c.8.6 1.2 1.6 1.2 2.6V21" />
    </svg>
  );
}

// Monogramme Studio Lamarck, repris tel quel du fichier de marque.
export function IconStudioLamarck(props: IconProps) {
  return (
    <svg
      viewBox="0 0 384 384"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      width={24}
      height={24}
      {...props}
    >
      <path d="M17.25,61.5l31.5,-2.25l0,-59.25l23.25,0l0,57.75l23.25,-1.5l0,-56.25l23.25,0l0,157.5c0,0 1.575,19.367 20.25,19.5c18.675,0.133 196.5,0 196.5,0c0,0 31.721,-1.9 31.5,31.5c-0.221,33.4 0,22.5 0,22.5l-23.25,0l0,-21c0,0 0.726,-9.334 -9.75,-9.75c-10.476,-0.416 -24.75,0 -24.75,0l0,183.75l-39.75,0l0,-95.25l-146.25,0l0,95.25l-39.75,0l0,-95.25c0,0 -23.211,-0.576 -23.25,-20.25c-0.039,-19.674 0,-168 0,-168l-42.75,0l0,-39Z" />
    </svg>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function IconApple(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M17.05 12.54c-.02-2.06 1.68-3.05 1.76-3.1-0.96-1.4-2.45-1.6-2.98-1.62-1.27-.13-2.48.75-3.12.75-.64 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.03 8.23.68.99 1.5 2.1 2.56 2.06 1.03-.04 1.42-.66 2.66-.66 1.24 0 1.59.66 2.68.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.82-2.17-3.27zM15.0 6.6c.56-.68.94-1.63.84-2.58-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.86 2.48.9.07 1.83-.46 2.39-1.12z" />
    </svg>
  );
}

export function IconAndroid(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M6 9v7a1.5 1.5 0 0 0 1.5 1.5H8V20a1.2 1.2 0 0 0 2.4 0v-2.5h3.2V20a1.2 1.2 0 0 0 2.4 0v-2.5h.5A1.5 1.5 0 0 0 18 16V9H6zM4.2 9.2A1.2 1.2 0 0 0 3 10.4v4.8a1.2 1.2 0 0 0 2.4 0v-4.8a1.2 1.2 0 0 0-1.2-1.2zm15.6 0a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 0 0 2.4 0v-4.8a1.2 1.2 0 0 0-1.2-1.2zM15.6 4.3l1-1.5a.3.3 0 0 0-.5-.34l-1.06 1.6a5.9 5.9 0 0 0-4.08 0L9.9 2.46a.3.3 0 1 0-.5.34l1 1.5A5.3 5.3 0 0 0 6 8.3h12a5.3 5.3 0 0 0-2.4-4zM9.6 6.6a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4zm4.8 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  );
}
