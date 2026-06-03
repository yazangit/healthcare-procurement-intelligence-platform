interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Approved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    "Pending Approval": "bg-amber-50 text-amber-700 ring-amber-200",
    "Needs Review": "bg-red-50 text-red-700 ring-red-200",
    Draft: "bg-slate-100 text-slate-600 ring-slate-200",
    Rejected: "bg-red-50 text-red-700 ring-red-200",
    "Fulfillment Started": "bg-sky-50 text-sky-700 ring-sky-200",
    Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
        styles[status] ?? "bg-slate-100 text-slate-600 ring-slate-200"
      }`}
    >
      {status}
    </span>
  );
}
