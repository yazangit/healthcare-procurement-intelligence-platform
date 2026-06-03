import type { DataQualityIssue } from "../../types/procurement";

interface DataQualityWarningsProps {
  issues: DataQualityIssue[];
}

function getSeverityStyle(severity: string): string {
  if (severity === "High") {
    return "bg-red-50 text-red-700 ring-red-200";
  }

  if (severity === "Medium") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  return "bg-slate-100 text-slate-600 ring-slate-200";
}

export function DataQualityWarnings({ issues }: DataQualityWarningsProps) {
  if (issues.length === 0) {
    return (
      <section className="rounded-3xl border border-teal-200 bg-teal-50 p-5">
        <h2 className="font-semibold text-teal-800">
          Data quality status
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          No data quality warnings detected for this request.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
      <h2 className="font-semibold text-amber-700">
        Data quality warnings
      </h2>

      <div className="mt-4 space-y-3">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold text-slate-950">
                {issue.type}
              </p>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${getSeverityStyle(
                  issue.severity
                )}`}
              >
                {issue.severity}
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {issue.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
