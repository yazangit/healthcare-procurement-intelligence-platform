interface UrgencyBadgeProps {
  urgency: string;
}

export function UrgencyBadge({ urgency }: UrgencyBadgeProps) {
  const styles: Record<string, string> = {
    Low: "bg-slate-100 text-slate-600 ring-slate-200",
    Medium: "bg-sky-50 text-sky-700 ring-sky-200",
    High: "bg-orange-50 text-orange-700 ring-orange-200",
    Critical: "bg-red-50 text-red-700 ring-red-200",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
        styles[urgency] ?? "bg-slate-100 text-slate-600 ring-slate-200"
      }`}
    >
      {urgency}
    </span>
  );
}
