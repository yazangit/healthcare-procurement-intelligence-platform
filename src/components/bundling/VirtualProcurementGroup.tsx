import type { VirtualProcurementGroup as VirtualProcurementGroupType } from "../../types/procurement";
import {
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatUnitPrice,
} from "../../utils/formatters";

interface VirtualProcurementGroupProps {
  group: VirtualProcurementGroupType;
}

export function VirtualProcurementGroup({ group }: VirtualProcurementGroupProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[var(--shadow-card)]">
      <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Virtual Procurement Group
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            {group.groupName}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            {group.standardizedProductName}
          </p>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Supplier negotiation advantage
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              {group.negotiationAdvantage}
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-gradient-to-br from-teal-700 to-sky-600 p-5 text-white">
          <p className="text-xs uppercase tracking-wide text-teal-50">
            Estimated savings
          </p>
          <p className="mt-2 text-4xl font-semibold tracking-tight">
            {formatCurrency(group.estimatedSavings)}
          </p>
          <p className="mt-2 text-sm leading-6 text-teal-50">
            Achieved through combined demand and stronger supplier leverage.
          </p>
        </div>
      </div>

      <div className="grid gap-4 border-y border-slate-100 bg-slate-50/70 p-6 md:grid-cols-4">
        <div>
          <p className="text-xs uppercase text-slate-500">
            Combined quantity
          </p>
          <p className="mt-1 font-semibold text-slate-950">
            {formatNumber(group.combinedQuantity)}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Market unit price
          </p>
          <p className="mt-1 font-semibold text-slate-950">
            {formatUnitPrice(group.averageMarketUnitPrice)}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Bundled unit price
          </p>
          <p className="mt-1 font-semibold text-teal-700">
            {formatUnitPrice(group.bundledUnitPrice)}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Volume discount
          </p>
          <p className="mt-1 font-semibold text-teal-700">
            {formatPercentage(group.expectedVolumeDiscountPercentage)}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Participating hospitals
        </p>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {group.participatingHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <p className="font-semibold text-slate-950">
                {hospital.name}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {hospital.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
