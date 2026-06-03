import type { ProcurementActivity } from "../types/procurement";

export const mockActivity: ProcurementActivity[] = [
  {
    id: "ACT-001",
    title: "Supplier Approved",
    description:
      "MediGlove Manufacturing GmbH approved for REQ-1001.",
    createdAt: "2026-06-02 09:30",
    type: "Approval",
  },

  {
    id: "ACT-002",
    title: "Bundling Opportunity Detected",
    description:
      "Three hospitals were grouped into a shared nitrile glove demand bundle.",
    createdAt: "2026-06-02 11:15",
    type: "Bundling",
  },

  {
    id: "ACT-003",
    title: "Data Quality Alert",
    description:
      "Missing product code detected for laboratory reagent request.",
    createdAt: "2026-06-02 13:20",
    type: "Data Quality",
  },

  {
    id: "ACT-004",
    title: "Manufacturer Savings Found",
    description:
      "Direct sourcing could reduce costs by 18% compared with distributors.",
    createdAt: "2026-06-02 14:50",
    type: "Supplier",
  },

  {
    id: "ACT-005",
    title: "Delivery Risk Detected",
    description:
      "ICU monitoring equipment may miss target delivery date.",
    createdAt: "2026-06-02 16:10",
    type: "Request",
  },
];
