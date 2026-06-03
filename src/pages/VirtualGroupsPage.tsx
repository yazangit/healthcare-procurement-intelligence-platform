import { VirtualProcurementGroup } from "../components/bundling/VirtualProcurementGroup";
import { ErrorState } from "../components/states/ErrorState";
import { LoadingState } from "../components/states/LoadingState";
import { useProcurementGroups } from "../hooks/useProcurementGroups";
import { formatCurrency, formatNumber } from "../utils/formatters";

export function VirtualGroupsPage() {
  const {
    data,
    isLoading,
    error,
  } = useProcurementGroups();

  const procurementGroups = data ?? [];

  const totalSavings = procurementGroups.reduce(
    (sum, group) => sum + group.estimatedSavings,
    0
  );

  const combinedQuantity = procurementGroups.reduce(
    (sum, group) => sum + group.combinedQuantity,
    0
  );

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState message="Failed to load virtual procurement groups." />
    );
  }

  return (
    <div>
      <header className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Virtual Procurement Group
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
            Bundled hospital demand
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Combine similar procurement requests from multiple hospitals into
            shared demand groups to increase purchasing leverage and reduce
            fragmented supplier negotiations.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
            <p className="text-xs uppercase tracking-wide text-teal-700">
              Bundling savings
            </p>
            <p className="mt-2 text-2xl font-semibold text-teal-700">
              {formatCurrency(totalSavings)}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Combined demand
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              {formatNumber(combinedQuantity)}
            </p>
          </div>
        </div>
      </header>

      <section className="mt-8 space-y-5">
        {procurementGroups.map((group) => (
          <VirtualProcurementGroup
            key={group.id}
            group={group}
          />
        ))}
      </section>
    </div>
  );
}
