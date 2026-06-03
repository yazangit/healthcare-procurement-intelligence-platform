import { Icon, type IconName } from "../common/Icon";

interface StatCardProps {
  label: string;
  value: string;
  helperText: string;
  icon: IconName;
}

export function StatCard({
  label,
  value,
  helperText,
  icon,
}: StatCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {label}
          </p>

          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            {value}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
          <Icon name={icon} className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-4 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-500">
        {helperText}
      </p>
    </article>
  );
}
