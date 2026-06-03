export type IconName =
  | "dashboard"
  | "requests"
  | "supplier"
  | "groups"
  | "data"
  | "assistant"
  | "workflow"
  | "check"
  | "clock"
  | "euro"
  | "hospital"
  | "warning"
  | "network";

interface IconProps {
  name: IconName;
  className?: string;
}

const icons: Record<IconName, string> = {
  dashboard:
    "M4 5.5A1.5 1.5 0 0 1 5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5v-4Zm9 0A1.5 1.5 0 0 1 14.5 4h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5v-4ZM4 14.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 9.5 20h-4A1.5 1.5 0 0 1 4 18.5v-4Zm9 0a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4Z",

  requests:
    "M8 4h8a2 2 0 0 1 2 2v14H6V6a2 2 0 0 1 2-2Zm2 4h4m-4 4h4m-4 4h2M6 20h12",

  supplier:
    "M4 20V9l5-3v14H4Zm5 0V4l6 3v13H9Zm6 0v-8l5 2v6h-5Zm-9-7h1m4-3h1m0 4h1m4 3h1",

  groups:
    "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20a4 4 0 0 1 8 0H4Zm8 0a4 4 0 0 1 8 0h-8Z",

  data:
    "M5 6c0-1.1 3.1-2 7-2s7 .9 7 2-3.1 2-7 2-7-.9-7-2Zm0 0v5c0 1.1 3.1 2 7 2s7-.9 7-2V6M5 11v5c0 1.1 3.1 2 7 2s7-.9 7-2v-5",

  assistant:
    "M12 3v3m0 12v3M4.9 4.9l2.1 2.1m10 10 2.1 2.1M3 12h3m12 0h3M4.9 19.1 7 17m10-10 2.1-2.1M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2L12 8Z",

  workflow:
    "M5 6h7a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h10M5 6l3-3M5 6l3 3m11 9-3-3m3 3-3 3",

  check:
    "M5 13l4 4L19 7",

  clock:
    "M12 6v6l4 2m5-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",

  euro:
    "M17 7.5A6 6 0 0 0 7 12a6 6 0 0 0 10 4.5M5 10h8M5 14h8",

  hospital:
    "M5 20V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15M9 20v-5h6v5M9 8h6m-3-3v6M4 20h16",

  warning:
    "M12 4 21 20H3L12 4Zm0 6v4m0 3h.01",

  network:
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v3m0 12v3m9-9h-3M6 12H3m15.4-6.4-2.1 2.1M7.7 16.3l-2.1 2.1m0-12.8 2.1 2.1m8.6 8.6 2.1 2.1",
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={icons[name]} />
    </svg>
  );
}
