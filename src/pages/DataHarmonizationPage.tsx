import { mockRequests } from "../data/mockRequests";
import { formatCurrency } from "../utils/formatters";

const harmonizationExamples = [
  {
    messy: "Surg. Gloves Nitrile M blue",
    standardized: "Nitrile Surgical Gloves, Medium, Blue",
    issue: "Abbreviated product name",
  },
  {
    messy: "BP Monitor digital ICU",
    standardized: "Digital Blood Pressure Monitor",
    issue: "Context mixed into product name",
  },
  {
    messy: "Sterile Syringe 10 ml box",
    standardized: "Sterile Syringes, 10 ml",
    issue: "Inconsistent unit naming",
  },
  {
    messy: "Lab reagent CRP test kit",
    standardized: "CRP Laboratory Reagent Test Kit",
    issue: "Missing product code",
  },
];

export function DataHarmonizationPage() {
  const totalIssues = mockRequests.reduce(
    (sum, request) => sum + request.dataQualityIssues.length,
    0
  );

  const missingCodes = mockRequests.filter(
    (request) => !request.productCode
  ).length;

  const highSeverityIssues = mockRequests.reduce(
    (sum, request) =>
      sum +
      request.dataQualityIssues.filter(
        (issue) => issue.severity === "High"
      ).length,
    0
  );

  const affectedBudget = mockRequests
    .filter((request) => request.dataQualityIssues.length > 0)
    .reduce((sum, request) => sum + request.estimatedBudget, 0);

  return (
    <div>
      <header className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Procurement Data Harmonization
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
            Clean procurement data before supplier matching
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Standardize messy product names, detect missing product codes,
            identify certification gaps, and reduce errors before supplier
            comparison.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-xs uppercase tracking-wide text-amber-400">
            Affected budget
          </p>
          <p className="mt-2 text-2xl font-semibold text-amber-300">
            {formatCurrency(affectedBudget)}
          </p>
        </div>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <p className="text-sm text-slate-500">Total issues</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {totalIssues}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <p className="text-sm text-slate-500">Missing product codes</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {missingCodes}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <p className="text-sm text-slate-500">High severity issues</p>
          <p className="mt-2 text-3xl font-semibold text-red-300">
            {highSeverityIssues}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
          <p className="text-sm text-slate-500">Products reviewed</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {mockRequests.length}
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
        <h2 className="text-xl font-semibold text-slate-950">
          Product name standardization
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Example transformations from messy hospital request data into
          standardized procurement catalog names.
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-5 py-4">Messy product name</th>
                <th className="px-5 py-4">Standardized product name</th>
                <th className="px-5 py-4">Detected issue</th>
              </tr>
            </thead>

            <tbody>
              {harmonizationExamples.map((example) => (
                <tr
                  key={example.messy}
                  className="border-t border-slate-800"
                >
                  <td className="px-5 py-4 text-slate-600">
                    {example.messy}
                  </td>

                  <td className="px-5 py-4 font-medium text-teal-700">
                    {example.standardized}
                  </td>

                  <td className="px-5 py-4 text-slate-700">
                    {example.issue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5">
        <h2 className="text-xl font-semibold text-slate-950">
          Data quality issue register
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Issues that may reduce matching accuracy, create approval delays,
          or increase procurement risk.
        </p>

        <div className="mt-5 space-y-4">
          {mockRequests.map((request) =>
            request.dataQualityIssues.map((issue) => (
              <div
                key={issue.id}
                className="rounded-xl border border-slate-800 bg-slate-50 p-4"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <div>
                    <p className="font-medium text-slate-950">
                      {issue.type}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {request.id} · {request.standardizedProductName}
                    </p>
                  </div>

                  <span
                    className={[
                      "w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1",
                      issue.severity === "High"
                        ? "bg-red-50 text-red-700 ring-red-200"
                        : issue.severity === "Medium"
                          ? "bg-amber-500/10 text-amber-300"
                          : "bg-slate-700 text-slate-700",
                    ].join(" ")}
                  >
                    {issue.severity}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {issue.message}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
