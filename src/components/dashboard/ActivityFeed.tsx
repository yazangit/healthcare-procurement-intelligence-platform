import type { ProcurementActivity } from "../../types/procurement";

interface ActivityFeedProps {
  activities: ProcurementActivity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
      <div>
        <h2 className="text-base font-semibold text-slate-950">
          Recent procurement activity
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Supplier, bundling, approval, and data-quality events.
        </p>
      </div>

      <div className="mt-5 space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-950">
                {activity.title}
              </p>
              <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                {activity.type}
              </span>
            </div>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              {activity.description}
            </p>

            <p className="mt-2 text-xs text-slate-400">
              {activity.createdAt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
