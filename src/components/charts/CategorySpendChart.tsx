import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { categorySpend } from "../../data/mockAnalytics";

export function CategorySpendChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)]">
      <h2 className="text-lg font-semibold text-slate-950">
        Category Spend Analysis
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Procurement spend by category.
      </p>

      <div className="mt-6 h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={categorySpend}>
            <CartesianGrid stroke="#e2e8f0" />

            <XAxis dataKey="category" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="spend"
              fill="#0f766e"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
