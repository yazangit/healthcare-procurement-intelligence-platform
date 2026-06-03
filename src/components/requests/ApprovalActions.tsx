import { useState } from "react";

import { ProcurementStatus } from "../../types/procurement";
import type {
  ProcurementRequest,
  SupplierOffer,
} from "../../types/procurement";

interface ApprovalActionsProps {
  request: ProcurementRequest;
  recommendedSupplier: SupplierOffer | null;
}

export function ApprovalActions({
  request,
  recommendedSupplier,
}: ApprovalActionsProps) {
  const [status, setStatus] = useState(request.status);
  const [comment, setComment] = useState("");
  const [savedComment, setSavedComment] = useState("");

  function handleApprove() {
    setStatus(ProcurementStatus.Approved);
    setSavedComment(
      comment ||
        `Approved recommended supplier: ${
          recommendedSupplier?.supplierName ?? "No supplier selected"
        }.`
    );
  }

  function handleReject() {
    setStatus(ProcurementStatus.Rejected);
    setSavedComment(
      comment || "Supplier recommendation rejected by procurement team."
    );
  }

  function handleNeedsReview() {
    setStatus(ProcurementStatus.NeedsReview);
    setSavedComment(
      comment ||
        "Request requires additional review before supplier selection."
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
      <div>
        <h2 className="text-xl font-semibold text-slate-950">
          Approval workflow
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          Simulate the procurement decision process and internal review notes.
        </p>
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Current frontend status
        </p>

        <p className="mt-1 text-lg font-semibold text-slate-950">
          {status}
        </p>
      </div>

      <div className="mt-5">
        <label
          htmlFor="approval-comment"
          className="text-sm font-medium text-slate-700"
        >
          Internal comment
        </label>

        <textarea
          id="approval-comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Add procurement decision notes..."
          rows={4}
          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-500 focus:border-teal-600"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleApprove}
          className="rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          Approve recommended supplier
        </button>

        <button
          type="button"
          onClick={handleNeedsReview}
          className="rounded-xl border border-amber-200 px-4 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
        >
          Mark as Needs Review
        </button>

        <button
          type="button"
          onClick={handleReject}
          className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-50"
        >
          Reject supplier
        </button>
      </div>

      {savedComment && (
        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Saved internal note
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            {savedComment}
          </p>
        </div>
      )}
    </section>
  );
}
