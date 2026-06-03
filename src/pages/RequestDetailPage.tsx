import { Link, useParams } from "react-router-dom";

import { AIInsightBox } from "../components/ai/AIInsightBox";
import { DataQualityWarnings } from "../components/requests/DataQualityWarnings";
import { ApprovalActions } from "../components/requests/ApprovalActions";
import { StatusBadge } from "../components/requests/StatusBadge";
import { UrgencyBadge } from "../components/requests/UrgencyBadge";
import { SupplierComparison } from "../components/suppliers/SupplierComparison";
import { mockRequests } from "../data/mockRequests";
import { useSuppliersByRequestId } from "../hooks/useSuppliers";
import { LoadingState } from "../components/states/LoadingState";
import { ErrorState } from "../components/states/ErrorState";
import { formatCurrency, formatDate, formatNumber } from "../utils/formatters";
import { getRecommendedSupplier } from "../utils/supplierScoring";

export function RequestDetailPage() {
  const { requestId } = useParams();

  const request = mockRequests.find(
    (item) => item.id === requestId
  );

  if (!request) {
    return (
      <div>
        <h1 className="text-3xl font-semibold text-slate-950">
          Request not found
        </h1>

        <Link
          to="/requests"
          className="mt-4 inline-flex text-sm font-medium text-teal-700"
        >
          Back to requests
        </Link>
      </div>
    );
  }

  const {
    data: supplierData,
    isLoading: suppliersLoading,
    error: suppliersError,
  } = useSuppliersByRequestId(request.id);

  const suppliers = supplierData ?? [];

  const recommendedSupplier =
    getRecommendedSupplier(suppliers);

  if (suppliersLoading) {
    return <LoadingState />;
  }

  if (suppliersError) {
    return (
      <ErrorState message="Failed to load supplier offers." />
    );
  }

  return (
    <div>
      <Link
        to="/requests"
        className="text-sm font-medium text-teal-700"
      >
        ← Back to requests
      </Link>

      <header className="mt-6 flex flex-col justify-between gap-6 xl:flex-row xl:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            {request.id}
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
            {request.standardizedProductName}
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            {request.notes}
          </p>
        </div>

        <div className="flex gap-2">
          <UrgencyBadge urgency={request.urgency} />
          <StatusBadge status={request.status} />
        </div>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <p className="text-sm text-slate-500">Department</p>
          <p className="mt-2 font-semibold text-slate-950">
            {request.department}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <p className="text-sm text-slate-500">Quantity</p>
          <p className="mt-2 font-semibold text-slate-950">
            {formatNumber(request.quantity)} {request.unit}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <p className="text-sm text-slate-500">Estimated budget</p>
          <p className="mt-2 font-semibold text-slate-950">
            {formatCurrency(request.estimatedBudget)}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <p className="text-sm text-slate-500">Created date</p>
          <p className="mt-2 font-semibold text-slate-950">
            {formatDate(request.createdDate)}
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <DataQualityWarnings issues={request.dataQualityIssues} />

        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <h2 className="font-semibold text-slate-950">
            Product harmonization
          </h2>

          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="text-slate-500">Original product name</p>
              <p className="mt-1 text-slate-950">
                {request.productName}
              </p>
            </div>

            <div>
              <p className="text-slate-500">Standardized product name</p>
              <p className="mt-1 text-teal-700">
                {request.standardizedProductName}
              </p>
            </div>

            <div>
              <p className="text-slate-500">Product code</p>
              <p className="mt-1 text-slate-950">
                {request.productCode ?? "Missing"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <AIInsightBox
          request={request}
          recommendedSupplier={recommendedSupplier}
        />
      </section>

      <section className="mt-8">
        <SupplierComparison suppliers={suppliers} />
      </section>

      <section className="mt-8">
        <ApprovalActions
          request={request}
          recommendedSupplier={recommendedSupplier}
        />
      </section>
    </div>
  );
}
