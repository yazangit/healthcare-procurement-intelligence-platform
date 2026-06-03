import { Link } from "react-router-dom";

import type { ProcurementRequest } from "../../types/procurement";
import { formatCurrency, formatDate, formatNumber } from "../../utils/formatters";
import { StatusBadge } from "./StatusBadge";
import { UrgencyBadge } from "./UrgencyBadge";

interface RequestsTableProps {
  requests: ProcurementRequest[];
}

export function RequestsTable({ requests }: RequestsTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[var(--shadow-card)]">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-5 py-4">Request ID</th>
            <th className="px-5 py-4">Department</th>
            <th className="px-5 py-4">Product</th>
            <th className="px-5 py-4">Category</th>
            <th className="px-5 py-4">Quantity</th>
            <th className="px-5 py-4">Urgency</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Budget</th>
            <th className="px-5 py-4">Created</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr
              key={request.id}
              className="border-b border-slate-100 last:border-0 hover:bg-teal-50/40"
            >
              <td className="px-5 py-4 font-semibold text-teal-700">
                <Link to={`/requests/${request.id}`} className="hover:text-teal-900">
                  {request.id}
                </Link>
              </td>

              <td className="px-5 py-4 text-slate-600">
                {request.department}
              </td>

              <td className="px-5 py-4">
                <div>
                  <p className="font-semibold text-slate-950">
                    {request.standardizedProductName}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Raw: {request.productName}
                  </p>
                </div>
              </td>

              <td className="px-5 py-4 text-slate-600">
                {request.category}
              </td>

              <td className="px-5 py-4 text-slate-600">
                {formatNumber(request.quantity)} {request.unit}
              </td>

              <td className="px-5 py-4">
                <UrgencyBadge urgency={request.urgency} />
              </td>

              <td className="px-5 py-4">
                <StatusBadge status={request.status} />
              </td>

              <td className="px-5 py-4 font-semibold text-slate-950">
                {formatCurrency(request.estimatedBudget)}
              </td>

              <td className="px-5 py-4 text-slate-500">
                {formatDate(request.createdDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
