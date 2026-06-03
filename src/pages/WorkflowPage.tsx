import { ProcurementWorkflow } from "../components/workflow/ProcurementWorkflow";
import { mockRequests } from "../data/mockRequests";

export function WorkflowPage() {
  return (
    <div>
      <header>
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          From Data to Delivery Workflow
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
          Procurement lifecycle visibility
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Track each request from initial creation through data cleaning,
          demand bundling, supplier matching, approval, fulfillment, and
          delivery.
        </p>
      </header>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        {mockRequests.map((request) => (
          <article
            key={request.id}
            className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] p-5"
          >
            <div className="mb-5">
              <p className="text-sm font-medium text-teal-700">
                {request.id}
              </p>

              <h2 className="mt-1 text-xl font-semibold text-slate-950">
                {request.standardizedProductName}
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                {request.hospital.name} · {request.department}
              </p>
            </div>

            <ProcurementWorkflow
              currentStage={request.currentWorkflowStage}
            />
          </article>
        ))}
      </section>
    </div>
  );
}
