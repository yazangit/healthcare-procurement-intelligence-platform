import { ErrorState } from "../components/states/ErrorState";
import { LoadingState } from "../components/states/LoadingState";
import {
  useDirectManufacturerOpportunities,
  useSuppliers,
} from "../hooks/useSuppliers";
import { SupplierType } from "../types/procurement";
import {
  formatCurrency,
  formatNumber,
} from "../utils/formatters";

export function SupplierIntelligencePage() {
  const {
    data: opportunities,
    isLoading: opportunitiesLoading,
    error: opportunitiesError,
  } = useDirectManufacturerOpportunities();

  const {
    data: suppliers,
    isLoading: suppliersLoading,
    error: suppliersError,
  } = useSuppliers();

  if (opportunitiesLoading || suppliersLoading) {
    return <LoadingState />;
  }

  if (opportunitiesError || suppliersError) {
    return (
      <ErrorState message="Failed to load supplier intelligence data." />
    );
  }

  const opportunityData = opportunities ?? [];
  const supplierData = suppliers ?? [];

  const manufacturerCount = supplierData.filter(
    (supplier) => supplier.supplierType === SupplierType.Manufacturer
  ).length;

  const averageReliability =
    supplierData.length === 0
      ? 0
      : Math.round(
          supplierData.reduce(
            (sum, supplier) => sum + supplier.reliabilityScore,
            0
          ) / supplierData.length
        );

  const totalDirectSavings = opportunityData.reduce(
    (sum, opportunity) => sum + opportunity.estimatedSavings,
    0
  );

  return (
    <div>
      <header className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Supplier Intelligence
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
            Direct sourcing and supplier performance
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Compare manufacturers, distributors, and wholesalers to identify
            direct sourcing opportunities, supplier risk, and procurement
            savings potential.
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-gradient-to-br from-teal-700 to-sky-600 p-5 text-white shadow-xl shadow-teal-700/20">
          <p className="text-xs uppercase tracking-wide text-teal-50">
            Direct sourcing savings
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight">
            {formatCurrency(totalDirectSavings)}
          </p>
        </div>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
          <p className="text-sm text-slate-500">
            Supplier offers analyzed
          </p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {formatNumber(supplierData.length)}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
          <p className="text-sm text-slate-500">
            Manufacturer offers
          </p>
          <p className="mt-2 text-3xl font-semibold text-teal-700">
            {formatNumber(manufacturerCount)}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
          <p className="text-sm text-slate-500">
            Average reliability
          </p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {averageReliability}/100
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct Manufacturer Opportunities
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            Where direct sourcing beats intermediaries
          </h2>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {opportunityData.map((opportunity) => (
            <article
              key={opportunity.requestId}
              className="rounded-3xl border border-teal-200 bg-teal-50 p-5"
            >
              <p className="text-sm font-semibold text-teal-800">
                {opportunity.requestId}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-950">
                {opportunity.manufacturerName}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Cheaper than {opportunity.cheapestAlternativeName}
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase text-slate-500">
                    Estimated savings
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-teal-700">
                    {formatCurrency(opportunity.estimatedSavings)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase text-slate-500">
                    Savings percentage
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-teal-700">
                    {opportunity.savingsPercentage}%
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[var(--shadow-card)]">
        <div className="border-b border-slate-200 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Supplier Performance Table
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            Operational supplier comparison
          </h2>
        </div>

        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-4">Supplier</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Reliability</th>
              <th className="px-5 py-4">Availability</th>
              <th className="px-5 py-4">Delivery</th>
              <th className="px-5 py-4">Match score</th>
            </tr>
          </thead>

          <tbody>
            {supplierData.map((supplier) => (
              <tr
                key={supplier.id}
                className="border-t border-slate-100 hover:bg-teal-50/40"
              >
                <td className="px-5 py-4 font-semibold text-slate-950">
                  {supplier.supplierName}
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {supplier.supplierType}
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {supplier.reliabilityScore}/100
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {supplier.availability}%
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {supplier.deliveryDays} days
                </td>

                <td className="px-5 py-4 font-semibold text-teal-700">
                  {supplier.matchScore}/100
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 grid gap-4 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Recommendation #1
          </p>
          <h3 className="mt-2 font-semibold text-slate-950">
            Prioritize direct manufacturer sourcing
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Manufacturer offers show meaningful savings in high-volume
            consumables and PPE categories.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Recommendation #2
          </p>
          <h3 className="mt-2 font-semibold text-slate-950">
            Bundle repeatable demand
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Similar demand patterns across hospitals create stronger negotiation
            leverage.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Recommendation #3
          </p>
          <h3 className="mt-2 font-semibold text-slate-950">
            Monitor delivery risk
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Suppliers with long delivery times should be reviewed before urgent
            ICU-related approvals.
          </p>
        </div>
      </section>
    </div>
  );
}
