import { Icon, type IconName } from "../common/Icon";
import { WorkflowStage } from "../../types/procurement";

const stages: {
  key: WorkflowStage;
  description: string;
  icon: IconName;
}[] = [
  {
    key: WorkflowStage.RequestCreated,
    description: "Hospital department creates a procurement request.",
    icon: "requests",
  },
  {
    key: WorkflowStage.DataStandardized,
    description: "Messy product names are cleaned and standardized.",
    icon: "data",
  },
  {
    key: WorkflowStage.DemandBundled,
    description: "Similar requests are grouped into virtual procurement demand.",
    icon: "groups",
  },
  {
    key: WorkflowStage.SuppliersMatched,
    description: "Manufacturer, distributor, and wholesaler offers are compared.",
    icon: "supplier",
  },
  {
    key: WorkflowStage.OfferSelected,
    description: "Recommended supplier is selected through approval workflow.",
    icon: "check",
  },
  {
    key: WorkflowStage.FulfillmentStarted,
    description: "Supplier begins fulfillment and delivery preparation.",
    icon: "workflow",
  },
  {
    key: WorkflowStage.Delivered,
    description: "Goods are delivered and procurement cycle is completed.",
    icon: "check",
  },
];

interface ProcurementWorkflowProps {
  currentStage: WorkflowStage;
}

export function ProcurementWorkflow({
  currentStage,
}: ProcurementWorkflowProps) {
  const currentIndex = stages.findIndex(
    (stage) => stage.key === currentStage
  );

  return (
    <div className="space-y-4">
      {stages.map((stage, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <div
            key={stage.key}
            className={[
              "rounded-3xl border p-5 transition",
              isCurrent
                ? "border-teal-300 bg-teal-50 shadow-sm"
                : isCompleted
                  ? "border-slate-200 bg-slate-50"
                  : "border-slate-200 bg-white shadow-sm",
            ].join(" ")}
          >
            <div className="flex items-start gap-4">
              <div
                className={[
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  isCurrent
                    ? "bg-teal-700 text-white"
                    : isCompleted
                      ? "bg-teal-100 text-teal-800"
                      : "bg-slate-100 text-slate-500",
                ].join(" ")}
              >
                <Icon name={stage.icon} className="h-4 w-4" />
              </div>

              <div>
                <h3
                  className={[
                    "font-semibold",
                    isCurrent
                      ? "text-teal-800"
                      : "text-slate-950",
                  ].join(" ")}
                >
                  {stage.key}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {stage.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
