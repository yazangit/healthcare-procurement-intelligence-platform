import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { supplierDistribution } from "../../data/mockAnalytics";

const COLORS = [
  "#0f766e",
  "#0284c7",
  "#94a3b8",
];

export function SupplierDistributionChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)]">
      <h2 className="text-lg font-semibold text-slate-950">
        Supplier Distribution
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Supplier type composition.
      </p>

      <div className="mt-6 h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={supplierDistribution}
              dataKey="value"
              outerRadius={110}
            >
              {supplierDistribution.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
