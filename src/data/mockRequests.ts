import {
  DataQualityIssueType,
  ProcurementStatus,
  UrgencyLevel,
  WorkflowStage,
  type ProcurementRequest,
} from "../types/procurement";

export const mockRequests: ProcurementRequest[] = [
  {
    id: "REQ-1001",
    department: "Surgery",
    hospital: {
      id: "HOSP-001",
      name: "Augsburg Central Hospital",
      city: "Augsburg",
    },
    productName: "Surg. Gloves Nitrile M blue",
    standardizedProductName: "Nitrile Surgical Gloves, Medium, Blue",
    productCode: "MED-GLO-NIT-M-BLU",
    category: "Protective Equipment",
    quantity: 12000,
    unit: "pieces",
    urgency: UrgencyLevel.High,
    status: ProcurementStatus.PendingApproval,
    estimatedBudget: 4200,
    createdDate: "2026-05-28",
    notes:
      "Required for surgical departments. Preference for powder-free nitrile gloves with CE certification.",
    requiredCertifications: ["CE", "EN 455", "ISO 13485"],
    currentWorkflowStage: WorkflowStage.SuppliersMatched,
    dataQualityIssues: [
      {
        id: "DQ-001",
        type: DataQualityIssueType.DuplicateProductName,
        severity: "Medium",
        message:
          "Similar glove products exist under multiple abbreviated names.",
      },
      {
        id: "DQ-002",
        type: DataQualityIssueType.HighPriceVariance,
        severity: "High",
        message:
          "Supplier prices vary significantly compared with historical purchases.",
      },
    ],
  },
  {
    id: "REQ-1002",
    department: "Intensive Care Unit",
    hospital: {
      id: "HOSP-002",
      name: "Munich West Clinic",
      city: "Munich",
    },
    productName: "BP Monitor digital ICU",
    standardizedProductName: "Digital Blood Pressure Monitor",
    productCode: "MED-BPM-DIG-ICU",
    category: "Monitoring Equipment",
    quantity: 25,
    unit: "devices",
    urgency: UrgencyLevel.Critical,
    status: ProcurementStatus.NeedsReview,
    estimatedBudget: 18750,
    createdDate: "2026-05-30",
    notes:
      "ICU-grade digital blood pressure monitors needed for patient monitoring rooms.",
    requiredCertifications: ["CE", "ISO 13485"],
    currentWorkflowStage: WorkflowStage.DataStandardized,
    dataQualityIssues: [
      {
        id: "DQ-003",
        type: DataQualityIssueType.MissingCertification,
        severity: "High",
        message:
          "One supplier offer does not list the required ISO 13485 certification.",
      },
      {
        id: "DQ-004",
        type: DataQualityIssueType.DeliveryRisk,
        severity: "High",
        message:
          "Current supplier lead times may exceed ICU operational deadline.",
      },
    ],
  },
  {
    id: "REQ-1003",
    department: "Emergency Department",
    hospital: {
      id: "HOSP-003",
      name: "St. Anna Hospital",
      city: "Augsburg",
    },
    productName: "Sterile Syringe 10 ml box",
    standardizedProductName: "Sterile Syringes, 10 ml",
    productCode: "MED-SYR-10ML",
    category: "Consumables",
    quantity: 8000,
    unit: "pieces",
    urgency: UrgencyLevel.Medium,
    status: ProcurementStatus.PendingApproval,
    estimatedBudget: 2400,
    createdDate: "2026-05-25",
    notes:
      "Standard sterile syringes for emergency treatment and daily clinical operations.",
    requiredCertifications: ["CE", "ISO 7886"],
    currentWorkflowStage: WorkflowStage.DemandBundled,
    dataQualityIssues: [
      {
        id: "DQ-005",
        type: DataQualityIssueType.InconsistentUnits,
        severity: "Medium",
        message:
          "Historical records mix boxes, packs, and individual pieces.",
      },
    ],
  },
  {
    id: "REQ-1004",
    department: "Laboratory",
    hospital: {
      id: "HOSP-004",
      name: "Bavaria Diagnostic Center",
      city: "Munich",
    },
    productName: "Lab reagent CRP test kit",
    standardizedProductName: "CRP Laboratory Reagent Test Kit",
    productCode: undefined,
    category: "Laboratory Supplies",
    quantity: 140,
    unit: "kits",
    urgency: UrgencyLevel.High,
    status: ProcurementStatus.Draft,
    estimatedBudget: 9800,
    createdDate: "2026-05-31",
    notes:
      "CRP test kits required for inflammatory marker diagnostics.",
    requiredCertifications: ["CE-IVD", "ISO 13485"],
    currentWorkflowStage: WorkflowStage.RequestCreated,
    dataQualityIssues: [
      {
        id: "DQ-006",
        type: DataQualityIssueType.MissingProductCode,
        severity: "High",
        message:
          "Product code is missing and must be completed before supplier comparison.",
      },
    ],
  },
  {
    id: "REQ-1005",
    department: "Cardiology",
    hospital: {
      id: "HOSP-005",
      name: "HeartCare Clinic Munich",
      city: "Munich",
    },
    productName: "Catheter sterile single use",
    standardizedProductName: "Sterile Single-Use Catheter",
    productCode: "MED-CAT-STER-SU",
    category: "Consumables",
    quantity: 3500,
    unit: "pieces",
    urgency: UrgencyLevel.High,
    status: ProcurementStatus.PendingApproval,
    estimatedBudget: 8750,
    createdDate: "2026-05-27",
    notes:
      "Single-use sterile catheters needed for cardiology procedures.",
    requiredCertifications: ["CE", "ISO 13485"],
    currentWorkflowStage: WorkflowStage.SuppliersMatched,
    dataQualityIssues: [],
  },
  {
    id: "REQ-1006",
    department: "Radiology",
    hospital: {
      id: "HOSP-006",
      name: "South Bavaria Medical Center",
      city: "Rosenheim",
    },
    productName: "Med mask FFP2 surgical pack",
    standardizedProductName: "FFP2 Surgical Masks",
    productCode: "PPE-MASK-FFP2",
    category: "Protective Equipment",
    quantity: 20000,
    unit: "pieces",
    urgency: UrgencyLevel.Low,
    status: ProcurementStatus.Approved,
    estimatedBudget: 6000,
    createdDate: "2026-05-18",
    notes:
      "Monthly stock replenishment for radiology and outpatient areas.",
    requiredCertifications: ["CE", "EN 149"],
    currentWorkflowStage: WorkflowStage.OfferSelected,
    dataQualityIssues: [
      {
        id: "DQ-007",
        type: DataQualityIssueType.DuplicateProductName,
        severity: "Low",
        message:
          "Similar mask records exist with slightly different naming.",
      },
    ],
  },
];
