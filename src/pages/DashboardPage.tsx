import { SavingsTrendChart } from "../components/charts/SavingsTrendChart";
import { SupplierDistributionChart } from "../components/charts/SupplierDistributionChart";
import { CategorySpendChart } from "../components/charts/CategorySpendChart";
import { ActivityFeed } from "../components/dashboard/ActivityFeed";
import { StatCard } from "../components/dashboard/StatCard";
import { mockActivity } from "../data/mockActivity";
import { useDashboardMetrics } from "../hooks/useDashboardMetrics";
import { LoadingState } from "../components/states/LoadingState";
import { ErrorState } from "../components/states/ErrorState";
import { formatCurrency, formatNumber } from "../utils/formatters";

export function DashboardPage() {
  const { data: metrics, isLoading, error } = useDashboardMetrics();

  if (isLoading) {
    return <LoadingState />;
  }

  if (error || !metrics) {
    return <ErrorState message="Failed to load dashboard metrics." />;
  }

  const {
    totalRequests,
    pendingApprovals,
    estimatedSavings,
    matchedSuppliers,
    delayedDeliveries,
    virtualGroups,
  } = metrics;

  return (
    <div>
      <section className="overflow-hidden rounded-[2rem] border border-teal-100 bg-white shadow-[var(--shadow-soft)]">
        <div className="grid gap-8 p-8 xl:grid-cols-[1.2fr_0.8fr] xl:p-10">
          <div>
            <div className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              Agentic procurement platform concept
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">
              Healthcare procurement intelligence from data to delivery.
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Optimize sourcing decisions, bundle hospital demand, standardize
              procurement data, and identify direct manufacturer savings through
              AI-supported workflows.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Supplier matching
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Demand bundling
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Data harmonization
              </span>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-gradient-to-br from-teal-700 to-sky-600 p-6 text-white shadow-xl shadow-teal-700/20">
            <p className="text-sm font-medium text-teal-50">
              SANOVIO-style value proposition
            </p>

            <p className="mt-4 text-4xl font-semibold tracking-tight">
              {formatCurrency(estimatedSavings)}
            </p>

            <p className="mt-2 text-sm leading-6 text-teal-50">
              Estimated savings from supplier matching, direct sourcing, and
              virtual procurement groups.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                <p className="text-xs uppercase text-teal-50">Bundled groups</p>
                <p className="mt-1 text-xl font-semibold">{virtualGroups}</p>
              </div>

              <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                <p className="text-xs uppercase text-teal-50">
                  Matched supplier offers
                </p>
                <p className="mt-1 text-xl font-semibold">{matchedSuppliers}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatCard
          icon="check"
          label="Total procurement requests"
          value={formatNumber(totalRequests)}
          helperText="Active clinical and operational demand"
        />

        <StatCard
          icon="clock"
          label="Pending approvals"
          value={formatNumber(pendingApprovals)}
          helperText="Requests waiting for procurement decision"
        />

        <StatCard
          icon="euro"
          label="Estimated savings"
          value={formatCurrency(estimatedSavings)}
          helperText="Supplier matching and bundling impact"
        />

        <StatCard
          icon="hospital"
          label="Matched suppliers"
          value={formatNumber(matchedSuppliers)}
          helperText="Manufacturer, distributor, and wholesaler offers"
        />

        <StatCard
          icon="warning"
          label="Delayed deliveries"
          value={formatNumber(delayedDeliveries)}
          helperText="Supplier offers with elevated delivery risk"
        />

        <StatCard
          icon="network"
          label="Virtual procurement groups"
          value={formatNumber(virtualGroups)}
          helperText="Bundled demand groups across hospitals"
        />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                Executive insight
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Direct sourcing and bundled demand create the strongest savings
                lever.
              </h2>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Direct manufacturer sourcing is recommended for multiple high-volume
            categories. Bundling similar requests across hospitals creates
            stronger negotiation leverage and reduces duplicated procurement
            effort.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-teal-50 p-4">
              <p className="text-xs font-semibold uppercase text-teal-700">
                Top opportunity
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                Nitrile gloves
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase text-amber-700">
                Risk area
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                ICU delivery timeline
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="text-xs font-semibold uppercase text-sky-700">
                Best lever
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                Direct manufacturer sourcing
              </p>
            </div>
          </div>
        </div>

        <ActivityFeed activities={mockActivity} />
      </section>
      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <SavingsTrendChart />
        <SupplierDistributionChart />
      </section>

      <section className="mt-6">
        <CategorySpendChart />
      </section>
    </div>
  );
}
