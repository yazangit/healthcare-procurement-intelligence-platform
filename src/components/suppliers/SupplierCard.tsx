import type { SupplierOffer } from "../../types/procurement";
import { SupplierType } from "../../types/procurement";
import { formatCurrency, formatUnitPrice } from "../../utils/formatters";

interface SupplierCardProps {
  supplier: SupplierOffer;
  isCheapestManufacturer: boolean;
}

export function SupplierCard({
  supplier,
  isCheapestManufacturer,
}: SupplierCardProps) {
  return (
    <article
      className={[
        "rounded-3xl border p-5 shadow-[var(--shadow-card)]",
        supplier.isRecommended
          ? "border-teal-300 bg-gradient-to-br from-teal-50 to-white"
          : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-950">
            {supplier.supplierName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {supplier.supplierType}
          </p>
        </div>

        {supplier.isRecommended && (
          <span className="rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white">
            Recommended
          </span>
        )}
      </div>

      {isCheapestManufacturer && supplier.supplierType === SupplierType.Manufacturer && (
        <div className="mt-4 rounded-2xl border border-teal-200 bg-teal-50 p-3 text-sm font-medium text-teal-800">
          Direct manufacturer offer is cheaper than distributor and wholesaler options.
        </div>
      )}

      <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Unit price</dt>
          <dd className="mt-1 font-semibold text-slate-950">
            {formatUnitPrice(supplier.unitPrice)}
          </dd>
        </div>

        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Total price</dt>
          <dd className="mt-1 font-semibold text-slate-950">
            {formatCurrency(supplier.totalPrice)}
          </dd>
        </div>

        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Delivery</dt>
          <dd className="mt-1 font-semibold text-slate-950">
            {supplier.deliveryDays} days
          </dd>
        </div>

        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Reliability</dt>
          <dd className="mt-1 font-semibold text-slate-950">
            {supplier.reliabilityScore}/100
          </dd>
        </div>

        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Availability</dt>
          <dd className="mt-1 font-semibold text-slate-950">
            {supplier.availability}%
          </dd>
        </div>

        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Match score</dt>
          <dd className="mt-1 font-semibold text-teal-700">
            {supplier.matchScore}/100
          </dd>
        </div>
      </dl>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Certifications
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {supplier.certifications.map((certification) => (
            <span
              key={certification}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {certification}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
