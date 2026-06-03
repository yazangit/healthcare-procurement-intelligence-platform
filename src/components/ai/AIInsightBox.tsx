import type {
  ProcurementRequest,
  SupplierOffer,
} from "../../types/procurement";
import { formatCurrency } from "../../utils/formatters";

interface AIInsightBoxProps {
  request: ProcurementRequest;
  recommendedSupplier: SupplierOffer | null;
}

export function AIInsightBox({
  request,
  recommendedSupplier,
}: AIInsightBoxProps) {
  if (!recommendedSupplier) {
    return null;
  }

  const savings =
    request.estimatedBudget - recommendedSupplier.totalPrice;

  const deliveryRisk =
    recommendedSupplier.deliveryDays > 10
      ? "Delivery risk is elevated because the lead time is above ten days."
      : "Delivery risk is acceptable for the current urgency level.";

  return (
    <section className="rounded-2xl border border-emerald-500/30 bg-teal-700/10 p-5">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
        AI Procurement Insight
      </p>

      <h2 className="mt-2 text-xl font-semibold text-slate-950">
        Recommended sourcing decision
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-700">
        {recommendedSupplier.supplierName} is recommended because it provides
        the strongest balance of price, reliability, delivery time,
        availability, and certification coverage for{" "}
        {request.standardizedProductName}.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">
            Potential savings
          </p>
          <p className="mt-1 text-lg font-semibold text-teal-700">
            {formatCurrency(Math.max(savings, 0))}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">
            Delivery risk
          </p>
          <p className="mt-1 text-sm font-medium text-slate-700">
            {deliveryRisk}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">
            Alternative option
          </p>
          <p className="mt-1 text-sm font-medium text-slate-700">
            Use distributor only if delivery speed becomes the top priority.
          </p>
        </div>
      </div>
    </section>
  );
}
